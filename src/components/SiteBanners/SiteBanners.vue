<template>
    <SiteSplide class="site-banners" :options="options">
        <SiteSlide
            class="site-banners__slide"
            v-for="banner in banners"
            :key="banner.id"
        >
            <img
                class="site-banners__slide-img"
                :src="require(`@/assets/images/banners/${banner.img}`)"
                alt="slide"
            />
        </SiteSlide>
    </SiteSplide>
</template>

<script>
export default {
    name: "SiteBanners",
    props: {
        banners: {
            type: Array,
            default: () => [],
        },
    },
    setup() {
        const options = {
            pagination: false,
            perPage: 1,
        };

        return {
            options,
        };
    },
};
</script>

<style lang="sass">
.site-banners
    .site-banners__slide-img
        width: 100%
        height: 484px
        background-size: cover
        background-repeat: no-repeat
        border-radius: 24px

    .splide__arrow
        width: 44px
        height: 44px
        opacity: 1
        background: $main-white
        box-shadow: $small-down

        &:disabled
            display: none

        &:hover:not(:disabled)
            opacity: 1

    .splide__arrow--prev
        left: -25px

    .splide__arrow--next
        right: -25px

@media screen and (max-width: 1440px)
    .site-banners
        .site-banners__slide-img
            height: 404px

@media screen and (max-width: 1024px)
    .site-banners
        .site-banners__slide-img
            height: 310px

@media screen and (max-width: 768px)
    .site-banners
        .site-banners__slide-img
            height: 220px

        .splide__arrow
            width: 32px
            height: 32px

        .splide__arrow--prev
            left: -10px

        .splide__arrow--next
            right: -10px
</style>
