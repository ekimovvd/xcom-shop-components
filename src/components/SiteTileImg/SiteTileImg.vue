<template>
    <button class="site-tile-img" @click="onClick">
        <img class="site-tile-img__preview" :src="preview.img" alt="img" />
    </button>
</template>

<script>
import { toRefs } from "vue";

export default {
    name: "SiteTileImg",
    props: {
        preview: {
            type: Object,
            required: true,
        },
    },
    emits: ["img"],
    setup(props, { emit }) {
        const { preview } = toRefs(props);

        const onClick = () => {
            emit("img", preview.value);
        };

        return {
            onClick,
        };
    },
};
</script>

<style lang="sass">
.site-tile-img
    width: 64px
    height: 64px
    border-radius: 12px
    background: $main-white
    display: flex
    align-items: center
    justify-content: center
    cursor: pointer
    outline: none
    border: none
    padding: 0

    &.site-tile-img--active
        border: 1px solid $main-blue

    .site-tile-img__preview
        max-width: 50px

@media screen and (max-width: 1440px)
    .site-tile-img
        width: 48px
        height: 48px

        .site-tile-img__preview
            max-width: 36px
</style>
