<?php
include("./connection.php");

if (isset($_GET['all'])) {

    $sql = "SELECT * FROM `user` ";
    $result = mysqli_query($conn, $sql);
    $num = mysqli_num_rows($result);
    if ($num > 0) {
        if ($result) {
            while ($row = mysqli_fetch_object($result)) {
                $arr[] = $row;
            }
            echo json_encode($arr);
        } else {
            echo "err";
        }
    } else {
        echo "No data available";
    }
} else if (isset($_GET['history'])) {
    $sql = "SELECT * FROM `history` ";
    $result = mysqli_query($conn, $sql);
    $num = mysqli_num_rows($result);
    if ($num > 0) {
        if ($result) {
            while ($row = mysqli_fetch_object($result)) {
                $arr[] = $row;
            }
            echo json_encode($arr);
        } else {
            echo "err";
        }
    } else {
        echo "No data available";
    }
} else if (isset($_GET['id'])) {
    $id = $_GET['id'];
    $sql = "SELECT * FROM `user`WHERE `id`= '$id' ";
    $result = mysqli_query($conn, $sql);
    $num = mysqli_num_rows($result);
    if ($num > 0) {
        if ($result) {
            while ($row = mysqli_fetch_object($result)) {
                $arr[] = $row;
            }
            echo json_encode($arr);
        } else {
            echo "err";
        }
    } else {
        echo "No data available";
    }
} else if (isset($_GET['fromUpdate'])) {
    $fromId = $_POST['fromId'];
    $toEmail = $_POST['toEmail'];
    $amount = $_POST['amount'];

    $sql = "SELECT * FROM `user` WHERE `id` = '$fromId'";
    $result = mysqli_query($conn, $sql);
    if ($result) {
        $row = mysqli_fetch_assoc($result);
        $amountWas = $row['balance'] - $amount;
        $sName = $row['name'];
        $sql = "UPDATE `user` SET `balance` = '$amountWas' WHERE `user`.`id` = '$fromId'";
        $result = mysqli_query($conn, $sql);
        if ($result) {
            $sql = "SELECT * FROM `user` WHERE `email` = '$toEmail'";
            $result = mysqli_query($conn, $sql);
            if ($result) {
                $row = mysqli_fetch_assoc($result);
                $amountIs = $row['balance'] + $amount;
                $rName = $row['name'];
                $sql = "UPDATE `user` SET `balance` = '$amountIs' WHERE `user`.`email` = '$toEmail'";
                $result = mysqli_query($conn, $sql);
                if ($result) {
                    // echo "success";
                    $sql = "INSERT INTO `history` (`id`, `sName`, `rName`, `amount`, `date`) VALUES (NULL, '$sName', '$rName', '$amount',  current_timestamp())";

                    $result = mysqli_query($conn, $sql);
                    if ($result) {
                        echo "success";
                    } else {
                        echo "Error";
                    }
                }
            }
        }
    } else {
        echo "pp";
    }
} else {


    $name = $_POST['name'];
    $email = $_POST['email'];
    $balance = $_POST['balance'];
    $gender = $_POST['gender'];


    $sql = "SELECT * FROM `user` WHERE `email` = '$email'";
    $result = mysqli_query($conn, $sql);
    $num = mysqli_num_rows($result);
    if ($num == 0) {

        $sql = "INSERT INTO `user` (`id`, `name`, `email`, `balance`, `gender`) VALUES (NULL, '$name', '$email', '$balance', '$gender')";

        $result = mysqli_query($conn, $sql);
        if ($result) {
            echo "Success";
        } else {
            echo "Error";
        }
    } else {
        echo json_encode(['type' => 'Email already exist']);
    }
}
