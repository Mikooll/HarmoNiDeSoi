<?php 
    $array = array("name" => "", "city" => "", "email" => "", "message" => "", "nameError" => "", "cityError" => "", "emailError" => "", "messageError" => "", "isSuccess" => "false");

    $sendEmailTo = "harmonidesoi@gmail.com";

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (isset($_POST['name'])) {
            $array["name"] = verifyInput($_POST['name']);
        }
        if (isset($_POST['city'])) {
            $array["city"] = verifyInput($_POST['city']);
        }
        if (isset($_POST['email'])) {
            $array["email"] = verifyInput($_POST['email']);
        }
        if (isset($_POST['message'])) {
            $array["message"] = verifyInput( $_POST['message']);
        }
        $array["isSuccess"] = true;
        $emailText = "";

        if(empty($array["name"])){
            $array["nameError"] = "Le nom n'a pas été spécifié";
            $array["isSuccess"] = false;
        } else {
            $emailText .= "Name: {$array['name']}\n";
        }

        if(empty($array["city"])){
            $array["cityError"] = "La ville n'a pas été spécifiée";
            $array["isSuccess"] = false;
        } else {
            $emailText .= "City: {$array['city']}\n";
        }
        if(!isEmail($array["email"])){
            $array["emailError"] = "Il ne s'agit pas d'un email correct";
            $array["isSuccess"] = false;
        } else {
            $emailText .= "Email: {$array['email']}\n";
        }

        if(empty($array["message"])){
            $array["messageError"] = "Oups ! Le champ du message est vide";
            $array["isSuccess"] = false;
        } else {
            $emailText .= "Message: {$array['message']}\n";
        }


        if($array["isSuccess"]) {
            
            $headers = "From: {$array['name']} <{$array['email']}>\r\nReply-To: {$array['email']}";
            mail($sendEmailTo, "Demande de prospect Harmonidesoi", $emailText, $headers);
        }

        echo json_encode($array);

    };

    function isEmail($var) {
        return filter_var($var, FILTER_VALIDATE_EMAIL);
    };

    function verifyInput($var) {
        $var = trim($var);
        $var = stripslashes($var);
        $var = htmlspecialchars($var);

        return $var;
    };

?>