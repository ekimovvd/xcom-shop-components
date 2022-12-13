<template>
    <div class="site-news">
        <SiteToggle
            title="Новости"
            :isHidden="isHidden"
            @toggle="onToggleIsHidden"
        />
        <div class="site-news__container" v-if="!getContentIsShow">
            <SiteSplide class="site-news__slider" :options="getOptions">
                <SiteSlide
                    class="site-news__slide"
                    v-for="slide in news"
                    :key="slide.id"
                >
                    <div
                        class="site-news__slide-content"
                        :style="{
                            backgroundImage:
                                'url(' +
                                require(`@/assets/images/news/${slide.backgroundImage}`) +
                                ')',
                        }"
                    >
                        <ul class="site-news__slide-tags">
                            <li
                                class="site-news__slide-tag"
                                v-for="tag in slide.tags"
                                :key="tag.id"
                            >
                                {{ tag.name }}
                            </li>
                        </ul>
                        <p class="site-news__slide-label">
                            {{ slide.description }}
                        </p>
                    </div>
                    <div class="site-news__slide-date">
                        <p class="site-news__slide-date-label">
                            {{ slide.date }}
                        </p>
                    </div>
                </SiteSlide>
            </SiteSplide>
        </div>
    </div>
</template>

<script>
import { computed, onBeforeUnmount, ref } from "vue";

import SiteToggle from "@/components/site-toggle/site-toggle.vue";

export default {
    name: "site-news",
    components: {
        SiteToggle,
    },
    props: {
        news: {
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

        onBeforeUnmount(() => {
            window.removeEventListener("resize", onChangeResize);
        });

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
            return isHidden.value;
        });

        const onToggleIsHidden = () => {
            isHidden.value = !isHidden.value;
        };

        const onChangeResize = () => {
            screenWidth.value = window.innerWidth;
        };

        return {
            isHidden,
            getOptions,
            getContentIsShow,
            onToggleIsHidden,
            onChangeResize,
        };
    },
};
</script>

<style lang="sass">
.site-news
    .site-news__container
        @include container
        font-family: 'Manrope', sans-serif
        margin-top: 46px

    .site-news__slide-content
        width: 432px
        height: 525px
        padding: 24px
        border-radius: 24px
        display: flex
        flex-direction: column
        justify-content: space-between
        background-repeat: no-repeat
        background-position: center
        background-size: cover

    .site-news__slide-tags
        display: flex
        flex-wrap: wrap
        gap: 10px

    .site-news__slide-tag
        padding: 4px 8px
        background: $main-white
        border-radius: 13px
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $new-black

    .site-news__slide-label
        font-weight: 500
        font-size: 20px
        line-height: 26px
        color: $old-white

    .splide__arrow
        width: 44px
        height: 44px
        opacity: 1
        background: $main-white
        box-shadow: $small-down

        &.splide__arrow--prev
            left: -22px

        &.splide__arrow--next
            right: -22px

        &:focus-visible
            outline: none

        &:disabled
            display: none

        &:hover:not(:disabled)
            opacity: 1

    .site-news__slide-date
        margin-top: 16px

    .site-news__slide-date-label
        font-weight: 400
        font-size: 12px
        line-height: 18px
        color: $new-gray-400

@media screen and (max-width: 1440px)
    .site-news
        .site-news__container
            margin-top: 48px

        .site-news__slide-content
            width: 304px
            height: 426px
            padding-bottom: 29px

        .site-news__slide-label
            font-size: 16px
            line-height: 20px

@media screen and (max-width: 1024px)
    .site-news
        .site-news__slide-content
            width: 100%

        .splide__arrow
            &.splide__arrow--prev
                left: 12px

            &.splide__arrow--next
                right: 12px
</style>
