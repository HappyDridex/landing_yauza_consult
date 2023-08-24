<template>
    <main class="index-wrapper">
        <header class="header-wrapper">
            <div class="header container">
                <div class="header-logo">Логотип</div>
                <a href="tel:+79000000000"
                    class="header-phone">+7 (900) 00 00</a>
            </div>
        </header>

        <section class="support container">
            <div class="support-info">
                <h1 class="support-title index-section-title">Сопровождение Ваших дел</h1>
                <p class="support-description">Предоставляем широкий спектр услуг: бухгалтерское, кадровое и юридическое<br />сопровождение, а также услуги в области охраны труда</p>
            </div>
            <UiButtonMain class="support-details-button"
                :button-text="'Подробнее'" />
            <div class="support-illustration">
                <img src="/images/coins-in-safe.png" />
                <div class="support-illustration-white-gradient"></div>
            </div>
        </section>

        <section class="about container">
            <h2 class="about-title index-section-title">О компании</h2>
            <article class="about-article">
                <div class="about-article-info">
                    <h3 class="about-article-title">Наша миссия</h3>
                    <p class="about-article-description">Предоставляем широкий спектр услуг: бухгалтерское, кадровое и юридическое сопровождение, а также услуги в области охраны труда. Предоставляем широкий спектр услуг: бухгалтерское, кадровое и юридическое сопровождение, а также услуги в области охраны труда.</p>
                </div>
                <div class="about-article-illustration">
                    <img src="/images/baloons-on-button.png" />
                </div>
            </article>
        </section>

        <section class="services container">
            <h2 class="services-title index-section-title">Наши услуги</h2>
            <ul class="services-cards">
                <li class="services-card"
                    v-for="card in servicesCards">
                    <component :is="card.icon"></component>
                    <p class="services-card-description">{{ card.title }}</p>
                </li>
            </ul>
        </section>

    </main>
</template>

<script setup>
import IconWalletWithMoney from '../components/icons/WalletWithMoney.vue';
import IconCardWithId from '../components/icons/CardWithId.vue';
import IconJudicalScales from '../components/icons/JudicalScales.vue';
import IconCardWithShield from '../components/icons/CardWithShield.vue';

const servicesCards = [
    { title: "Бухсопровождение", icon: IconWalletWithMoney },
    { title: "Кадровое\nсопровождение", icon: IconCardWithId },
    { title: "Юридическкое\nсопровождение", icon: IconJudicalScales },
    { title: "Услуги в\nобласти\nохраны труда", icon: IconCardWithShield }
];
</script>

<style lang="scss">
.index-wrapper {

    .index-section-title {
        font-size: 40px;
        font-weight: 600;
        color: $black-muted;
        width: fit-content;
        margin: 0 auto;
    }

    .header-wrapper {
        border-bottom: 1px solid var(--dark-grey);
    }

    .header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 27px 0;

        .header-logo {
            color: var(--black-muted);
            font-weight: 600;
            font-size: 25px;
        }

        .header-phone {
            font-size: 20px;
        }
    }

    .support {
        margin-top: 61px;

        .support-info {
            .support-description {
                margin-top: 20px;
                text-align: center;
                font-size: 22px;
            }
        }

        .support-details-button {
            margin: 54px auto 0 auto;
        }

        .support-illustration {
            margin-top: 23px;
            position: relative;
            z-index: 1;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }

            .support-illustration-white-gradient {
                position: absolute;
                z-index: 0;
                bottom: 0;
                height: 46%;
                transform: translateY(50%);
                width: 100%;
                background: linear-gradient(360deg, #FFF 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.00) 100%);
            }
        }
    }

    .about {
        position: relative;
        z-index: 2;
        margin-top: 127px;

        .about-article {
            display: grid;
            grid-template-columns: 1.3fr 1fr;
            gap: 30px;
            margin-top: 50px;
            border-radius: 30px;
            background: $light-grey;
            padding: 45px 35px;

            .about-article-info {
                .about-article-title {
                    font-size: 30px;
                    font-weight: 600;
                    color: $black-muted;
                }

                .about-article-description {
                    margin-top: 20px;
                    font-size: 22px;
                }
            }

            .about-article-illustration {

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
            }
        }
    }

    .services {
        margin-top: 62px;
        margin-bottom: 300px;

        .services-cards {
            margin-top: 50px;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 26px;

            .services-card {
                padding: 14px 23px 0 23px;
                background: $light-grey;
                border-radius: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 12px;
                aspect-ratio: 1.1;

                svg {
                    width: 90px;
                }

                .services-card-description {
                    font-size: 22px;
                    font-weight: 500;
                    white-space: pre;
                    text-align: center;
                    line-height: 1.6;

                }
            }
        }
    }
}
</style>