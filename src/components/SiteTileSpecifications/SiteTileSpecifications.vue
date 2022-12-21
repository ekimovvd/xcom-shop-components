<template>
    <div class="site-tile-specifications">
        <div
            class="site-tile-specifications__specification"
            v-for="specification in specifications"
            :key="specification.id"
        >
            <img
                class="site-tile-specifications__img"
                :src="specification.img"
                alt="ram"
            />
            <p class="site-tile-specifications__label">
                {{ specification.label }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteTileSpecifications",
    setup() {
        const specifications = [
            {
                id: 0,
                label: "4 ГБ RAM, 64 ГБ eMMC",
                img: require("@/assets/images/tile-specifications/ram.svg"),
            },
            {
                id: 1,
                label: `17.3", 1920x1080 (Full HD), IPS`,
                img: require("@/assets/images/tile-specifications/full-hd.svg"),
            },
            {
                id: 2,
                label: "Intel Core i7 1165G7",
                img: require("@/assets/images/tile-specifications/core.svg"),
            },
            {
                id: 3,
                label: "Windows 11",
                img: require("@/assets/images/tile-specifications/os.svg"),
            },
        ];

        return {
            specifications,
        };
    },
};
</script>

<style lang="sass">
.site-tile-specifications
    display: grid
    grid-template-columns: repeat(4, 90px)
    grid-column-gap: 24px

    .site-tile-specifications__specification
        display: flex
        flex-direction: column
        align-items: center
        grid-row-gap: 8px
        background: #F9F9FD
        border-radius: 6px
        padding: 13px 8px 12px 7px

    .site-tile-specifications__label
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 10px
        line-height: 12px
        color: $new-gray-500
        text-align: center

@media screen and (max-width: 1440px)
    .site-tile-specifications
        grid-template-columns: repeat(2, 90px)
        justify-content: center
        grid-gap: 12px

@media screen and (max-width: 1024px)
    .site-tile-specifications
        grid-template-columns: repeat(4, 134px)
        grid-column-gap: 24px

        .site-tile-specifications__specification
            padding: 29px 29px

@media screen and (max-width: 768px)
    .site-tile-specifications
        grid-template-columns: repeat(2, 134px)
        grid-gap: 24px
</style>
