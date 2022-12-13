<template>
    <div class="site-services">
        <SiteToggle
            title="Услуги"
            :isHidden="isHidden"
            @toggle="onToggleIsHidden"
        />
        <div class="site-services__content" v-if="getContentIsShow">
            <div class="site-services__container">
                <div class="site-services__section">
                    <div class="site-services__banner">
                        <h2 class="site-services__banner-title">
                            Конкретная услуга
                        </h2>
                        <div class="site-services__banner-info">
                            <img
                                class="site-services__banner-svg"
                                src="@/assets/images/services/arrow-right.svg"
                                alt="arrow-right"
                            />
                            <p class="site-services__banner-label">
                                Мы предоставляем помощь по установке систем,
                                настройке ПО, отвечаем на ваши вопросы и решаем
                                проблемы с купленным товаром.
                            </p>
                        </div>
                    </div>
                    <ul class="site-services__cards">
                        <li class="site-services__card">
                            <p class="site-services__label">
                                Техническая поддержка
                            </p>
                            <a class="site-services__link" href="#">
                                <img
                                    class="site-services__link-svg"
                                    src="@/assets/images/services/arrow.svg"
                                    alt="arrow"
                                />
                            </a>
                        </li>
                        <li class="site-services__card">
                            <p class="site-services__label">
                                Установка ПО и модернизация ПК
                            </p>
                            <a class="site-services__link" href="#">
                                <img
                                    class="site-services__link-svg"
                                    src="@/assets/images/services/arrow.svg"
                                    alt="arrow"
                                />
                            </a>
                        </li>
                        <li class="site-services__card">
                            <p class="site-services__label">Сетевой отдел</p>
                            <a class="site-services__link" href="#">
                                <img
                                    class="site-services__link-svg"
                                    src="@/assets/images/services/arrow.svg"
                                    alt="arrow"
                                />
                            </a>
                        </li>
                        <li class="site-services__card">
                            <p class="site-services__label">
                                Программа тестирования оборудования X-Com
                            </p>
                            <a class="site-services__link" href="#">
                                <img
                                    class="site-services__link-svg"
                                    src="@/assets/images/services/arrow.svg"
                                    alt="arrow"
                                />
                            </a>
                        </li>
                        <li class="site-services__card">
                            <p class="site-services__label">
                                Настройка Office 365
                            </p>
                            <a class="site-services__link" href="#">
                                <img
                                    class="site-services__link-svg"
                                    src="@/assets/images/services/arrow.svg"
                                    alt="arrow"
                                />
                            </a>
                        </li>
                        <li class="site-services__card">
                            <p class="site-services__label">
                                Установка видеонаблюдения
                            </p>
                            <a class="site-services__link" href="#">
                                <img
                                    class="site-services__link-svg"
                                    src="@/assets/images/services/arrow.svg"
                                    alt="arrow"
                                />
                            </a>
                        </li>
                        <li class="site-services__card">
                            <p class="site-services__label">
                                Установка сплит-систем
                            </p>
                            <a class="site-services__link" href="#">
                                <img
                                    class="site-services__link-svg"
                                    src="@/assets/images/services/arrow.svg"
                                    alt="arrow"
                                />
                            </a>
                        </li>
                        <li class="site-services__card">
                            <p class="site-services__label">
                                Аутсорсинг офисной печати
                            </p>
                            <a class="site-services__link" href="#">
                                <img
                                    class="site-services__link-svg"
                                    src="@/assets/images/services/arrow.svg"
                                    alt="arrow"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from "vue";

import SiteToggle from "@/components/site-toggle/site-toggle.vue";

export default {
    name: "site-services",
    components: {
        SiteToggle,
    },
    setup() {
        const isHidden = ref(false);

        const getContentIsShow = computed(() => {
            return !isHidden.value;
        });

        const onToggleIsHidden = () => {
            isHidden.value = !isHidden.value;
        };

        return {
            isHidden,
            getContentIsShow,
            onToggleIsHidden,
        };
    },
};
</script>

<style lang="sass">
.site-services
    .site-services__container
        @include container
        font-family: 'Manrope', sans-serif

    .site-services__content
        padding: 106px 0
        background: $grays-gray-100
        margin-top: 32px

    .site-services__section
        display: flex
        grid-column-gap: 25px

    .site-services__banner
        width: 660px
        height: 624px
        background: $old-black
        background-image: url('~@/assets/images/services/service.png')
        background-position: center
        background-repeat: no-repeat
        background-size: cover
        border-radius: 24px
        padding: 40px
        display: flex
        flex-direction: column
        align-items: flex-start
        justify-content: space-between

    .site-services__banner-info
        width: 295px
        display: flex
        align-items: flex-start
        grid-column-gap: 24px

    .site-services__banner-label
        font-weight: 500
        font-size: 14px
        line-height: 20px
        color: $old-white

    .site-services__banner-title
        font-weight: 700
        font-size: 52px
        line-height: 60px
        color: $new-gray-100

    .site-services__cards
        display: grid
        grid-template-columns: repeat(2, 317px)
        grid-column-gap: 25px
        grid-row-gap: 24px

    .site-services__card
        background: $old-white
        border-radius: 24px
        padding: 24px 16px 16px 24px
        display: flex
        flex-direction: column
        height: 138px

    .site-services__label
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $old-black
        display: inline-block
        width: 228px

    .site-services__link
        width: 32px
        height: 32px
        border: 1px solid $grays-gray-300
        border-radius: 8px
        display: flex
        align-items: center
        justify-content: center
        margin: auto 0 0 auto

@media screen and (max-width: 1440px)
    .site-services
        .site-services__content
            padding: 82px 0

        .site-services__section
            grid-column-gap: 24px

        .site-services__banner
            width: 468px
            height: 512px

        .site-services__banner-title
            font-size: 40px
            line-height: 48px

        .site-services__cards
            grid-template-columns: repeat(2, 222px)
            grid-gap: 24px

        .site-services__card
            padding: 20px 16px
            height: 110px

        .site-services__label
            font-size: 14px
            line-height: 18px
            width: 180px

@media screen and (max-width: 1024px)
    .site-services
        .site-services__content
            padding: 64px 0

        .site-services__section
            flex-direction: column
            grid-column-gap: 0
            grid-row-gap: 24px

        .site-services__banner
            width: 100%
            height: 273px

        .site-services__banner-title
            font-size: 32px
            line-height: 40px

        .site-services__cards
            grid-template-columns: repeat(3, 204px)
            grid-gap: 12px

        .site-services__card
            padding: 16px 12px
            border-radius: 12px
            justify-content: space-between

        .site-services__link
            margin-top: 10px

@media screen and (max-width: 768px)
    .site-services
        .site-services__content
            margin-top: 45px
            padding: 64px 0 56px 0

        .site-services__section
            grid-row-gap: 32px

        .site-services__banner
            padding: 14px 14px 24px 14px

        .site-services__banner-title
            font-size: 28px
            line-height: 36px
            text-align: center

        .site-services__banner-info
            grid-column-gap: 6px

        .site-services__banner-svg
            width: 20px
            height: 20px

        .site-services__banner-label
            font-weight: 400
            font-size: 12px
            line-height: 16px

        .site-services__cards
            grid-template-columns: 1fr

        .site-services__label
            width: 100%

        .site-services__link
            width: 24px
            height: 24px
</style>
