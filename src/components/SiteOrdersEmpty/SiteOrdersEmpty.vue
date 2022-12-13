<template>
    <div class="site-orders-empty">
        <div class="site-orders-empty__wrapper">
            <img
                class="site-orders-empty__img"
                src="@/assets/images/orders-empty/cart.png"
                alt="img"
            />
            <h2 class="site-orders-empty__title">
                У вас пока нет активных заказов
            </h2>
            <a class="site-orders-empty__link" href="#">В каталог</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteOrdersEmpty",
};
</script>

<style lang="sass">
.site-orders-empty
    display: flex
    align-items: center
    justify-content: center

    .site-orders-empty__wrapper
        display: flex
        flex-direction: column
        align-items: center
        grid-row-gap: 32px

    .site-orders-empty__img
        width: 200px
        height: 200px

    .site-orders-empty__title
        text-align: center
        font-family: 'Manrope', sans-serif
        font-weight: 700
        font-size: 32px
        line-height: 40px
        color: #070707

    .site-orders-empty__link
        padding: 13px 32px
        background: $main-blue
        border-radius: 8px
        border: none
        outline: none
        cursor: pointer
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-white
        width: 139px
        display: flex
        align-items: center
        justify-content: center

@media screen and (max-width: 1024px)
    .site-orders-empty
        .site-orders-empty__title
            font-size: 28px
            line-height: 36px

@media screen and (max-width: 1024px)
    .site-orders-empty
        .site-orders-empty__title
            font-size: 24px
            line-height: 32px
</style>
