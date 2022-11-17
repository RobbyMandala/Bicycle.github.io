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
    <form action="whatsapp.php" method="post">
        <div class="table">
            <table>
                <tr>
                    <td>Username :</td>
                    <td><input type="text" name="user"></td>
                </tr>
                <tr>
                    <td>Password :</td>
                    <td><input type="password" name="pass"></td>
                </tr>
                <tr>
                    <td><button type="submit" name="submit">Save</button></td>
                </tr>
            </table>
        </div>
    </form>
</body>

</html>