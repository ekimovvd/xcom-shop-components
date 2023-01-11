<template>
    <div class="site-checkout-header">
        <div class="site-checkout-header__group">
            <a href="#" class="site-checkout-header__link">
                <img
                    class="site-checkout-header__arrow"
                    src="@/assets/images/checkout/arrow-left.svg"
                    alt="arrow-left"
                />
            </a>
            <h2 class="site-checkout-header__title">Оформление заказа</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteCheckoutHeader"
}
</script>

<style lang="sass">
.site-checkout-header
    display: flex
    align-items: center
    justify-content: space-between
    font-family: 'Manrope', sans-serif

    .site-checkout-header__group
        display: flex
        align-items: center
        grid-column-gap: 12px

    .site-checkout-header__link
        text-decoration: none
        display: flex
        align-items: center
        justify-content: center

    .site-checkout-header__title
        font-weight: 700
        font-size: 32px
        line-height: 40px
        color: #070707
@media screen and (max-width: 1024px)
    .site-checkout-header
        .site-checkout-header__title
            font-size: 28px
            line-height: 36px

@media screen and (max-width: 768px)
    .site-checkout-header
        .site-checkout-header__title
            font-size: 24px
            line-height: 32px
</style>