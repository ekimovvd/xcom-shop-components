<template>
    <div class="site-tile-gallery">
        <SiteSplide class="site-tile-gallery__slider" :options="getOptions">
            <SiteSlide
                class="site-tile-gallery__slide"
                v-for="preview in getPreviews"
                :key="preview.id"
            >
                <component
                    :preview="preview"
                    :is="preview.component"
                    @3d="on3D"
                    @video="onVideo"
                    @img="onImg"
                />
            </SiteSlide>
        </SiteSplide>
    </div>
</template>

<script>
import { computed, onBeforeUnmount, ref, toRefs } from "vue";

import SiteTile3d from "@/components/SiteTile3d/SiteTile3d.vue";
import SiteTileVideo from "@/components/SiteTileVideo/SiteTileVideo.vue";
import SiteTileImg from "@/components/SiteTileImg/SiteTileImg.vue";

export default {
    name: "SiteTileGallery",
    components: {
        SiteTile3d,
        SiteTileVideo,
        SiteTileImg,
    },
    props: {
        tile: {
            type: Object,
            required: true,
        },
    },
    created() {
        window.addEventListener("resize", this.onChangeResize);
        this.onChangeResize();
    },
    setup(props) {
        const { tile } = toRefs(props);

        const screenWidth = ref(0);

        const slideComponents = {
            "3d": SiteTile3d,
            video: SiteTileVideo,
            img: SiteTileImg,
        };

        const slides = {
            max: 6,
            min: 4,
        };

        const screen = {
            main: 1440,
            medium: 1024,
            small: 768,
        };

        onBeforeUnmount(() => {
            window.removeEventListener("resize", onChangeResize);
        });

        const getPerPage = computed(() => {
            if (screenWidth.value > screen.medium) {
                if (tile.value.previews.length < slides.min) {
                    return tile.value.previews.length;
                }

                return slides.min;
            } else if (
                screenWidth.value > screen.small &&
                screenWidth.value <= screen.medium
            ) {
                if (tile.value.previews.length < slides.max) {
                    return tile.value.previews.length;
                }

                return slides.max;
            }

            return tile.value.previews.length < slides.min
                ? tile.value.previews.length
                : slides.min;
        });

        const getOptions = computed(() => {
            return {
                pagination: false,
                perPage: getPerPage.value,
                gap: "12px",
            };
        });

        const getPreviews = computed(() => {
            return tile.value.previews.map((preview) => {
                return {
                    ...preview,
                    component: slideComponents[preview.type],
                };
            });
        });

        const on3D = (preview) => {
            console.log("On 3d", preview);
        };

        const onVideo = (preview) => {
            console.log("On Video", preview);
        };

        const onImg = (preview) => {
            console.log("On Img", preview);
        };

        const onChangeResize = () => {
            screenWidth.value = window.innerWidth;
        };

        return {
            getOptions,
            getPreviews,
            on3D,
            onVideo,
            onImg,
            onChangeResize,
        };
    },
};
</script>

<style lang="sass">
.site-tile-gallery
    display: flex
    grid-column-gap: 12px
    justify-content: center

    .site-tile-gallery__slider
        max-width: 292px

    .splide__arrow
        background: none
        height: 24px
        width: 24px
        opacity: 1

        &:hover
            opacity: 1

            &:not(:disabled)
                opacity: 1

        &:disabled
            opacity: 1
            border: rounded
            display: none

    .splide__arrow svg
        fill: $grays-gray-400

    .splide__arrow--prev
        left: -36px

    .splide__arrow--next
        right: -36px

@media screen and (max-width: 1440px)
    .site-tile-gallery
        .site-tile-gallery__slider
            max-width: 228px

@media screen and (max-width: 1024px)
    .site-tile-gallery
        .site-tile-gallery__slider
            max-width: 348px

@media screen and (max-width: 768px)
    .site-tile-gallery
        .site-tile-gallery__slider
            max-width: 228px
</style>
