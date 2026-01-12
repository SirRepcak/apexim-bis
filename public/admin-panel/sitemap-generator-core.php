<?php
// PLIK: sitemap-generator-core.php
// To jest centralny "silnik". Ten plik nie wyświetla żadnych komunikatów.
// Jego jedynym zadaniem jest wygenerowanie nowej mapy strony dla obrazów.

function generate_image_sitemap() {
    // --- KONFIGURACJA ---
    $domain = "https://apeximbis.pl";
    $json_file_path = __DIR__ . "/../data/timeline.json";
    $output_sitemap_path = __DIR__ . "/../image-sitemap.xml";
    // --- KONIEC KONFIGURACJI ---

    // Rozpocznij generowanie zawartości XML
    $xml_content = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
    $xml_content .= '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">' . "\n";
    $xml_content .= '  <url>' . "\n";
    $xml_content .= '    <loc>' . $domain . '/realizations</loc>' . "\n";
    $xml_content .= '    <lastmod>' . date('Y-m-d') . '</lastmod>' . "\n";

    if (!file_exists($json_file_path)) {
        return false; // Zakończ, jeśli plik nie istnieje
    }

    $timeline_data = json_decode(file_get_contents($json_file_path), true);
    if ($timeline_data === null) {
        return false; // Zakończ, jeśli plik jest uszkodzony
    }

    foreach ($timeline_data as $item) {
        if (empty($item['cover']) && empty($item['galleryImages'])) continue;

        $image_title = htmlspecialchars($item['cardTitle']);

        if (!empty($item['cover'])) {
            $xml_content .= '    <image:image>' . "\n";
            $xml_content .= '      <image:loc>' . $domain . htmlspecialchars($item['cover']) . '</image:loc>' . "\n";
            $xml_content .= '      <image:title>' . $image_title . ' - Okładka</image:title>' . "\n";
            $xml_content .= '    </image:image>' . "\n";
        }

        if (!empty($item['galleryImages'])) {
            $i = 1;
            foreach ($item['galleryImages'] as $gallery_image_path) {
                if ($gallery_image_path === $item['cover']) continue;
                $xml_content .= '    <image:image>' . "\n";
                $xml_content .= '      <image:loc>' . $domain . htmlspecialchars($gallery_image_path) . '</image:loc>' . "\n";
                $xml_content .= '      <image:title>' . $image_title . ' - Galeria ' . $i . '</image:title>' . "\n";
                $xml_content .= '    </image:image>' . "\n";
                $i++;
            }
        }
    }

    $xml_content .= '  </url>' . "\n";
    $xml_content .= '</urlset>' . "\n";

    // Zwróć true/false w zależności od powodzenia zapisu
    return file_put_contents($output_sitemap_path, $xml_content) !== false;
}
?>