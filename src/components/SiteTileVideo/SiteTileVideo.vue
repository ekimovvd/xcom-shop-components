<template>
    <button class="site-tile-video" @click="onClick">
        <img
            class="site-tile-video__img"
            src="@/assets/images/tile-video/play.svg"
            alt="img"
        />
    </button>
</template>

<script>
import { toRefs } from "vue";

export default {
    name: "SiteTileVideo",
    props: {
        preview: {
            type: Object,
            required: true,
        },
    },
    emits: ["video"],
    setup(props, { emit }) {
        const { preview } = toRefs(props);

        const onClick = () => {
            emit("video", preview.value);
        };

        return {
            onClick,
        };
    },
};
</script>

<style lang="sass">
.site-tile-video
    width: 64px
    height: 64px
    background: $grays-gray-100
    border-radius: 12px
    display: flex
    align-items: center
    justify-content: center
    outline: none
    border: none
    cursor: pointer
    padding: 0

@media screen and (max-width: 1440px)
    .site-tile-video
        width: 48px
        height: 48px
</style>
