<?php
    require '../header.php';
?>
<main class="contacts">
    <section class="contacts__promo promo_sect">
        <img src="/assets/images/contacts/promo.png" alt="" class="contacts__promo-bg">
        <div class="container">
            <div class="contacts__promo-text promo_sect-text">
                <h1 class="contacts__promo-title title title_fz64 text_fw700 text_ffMerri title_promo">Контакты</h1>
                <div class="contacts__promo-undertitle promo_sect-undertitle text text_fz22">Связаться с нами можно только через телеграмм<br>(ссылку ниже разместить).</div>
            </div>
        </div>
    </section>
    <section class="contacts__form form_task">
        <div class="container">
            <div class="contacts__form-text form_task-text">
                <h2 class="contacts__form-title form_task-title title title_fz39 text_fw700 text_ffMerri title_line">Расскажите о своей задаче</h2>
                <div class="contacts__form-undertitle form_task-undertitle text text_fz20">Наша экспертиза и опыт помогут вам сэкономить огромное количество времени, если хотите получить результат, а не обещания, то обращайтесь к нам. Будем рады сотрудничеству.</div>
            </div>
            <div class="contacts__form-field form_task-field">
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