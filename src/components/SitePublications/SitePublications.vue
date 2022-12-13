<template>
    <div class="site-publications">
        <SiteToggle
            title="Публикации"
            :isHidden="isHidden"
            @toggle="onToggleIsHidden"
        />
        <SiteSplide
            class="site-publications__slider"
            v-if="getContentIsShow"
            :options="getOptions"
            :extensions="extensions"
        >
            <SiteSlide
                class="site-publications__slide"
                v-for="publication in publications"
                :key="publication.id"
                :data-splide-youtube="publication.video"
                :style="onSlideStyle(publication)"
            >
                <img
                    class="site-publications__slide-preview"
                    v-if="publication.video"
                    :src="
                        require(`@/assets/images/publications/${publication.preview}`)
                    "
                    alt="preview"
                />
                <div class="site-publications__slide-info" v-else>
                    <p
                        class="site-publications__slide-label"
                        :style="onSlideLabelStyle(publication)"
                    >
                        {{ publication.label }}
                    </p>
                    <img
                        class="site-publications__slide-img"
                        :src="
                            require(`@/assets/images/publications/${publication.img}`)
                        "
                        alt="img"
                    />
                </div>
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

        const getContentIsShow = computed(() => {
            return !isHidden.value;
        });

        const onToggleIsHidden = () => {
            isHidden.value = !isHidden.value;
        };

        const onChangeResize = () => {
            screenWidth.value = window.innerWidth;
        };

        const onSlideStyle = ({ backgroundColor }) => {
            return {
                backgroundColor: backgroundColor ? backgroundColor : "#69696D",
            };
        };

        const onSlideLabelStyle = ({ labelColor }) => {
            return {
                color: labelColor ? labelColor : "#FFFFFF",
            };
        };

        return {
            isHidden,
            extensions: { Video },
            getOptions,
            getContentIsShow,
            onToggleIsHidden,
            onChangeResize,
            onSlideStyle,
            onSlideLabelStyle,
        };
    },
};
</script>

<style lang="sass">
.site-publications
    margin-bottom: 100px

    .site-publications__slider
        margin-top: 48px

    .site-publications__slide
        border-radius: 24px
        position: relative
        overflow: hidden

    .site-publications__slide-preview
        width: 100%
        height: 100%
        border-radius: 24px

    .site-publications__slide-info
        width: 100%
        padding: 32px 32px 60px 32px

    .site-publications__slide-label
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 20px
        line-height: 26px
        width: 264px
        display: inline-block

    .site-publications__slide-img
        position: absolute
        right: 0
        bottom: 0

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

        &:focus-visible
            outline: none

    .splide__arrow--prev
        left: -25px

    .splide__arrow--next
        right: -25px

@media screen and (max-width: 1440px)
    .site-publications
        .site-publications__slide-info
            padding: 24px 86px 48px 24px

        .site-publications__slide-label
            width: 164px
            font-size: 14px
            line-height: 18px

        .site-publications__slide-img
            width: 142px
            right: -15px
            bottom: -15px

@media screen and (max-width: 768px)
    .site-publications
        .site-publications__slide
            height: 80px
            border-radius: 16px

        .site-publications__slide-preview
            border-radius: 16px

        .site-publications__slide-info
            padding: 16px 64px 16px 16px

        .site-publications__slide-label
            font-size: 12px
            line-height: 16px
            width: 136px

        .site-publications__slide-img
            width: 87px
            right: 0
            bottom: 0

        .splide__arrow
            width: 32px
            height: 32px
            top: 50%

        .splide__arrow--prev
            left: -15px

        .splide__arrow--next
            right: -15px
</style>
