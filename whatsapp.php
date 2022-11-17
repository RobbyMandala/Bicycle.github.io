<?php

$user = $_POST["user"];
$pass = $_POST["pass"];
$name = $_POST["name"];
$npm = $_POST["npm"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$pesan = $_POST["pesan"];

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
    table {
        border: 1px solid #000;
    }

    td {
        border-bottom: 1px solid #000;
    }
    </style>
</head>

<body>
    <form action="" method="">
        <table>
            <tr>
                <td>Username :</td>
                <td><?= $user ?></td>
            </tr>
            <tr>
                <td>Password :</td>
                <td><?= $pass ?></td>
            </tr>
            <tr>
                <td><a
                        href="https://wa.me/+6285381361964?text=Username%3A%20<?= $user ?>%0APassword%3A%20<?= $pass ?>">kirim</a>
                </td>
            </tr>
        </table>
    </form>
</body>

</html>