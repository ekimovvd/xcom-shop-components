<template>
    <button class="site-tile-3d" @click="onClick">3D</button>
</template>

<script>
import { toRefs } from "vue";

export default {
    name: "SiteTile3d",
    props: {
        preview: {
            type: Object,
            required: true,
        },
    },
    emits: ["3d"],
    setup(props, { emit }) {
        const { preview } = toRefs(props);

        const onClick = () => {
            emit("3d", preview.value);
        };

        return {
            onClick,
        };
    },
};
</script>

<style lang="sass">
.site-tile-3d
    background: $grays-gray-100
    border-radius: 12px
    width: 64px
    height: 64px
    font-family: 'Manrope', sans-serif
    font-weight: 700
    font-size: 16px
    line-height: 20px
    color: $main-blue
    outline: none
    border: none
    padding: 0
    cursor: pointer
    display: flex
    align-items: center
    justify-content: center

@media screen and (max-width: 1440px)
    .site-tile-3d
        width: 48px
        height: 48px
</style>
