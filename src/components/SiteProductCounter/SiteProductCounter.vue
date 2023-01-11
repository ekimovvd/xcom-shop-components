<template>
    <div
        class="site-product-counter"
        :class="getErrorClass"
    >
        <button
            class="site-product-counter__button site-product-counter__button--decrease"
            @click="onDecreaseCount"
        />
        <input type="text" class="site-product-counter__input" v-model="productCount">
        <button
            class="site-product-counter__button site-product-counter__button--increase"
            @click="onIncreaseCount"
        />
    </div>
</template>

<script>
import {ref, computed, toRefs} from "vue";

export default {
    name: "SiteProductCounter",
    props: {
        isError: {
            type: Boolean,
            default: false,
        },
    },
    setup(props) {
        const { isError } = toRefs(props);
        const productCount = ref(0);

        const onDecreaseCount = () => {
            productCount.value--;
        };

        const onIncreaseCount = () => {
            productCount.value++;
        };

        const getErrorClass = computed(() => {
            return isError.value ? "site-product-counter--error" : "";
        });

        return {
            productCount,
            onDecreaseCount,
            onIncreaseCount,
            getErrorClass,
        };
    },
}
</script>

<style lang="sass">
.site-product-counter
    display: flex
    align-items: center
    border-radius: 8px
    border: 1px solid $grays-gray-200
    width: 90px

    .site-product-counter__button
        border: none
        background: none
        position: relative
        padding: 15px
        cursor: pointer
        &::before
            content: ""
            position: absolute
            top: calc(50% - 1px)
            left: calc(50% - 5px)
            width: 12px
            height: 2px
            border-radius: 24px
            background-color: $grays-gray-300

        &--increase
            &::after
                content: ""
                position: absolute
                left: 50%
                top: calc(50% - 6px)
                width: 2px
                height: 12px
                border-radius: 24px
                background-color: $grays-gray-300

    .site-product-counter__input
        width: 100%
        height: 100%
        border: none
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $main-black
        text-align: center
        outline: none
        font-family: "Manrope", sans-serif

    &--error
        border-color: $other-red-200-main
        & .site-product-counter__button
            &::before,
            &::after
                background-color: $other-red-200-main

        & .site-product-counter__input
            color: $other-red-200-main
</style>