<template>
    <div class="site-tile-tags">
        <span
            class="site-tile-tags__tag"
            :class="onTagViewClass(tag)"
            v-for="tag in getTags"
            :key="tag.id"
        >
            {{ tag.label }}
        </span>
    </div>
</template>

<script>
import { computed, onBeforeUnmount, ref, toRefs } from "vue";

export default {
    name: "SiteTileTags",
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

        const screen = {
            main: 1440,
            medium: 1024,
            small: 768,
        };

        const tags = {
            main: 10,
            max: 5,
            medium: 4,
            min: 1,
        };

        onBeforeUnmount(() => {
            window.removeEventListener("resize", onChangeResize);
        });

        const getTags = computed(() => {
            if (screenWidth.value > screen.main) {
                return tile.value.tags.slice().splice(0, tags.main);
            } else if (
                screenWidth.value > screen.medium &&
                screenWidth.value <= screen.main
            ) {
                return tile.value.tags.slice().splice(0, tags.max);
            } else if (
                screenWidth.value > screen.small &&
                screenWidth.value <= screen.medium
            ) {
                return tile.value.tags.slice().splice(0, tags.medium);
            }
            return tile.value.tags.slice().splice(0, tags.min);
        });

        const onTagViewClass = (tag) => {
            return `site-tile-tags__tag--${tag.style}`;
        };

        const onChangeResize = () => {
            screenWidth.value = window.innerWidth;
        };

        return {
            getTags,
            onTagViewClass,
            onChangeResize,
        };
    },
};
</script>

<style lang="sass">
.site-tile-tags
    display: flex
    flex-wrap: wrap
    grid-column-gap: 4px
    grid-row-gap: 8px
    max-width: 301px

    .site-tile-tags__tag
        padding: 6px 8px
        border-radius: 8px
        font-family: 'TT Norms', sans-serif
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $main-white

    .site-tile-tags__tag--yellow
        background: $other-yellow-300-main

    .site-tile-tags__tag--red
        background: $other-red-200-main

    .site-tile-tags__tag--blue
        background: $main-blue

    .site-tile-tags__tag--green
        background: $other-green-200

@media screen and (max-width: 1440px)
    .site-tile-tags
        max-width: 246px

@media screen and (max-width: 1024px)
    .site-tile-tags
        max-width: none
</style>
