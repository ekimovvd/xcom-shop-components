<template>
    <div class="site-checkout-add-bonus-points">
        <button
            class="site-checkout-add-bonus-points__button"
            @click="onCollapse"
        >
        <span class="site-checkout-add-bonus-points__text">
            Начислим {{ bonusPoints }} бонусных баллов
        </span>
            <img
                class="site-checkout-add-bonus-points__img"
                :class="getCollapsingClass"
                src="@/assets/images/checkout/chevron-down.svg"
                alt="chevron"
            />
        </button>
        <div v-if="isCollapsed" class="site-checkout-add-bonus-points__content">
            <p>Контент</p>
        </div>
    </div>
</template>

<script>
import {computed, ref} from "vue";

export default {
    name: "SiteCheckoutAddBonusPoints",
    props: {
        bonusPoints: {
            type: Number,
            default: 0,
        },
    },
    setup() {
        const isCollapsed = ref(false);

        const onCollapse = () => {
            isCollapsed.value = !isCollapsed.value;
        };

        const getCollapsingClass = computed(() => {
            return isCollapsed.value ? "site-checkout-add-bonus-points__img--collapsed" : "";
        });

        return {
            isCollapsed,
            onCollapse,
            getCollapsingClass,
        };
    },
}
</script>

<style lang="sass">
.site-checkout-add-bonus-points
    font-family: "Manrope", sans-serif
    background: white
    padding: 16px 28px
    border-radius: 20px
    box-shadow: $small-down

    .site-checkout-add-bonus-points__button
        font-family: "Manrope", sans-serif
        border: none
        cursor: pointer
        background: none
        width: 100%
        display: flex
        justify-content: space-between
        align-items: center
        font-weight: 600
        color: $new-black
        padding: 0

    .site-checkout-add-bonus-points__text
        font-size: 20px
        line-height: 32px

    .site-checkout-add-bonus-points__img
        &--collapsed
            transform: rotate(180deg)

@media screen and (max-width: 1440px)
    .site-checkout-add-bonus-points
        .site-checkout-add-bonus-points__text
            font-size: 16px
            line-height: 20px

@media screen and (max-width: 768px)
    .site-checkout-add-bonus-points
        .site-checkout-add-bonus-points__text
            font-size: 14px
            line-height: 18px
</style>