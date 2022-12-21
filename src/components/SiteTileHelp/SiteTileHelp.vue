<template>
    <div class="site-tile-help">
        <button
            class="site-tile-help__card"
            v-for="card in cards"
            :key="card.id"
            @click="onHelp(card)"
        >
            <div class="site-tile-help__circle">
                <img
                    class="site-tile-help__circle-img"
                    :src="card.img"
                    alt="img"
                />
            </div>
            <p class="site-tile-help__label">{{ card.label }}</p>
        </button>
    </div>
</template>

<script>
export default {
    name: "SiteTileHelp",
    setup() {
        const cards = [
            {
                id: 0,
                label: "Помощь консультанта",
                img: require("@/assets/images/tile-help/comment.svg"),
                link: "",
            },
            {
                id: 1,
                label: "Совет эксперта",
                img: require("@/assets/images/tile-help/expert.svg"),
                link: "",
            },
        ];

        const onHelp = (card) => {
            console.log("HELP: ", card);
        };

        return {
            cards,
            onHelp,
        };
    },
};
</script>

<style lang="sass">
.site-tile-help
    display: grid
    grid-template-columns: repeat(2, 267px)
    grid-column-gap: 12px
    align-items: center

    .site-tile-help__card
        background: $grays-gray-100
        border-radius: 12px
        padding: 8px 16px
        display: flex
        grid-column-gap: 16px
        align-items: center
        border: none
        cursor: pointer
        outline: none

    .site-tile-help__circle
        width: 48px
        height: 48px
        background: $main-blue
        border-radius: 50%
        display: flex
        align-items: center
        justify-content: center

    .site-tile-help__label
        font-family: 'Manrope', sans-serif
        font-weight: 600
        font-size: 14px
        line-height: 18px
        color: $main-black
        width: 124px
        text-align: left

@media screen and (max-width: 1440px)
    .site-tile-help
        grid-template-columns: 1fr
        grid-row-gap: 12px

@media screen and (max-width: 1024px)
    .site-tile-help
        grid-template-columns: repeat(2, 1fr)

@media screen and (max-width: 768px)
    .site-tile-help
        grid-template-columns: 1fr
</style>
