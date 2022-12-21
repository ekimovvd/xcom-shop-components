<template>
    <div class="site-tile">
        <SiteTileInfo
            class="site-tile__info site-tile__info--top"
            :tile="tile"
        />
        <div class="site-tile__product">
            <div class="site-tile__preview">
                <div>preview</div>
                <SiteTileSpecifications class="site-tile__specifications" />
                <SiteTileConfiguration />
                <SiteTileInfo
                    class="site-tile__info site-tile__info--bottom"
                    :tile="tile"
                />
            </div>
            <div class="site-tile__making-order">
                <SiteTileBasket class="site-tile__basket" :tile="tile" />
                <SiteTileHelp class="site-tile__help" />
                <SiteTileBanner class="site-tile__banner" />
            </div>
        </div>
    </div>
</template>

<script>
import SiteTileInfo from "@/components/SiteTileInfo/SiteTileInfo.vue";
import SiteTileBasket from "@/components/SiteTileBasket/SiteTileBasket.vue";
import SiteTileSpecifications from "@/components/SiteTileSpecifications/SiteTileSpecifications.vue";
import SiteTileConfiguration from "@/components/SiteTileConfiguration/SiteTileConfiguration.vue";
import SiteTileHelp from "@/components/SiteTileHelp/SiteTileHelp.vue";
import SiteTileBanner from "@/components/SiteTileBanner/SiteTileBanner.vue";

export default {
    name: "SiteTile",
    components: {
        SiteTileInfo,
        SiteTileBasket,
        SiteTileSpecifications,
        SiteTileConfiguration,
        SiteTileHelp,
        SiteTileBanner,
    },
    props: {
        tile: Object,
        required: true,
    },
};
</script>

<style lang="sass">
.site-tile
    margin-bottom: 100px

    .site-tile__info
        margin-bottom: 24px

    .site-tile__info--bottom
        display: none

    .site-tile__product
        display: grid
        grid-template-columns: 432px 546px
        grid-column-gap: 24px

    .site-tile__specifications
        margin: 24px 0

    .site-tile__help
        margin: 32px 0 40px 0

@media screen and (max-width: 1440px)
    .site-tile
        .site-tile__info
            margin-bottom: 32px

        .site-tile__product
            grid-template-columns: 304px 386px

        .site-tile__help
            margin: 24px 0 32px 0

@media screen and (max-width: 1024px)
    .site-tile
        .site-tile__specifications
            margin: 32px 0

        .site-tile__info--top
            display: none

        .site-tile__info--bottom
            display: block
            margin: 32px 0 0 0

        .site-tile__preview
            margin-bottom: 33px

        .site-tile__product
            grid-template-columns: 1fr

@media screen and (max-width: 768px)
    .site-tile
        .site-tile__product
            display: flex
            flex-direction: column

        .site-tile__specifications
            margin-bottom: 24px

        .site-tile-configuration
            margin-bottom: 24px

        .site-tile__preview
            margin-bottom: 24px

        .site-tile__help
            margin: 24px 0 32px 0
</style>
