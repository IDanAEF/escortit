<?php
    $messText = "
        Имя: ".$_POST['name']."
        Телефон: ".$_POST['phone']."
        О проекте: ".$_POST['about']."
    ";

    $from = "e.dev@german-web.ru";
    $to = "e.dev@german-web.ru";
    $subject = "Escort-It: Сообщение с формы обратной связи";
    $message = "Информационное сообщение Escort It
        ------------------------------------------
        
        Вам было отправлено сообщение через форму обратной связи - 
        
        ".$messText."
        
        Сообщение сгенерировано автоматически";
    $headers = "From:" . $from. "\r\n";
    $headers .= "Content-Type: text/plain;\r\n charset='UTF-8'\r\n Content-Transfer-Encoding: 8bit";
    //mail($to,$subject,$message, $headers);
?>