<template>
    <div class="site-delivery-card">
        <img
            class="site-delivery-card__img"
            src="@/assets/images/delivery-card/delivery.svg"
            alt="delivery"
        />
        <div class="site-delivery-card__info">
            <h6 class="site-delivery-card__title">
                Ближайшая доставка в пункт выдачи
            </h6>
            <p class="site-delivery-card__label">
                Заказ № 45135615-0101:
                <span class="site-delivery-card__date">
                    {{ delivery.date }}
                </span>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteDeliveryCard",
    props: {
        delivery: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="sass">
.site-delivery-card
    background: $grays-gray-100
    border-radius: 24px
    padding: 24px 53px 24px 46px
    font-family: 'Manrope', sans-serif
    display: flex
    align-items: center
    grid-column-gap: 16px
    width: 481px

    .site-delivery-card__img
        width: 84px
        height: 84px

    .site-delivery-card__info
        display: flex
        flex-direction: column
        grid-row-gap: 8px

    .site-delivery-card__title
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-delivery-card__label
        font-weight: 400
        font-size: 16px
        line-height: 22px
        color: $grays-gray-400

    .site-delivery-card__date
        color: $secondary-blue-200

@media screen and (max-width: 1440px)
    .site-delivery-card
        width: 468px
        padding-right: 40px
</style>
