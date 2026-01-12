<?php

// --- KONFIGURACJA ---
$website_root_path = '../';
$max_dimension_cover_photo = 800;
$max_dimension_cover_logo = 1920;
$max_dimension_gallery = 1920;
// --- KONIEC KONFIGURACJI ---


function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

function create_slug($string) {
    $string = preg_replace('/[^A-Za-z0-9-]+/', '-', strtolower($string));
    return $string;
}

function process_uploaded_file($file_info, $target_dir, $max_dimension, $is_logo_upload = false) {
    if ($file_info['error'] !== UPLOAD_ERR_OK) return ['error' => 'Błąd podczas przesyłania pliku.'];

    $tmp_name = $file_info['tmp_name'];
    $file_name = basename($file_info['name']);
    $target_file = $target_dir . $file_name;

    $image_info = getimagesize($tmp_name);
    // getimagesize zwraca false dla SVG, więc sprawdzamy typ MIME ręcznie
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime_type = finfo_file($finfo, $tmp_name);
    finfo_close($finfo);

    $allowed_mimes = $is_logo_upload ? ['image/webp', 'image/svg+xml'] : ['image/webp'];
    if (!in_array($mime_type, $allowed_mimes)) {
        return ['error' => "Plik '{$file_name}' ma nieprawidłowy format. Dozwolone: " . implode(', ', $allowed_mimes)];
    }

    // Pomijamy sprawdzanie wymiarów dla SVG, ponieważ nie mają one stałych wymiarów pikselowych
    if ($mime_type !== 'image/svg+xml') {
        list($width, $height) = $image_info;
        if ($width > $max_dimension || $height > $max_dimension) {
            return ['error' => "Plik '{$file_name}' jest za duży. Maksymalny wymiar to {$max_dimension}px."];
        }
    }

    if (move_uploaded_file($tmp_name, $target_file)) {
        return ['success' => true, 'file_name' => $file_name];
    } else {
        return ['error' => 'Nie udało się przenieść pliku na serwer.'];
    }
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $title = sanitize_input($_POST['title']);
    $cardTitle = sanitize_input($_POST['cardTitle']);
    $cardSubtitle = sanitize_input($_POST['cardSubtitle']);
    $is_logo = isset($_POST['is_logo']);

    $folder_name = create_slug($cardTitle) . '-' . time();
    $upload_dir_absolute = $website_root_path . 'Images/Realizations/' . $folder_name . '/';
    $upload_dir_relative_base = '/Images/Realizations/' . $folder_name . '/';

    if (!file_exists($upload_dir_absolute)) mkdir($upload_dir_absolute, 0755, true);

    // --- Przetwarzanie okładki ---
    if (!isset($_FILES['cover_photo'])) {
        header("Location: index.php?status=error&msg=" . urlencode("Nie załączono pliku okładki."));
        exit();
    }
    $current_max_cover_dim = $is_logo ? $max_dimension_cover_logo : $max_dimension_cover_photo;
    $cover_result = process_uploaded_file($_FILES['cover_photo'], $upload_dir_absolute, $current_max_cover_dim, $is_logo);
    if (isset($cover_result['error'])) {
        header("Location: index.php?status=error&msg=" . urlencode("Błąd okładki: " . $cover_result['error']));
        exit();
    }
    $cover_image_path = $upload_dir_relative_base . $cover_result['file_name'];

    // --- Przetwarzanie galerii ---
    $gallery_images_paths = [];
    if (isset($_FILES['gallery_photos']) && is_array($_FILES['gallery_photos']['name'])) {
        foreach ($_FILES['gallery_photos']['name'] as $key => $name) {
            if (empty($name)) continue;

            $file_info_for_gallery = ['name' => $_FILES['gallery_photos']['name'][$key], 'type' => $_FILES['gallery_photos']['type'][$key], 'tmp_name' => $_FILES['gallery_photos']['tmp_name'][$key], 'error' => $_FILES['gallery_photos']['error'][$key], 'size' => $_FILES['gallery_photos']['size'][$key]];

            $gallery_result = process_uploaded_file($file_info_for_gallery, $upload_dir_absolute, $max_dimension_gallery, false);
            if (isset($gallery_result['error'])) {
                header("Location: index.php?status=error&msg=" . urlencode("Błąd galerii: " . $gallery_result['error']));
                exit();
            }
            $gallery_images_paths[] = $upload_dir_relative_base . $gallery_result['file_name'];
        }
    }

    // --- Aktualizacja pliku JSON ---
    $json_file_path = $website_root_path . 'data/timeline.json';
    $json_data = file_get_contents($json_file_path);
    $timeline_array = json_decode($json_data, true);

    $new_entry = [
        "title" => $title,
        "cardTitle" => $cardTitle,
        "coverType" => $is_logo ? 'logo' : 'photo',
        "cardSubtitle" => $cardSubtitle,
        "cover" => $cover_image_path,
        "galleryImages" => $gallery_images_paths
    ];

    array_unshift($timeline_array, $new_entry);
    $new_json_data = json_encode($timeline_array, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    file_put_contents($json_file_path, $new_json_data);
    require_once 'sitemap-generator-core.php';
    generate_image_sitemap();
    header("Location: index.php?status=success&msg=" . urlencode("Sukces! Nowa realizacja została dodana."));
    exit();
} else {
    header("Location: index.php");
    exit();
}
?>