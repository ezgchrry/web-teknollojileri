<?php
echo "Merhaba, WampServer çalışıyor!";
echo " Adınız: " .$_POST["ad"];
echo "<br>";
echo " Soyadınız: " .$_POST["soyad"];

echo "<br>";

echo " adınız: " .$_POST["ad"]. "<br>". " soyadınız: " .$_POST["soyad"];

//echo " adınız: " .$_GET["ad"];

//echo "<pre>";
//print_r($_GET);

?>
<?php
if(empty($_POST["ad"])){
    echo"Lütfen ad alanını giriniz";
}else 

echo "<table>
    <tr>
        <td>Adınız</td>
        <td>:</td>
        <td> ". $_POST["ad"] ." </td>
    </tr>
    <tr>
        <td>Soyadınız</td>
        <td>:</td>
        <td>". $_POST["soyad"] ."</td>
    </tr>
</table>"
?>

<table>
    <tr>
        <td>Adınız</td>
        <td>:</td>
        <td> <?php echo $_POST["ad"] ?> </td>
    </tr>
    <tr>
        <td>Soyadınız</td>
        <td>:</td>
        <td><?php echo $_POST["soyad"] ?></td>
    </tr>
</table>