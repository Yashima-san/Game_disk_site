<?php
try {
    $db = new PDO('sqlite:feedback.db'); // Путь к файлу вашей SQLite базы

    if (!empty($_POST['review'])) {
        $review = $_POST['review'];

        $stmt = $db->prepare("INSERT INTO feedback (review) VALUES (:review)");
        $stmt->bindParam(':review', $review);
        $stmt->execute();

        echo "OK";
    } else {
        echo "Отзыв пустой";
    }
} catch (Exception $e) {
    echo "Ошибка: " . $e->getMessage();
}
?>
