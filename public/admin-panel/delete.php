<?php
// --- KONFIGURACJA ---
$website_root_path = '../'; 
// --- KONIEC KONFIGURACJI ---


// Funkcja do rekursywnego usuwania całego folderu i jego zawartości
function delete_directory($dir) {
    if (!file_exists($dir)) {
        return true;
    }
    if (!is_dir($dir)) {
        return unlink($dir);
    }
    foreach (scandir($dir) as $item) {
        if ($item == '.' || $item == '..') {
            continue;
        }
        if (!delete_directory($dir . DIRECTORY_SEPARATOR . $item)) {
            return false;
        }
    }
    return rmdir($dir);
}


// Sprawdzamy, czy żądanie jest typu POST i czy zawiera 'index'
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['index'])) {
    
    $index_to_delete = (int)$_POST['index'];
    $json_file_path = $website_root_path . 'data/timeline.json';

    if (!file_exists($json_file_path)) {
        header("Location: index.php?status=error&msg=" . urlencode("Błąd: Plik timeline.json nie istnieje."));
        exit();
    }
    
    // Wczytaj istniejące dane
    $json_data = file_get_contents($json_file_path);
    $timeline_array = json_decode($json_data, true);
    
    // Sprawdź, czy wpis o danym indeksie istnieje
    if (!isset($timeline_array[$index_to_delete])) {
        header("Location: index.php?status=error&msg=" . urlencode("Błąd: Nie znaleziono wpisu do usunięcia."));
        exit();
    }
    
    // --- Usuwanie folderu ze zdjęciami ---
    $entry_to_delete = $timeline_array[$index_to_delete];
    if (isset($entry_to_delete['cover']) && !empty($entry_to_delete['cover'])) {
        // Używamy ścieżki do okładki, aby znaleźć nadrzędny folder
        $image_folder_relative = dirname($entry_to_delete['cover']);
        $image_folder_absolute = $website_root_path . ltrim($image_folder_relative, '/');
        
        // Usuń cały folder
        delete_directory($image_folder_absolute);
    }
    
    // --- Usuwanie wpisu z tablicy ---
    array_splice($timeline_array, $index_to_delete, 1);
    
    // Zapisz zaktualizowaną tablicę z powrotem do pliku JSON
    $new_json_data = json_encode($timeline_array, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    file_put_contents($json_file_path, $new_json_data);
    require_once 'sitemap-generator-core.php';
    generate_image_sitemap();
    header("Location: index.php?status=success&msg=" . urlencode("Sukces! Realizacja została usunięta."));
    exit();

} else {
    // Jeśli ktoś wejdzie na ten plik bezpośrednio, przekieruj go
    header("Location: index.php");
    exit();
}
?>