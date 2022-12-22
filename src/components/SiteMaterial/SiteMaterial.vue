<template>
    <a class="site-material" :href="material.link" target="_blank">
        <div class="site-material__cube">
            <img
                class="site-material__img"
                src="@/assets/images/material/material.svg"
                alt="icon"
            />
        </div>
        <div class="site-material__info">
            <h5 class="site-material__title">
                {{ material.name }}
            </h5>
            <p class="site-material__size" v-if="getSizeIsShow">
                {{ material.size }}
            </p>
        </div>
    </a>
</template>

<script>
import { computed, toRefs } from "vue";

export default {
    name: "SiteMaterial",
    props: {
        material: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { material } = toRefs(props);

        const getSizeIsShow = computed(() => {
            return material.value.size;
        });

        return {
            getSizeIsShow,
        };
    },
};
</script>

<style lang="sass">
.site-material
    display: flex
    align-items: center
    grid-column-gap: 24px
    font-family: 'Manrope', sans-serif

    .site-material__cube
        width: 72px
        min-width: 72px
        height: 72px
        background: $old-white
        border: 1px solid $new-gray-200
        border-radius: 12px
        display: flex
        align-items: center
        justify-content: center

    .site-material__title
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black
        max-width: 191px

    .site-material__size
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $main-black
        margin-top: 8px
</style>
