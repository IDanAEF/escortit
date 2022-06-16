<?php
    //Возможные типы кейсов
    $casesType = Array(
        'personal' => 'Индивидуальные сайты',
        'model' => 'Модельное агентство',
        'escort' => 'Эскорт агентство'
    );

    /*
        Структура массива-кейса
        Array(
            'name' => Название,
            'description' => Промо описание,
            'type' => Тип кейса,
            'img' => Ссылка на промо изображение,
            'website' => Ссылка на сайт,
            'slider' => Участие в слайдере на главной,
            'detail' => Ссылка на детальную страницу
        )
    */

    //Данные для кейсов
    $casesData = Array(
        Array(
            'name' => 'escorteurogirls',
            'description' => 'Доска объявлений эскорт услуг. Реализована система личных кабинетов пользователей с возможностью самостоятельно публиковать объявления с прохождением модерации. Множество платного функционала.',
            'type' => $casesType['escort'],
            'img' => '/assets/images/cases/escorteurogirls.jpg',
            'website' => 'https://escorteurogirls.com/',
            'slider' => true,
            'detail' => ''
        ),
        Array(
            'name' => 'MOLLY / 24',
            'description' => 'Эскорт агентство.',
            'type' => $casesType['escort'],
            'img' => '/assets/images/cases/molly24.jpg',
            'website' => 'http://molly24.com/',
            'slider' => true,
            'detail' => ''
        ),
        Array(
            'name' => 'queenspalace.ru',
            'description' => 'Модельное агентство для поиска кадров.',
            'type' => $casesType['model'],
            'img' => '/assets/images/cases/qp.ru.jpg',
            'website' => 'http://queenspalace.ru/ ',
            'slider' => false,
            'detail' => ''
        ),
        Array(
            'name' => 'queenspalace.com',
            'description' => 'Сайт крупного эскорт агентства.<br>Большой каталог моделей.',
            'type' => $casesType['escort'],
            'img' => '/assets/images/cases/qp.com.jpg',
            'website' => 'https://queenspalace.com/ ',
            'slider' => true,
            'detail' => ''
        ),
        Array(
            'name' => 'mira-escort-paris',
            'description' => 'Персональный сайт эскорт модели.',
            'type' => $casesType['personal'],
            'img' => '/assets/images/cases/mira.jpg',
            'website' => 'http://mira-escort-paris.com/',
            'slider' => false,
            'detail' => ''
        ),
        Array(
            'name' => 'bahrain-angels',
            'description' => 'Эскорт агентство.',
            'type' => $casesType['escort'],
            'img' => '/assets/images/cases/angels.jpg',
            'website' => 'http://bahrain-angels.org/ ',
            'slider' => false,
            'detail' => ''
        )
    );
?>