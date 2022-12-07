<template>
    <div class="site-sale-tile" :style="getTileStyle">
        <span class="site-sale-tile__tag" :style="getTagStyle">
            {{ sale.tag.label }}
        </span>
        <h4 class="site-sale-tile__title" :style="getTitleStyle">
            {{ sale.name.label }}
        </h4>
        <p class="site-sale-tile__description">{{ sale.description }}</p>
        <span
            v-if="sale.priceOld"
            class="site-sale-tile__price-old"
            :style="getPriceOldStyle"
        >
            {{ sale.priceOld.value }}
        </span>
        <span
            v-if="sale.price"
            class="site-sale-tile__price-current"
            :style="getPriceStyle"
        >
            {{ sale.price.value }}
        </span>
        <img
            class="site-sale-tile__img"
            :class="getImgViewClass"
            :src="require(`@/assets/images/sales/${sale.img.link}`)"
            alt=""
        />
    </div>
</template>

<script>
import { computed, toRefs } from "vue";

export default {
    name: "SiteSaleTile",
    props: {
        sale: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { sale } = toRefs(props);
        const { isGradient, backgroundColor, tag, name, img, price, priceOld } =
            sale.value;

        const getTileStyle = computed(() => {
            const style = {};
            if (isGradient) {
                style["background"] = backgroundColor
                    ? `linear-gradient(${backgroundColor})`
                    : "linear-gradient(52.21deg, #0DFFC5 0%, #3354FF 100%)";
            } else {
                style["background-color"] = backgroundColor
                    ? backgroundColor
                    : "#157FF8";
            }
            return style;
        });

        const getTagStyle = computed(() => {
            return {
                background: tag.backgroundColor
                    ? tag.backgroundColor
                    : "#F6F8FD",
                color: tag.labelColor ? tag.labelColor : "#157FF8",
            };
        });

        const getTitleStyle = computed(() => {
            return {
                color: name.color ? name.color : "#ffffff",
            };
        });

        const getImgViewClass = computed(() => {
            return img.position
                ? `site-sale-tile__img--${img.position}`
                : "site-sale-tile__img--center";
        });

        const getPriceStyle = computed(() => {
            return {
                background: price.backgroundColor
                    ? price.backgroundColor
                    : "#157FF8",
                color: price.labelColor ? price.labelColor : "#FFFFFF",
            };
        });

        const getPriceOldStyle = computed(() => {
            return {
                background: priceOld.backgroundColor
                    ? priceOld.backgroundColor
                    : "#FFFFFF",
                color: priceOld.labelColor ? priceOld.labelColor : "#B1B1BD",
            };
        });

        return {
            getTileStyle,
            getTagStyle,
            getTitleStyle,
            getImgViewClass,
            getPriceStyle,
            getPriceOldStyle,
        };
    },
};
</script>

<style lang="sass">
.site-sale-tile
    padding: 24px
    border-radius: 16px
    font-family: 'Manrope', sans-serif
    position: relative
    height: 280px
    overflow: hidden

    .site-sale-tile__tag
        padding: 4px 8px
        border-radius: 14px
        font-weight: 500
        font-size: 12px
        line-height: 16px
        margin-bottom: 16px
        display: inline-block

    .site-sale-tile__title
        font-weight: 500
        font-size: 20px
        line-height: 26px

    .site-sale-tile__description
        font-weight: 400
        font-size: 10px
        line-height: 14px
        color: #FFFFFF
        margin-top: 4px

    .site-sale-tile__price-old
        padding: 4px 8px
        border-radius: 50px
        font-weight: 500
        font-size: 12px
        line-height: 16px
        position: absolute
        left: 24px
        bottom: 62px
        transform: rotate(-11.51deg)
        z-index: 1

    .site-sale-tile__price-current
        padding: 8px 12px
        border-radius: 50px
        font-weight: 500
        font-size: 16px
        line-height: 20px
        position: absolute
        left: 24px
        bottom: 24px
        z-index: 1

    .site-sale-tile__img
        position: absolute

    .site-sale-tile__img--left
        bottom: 0
        left: 0

    .site-sale-tile__img--center
        bottom: 24px
        left: 24px

@media screen and (max-width: 1440px)
    .site-sale-tile
        height: 240px

        .site-sale-tile__title
            font-size: 16px
            line-height: 20px

        .site-sale-tile__img--left
            width: 100%
</style>
