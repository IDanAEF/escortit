<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/assets/css/style.min.css">
    <title>Escort IT</title>
</head>
<body>
    <header class="header">
        <div class="container">
            <div class="header__logo">
                <img src="/assets/images/logo.svg" alt="Escort It">
            </div>
            <nav class="header__nav">
                <?php
                    $headerMenu = Array(
                        '/' => 'Главная',
                        '/projects/' => 'Проекты',
                        '/services/' => 'Услуги',
                        '/about/' => 'О нас',
                        '/payment/' => 'Оплата',
                        '/contacts/' => 'Контакты'
                    );
                ?>
                <ul>
                    <?php
                        foreach($headerMenu as $key => $val) {
                            ?>
                                <li <?php if ($key == $_SERVER['REQUEST_URI']) echo 'class="active"'; ?>>
                                    <a href="<?=$key?>" class="text text_fz20"><?=$val?></a>
                                </li>
                            <?php
                        }
                    ?>
                </ul>
                <div class="header__lang">
                    <div class="header__lang-item text text_fz20 active">RU</div>
                    <a href="/en/" class="header__lang-item text text_fz20">EN</a>
                </div>
            </nav>
        </div>
    </header>