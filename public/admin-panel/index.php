<?php
session_start();

// --- KONFIGURACJA BEZPIECZEŃSTWA ---
$ADMIN_USERNAME = 'admin';
$ADMIN_PASSWORD_HASH = password_hash('TwojeSuperTajneHaslo123', PASSWORD_DEFAULT); // ZMIEŃ TO HASŁO!
// --- KONIEC KONFIGURACJI ---

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: index.php');
    exit();
}

$login_error = '';
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['username'])) {
    if (
        $_POST['username'] === $ADMIN_USERNAME &&
        password_verify($_POST['password'], $ADMIN_PASSWORD_HASH)
    ) {
        $_SESSION['loggedin'] = true;
        header('Location: index.php');
        exit();
    } else {
        $login_error = 'Nieprawidłowa nazwa użytkownika lub hasło.';
    }
}

$is_logged_in = isset($_SESSION['loggedin']) && $_SESSION['loggedin'] === true;

?>
<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $is_logged_in ? 'Panel Zarządzania' : 'Panel - Logowanie'; ?></title>
    <style>
        body { font-family: sans-serif; max-width: 800px; margin: 2rem auto; padding: 1rem; background-color: #f4f4f4; }
        form { background: white; padding: 2rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        input, textarea { width: 100%; padding: 0.5rem; margin-bottom: 1rem; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
        label { display: block; margin-bottom: 0.5rem; font-weight: bold; }
        button { background-color: #007bff; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 4px; cursor: pointer; font-size: 1rem; }
        button:hover { background-color: #0056b3; }
        .preview-container { display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem; border-top: 1px solid #eee; padding-top: 1rem;}
        .preview-container img { max-width: 150px; max-height: 150px; border: 1px solid #ddd; padding: 0.25rem; border-radius: 4px; }
        .status, .login-error, .info-box { padding: 1rem; margin-bottom: 1rem; border-radius: 4px; }
        .success { background-color: #d4edda; color: #155724; }
        .error { background-color: #f8d7da; color: #721c24; }
        .login-error { background-color: #f8d7da; color: #721c24; }
        .info-box { background-color: #e2e3e5; color: #383d41; border: 1px solid #d6d8db; }
        .logout-link { position: absolute; top: 1rem; right: 1rem; }
        hr { margin: 2rem 0; border: 0; border-top: 1px solid #eee; }
        .checkbox-label { font-weight: normal; }
    </style>
</head>
<body>

<?php if ($is_logged_in): ?>

    <a href="?logout=true" class="logout-link">Wyloguj</a>
    <h1>Panel Zarządzania Realizacjami</h1>
    <div id="status-message"></div>

    <form action="upload.php" method="post" enctype="multipart/form-data">
        <h2>Dodaj nową realizację</h2>

        <div class="info-box">
            <b>Wskazówka:</b> Zalecanym narzędziem do formatowania zdjęć jest <a href="https://squoosh.app/" target="_blank">squoosh.app</a>. Należy wybrać opcję formatowania na <b>WEBP</b> oraz dostosować wymiary, ustawiając najdłuższą krawędź zdjęcia zgodnie z wymogami: <b>1920px</b> dla zdjęć w galerii i <b>800px</b> dla zdjęć okładkowych.
        </div>

        <label for="title">Tytuł na osi czasu (np. "Wrzesień 2025"):</label>
        <input type="text" id="title" name="title" required maxlength="50">

        <label for="cardTitle">Tytuł na karcie (np. "Szkoła Podstawowa nr 2"):</label>
        <input type="text" id="cardTitle" name="cardTitle" required maxlength="100">

        <label for="cardSubtitle">Opis realizacji:</label>
        <textarea id="cardSubtitle" name="cardSubtitle" rows="4" required maxlength="300"></textarea>

        <hr>

        <div>
            <label class="checkbox-label">
                <input type="checkbox" id="is_logo" name="is_logo" value="true"> Użyj logo jako okładki
            </label>
        </div>

        <label id="cover_label" for="cover_photo">Zdjęcie okładki (format .webp, max 800px):</label>
        <input type="file" id="cover_photo" name="cover_photo" accept=".webp" required>
        <div id="cover-preview" class="preview-container"></div>

        <hr>

        <label for="gallery_photos">Zdjęcia do galerii (format .webp, max 1920px):</label>
        <input type="file" id="gallery_photos" name="gallery_photos[]" accept=".webp" multiple>
        <div id="gallery-preview" class="preview-container"></div>

        <hr>
        <button type="submit">Dodaj realizację</button>
    </form>

    <div style="margin-top: 3rem;">
        <hr>
        <h2>Zarządzaj istniejącymi realizacjami</h2>
        <?php
        $json_file_path = '../data/timeline.json';
        if (file_exists($json_file_path)) {
            $timeline_data = json_decode(file_get_contents($json_file_path), true);
            if (!empty($timeline_data)) {
                echo '<ul style="list-style: none; padding: 0;">';
                foreach ($timeline_data as $index => $item) {
                    echo '<li style="background: white; padding: 1rem; border-radius: 4px; margin-bottom: 1rem; display: flex; justify-content: space-between; align-items: center;">';
                    echo '<span><strong>' . htmlspecialchars($item['cardTitle']) . '</strong> (' . htmlspecialchars($item['title']) . ')</span>';
                    echo '<form action="delete.php" method="post" onsubmit="return confirm(\'Czy na pewno chcesz usunąć tę realizację? Tej operacji nie można cofnąć!\');"><input type="hidden" name="index" value="' . $index . '"><button type="submit" style="background-color: #dc3545;">Usuń</button></form>';
                    echo '</li>';
                }
                echo '</ul>';
            } else { echo "<p>Brak realizacji do wyświetlenia.</p>"; }
        } else { echo "<p>Nie można załadować pliku z realizacjami.</p>"; }
        ?>
    </div>

    <script>
        const coverInput = document.getElementById('cover_photo');
        const galleryInput = document.getElementById('gallery_photos');
        const coverPreview = document.getElementById('cover-preview');
        const galleryPreview = document.getElementById('gallery-preview');
        const isLogoCheckbox = document.getElementById('is_logo');
        const coverLabel = document.getElementById('cover_label');

        isLogoCheckbox.addEventListener('change', () => {
            if (isLogoCheckbox.checked) {
                coverLabel.textContent = 'Logo okładki (format .webp lub .svg, max 1920px):';
                coverInput.accept = '.webp,.svg';
            } else {
                coverLabel.textContent = 'Zdjęcie okładki (format .webp, max 800px):';
                coverInput.accept = '.webp';
            }
        });

        coverInput.addEventListener('change', () => {
            coverPreview.innerHTML = '';
            if (coverInput.files.length > 0) {
                const file = coverInput.files[0];
                const reader = new FileReader();
                reader.onload = function(e) { const img = document.createElement('img'); img.src = e.target.result; coverPreview.appendChild(img); }
                reader.readAsDataURL(file);
            }
        });

        galleryInput.addEventListener('change', () => {
            galleryPreview.innerHTML = '';
            for (const file of galleryInput.files) {
                const reader = new FileReader();
                reader.onload = function(e) { const img = document.createElement('img'); img.src = e.target.result; galleryPreview.appendChild(img); }
                reader.readAsDataURL(file);
            }
        });

        const urlParams = new URLSearchParams(window.location.search);
        const status = urlParams.get('status');
        const msg = urlParams.get('msg');
        const statusDiv = document.getElementById('status-message');
        if (status) {
            statusDiv.className = `status ${status}`;
            statusDiv.textContent = decodeURIComponent(msg);
        }
    </script>

<?php else: ?>

    <h2>Panel - Logowanie</h2>
    <form action="index.php" method="post">
        <label for="username">Nazwa użytkownika:</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Hasło:</label>
        <input type="password" id="password" name="password" required>
        <?php if ($login_error): ?><p class="login-error"><?php echo $login_error; ?></p><?php endif; ?>
        <button type="submit">Zaloguj</button>
    </form>

<?php endif; ?>

</body>
</html>