<template>
    <div class="site-banner" :class="getBannerHorizontalClass">
        <p class="site-banner__label" v-if="isHorizontal">01 / 06</p>
        <p class="site-banner__title" :class="getBannerTitleHorizontalClass">
            {{ banner.title }}
        </p>
        <a class="site-banner__link" v-if="!isHorizontal" :href="banner.link">
            <img
                class="site-banner__icon"
                src="@/assets/images/banner/arrow.svg"
                alt="icon"
            />
        </a>
    </div>
</template>

<script>
import { computed, toRefs } from "vue";

export default {
    name: "SiteBanner",
    props: {
        banner: {
            type: Object,
            required: true,
        },
        isHorizontal: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const { isHorizontal } = toRefs(props);

        const getBannerHorizontalClass = computed(() => {
            return isHorizontal.value ? "site-banner--horizontal" : "";
        });

        const getBannerTitleHorizontalClass = computed(() => {
            return isHorizontal.value ? "site-banner__title--horizontal" : "";
        });

        return {
            getBannerHorizontalClass,
            getBannerTitleHorizontalClass,
        };
    },
};
</script>

<style lang="sass">
.site-banner
    background-image: url('~@/assets/images/banner/laptop.png')
    background-position: center center
    background-size: cover
    background-repeat: no-repeat
    background-color: $old-gray
    border-radius: 12px
    width: 318px
    height: 463px
    padding: 25px 13px 23px 25px
    display: flex
    flex-direction: column
    justify-content: space-between
    font-family: 'Manrope', sans-serif

    &.site-banner--horizontal
        width: 100%
        height: 242px
        padding: 40px
        justify-content: flex-start
        grid-row-gap: 24px

    .site-banner__label
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-white

    .site-banner__title
        font-weight: 600
        font-size: 16px
        line-height: 23px
        color: $old-white

    .site-banner__title--horizontal
        font-weight: 700
        font-size: 32px
        line-height: 40px
        display: inline-block
        width: 268px

    .site-banner__link
        width: 34px
        height: 34px
        border: 1px solid $old-white
        border-radius: 8px
        display: flex
        align-items: center
        justify-content: center

@media screen and (max-width: 1440px)
    .site-banner
        width: 222px
        height: 400px
        padding: 24px 28px 0 24px

        &.site-banner--horizontal
            height: 204px

        .site-banner__title
            font-weight: 500
            line-height: 20px

        .site-banner__title--horizontal
            font-weight: 700
            font-size: 32px
            line-height: 40px

        .site-banner__link
            display: none

@media screen and (max-width: 1024px)
    .site-banner
        width: 140px
        height: 307px

        .site-banner__title
            font-size: 14px
            line-height: 18px
</style>
