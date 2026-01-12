<?php
// PLIK: generate-sitemap.php (Wersja z dodatkowym zabezpieczeniem)
// Ten plik służy do ręcznego uruchomienia generatora.

// --- DODATKOWA WARSTWA ZABEZPIECZEŃ ---
// Sprawdź, czy sesja jest aktywna i czy użytkownik jest zalogowany
session_start();
if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true) {
    // Jeśli nie, zablokuj dostęp i zakończ działanie skryptu
    header('HTTP/1.0 403 Forbidden');
    die('Dostęp zabroniony. Proszę się zalogować.');
}
// --- KONIEC SEKCJI ZABEZPIECZEŃ ---


require_once 'sitemap-generator-core.php'; // Załącz silnik

// Uruchom funkcję i wyświetl odpowiedni komunikat
if (generate_image_sitemap()) {
    echo "<h1>Sukces!</h1>";
    echo "<p>Mapa strony dla obrazów została pomyślnie wygenerowana i zapisana.</p>";
    echo '<p><a href="../image-sitemap.xml" target="_blank">Zobacz wygenerowany plik</a></p>';
    echo '<p><a href="index.php">Powrót do panelu</a></p>';
} else {
    echo "<h1>Błąd!</h1>";
    echo "<p>Wystąpił błąd podczas generowania lub zapisywania pliku mapy strony.</p>";
}
?>