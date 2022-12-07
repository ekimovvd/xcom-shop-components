<template>
    <div class="site-sales">
        <SiteToggle
            title="Может быть интересно"
            :isHidden="isHidden"
            @toggle="onToggleIsHidden"
        />
        <SiteSplide
            v-if="!isHidden"
            class="site-sales__slider"
            :options="getOptions"
        >
            <SiteSlide
                class="site-sales__slide"
                v-for="sale in sales"
                :key="sale.id"
            >
                <img
                    class="site-sales__slide-img"
                    :src="require(`@/assets/images/sales/${sale.img}`)"
                    alt="img"
                />
            </SiteSlide>
        </SiteSplide>
    </div>
</template>

<script>
import { computed, ref } from "vue";

import SiteToggle from "@/components/site-toggle/site-toggle.vue";

export default {
    name: "SiteSales",
    components: {
        SiteToggle,
    },
    props: {
        sales: {
            type: Array,
            default: () => [],
        },
    },
    created() {
        window.addEventListener("resize", this.onChangeResize);
        this.onChangeResize();
    },
    setup() {
        const isHidden = ref(false);
        const screenWidth = ref(0);
        const screen = {
            main: 1440,
            medium: 1024,
            small: 768,
        };
        const sliderPages = {
            max: 4,
            average: 3,
            medium: 2,
            min: 1,
        };

        const getPerPage = computed(() => {
            if (
                screenWidth.value <= screen.main &&
                screenWidth.value > screen.medium
            ) {
                return sliderPages.average;
            } else if (
                screenWidth.value <= screen.medium &&
                screenWidth.value > screen.small
            ) {
                return sliderPages.medium;
            } else if (screenWidth.value <= screen.small) {
                return sliderPages.min;
            }
            return sliderPages.max;
        });

        const getOptions = computed(() => {
            return {
                pagination: false,
                perPage: getPerPage.value,
                gap: "24px",
            };
        });

        const onToggleIsHidden = () => {
            isHidden.value = !isHidden.value;
        };

        const onChangeResize = () => {
            screenWidth.value = window.innerWidth;
        };

        return {
            isHidden,
            screenWidth,
            getOptions,
            onToggleIsHidden,
            onChangeResize,
        };
    },
};
</script>

<style lang="sass">
.site-sales
    .site-sales__slider
        margin-top: 48px

    .site-sales__slide
        max-width: 318px
        border-radius: 16px

    .site-sales__slide-img
        max-width: 318px
        width: 100%
        border-radius: 16px

    .splide__arrow
        width: 44px
        height: 44px
        opacity: 1
        background: $main-white
        box-shadow: $small-down

        &:focus-visible
            outline: none

        &:disabled
            display: none

        &:hover:not(:disabled)
            opacity: 1

    .splide__arrow--prev
        left: -25px

    .splide__arrow--next
        right: -25px

@media screen and (max-width: 1440px)
    .site-sales
        .site-sales__slider
            margin-top: 32px

@media screen and (max-width: 768px)
    .site-sales
        .site-sales__slider
            margin-top: 40px

        .splide__arrow
            width: 32px
            height: 32px
            top: 50%

        .splide__arrow--prev
            left: -15px

        .splide__arrow--next
            right: -15px
</style>
