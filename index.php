<?php
    require 'header.php';
    require 'data/cases.php';
?>
<main class="main">
    <section class="main__promo">
        <div class="container">
            <div class="main__promo-text">
                <h1 class="main__promo-title title title_fz64 text_fw700 text_ffMerri title_promo">Создание сайтов для взрослых</h1>
                <div class="main__promo-undertitle text text_fz20 text_ffMerri">Высококлассные решения для развлечений для взрослых</div>
                <button class="main__promo-button button text_white text_fz20 text_fw700 text_ffMerri">Заказать</button>
            </div>
        </div>
        <div class="main__promo-animate">
            <img id="step4" src="/assets/images/main/step4.png" alt="">
            <img id="step3" src="/assets/images/main/step3.png" alt="">
            <img id="step2" src="/assets/images/main/step2.png" alt="">
            <img id="step1" src="/assets/images/main/step1.png" alt="">
            <img id="step0" src="/assets/images/main/step0.png" alt="">
        </div>
        <a href="" target="_blank" class="main__promo-telegram text text_fz22">
            Свяжитесь с нами!
            <img src="/assets/images/telegram.svg" alt="Telegram">
        </a>
    </section>
    <section class="main__about">
        <img src="/assets/images/main/about.png" alt="about" class="main__about-image">
        <div class="container">
            <div class="main__about-text">
                <h2 class="main__about-title title title_fz39 title_line text_fw700 text_ffMerri">Мы знаем, что вам нужно</h2>
                <div class="main__about-undertitle text text_fz22">
                    <p>
                    Наша компания специализируется на разработке сайтов эскорт услуг,а так же других видов сайтов для взрослых.
                    </p>
                    <p>
                    Мы создаём высококлассные приложения и проекты для развлечений для взрослых.
                    </p>
                    <div class="tabs">
                        <div class="tabs__item">
                            <h3 class="tabs__item-title text text_fz16 text_fw600">Лучший сервис</h3>
                            <div class="tabs__item-undertitle text text_fz16">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</div>
                        </div>
                        <div class="tabs__item">
                            <h3 class="tabs__item-title text text_fz16 text_fw600">Экспертная команда</h3>
                            <div class="tabs__item-undertitle text text_fz16">Lorem ipsum dolor sit amet, conse ctetur adipiscing elit.</div>
                        </div>
                    </div>
                    <p>
                    В данной отрасли мы работаем на протяжении 6 лет, за это время накопилось множество опыта по созданию такого рода проектов.
                    </p>
                </div>
                <a href="/about/" class="main__about-button button text_white text_fz20 text_fw700 text_ffMerri">О нас</a>
            </div>
        </div>
    </section>
    <section class="main__slider">
        <div class="container">
            <div class="main__slider-top">
                <h2 class="main__slider-title title title_fz39 text_fw700 title_line text_ffMerri">Наши проекты</h2>
                <div class="main__slider-arrows">
                    <img src="/assets/images/arr_left_light.svg" alt="left" class="main__slider-arrows-left slider-left">
                    <img src="/assets/images/arr_right_light.svg" alt="right" class="main__slider-arrows-right slider-right">
                </div>
            </div>
            <div class="main__slider-line slider-line">
                <?php
                    foreach($casesData as $key => $val) {
                        if ($val['slider']) {
                            ?>
                                <div class="main__slider-item slider-item">
                                    <div class="main__slider-item-image">
                                        <img src="<?=$val['img']?>" alt="<?=$val['name']?>" class="img_bg">
                                        <div class="main__slider-item-image-link">
                                            <span class="text text_fz16">Сайт</span>
                                            <a href="<?=$val['website']?>" target="_blank" class="text text_fz16 text_fw600"><?=$val['website']?></a>
                                        </div>
                                    </div>
                                    <div class="main__slider-item-text">
                                        <a href="<?=$val['detail']?>" target="_blank" class="main__slider-item-title text_red title_fz30 text_ffMerri"><?=$val['name']?></a>
                                        <div class="main__slider-item-undertitle text text_fz22"><?=$val['description']?></div>
                                        <a href="<?=$val['detail']?>" target="_blank" class="main__slider-item-button text text_fz16">
                                            Перейти к кейсу <img src="/assets/images/arr_slider.svg" alt="">
                                        </a>
                                    </div>
                                </div>
                            <?php
                        }
                    }
                ?>
            </div>
            <a href="/projects/" class="main__slider-button button button_black text text_fz20 text_fw700 text_ffMerri">Все проекты</a>
        </div>
    </section>
    <section class="main__services">
        <img src="/assets/images/main/services.png" alt="" class="main__services-bg">
        <div class="container">
            <h2 class="main__services-left-title title title_fz39 text_fw700 text_ffMerri title_line">
                Наши услуги
            </h2>
            <div class="main__services-blocks">
                <div class="main__services-left">
                    <ul class="main__services-left-list text text_fz20">
                        <li>Создание сайтов для взрослых.</li>
                        <li>Google adwords / Yandex direct / Таргетированная реклама.</li>
                        <li>Поддержка/доработка уже работающих проектов.</li>
                        <li>Создание высоконагруженных порталов и досок объявлений.</li>
                        <li>Дизайн сайта или веб-приложения.</li>
                    </ul>
                    <div class="main__services-left-seo text_red text_fz20 text_fw600">
                        <img src="/assets/images/arr_right_red.svg" alt="">SEO продвижение
                    </div>
                </div>
                <div class="main__services-right">
                    <img src="/assets/images/main/seo.svg" alt="" class="seo">
                    <h3 class="main__services-right-title title title_fz30 text_fw600">
                        <img src="/assets/images/arr_right_bold.svg" alt="">SEO продвижение
                    </h3>
                    <div class="main__services-right-undertitle text text_fz22">
                    Это всестороннее развитие и продвижение сайта для его выхода на первые позиции в результатах выдачи поисковых систем по выбранным запросам с целью увеличения посещаемости и дальнейшего получения дохода.
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="main__connect">
        <div class="container">
            <h2 class="main__connect-title title title_fz39 title_line text_fw700 text_ffMerri">Связаться с нами можно через<br>Telegram.</h2>
            <div class="main__connect-blocks">
                <div class="main__connect-image">
                    <img src="/assets/images/main/connect.jpg" alt="" class="img_bg">
                </div>
                <div class="main__connect-text">
                    <div class="main__connect-text-descr text text_fz22">
                        <p>
                        Наша экспертиза и опыт помогут вам сэкономить огромное количество времени, если хотите получить результат, а не обещания, то обращайтесь к нам. Будем рады сотрудничеству.
                        </p>
                        <p>
                        Оплату мы принимаем только в криптовалюте.
                        </p>
                    </div>
                    <div class="main__connect-text-button button text_white text_fz20 text_fw700 text_ffMerri">Заказать</div>
                </div>
            </div>
        </div>
    </section>
    <section class="main__call">
        <img src="/assets/images/main/call.png" alt="" class="main__call-bg">
        <div class="container">
            <div class="main__call-top text text_fz22 text_fw600">
                <div class="main__call-top-item">У вас есть проект?</div>
                <div class="main__call-top-item">У вас есть к нам вопросы?</div>
            </div>
            <a href="/contacts/" class="main__call-title title title_fz64 text_fw700 text_ffMerri">Свяжитесь с нами</a>
        </div>
    </section>
</main>
<?php
    require 'footer.php';
?>