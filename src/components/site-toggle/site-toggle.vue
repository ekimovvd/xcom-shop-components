<template>
    <div class="site-toggle">
        <div class="site-toggle__container">
            <h2 class="site-toggle__title">{{ title }}</h2>
            <button class="site-toggle__button" @click="onToggle">
                <img
                    class="site-toggle__button-svg"
                    :class="getToggleSvgClass"
                    src="@/assets/images/toggle/chevron-up.svg"
                    alt="chevron"
                />
            </button>
        </div>
    </div>
</template>

<script>
import { computed, toRefs } from "vue";

export default {
    name: "site-toggle",
    props: {
        title: {
            type: String,
            default: "",
        },
        isHidden: {
            type: Boolean,
            default: false,
        },
    },
    emits: ["toggle"],
    setup(props, { emit }) {
        const { isHidden } = toRefs(props);

        const getToggleSvgClass = computed(() => {
            return isHidden.value ? "site-toggle__button-svg--hidden" : "";
        });

        const onToggle = () => {
            emit("toggle");
        };

        return {
            isHidden,
            getToggleSvgClass,
            onToggle,
        };
    },
};
</script>

<style lang="sass">
.site-toggle
    .site-toggle__container
        @include container
        display: flex
        align-items: center
        justify-content: space-between
        font-family: 'Manrope', sans-serif

    .site-toggle__title
        font-weight: 700
        font-size: 40px
        line-height: 48px
        color: $main-black

    .site-toggle__button
        background: $grays-gray-100
        border: none
        outline: none
        padding: 0
        cursor: pointer
        width: 32px
        height: 32px
        border-radius: 50%
        display: flex
        align-items: center
        justify-content: center

    .site-toggle__button-svg
        &.site-toggle__button-svg--hidden
            transform: rotate(-180deg)
</style>
