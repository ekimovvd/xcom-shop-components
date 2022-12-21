<template>
    <button class="site-tile-banner" @click="onBanner">
        <p class="site-tile-banner__label">
            Помощник по выбору готового компьютера
        </p>
        <img
            class="site-tile-banner__img"
            src="@/assets/images/tile-banner/laptop.png"
            alt="laptop"
        />
    </button>
</template>

<script>
export default {
    name: "SiteTileBanner",
    setup() {
        const onBanner = () => {
            console.log("On Banner");
        };

        return {
            onBanner,
        };
    },
};
</script>

<style lang="sass">
.site-tile-banner
    padding: 0 0 0 24px
    background: $grays-gray-100
    border-radius: 24px
    display: flex
    justify-content: space-between
    border: none
    cursor: pointer
    outline: none
    width: 100%

    .site-tile-banner__label
        font-family: 'Manrope', sans-serif
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $old-black
        width: 225px
        margin: 24px 0 101px 0
        text-align: left

    .site-tile-banner__img
        border-radius: 0 24px 24px 0

@media screen and (max-width: 1440px)
    .site-tile-banner
        .site-tile-banner__label
            margin-bottom: 53px

        .site-tile-banner__img
            width: 121px
            height: 105px
            margin-top: auto
</style>
