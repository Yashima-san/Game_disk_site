<?php
try {
    $db = new PDO('sqlite:feedback.db');

    // Создание таблицы, если не существует (выполнится один раз)
    $db->exec("CREATE TABLE IF NOT EXISTS feedback (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        review TEXT NOT NULL
    )");

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
