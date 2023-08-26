<template>
    <main class="index-wrapper">
        <header class="header-wrapper">
            <div class="header container">
                <div class="header-left">
                    <div class="header-logo">Логотип</div>
                    <nav class="header-nav">
                        <a href="#about"
                            class="footer__navbar-link">О компании</a>
                        <a href="#services"
                            class="footer__navbar-link">Наши услуги</a>
                        <a href="#prices"
                            class="footer__navbar-link">Цены</a>
                        <a href="#contacts"
                            class="footer__navbar-link">Контакты</a>
                    </nav>
                </div>
                <div class="header-phone">
                    <IconsPhoneFilled />
                    <a href="tel:+79000000000">+7 999 999 99 99</a>
                </div>

                <button class="header__burger-button"
                    @click="showSidebar = true">
                    <IconsBurgerMenu />
                </button>

                <Teleport to="body">
                    <TheSidebar v-if="showSidebar"
                        @close="showSidebar = false" />
                </Teleport>
            </div>
        </header>

        <section class="support container">
            <div class="support-info">
                <h1 class="support-title index-section-title">
                    Сопровождение Ваших дел
                </h1>
                <p class="support-description">
                    Предоставляем широкий спектр услуг: бухгалтерское, кадровое
                    и юридическое<br />сопровождение, а также услуги в области
                    охраны труда
                </p>
            </div>
            <UiButtonMain @click="about.scrollIntoView()"
                class="support-details-button"
                :button-text="'Подробнее'" />
            <div class="support-illustration">
                <img src="/images/coins-in-safe.png" />
                <div class="support-image-white-gradient"></div>
            </div>
        </section>

        <section class="about container"
            id="about"
            ref="about">
            <h2 class="about-title index-section-title">О компании</h2>
            <div class="about-content">
                <div class="about-content__image">
                    <img src="/images/rings-around-box.png"
                        alt="Иллюстрация" />
                </div>

                <ol class="about-content__list">
                    <li class="about-content__list-item">
                        <span class="about-list-item-num">1</span>
                        <p class="about-list-item-text">
                            В постоянном доступе для решения Ваших проблем
                        </p>
                    </li>
                    <li class="about-content__list-item">
                        <span class="about-list-item-num">2</span>
                        <p class="about-list-item-text">
                            В штате нашей организации более 40 профессионалов,
                            каждый из которого имеет стаж, превышающий 10 летний
                            рубеж в различных областях консалтинга
                        </p>
                    </li>
                    <li class="about-content__list-item">
                        <span class="about-list-item-num">3</span>
                        <p class="about-list-item-text">
                            Мы экономим Ваше время и деньги
                        </p>
                    </li>
                </ol>
            </div>
        </section>

        <section class="services container"
            id="services">
            <h2 class="services-title index-section-title">Наши услуги</h2>
            <div class="services__image">
                <img src="/images/balls-on-ring.png"
                    alt="Иллюстрация" />
                <div class="services-image-gradient"></div>
            </div>
            <ul class="services-cards">
                <li class="services-card"
                    v-for="(service, idx) in servicesList"
                    :key="service">
                    <span class="services-card-numeration">{{ idx + 1 }}</span>
                    <p class="services-card-description">{{ service }}</p>
                </li>
            </ul>
        </section>

        <section class="prices container"
            id="prices">
            <h2 class="prices-title index-section-title">Цены</h2>
            <swiper class="prices-articles"
                :slides-per-view="'auto'"
                :space-between="33">
                <swiper-slide style="width: fit-content; height: auto"
                    v-for="priceItem in pricesList"
                    :key="priceItem.title">
                    <article class="prices-article">
                        <header class="prices-article__header">
                            <h4 class="prices-article__header-title">
                                {{ priceItem.title }}
                            </h4>
                        </header>
                        <ul class="prices-article__list">
                            <li class="prices-article__list-item"
                                v-for="service in priceItem.services"
                                :key="service">
                                <div class="prices-article__list-item-icon">
                                    <IconsTickRoundedBg />
                                </div>
                                <p class="prices-article__list-item-text">
                                    {{ service }}
                                </p>
                            </li>
                        </ul>
                        <p class="prices-article__price-comment">
                            {{ priceItem.price }}
                        </p>
                        <button class="prices-article__download-button">
                            Скачать еще
                        </button>
                    </article>
                </swiper-slide>
            </swiper>
        </section>

        <section class="contacts container"
            id="contacts">
            <h2 class="contacts-title index-section-title">Контакты</h2>
            <address class="contacts__content">
                <ul class="contacts__list">
                    <li class="contacts__list-item">
                        <div class="contacts__list-item-icon">
                            <IconsPhoneRoundedBg />
                        </div>
                        <a href="tel:+74959673615">+7 (495) 967-36-15</a>
                    </li>
                    <li class="contacts__list-item">
                        <div class="contacts__list-item-icon">
                            <IconsInfoRoundedBg />
                        </div>
                        <p>ИНН 9709047990/ КПП 770901001</p>
                    </li>
                    <li class="contacts__list-item">
                        <div class="contacts__list-item-icon">
                            <IconsGeoPointRoundedBg />
                        </div>
                        <p>109028, г. Москва, ул. Яузская, д. 1/15, стр.6</p>
                    </li>
                    <li class="contacts__list-item">
                        <div class="contacts__list-item-icon">
                            <IconsMailRoundedBg />
                        </div>
                        <a href="mailto:yauzaconsult19@gmail.сom">
                            yauzaconsult19@gmail.сom
                        </a>
                    </li>
                </ul>
                <div class="contacts__map">
                    <div id="map"
                        class="contacts__map-item"></div>
                </div>
            </address>
        </section>

        <section class="documents container">
            <h2 class="documents-title index-section-title">Документы</h2>
            <swiper class="documents__cards"
                :slides-per-view="'auto'"
                :space-between="33">
                <swiper-slide style="width: fit-content; height: auto"
                    v-for="(card, idx) in documentCards"
                    :key="idx">
                    <article class="documents__card">
                        <IconsCVCardFilled />
                        <p class="documents__card-text">
                            {{ card.text }}
                        </p>
                        <button class="documents__details-button">
                            Смотреть
                        </button>
                    </article>
                </swiper-slide>
            </swiper>
        </section>

        <footer class="footer">
            <div class="footer-content container">
                <div class="footer__logo">Логотип</div>
                <nav class="footer__navbar">
                    <a href="#about"
                        class="footer__navbar-link">О компании</a>
                    <a href="#services"
                        class="footer__navbar-link">Наши услуги</a>
                    <a href="#prices"
                        class="footer__navbar-link">Цены</a>
                    <a href="#contacts"
                        class="footer__navbar-link">Контакты</a>
                </nav>
                <address class="footer-address">
                    <p class="footer-address__company">
                        ООО «ЯузаКонсалт» 2023
                    </p>
                    <div class="footer-address__phone">
                        <IconsPhoneFilled />
                        <a href="tel:+79000000000">+7 999 999 99 99</a>
                    </div>
                </address>
            </div>
        </footer>
    </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const showSidebar = ref(false);

