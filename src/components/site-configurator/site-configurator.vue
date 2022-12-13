<template>
    <div class="site-configurator">
        <SiteToggle
            title="Конфигураторы"
            :isHidden="isHidden"
            @toggle="onToggleIsHidden"
        />
        <div class="site-configurator__container" v-if="getContentIsShow">
            <div class="site-configurator__content">
                <div class="site-configurator__group">
                    <ul class="site-configurator__cards">
                        <li class="site-configurator__card">
                            <a
                                class="site-configurator__link site-configurator__link--big"
                                href="#"
                            >
                                <p
                                    class="site-configurator__link-label site-configurator__link-label--white"
                                >
                                    Конфигуратор ПК
                                </p>
                                <img
                                    class="site-configurator__link-img"
                                    src="@/assets/images/configurator/system-unit.png"
                                    alt="system-unit"
                                />
                            </a>
                        </li>
                    </ul>
                    <ul class="site-configurator__cards">
                        <li class="site-configurator__card">
                            <a
                                class="site-configurator__link site-configurator__link--medium"
                                href="#"
                            >
                                <p
                                    class="site-configurator__link-label site-configurator__link-label--black site-configurator__link-label--medium"
                                >
                                    Помощник по выбору готового компьютера
                                </p>
                                <img
                                    class="site-configurator__link-img"
                                    src="@/assets/images/configurator/laptop.png"
                                    alt="laptop"
                                />
                            </a>
                        </li>
                        <li class="site-configurator__card">
                            <a
                                class="site-configurator__link site-configurator__link--small"
                                href="#"
                            >
                                <p
                                    class="site-configurator__link-label site-configurator__link-label--black site-configurator__link-label--small"
                                >
                                    Подбор батарей для ИБП
                                </p>
                                <img
                                    class="site-configurator__link-img"
                                    src="@/assets/images/configurator/battery.png"
                                    alt="battery"
                                />
                            </a>
                        </li>
                        <li class="site-configurator__card">
                            <a
                                class="site-configurator__link site-configurator__link--small"
                                href="#"
                            >
                                <p
                                    class="site-configurator__link-label site-configurator__link-label--black site-configurator__link-label--small"
                                >
                                    Видеонаблюдение в квартиру
                                </p>
                                <img
                                    class="site-configurator__link-img"
                                    src="@/assets/images/configurator/camera.png"
                                    alt="camera"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
                <ul class="site-configurator__cards">
                    <li class="site-configurator__card">
                        <a
                            class="site-configurator__link site-configurator__link--small"
                            href="#"
                        >
                            <p
                                class="site-configurator__link-label site-configurator__link-label--black site-configurator__link-label--small"
                            >
                                Материалы для оргтехники
                            </p>
                            <img
                                class="site-configurator__link-img"
                                src="@/assets/images/configurator/office-equipment.png"
                                alt="office-equipment"
                            />
                        </a>
                    </li>
                    <li class="site-configurator__card">
                        <a
                            class="site-configurator__link site-configurator__link--small"
                            href="#"
                        >
                            <p
                                class="site-configurator__link-label site-configurator__link-label--black site-configurator__link-label--small"
                            >
                                Подбор МФУ
                            </p>
                            <img
                                class="site-configurator__link-img"
                                src="@/assets/images/configurator/printer.png"
                                alt="printer"
                            />
                        </a>
                    </li>
                    <li class="site-configurator__card">
                        <a
                            class="site-configurator__link site-configurator__link--small"
                            href="#"
                        >
                            <p
                                class="site-configurator__link-label site-configurator__link-label--black site-configurator__link-label--small"
                            >
                                Конфигуратор кабель-каналов
                            </p>
                            <img
                                class="site-configurator__link-img"
                                src="@/assets/images/configurator/cabel.png"
                                alt="cabel"
                            />
                        </a>
                    </li>
                    <li class="site-configurator__card">
                        <a
                            class="site-configurator__link site-configurator__link--small"
                            href="#"
                        >
                            <p
                                class="site-configurator__link-label site-configurator__link-label--black site-configurator__link-label--small"
                            >
                                Подбор розеток и выключателей
                            </p>
                            <img
                                class="site-configurator__link-img"
                                src="@/assets/images/configurator/power-socket.png"
                                alt="power-socket"
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from "vue";

import SiteToggle from "@/components/site-toggle/site-toggle.vue";

export default {
    name: "site-configurator",
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
.site-configurator
    .site-configurator__container
        @include container

    .site-configurator__content
        display: flex
        align-items: center
        grid-column-gap: 24px
        margin-top: 48px

    .site-configurator__group
        display: flex
        grid-column-gap: 24px

    .site-configurator__cards
        display: flex
        flex-wrap: wrap
        grid-gap: 24px

    .site-configurator__link
        position: relative
        border-radius: 24px

        &.site-configurator__link--big
            width: 432px
            height: 432px
            padding: 32px
            background: linear-gradient(223.43deg, #0DFFC5 0%, #3354FF 100%)

            .site-configurator__link-img
                left: -1px
                bottom: -1px
                border-bottom-left-radius: 24px

        &.site-configurator__link--medium
            width: 432px
            height: 204px
            padding: 24px
            background: $grays-gray-100

            .site-configurator__link-img
                right: 0
                bottom: 0
                border-bottom-right-radius: 24px

        &.site-configurator__link--small
            width: 204px
            height: 204px
            padding: 24px
            background: $grays-gray-100

            .site-configurator__link-img
                right: 0
                bottom: 0
                border-bottom-right-radius: 24px

    .site-configurator__link-label
        font-family: 'Manrope', sans-serif
        display: inline-block

        &.site-configurator__link-label--white
            font-weight: 700
            font-size: 24px
            line-height: 32px
            color: $main-white

        &.site-configurator__link-label--black
            font-weight: 700
            font-size: 16px
            line-height: 20px
            color: $new-black

        &.site-configurator__link-label--medium
            width: 225px

        &.site-configurator__link-label--small
            width: 158px

    .site-configurator__link-img
        position: absolute

@media screen and (max-width: 1440px)
    .site-configurator
        .site-configurator__link
            overflow: hidden

            &.site-configurator__link--big
                width: 304px
                height: 304px
                padding: 24px

                .site-configurator__link-img
                    left: 0
                    right: 0
                    bottom: -110px

            &.site-configurator__link--medium
                width: 304px
                height: 140px
                padding: 16px
                border-radius: 12px

                .site-configurator__link-img
                    width: 130px
                    border-radius: 0

            &.site-configurator__link--small
                width: 140px
                height: 140px
                padding: 16px
                border-radius: 12px

                .site-configurator__link-img
                    width: 130px
                    border-radius: 0

        .site-configurator__link-label
            &.site-configurator__link-label--black
                font-weight: 500
                font-size: 12px
                line-height: 16px

            &.site-configurator__link-label--medium
                width: 127px

            &.site-configurator__link-label--small
                width: 115px

@media screen and (max-width: 1024px)
    .site-configurator
        .site-configurator__content
            flex-direction: column
            grid-row-gap: 24px

@media screen and (max-width: 768px)
    .site-configurator
        .site-configurator__content
            grid-gap: 12px

        .site-configurator__group
            flex-direction: column
            grid-gap: 12px

        .site-configurator__cards
            grid-gap: 12px

        .site-configurator__link
            &.site-configurator__link--big
                width: 292px
                height: 180px
                padding: 16px

                .site-configurator__link-img
                    width: 180px
                    bottom: -45px

            &.site-configurator__link--medium
                width: 292px

        .site-configurator__link-label
            &.site-configurator__link-label--white
                font-size: 12px
                line-height: 16px
</style>
