<template>
    <Pagination
        class="site-pagination"
        v-model="currentPage"
        :pages="pages"
        :range-size="getRangeSize"
        :hideFirstButton="true"
        :hideLastButton="true"
    />
</template>

<script>
import { computed, ref, toRefs } from "vue";

import Pagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

export default {
    name: "SitePagination",
    components: {
        Pagination,
    },
    props: {
        page: {
            type: Number,
            default: 0,
        },
        pages: {
            type: Number,
            default: 0,
        },
    },
    emits: ["change"],
    created() {
        window.addEventListener("resize", this.onChangeResize);
        this.onChangeResize();
    },
    setup(props, { emit }) {
        const { page } = toRefs(props);

        const screenWidth = ref(0);
        const screen = {
            medium: 1024,
            small: 768,
        };
        const rangeSize = {
            main: 3,
            min: 0,
        };

        const currentPage = computed({
            get() {
                return page.value + 1;
            },

            set(newPage) {
                emit("change", newPage - 1);
            },
        });

        const getRangeSize = computed(() => {
            if (screenWidth.value <= screen.small) {
                return rangeSize.min;
            }
            return rangeSize.main;
        });

        const onChangeResize = () => {
            screenWidth.value = window.innerWidth;
        };

        return {
            currentPage,
            getRangeSize,
            onChangeResize,
        };
    },
};
</script>

<style lang="sass">
.site-pagination
    justify-content: center
    grid-gap: 8px

    .Page
        width: 32px
        height: 32px
        border: 1px solid $grays-gray-200
        border-radius: 4px
        font-family: 'Inter', sans-serif
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $main-black
        margin: 0

    .Page-active
        background: $main-blue !important
        border-color: $main-blue
        color: $main-white
        opacity: 1

    .Dots
        fill: $main-black

    .PaginationControl
        width: 32px
        height: 32px
        border: 1px solid $grays-gray-200
        border-radius: 4px
        display: flex
        align-items: center
        justify-content: center

    .Control
        margin: 0
</style>
