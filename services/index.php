<?php
    require '../header.php';
?>
<main class="services">
    <section class="services__promo promo_sect">
        <img src="/assets/images/services/promo.png" alt="" class="services__promo-bg">
        <div class="container">
            <div class="services__promo-text promo_sect-text">
                <h1 class="services__promo-title title title_fz64 text_fw700 text_ffMerri title_promo">Услуги</h1>
                <div class="services__promo-undertitle promo_sect-undertitle text text_fz22">Lorem ipsum dolor sit amet, consectetur adipiscing<br>elit. Augue nisi, morbi iaculis libero elit cursus et in.</div>
            </div>
        </div>
    </section>
    <section class="services__list">
        <div class="container">
            <h2 class="services__list-title title title_fz39 text_fw700 text_ffMerri title_line">Услуги, которые мы предоставляем</h2>
            <div class="services__list-items title title_fz30">
                <div class="services__list-item">
                    <img src="/assets/images/services/serv1.png" alt="" class="services__list-item-image">
                    <div class="services__list-item-text">Продвижение</div>
                </div>
                <div class="services__list-item">
                    <img src="/assets/images/services/serv2.png" alt="" class="services__list-item-image">
                    <div class="services__list-item-text">Поддержка и доработка</div>
                </div>
                <div class="services__list-item">
                    <img src="/assets/images/services/serv3.png" alt="" class="services__list-item-image">
                    <div class="services__list-item-text">Создание</div>
                </div>
            </div>
        </div>
    </section>
    <section class="services__item">
        <div class="container">
            <div class="services__item-info">
                <h3 class="services__item-title text_red title_fz30 text_fw600">Создание</h3>
                <div class="services__item-undertitle text text_fz20 text_fw600">Build - это новаторский подход, направленный на полную переработку и реинжиниринг вашего существующего веб-сайта.</div>
                <div class="services__item-listtitle text text_fz20 text_fw500">Эта услуга для вас, если</div>
                <ul class="services__item-list text text_fz16">
                    <li>Вы недавно прошли ребрендинг или планируете пройти ребрендинг</li>
                    <li>Вы пришли совершенно новым проектом</li>
                    <li>Ваш текущий веб-сайт устарел более чем на 5 лет</li>
                </ul>
                <a href="/services/create/" class="services__item-button button button_black text text_fz20 text_fw700 text_ffMerri">Перейти к услуге</a>
            </div>
            <img src="/assets/images/services/detserv1.png" alt="" class="services__item-image">
        </div>
    </section>
    <section class="services__item">
        <div class="container">
            <img src="/assets/images/services/detserv2.png" alt="" class="services__item-image">
            <div class="services__item-info">
                <h3 class="services__item-title text_red title_fz30 text_fw600">Продвижение</h3>
                <div class="services__item-undertitle text text_fz20 text_fw600">Build - это новаторский подход, направленный на полную переработку и реинжиниринг вашего существующего веб-сайта.</div>
                <div class="services__item-listtitle text text_fz20 text_fw500">Эта услуга для вас, если</div>
                <ul class="services__item-list text text_fz16">
                    <li>Вы недавно прошли ребрендинг или планируете пройти ребрендинг</li>
                    <li>Вы пришли совершенно новым проектом</li>
                    <li>Ваш текущий веб-сайт устарел более чем на 5 лет</li>
                </ul>
                <a href="/services/promotion/" class="services__item-button button button_black text text_fz20 text_fw700 text_ffMerri">Перейти к услуге</a>
            </div>
        </div>
    </section>
    <section class="services__item">
        <div class="container">
            <div class="services__item-info">
                <h3 class="services__item-title text_red title_fz30 text_fw600">Поддержка и доработка</h3>
                <div class="services__item-undertitle text text_fz20 text_fw600">Build - это новаторский подход, направленный на полную переработку и реинжиниринг вашего существующего веб-сайта.</div>
                <div class="services__item-listtitle text text_fz20 text_fw500">Эта услуга для вас, если</div>
                <ul class="services__item-list text text_fz16">
                    <li>Вы недавно прошли ребрендинг или планируете пройти ребрендинг</li>
                    <li>Вы пришли совершенно новым проектом</li>
                    <li>Ваш текущий веб-сайт устарел более чем на 5 лет</li>
                </ul>
                <a href="/services/support/" class="services__item-button button button_black text text_fz20 text_fw700 text_ffMerri">Перейти к услуге</a>
            </div>
            <img src="/assets/images/services/detserv3.png" alt="" class="services__item-image">
        </div>
    </section>
    <section class="services__form form_task">
        <div class="container">
            <div class="services__form-text form_task-text">
                <h2 class="services__form-title form_task-title title title_fz39 text_fw700 text_ffMerri title_line">Расскажите о своей задаче</h2>
                <div class="services__form-undertitle form_task-undertitle text text_fz20">Список услуг не конечный, более подробный перечень можно получив, связавшись с нами. Мы ориентируемся на комплексный подход для закрытия всех потребностей клиента.</div>
            </div>
            <div class="services__form-field form_task-field">
                <form action="">
                    <div class="input_block">
                        <div class="input_block-item">
                            <label for="name" class="text text_fz16">Имя</label>
                            <input type="text" name="name" id="name">
                        </div>
                        <div class="input_block-item">
                            <label for="phone" class="text text_fz16">Телефон</label>
                            <input type="tel" name="phone" id="phone">
                        </div>
                    </div>
                    <div class="input_block">
                        <label for="about" class="text text_fz16">Расскажите о проекте</label>
                        <input type="text" name="about" id="about">
                    </div>
                    <div class="input_block">
                        <label for="file" class="for_file text text_fz20">Прикрепить файл</label>
                        <input type="file" name="file" id="file" hidden>
                    </div>
                    <button class="button button_black text text_fz20 text_fw700 text_ffMerri">Отправить</button>
                    <div class="personal text text_fz16">Нажимая кнопку, вы соглашаетесь с нашей политикой в отношении обработки персональных данных.</div>
                </form>
            </div>
        </div>
    </section>
</main>
<?php
    require '../footer.php';
?>