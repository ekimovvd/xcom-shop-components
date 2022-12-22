<template>
    <div class="site-tile-service">
        <div class="site-tile-service__header">
            <h5 class="site-tile-service__title">
                {{ service.name }}
            </h5>
            <button class="site-tile-service__info">
                <img
                    class="site-tile-service__info-icon"
                    src="@/assets/images/tile-service/info.svg"
                    alt="icon"
                />
            </button>
        </div>
        <div class="site-tile-service__variants">
            <button
                class="site-tile-service__variant"
                v-for="variant in service.variants"
                :key="variant.id"
                @click="onVariant(variant)"
            >
                {{ variant.label }}
            </button>
        </div>
        <div class="site-tile-service__footer">
            <p class="site-tile-service__amount">{{ getAmount }} ₽</p>
            <button class="site-tile-service__add" @click="onAdd">
                <img
                    class="site-tile-service__add-icon"
                    src="@/assets/images/tile-service/plus.svg"
                    alt="icon"
                />
            </button>
        </div>
    </div>
</template>

<script>
import { computed, toRefs } from "vue";

import { onNumberWithSpaces } from "@/utils/functions.js";

export default {
    name: "SiteTileService",
    props: {
        service: {
            type: Object,
            required: true,
        },
    },
    emits: ["variant", "add"],
    setup(props, { emit }) {
        const { service } = toRefs(props);

        const getAmount = computed(() => {
            return onNumberWithSpaces(service.value.amount);
        });

        const onVariant = (variant) => {
            emit("variant", variant);
        };

        const onAdd = () => {
            emit("add", service.value);
        };

        return {
            getAmount,
            onVariant,
            onAdd,
        };
    },
};
</script>

<style lang="sass">
.site-tile-service
    padding: 24px 31px 32px 24px
    border: 1px solid #E3E7F1
    border-radius: 24px
    font-family: 'Manrope', sans-serif
    min-height: 196px
    display: flex
    flex-direction: column

    .site-tile-service__header
        display: flex
        align-items: center
        grid-column-gap: 4px

    .site-tile-service__title
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-tile-service__info
        background: none
        outline: none
        padding: 0
        cursor: pointer
        border: none

    .site-tile-service__variants
        display: grid
        grid-template-columns: repeat(3, 55px)
        grid-gap: 8px
        margin-top: 18px

    .site-tile-service__variant
        padding: 8px 0
        background: $main-white
        border: 1px solid $secondary-blue-100
        border-radius: 8px
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $main-blue
        cursor: pointer
        width: 55px

    .site-tile-service__footer
        display: flex
        align-items: center
        justify-content: space-between
        margin-top: auto

    .site-tile-service__amount
        font-weight: 500
        font-size: 20px
        line-height: 26px
        color: $main-black

    .site-tile-service__add
        width: 32px
        height: 32px
        background: $main-blue
        border-radius: 50%
        border: none
        outline: none
        cursor: pointer
        padding: 0
        display: flex
        align-items: center
        justify-content: center

@media screen and (max-width: 1440px)
    .site-tile-service
        padding: 24px 17px 24px 24px
        min-height: 170px

        .site-tile-service__title
            font-size: 14px
            line-height: 18px

        .site-tile-service__variants
            margin-top: 16px

        .site-tile-service__amount
            font-size: 18px
            line-height: 24px
</style>
