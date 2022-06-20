<footer class="footer header">
    <div class="container">
        <a href="/" class="header__logo">
            <img src="/assets/images/logo_white.svg" alt="Escort It">
        </a>
        <nav class="header__nav">
            <ul>
                <?php
                    foreach($headerMenu as $key => $val) {
                        ?>
                            <li <?php if ($key == $_SERVER['REQUEST_URI']) echo 'class="active"'; ?>>
                                <a href="<?=$key?>" class="text text_fz20 text_white"><?=$val?></a>
                            </li>
                        <?php
                    }
                ?>
            </ul>
            <div class="header__lang">
                <div class="header__lang-item text text_fz20 text_white active">RU</div>
                <a href="/en<?=$_SERVER['REQUEST_URI']?>" class="header__lang-item text text_fz20 text_white">EN</a>
            </div>
        </nav>
    </div>
</footer>
<script src="/assets/js/script.js"></script>
</body>
</html>