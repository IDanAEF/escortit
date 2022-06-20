<?php
    require '../header.php';
    require '../data/cases.php';
?>
<main class="projects">
    <section class="projects__promo promo_sect">
        <img src="/assets/images/projects/promo.png" alt="" class="projects__promo-bg">
        <div class="container">
            <div class="projects__promo-text promo_sect-text">
                <h1 class="projects__promo-title title title_fz64 text_fw700 text_ffMerri title_promo">Наши проекты</h1>
                <div class="projects__promo-undertitle promo_sect-undertitle text text_fz22">Представляем вашему вниманию портфолио выполненных нами работ.<br>Каждый проект по своему уникален для нас</div>
            </div>
        </div>
    </section>
    <section class="projects__cases">
        <div class="container">
            <div class="projects__cases-text">
                <h2 class="projects__cases-title title title_fz39 text_fw700 text_ffMerri title_line">Кейсы</h2>
                <div class="projects__cases-undertitle text text_fz16">Наши реальные истории о том, как мы помогали своим клиентам добиться успеха</div>
            </div>
            <div class="projects__cases-list">
                <div class="projects__cases-list-tabs text text_fz20">
                    <span id="all" class="cases_tabs">Все</span>
                    <?php
                        foreach($casesType as $key => $val) {
                            ?>
                            <span id="<?=$key?>" class="cases_tabs"><?=$val?></span>
                            <?php
                        }
                    ?>
                </div>
                <div class="projects__cases-list-items" data-type="all">
                    <?php
                        foreach($casesData as $key => $val) {
                            ?>
                                <article class="projects__cases-item">
                                    <div class="projects__cases-item-info">
                                        <div class="projects__cases-item-image">
                                            <img src="<?=$val['img']?>" alt="<?=$val['name']?>" class="img_bg">
                                            <div class="projects__cases-item-image-link">
                                                <span class="text">Сайт</span>
                                                <a href="<?=$val['website']?>" class="text text_fw600"><?=$val['website']?></a>
                                            </div>
                                        </div>
                                        <div class="projects__cases-item-text">
                                            <a href="<?=$val['detail']?>" class="projects__cases-item-title text_red text_fz20 text_fw600"><?=$val['name']?></a>
                                            <div class="projects__cases-item-undertitle text text_fz16"><?=$val['description']?></div>
                                        </div>
                                    </div>
                                    <a href="<?=$val['detail']?>" class="projects__cases-item-button text text_fz16">
                                        <span>Перейти к кейсу</span><img src="/assets/images/arr_right_light.svg" alt="">
                                    </a>
                                </article>
                            <?php
                        }
                    ?>
                </div>
                <?php
                    foreach($casesType as $key1 => $val1) {
                        ?>
                            <div class="projects__cases-list-items" data-type="<?=$key1?>">
                                <?php
                                    foreach($casesData as $key => $val) {
                                        if ($val['type'] == $key1) :
                                        ?>
                                            <article class="projects__cases-item">
                                                <div class="projects__cases-item-info">
                                                    <div class="projects__cases-item-image">
                                                        <img src="<?=$val['img']?>" alt="<?=$val['name']?>" class="img_bg">
                                                        <div class="projects__cases-item-image-link">
                                                            <span class="text">Сайт</span>
                                                            <a href="<?=$val['website']?>" class="text text_fw600"><?=$val['website']?></a>
                                                        </div>
                                                    </div>
                                                    <div class="projects__cases-item-text">
                                                        <a href="<?=$val['detail']?>" class="projects__cases-item-title text_red text_fz20 text_fw600"><?=$val['name']?></a>
                                                        <div class="projects__cases-item-undertitle text text_fz16"><?=$val['description']?></div>
                                                    </div>
                                                </div>
                                                <a href="<?=$val['detail']?>" class="projects__cases-item-button text text_fz16">
                                                    <span>Перейти к кейсу</span><img src="/assets/images/arr_right_light.svg" alt="">
                                                </a>
                                            </article>
                                        <?php
                                        endif;
                                    }
                                ?>
                            </div>
                        <?php
                    }
                ?>
            </div>
        </div>
    </section>
    <section class="projects__call">
        <img class="projects__call-bg" src="/assets/images/projects/call.png" alt="">
        <div class="container">
            <div class="projects__call-text">
                <h2 class="projects__call-title title title_fz39 text_fw700 text_ffMerri title_line">Будем рады сотрудничеству</h2>
                <div class="projects__call-undertitle text text_fz22">
                    <p>Все работы выполнены по индивидуальным пожеланиям заказчиков, надеемся, что вы оцените их по достоинству.</p>
                    <p>Вы можете заказать у нас аналогичные проекты любого уровня сложности, мы так же реализуем все ваши пожелания.</p>
                </div>
                <button class="projects__call-button button text_white text_fz20 text_fw700 text_ffMerri">Заказать</button>
            </div>
        </div>
    </section>
</main>
<?php
    require '../footer.php';
?>