const servicesList = [
    "Бухгалтерские услуги",
    "Кадровые услуги",
    "Юридические услуги",
    "Аудиторские услуги",
    "Услуги в обоасти охраны труда",
];

const about = ref(null);

const pricesList = [
    {
        title: "Бухгалтерские услуги",
        services: [
            "Бухгалтерский и налоговый учет, систематизация и учет документов.",
            "Проверка документов на соответствие закону",
            "Формирование первичных учетных и налоговых документов",
            "Оформление кассовых операций и контроль за дисциплиной.",
        ],
        price: "Цена договорная",
    },
    {
        title: "Юридические услуги",
        services: [
            "Дистанционное устное консультирование по законодательству",
            "Разработка договоров",
            "Проверка договоров предоставленных контрагентом Абонента",
            "Правовая экспертиза корпоративных документов",
        ],
        price: "от 44 000₽",
    },
    {
        title: "Кадровые услуги",
        services: [
            "Правила внутреннего трудового распорядка",
            "Положения о защите персональных данных",
            "Должностные инструкции",
            "Разработка формы трудового договора",
        ],
        price: "Цена договорная",
    },
];

const documentCards = [
    {
        text: "Об утверждении Положения о системе хранения и архивирования документов, оформляемых при осуществлении функции службы охраны труда, специалистов охраны труда организаций, которым оказываются услуги в области охраны труда по гражданско - правовым договорам",
        link: "",
    },
    {
        text: "Положение о системе хранения и архивирования документов, оформляемых при осуществлении функций службы охраны труда, специалистов охраны труда организаций, которым оказываются услуги в области охраны труда по гражданско-правовым договорам",
        link: "",
    },
];

