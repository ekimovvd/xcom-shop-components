<template>
    <div class="site-tile-preview">
        <SiteTileTags class="site-tile-preview__tags" :tile="tile" />
        <div class="site-tile-preview__wrapper">
            <img
                class="site-tile-preview__img"
                src="@/assets/images/tile-preview/laptop.png"
                alt="img"
            />
            <button class="site-tile-preview__zoom" @click="onZoom">
                <img
                    class="site-tile-preview__zoom-img"
                    src="@/assets/images/tile-preview/zoom.svg"
                    alt="img"
                />
            </button>
        </div>
        <p class="site-tile-preview__message" v-if="getMessageIsShow">
            {{ tile.message }}
        </p>
    </div>
</template>

<script>
import { computed, toRefs } from "vue";

import SiteTileTags from "@/components/SiteTileTags/SiteTileTags.vue";

export default {
    name: "SiteTilePreview",
    components: {
        SiteTileTags,
    },
    props: {
        tile: {
            type: Object,
            required: true,
        },
    },
    emits: ["zoom"],
    setup(props, { emit }) {
        const { tile } = toRefs(props);

        const getMessageIsShow = computed(() => {
            return tile.value.message;
        });

        const onZoom = () => {
            emit("zoom");
        };

        return {
            getMessageIsShow,
            onZoom,
        };
    },
};
</script>

<style lang="sass">
.site-tile-preview
    .site-tile-preview__tags
        margin-right: auto

    .site-tile-preview__wrapper
        position: relative
        display: flex
        align-items: center
        justify-content: center

    .site-tile-preview__img
        max-width: 394px
        width: 100%

    .site-tile-preview__zoom
        position: absolute
        top: 0
        right: 0
        background: none
        outline: none
        cursor: pointer
        border: none

    .site-tile-preview__message
        font-family: 'Manrope', sans-serif
        font-weight: 700
        font-size: 14px
        line-height: 18px
        text-align: center
        color: $other-red-200-main
        margin-top: 40px

@media screen and (max-width: 1440px)
    .site-tile-preview
        .site-tile-preview__img
            max-width: 291px

        .site-tile-preview__zoom
            display: none

@media screen and (max-width: 1024px)
    .site-tile-preview
        .site-tile-preview__img
            max-width: 603px

@media screen and (max-width: 768px)
    .site-tile-preview
        .site-tile-preview__img
            max-width: 282px
</style>
