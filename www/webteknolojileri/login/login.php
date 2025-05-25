<?php
$dogruKullanici = "g231210038@sakarya.edu.tr";
$dogruSifre = "g231210038";

if (isset($_POST["email"]) && isset($_POST["password"])) {
    $email = $_POST["email"];
    $password = $_POST["password"];

    if ($email === $dogruKullanici && $password === $dogruSifre) {
        echo "Hoşgeldiniz " . htmlspecialchars($password);
    } else {
        header("Location: login.html");
        exit();
    }
} else {
    echo "Formdan veri gelmedi.";
}
?>