onMounted(() => {
    ymaps.ready(init);

    function init() {
        //@ts-ignore
        const myMap = new ymaps.Map("map", {
            center: [55.750408, 37.644926],
            zoom: 17,
            controls: ["routePanelControl"],
        });

        var control = myMap.controls.get("routePanelControl");

        control.routePanel.state.set({
            // Тип маршрутизации.
            type: "masstransit",
            // Выключим возможность задавать пункт отправления в поле ввода.
            fromEnabled: true,
            // Адрес или координаты пункта отправления.
            from: "",
            // Включим возможность задавать пункт назначения в поле ввода.
            toEnabled: true,
            // Адрес или координаты пункта назначения.
            to: [55.750408, 37.644926],
        });

        // Зададим опции панели для построения машрутов.
        control.routePanel.options.set({
            // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
            allowSwitch: false,
            // Включим определение адреса по координатам клика.
            // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
            reverseGeocoding: true,
            // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
            types: { masstransit: true, pedestrian: true, taxi: true },
        });
    }
});
</script>

<style lang="scss">
.index-wrapper {
    .index-section-title {
        font-size: 40px;
        font-weight: 600;
        color: $black-muted;
        width: fit-content;
        margin: 0 auto;
        text-align: center;

        @media (max-width: $breakpoint1) {
            font-size: 33px;
        }

        @media (max-width: $breakpoint3) {
            font-size: 28px;
        }
    }

    .header-wrapper {
        position: relative;
        z-index: 2;
        border-bottom: 1px solid $dark-grey;

        .header {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 37px 20px;

            .header-left {
                display: flex;
                gap: 54px;
                align-items: center;

                @media (max-width: $breakpoint1) {
                    gap: 30px;
                }

                .header-logo {
                    color: $black-muted;
                    font-weight: 600;
                    font-size: 25px;

                    @media (max-width: $breakpoint1) {
                        font-size: 22px;
                    }
                }

                .header-nav {
                    display: flex;
                    gap: 21px;
                    font-size: 20px;

                    @media (max-width: $breakpoint1) {
                        font-size: 18px;
                    }

                    @media (max-width: $breakpoint2) {
                        display: none;
                    }
                }
            }

            .header-phone {
                display: flex;
                gap: 10px;
                align-items: center;
                font-weight: 500;
                font-size: 20px;

                @media (max-width: $breakpoint1) {
                    gap: 6px;
                    font-size: 18px;
                }

                @media (max-width: $breakpoint2) {
                    display: none;
                }
            }

            .header__burger-button {
                display: none;

                @media (max-width: $breakpoint2) {
                    display: inline-block;
                }
            }
        }
    }

    .support {
        margin-top: 124px;

        @media (max-width: $breakpoint1) {
            margin-top: 68px;
        }

        @media (max-width: $breakpoint3) {
            margin-top: 63px;
        }

        .support-info {
            .support-description {
                margin-top: 20px;
                text-align: center;
                font-size: 22px;

                @media (max-width: $breakpoint1) {
                    font-size: 20px;
                }

                @media (max-width: $breakpoint3) {
                    font-size: 18px;
                }
            }
        }

        .support-details-button {
            margin: 54px auto 0 auto;

            @media (max-width: $breakpoint1) {
                margin-top: 40px;
            }

            @media (max-width: $breakpoint3) {
                margin-top: 30px;
            }
        }

        .support-illustration {
            margin-top: 23px;
            position: relative;
            z-index: 1;

            @media (max-width: $breakpoint1) {
                margin-top: 0;
            }

            @media (max-width: $breakpoint2) {
                display: flex;
                justify-content: center;
            }

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;

                @media (max-width: $breakpoint2) {
                    width: 180%;
                    transform: translateX(3%);
                }
            }

            .support-image-white-gradient {
                @include white-gradient(100%, 46%, 50%);
            }
        }
    }

    .about {
        position: relative;
        z-index: 2;
        margin-top: 127px;

        @media (max-width: $breakpoint1) {
            margin-top: 65px;
        }

        .about-title {
            margin-bottom: 50px;

            @media (max-width: $breakpoint1) {
                margin-bottom: 30px;
            }
        }

        .about-content {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;

            @media (max-width: $breakpoint2) {
                display: flex;
                flex-direction: column;
                gap: 35px;
            }

            .about-content__image {
                width: 100%;
                background: $grey;
                border-radius: 32px;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .about-content__list {
                display: flex;
                flex-direction: column;
                gap: 70px;

                @media (max-width: $breakpoint2) {
                    gap: 39px;
                }

                .about-content__list-item {
                    display: flex;
                    align-items: center;
                    gap: 19px;

                    @media (max-width: $breakpoint2) {
                        flex-direction: column;
                    }

                    &:nth-child(2) {
                        align-items: flex-start;

                        @media (max-width: $breakpoint2) {
                            align-items: center;
                        }
                    }

                    .about-list-item-num {
                        display: inline-block;
                        padding: 23px 34px;
                        font-size: 20px;
                        border-radius: 20px;
                        background: $light-grey;
                    }

                    .about-list-item-text {
                        font-size: 22px;
                        line-height: 1.5;

                        @media (max-width: $breakpoint1) {
                            font-size: 18px;
                        }

                        @media (max-width: $breakpoint2) {
                            text-align: center;
                        }
                    }
                }
            }
        }
    }

    .services {
        margin-top: 110px;

        @media (max-width: $breakpoint1) {
            margin-top: 65px;
        }

        .services__image {
            margin-top: 50px;
            text-align: center;
            position: relative;

            @media (max-width: $breakpoint1) {
                margin-top: 30px;
            }

            @media (max-width: $breakpoint2) {
                display: flex;
                justify-content: center;
            }

            .services-image-gradient {
                @include white-gradient(100%, 36%, 18%);
            }

            img {
                width: calc(100% - 190px);

                @media (max-width: $breakpoint1) {
                    width: 100%;
                }

                @media (max-width: $breakpoint2) {
                    width: 180%;
                }
            }
        }

        .services-cards {
            position: relative;
            z-index: 1;
            margin-top: 50px;
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            gap: 97px 40px;

            @media (max-width: $breakpoint1) {
                margin-top: 36px;
                gap: 75px 40px;
            }

            .services-card {
                position: relative;
                max-width: 370px;
                padding: 72px 92px 32px 92px;
                background: $light-grey;
                border-radius: 30px;
                display: flex;
                justify-content: center;
                align-items: center;

                @media (max-width: $breakpoint1) {
                    min-width: 329px;
                    padding: 52px 58px;
                    max-height: 152px;
                }

                .services-card-numeration {
                    position: absolute;
                    top: 0;
                    background: #9ba4ae;
                    padding: 23px 32px;
                    border-radius: 25px;
                    color: $white;
                    font-size: 28px;
                    transform: translateY(-60%);

                    @media (max-width: $breakpoint1) {
                        font-size: 25px;
                        padding: 20px 28px;
                    }
                }

                .services-card-description {
                    font-size: 22px;
                    text-align: center;
                    font-weight: 500;
                    line-height: 1.6;
                    color: $black-muted;

                    @media (max-width: $breakpoint1) {
                        font-size: 18px;
                    }
                }
            }
        }
    }

    .prices {
        margin-top: 110px;

        @media (max-width: $breakpoint1) {
            margin-top: 65px;
        }

        .prices-title {
            margin-bottom: 102px;

            @media (max-width: $breakpoint1) {
                margin-bottom: 60px;
            }
        }

        .prices-articles {
            .prices-article {
                background: $light-grey;
                color: $black-muted;
                display: flex;
                flex-direction: column;
                gap: 49px;
                padding: 49px 29px 55px 29px;
                border-radius: 30px;
                max-width: 380px;
                height: 100%;

                @media (max-width: $breakpoint1) {
                    gap: 30px;
                    padding: 39px 23px;
                    border-radius: 24px;
                }

                .prices-article__header {
                    .prices-article__header-title {
                        font-size: 22px;

                        @media (max-width: $breakpoint1) {
                            font-size: 20px;
                        }
                    }
                }

                .prices-article__list {
                    display: flex;
                    flex-direction: column;
                    gap: 38px;
                    flex-grow: 1;

                    @media (max-width: $breakpoint1) {
                        gap: 30px;
                    }

                    .prices-article__list-item {
                        display: flex;
                        gap: 11px;

                        .prices-article__list-item-icon {
                            svg {
                                width: 30px;

                                @media (max-width: $breakpoint1) {
                                    width: 24px;
                                }
                            }
                        }
                    }

                    .prices-article__list-item-text {
                        font-size: 20px;

                        @media (max-width: $breakpoint1) {
                            font-size: 18px;
                        }
                    }
                }

                .prices-article__price-comment {
                    font-size: 22px;
                    font-weight: 600;

                    @media (max-width: $breakpoint1) {
                        font-size: 18px;
                    }
                }

                .prices-article__download-button {
                    @include action-button;
                }
            }
        }
    }

    .contacts {
        margin-top: 110px;

        @media (max-width: $breakpoint1) {
            margin-top: 65px;
        }

        .contacts-title {
            margin-bottom: 50px;
        }

        .contacts__content {
            display: grid;
            grid-template-columns: 0.9fr 1fr;
            gap: 50px;

            @media (max-width: $breakpoint1) {
                gap: 30px;
            }

            @media (max-width: $breakpoint2) {
                grid-template-columns: 1fr;
            }

            .contacts__list {
                display: flex;
                flex-direction: column;
                padding: 125px 0;
                gap: 70px;

                @media (max-width: $breakpoint1) {
                    padding: 60px 0;
                    gap: 45px;
                }

                @media (max-width: $breakpoint1) {
                    padding: 0;
                }

                .contacts__list-item {
                    display: flex;
                    align-items: center;
                    gap: 20px;

                    a,
                    p {
                        font-size: 22px;
                        text-align: center;
                    }

                    @media (max-width: $breakpoint2) {
                        flex-direction: column;
                    }
                }
            }

            .contacts__map {
                border-radius: 32px;
                overflow: hidden;

                @media (max-width: $breakpoint2) {
                    display: none;
                }

                .contacts__map-item {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }

    .documents {
        margin-top: 110px;

        @media (max-width: $breakpoint1) {
            margin-top: 65px;
        }

        @media (max-width: $breakpoint2) {
            max-width: none;
        }

        .documents-title {
            margin-bottom: 40px;
        }

        .documents__cards {
            margin: 0 auto;
            width: fit-content;

            @media (max-width: $breakpoint1) {
                margin-top: 65px;
                width: auto;
            }

            .documents__card {
                max-width: 380px;
                padding: 23px 25px 40px 25px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 22px;
                background: $light-grey;
                border-radius: 30px;

                @media (max-width: $breakpoint2) {
                    padding: 15px 30px 47px 30px;
                    border-radius: 24px;
                }

                .documents__card-text {
                    text-align: center;
                    line-height: 2;
                    font-size: 20px;
                }

                .documents__details-button {
                    @include action-button;
                }
            }
        }
    }

    .footer {
        margin-top: 239px;
        background: $light-grey;
        color: $black-muted;

        @media (max-width: $breakpoint1) {
            margin-top: 142px;
        }

        @media (max-width: $breakpoint2) {
            margin-top: 65px;
        }

        .footer-content {
            padding: 35px 40px;

            @media (max-width: $breakpoint1) {
                padding-top: 31px;
                padding-bottom: 22px;
            }

            @media (max-width: $breakpoint2) {
                padding-left: 12px;
                padding-right: 12px;
            }

            .footer__logo {
                text-align: center;
                font-size: 25px;
                font-weight: 600;

                @media (max-width: $breakpoint1) {
                    font-size: 22px;
                }
            }

            .footer__navbar {
                display: flex;
                gap: 59px;
                margin: 54px auto 0 auto;
                font-size: 20px;
                width: fit-content;
                text-align: center;

                @media (max-width: $breakpoint1) {
                    font-size: 16px;
                    gap: 20px;
                }

                @media (max-width: $breakpoint3) {
                    margin-top: 24px;
                    flex-direction: column;
                }
            }

            .footer-address {
                margin-top: 120px;
                font-size: 20px;
                display: flex;
                align-items: center;
                justify-content: space-between;

                @media (max-width: $breakpoint1) {
                    margin-top: 111px;
                    font-size: 18px;
                }

                .footer-address__company {
                    @media (max-width: $breakpoint2) {
                        width: fit-content;
                        margin: 0 auto;
                    }
                }

                .footer-address__phone {
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    font-weight: 500;

                    @media (max-width: $breakpoint2) {
                        display: none;
                    }
                }
            }
        }
    }
}
</style>
