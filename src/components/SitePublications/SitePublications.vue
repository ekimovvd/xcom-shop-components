<template>
    <div class="site-publications">
        <SiteToggle
            title="Публикации"
            :isHidden="isHidden"
            @toggle="onToggleIsHidden"
        />
        <SiteSplide
            class="site-publications__slider"
            :options="getOptions"
            :extensions="extensions"
        >
            <SiteSlide
                class="site-publications__slide"
                v-for="publication in publications"
                :key="publication.id"
                :data-splide-youtube="publication.video"
            >
                <img
                    class="site-publications__slide-img"
                    :src="
                        require(`@/assets/images/publications/${publication.img}`)
                    "
                    alt="img"
                />
            </SiteSlide>
        </SiteSplide>
    </div>
</template>

<script>
import { computed, ref } from "vue";

import SiteToggle from "@/components/site-toggle/site-toggle.vue";
import { Video } from "@splidejs/splide-extension-video";

export default {
    name: "SitePublications",
    components: {
        SiteToggle,
    },
    props: {
        publications: {
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
            medium: 1024,
            small: 768,
        };
        const sliderPages = {
            max: 3,
            medium: 2,
            min: 1,
        };

        const getPerPage = computed(() => {
            if (
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
            extensions: { Video },
            getOptions,
            onToggleIsHidden,
            onChangeResize,
        };
    },
};
</script>

<style lang="sass">
.site-publications
    margin-bottom: 100px

    .site-publications__slider
        margin-top: 48px

    .site-publications__slide-img
        border-radius: 24px

    .splide__arrow
        width: 44px
        height: 44px
        opacity: 1
        background: $main-white
        box-shadow: $small-down
        top: 126px

        &:disabled
            display: none

        &:hover:not(:disabled)
            opacity: 1

    .splide__arrow--prev
        left: -25px

    .splide__arrow--next
        right: -25px

@media screen and (max-width: 1440px)
    .site-publications
        .site-publications__slide
            width: 304px

        .site-publications__slide-img
            width: 304px
            border-radius: 16px

@media screen and (max-width: 768px)
    .site-publications
        .site-publications__slide
            width: 292px

        .site-publications__slide-img
            width: 292px

        .splide__arrow
            width: 32px
            height: 32px
            top: 50%

        .splide__arrow--prev
            left: -15px

        .splide__arrow--next
            right: -15px
</style>
