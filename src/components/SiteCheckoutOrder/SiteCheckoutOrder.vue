<template>
    <div class="site-checkout-order">
        <div class="site-checkout-order__wrapper">
            <div class="site-checkout-order__header">
                <h4 class="site-checkout-order__title">Ваш заказ</h4>
                <span class="site-checkout-order__count">{{ getProductQuantity }} {{ getDeclineItems }}</span>
            </div>
            <div class="site-checkout-order__products-block">
                <SiteCheckoutOrderProducts
                    :productList="orderInfo.productList"
                />
            </div>
            <ul class="site-checkout-order__options">
                <li class="site-checkout-order__option site-checkout-order__option--mobile">
                    <div class="site-checkout-order__option__content">
                        <div class="site-checkout-order__option__content-part">
                            <span class="site-checkout-order__option__label">Товары ({{ getProductQuantity }})</span>
                        </div>
                        <div class="site-checkout-order__option__content-part">
                            <span class="site-checkout-order__option__cost">94 888 ₽</span>
                        </div>
                    </div>
                </li>
                <li class="site-checkout-order__option">
                    <div class="site-checkout-order__option__content">
                        <div class="site-checkout-order__option__content-part">
                            <span class="site-checkout-order__option__label">Скидка</span>
                            <a href="#" class="site-checkout-order__option__link">Подробнее</a>
                        </div>
                        <div class="site-checkout-order__option__content-part">
                            <span class="site-checkout-order__option__cost site-checkout-order__option__cost--decrease">- 599 ₽</span>
                        </div>
                    </div>
                </li>
                <li class="site-checkout-order__option">
                    <div class="site-checkout-order__option__content">
                        <div class="site-checkout-order__option__content-part">
                            <span class="site-checkout-order__option__label">Доставка</span>
                        </div>
                        <div class="site-checkout-order__option__content-part">
                            <span class="site-checkout-order__option__cost">390 ₽</span>
                        </div>
                    </div>
                </li>
                <li class="site-checkout-order__option">
                    <div class="site-checkout-order__option__content">
                        <span class="site-checkout-order__option__label">Оплата бонусами Xcom</span>
                        <p class="site-checkout-order__option__bonus">
                            <a href="#" class="site-checkout-order__option__bonus-link">Войдите</a>
                            в личный кабинет, чтобы оплатить заказ бонусами
                        </p>
                    </div>
                </li>
                <li class="site-checkout-order__option">
                    <div class="site-checkout-order__option__content">
                        <div class="site-checkout-order__promo-code">
                            <span class="site-checkout-order__option__label">Ввести промокод</span>
                            <div class="site-checkout-order__promo-code__input-block">
                                <div class="site-checkout-order__option__input">
                                    <input
                                        type="text"
                                        class="site-checkout-order__option__input-field"
                                        placeholder="Введите промокод"
                                    >
                                    <img
                                        class="site-checkout-order__promo-code__check-icon"
                                        src="@/assets/images/checkout/promo-code-check.svg"
                                        alt="search"
                                    />
                                </div>
                                <div class="site-checkout-order__promo-code__helpers">
                                    <span class="site-checkout-order__promo-code__error">Промокод отсутствует в системе</span>
                                    <button class="site-checkout-order__promo-code__cancel">Отменить промокод</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="site-checkout-order__total">
                <div class="site-checkout-order__total__content">
                    <span class="site-checkout-order__total__label">Итого</span>
                    <div class="site-checkout-order__total__cost-block">
                        <span class="site-checkout-order__total__cost-label site-checkout-order__total__cost-label--old">94 548 ₽</span>
                        <span class="site-checkout-order__total__cost-label">94 548 ₽</span>
                    </div>
                </div>
                <button class="site-checkout-order__total__button">Оплатить онлайн</button>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, toRefs } from "vue";
import { onDecline } from "@/utils/functions";
import SiteCheckoutOrderProducts from "@/components/SiteCheckoutOrderProducts/SiteCheckoutOrderProducts.vue";

export default {
    name: "SiteCheckoutOrder",
    components: {SiteCheckoutOrderProducts},
    props: {
        orderInfo: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { orderInfo } = toRefs(props);

        const getDeclineItems = computed(() => {
            return onDecline(["товар", "", "а", "ов"])(orderInfo.value.productList.length);
        });

        const getProductQuantity = computed(() => {
            return orderInfo.value.productList.length;
        });

        return {
            getDeclineItems,
            getProductQuantity,
        };
    },
}
</script>

<style lang="sass">
.site-checkout-order

    .site-checkout-order__header
        display: flex
        grid-gap: 16px
        align-items: center
        margin-bottom: 24px
        justify-content: space-between

    .site-checkout-order__title
        font-weight: 700
        font-size: 20px
        line-height: 24px
        color: $new-black
        margin: 0

    .site-checkout-order__count
        font-size: 12px
        color: $new-gray-400

    .site-checkout-order__options
        list-style: none
        padding: 0
        display: flex
        flex-direction: column
        grid-row-gap: 20px

    .site-checkout-order__option
        &--mobile
            display: none
        &:not(:last-child)
            border-bottom: 1px solid $new-gray-200
            padding-bottom: 10px

    .site-checkout-order__option__content
        display: flex
        justify-content: space-between
        flex-wrap: wrap
        align-items: center
        grid-row-gap: 16px
        &-part
            display: flex
            flex-direction: column

    .site-checkout-order__promo-code
        display: flex
        justify-content: space-between
        flex-wrap: wrap
        grid-row-gap: 16px
        flex-direction: column
        width: 100%
    .site-checkout-order__promo-code__helpers
        display: flex
        flex-direction: column
        align-items: flex-start

    .site-checkout-order__promo-code__input-block
        display: flex
        flex-direction: column
        grid-row-gap: 5px

    .site-checkout-order__option-label
        color: $new-black

    .site-checkout-order__option__cost
        font-weight: 700
        font-size: 16px
        line-height: 20px
        &--decrease
            color: $other-red-400-main

    .site-checkout-order__option__link
        font-weight: 500
        font-size: 12px
        line-height: 20px
        color: $new-blue
        text-decoration: none

    .site-checkout-order__option__bonus
        margin: 0
        color: $new-black

    .site-checkout-order__option__bonus-link
        font-weight: 500
        font-size: 16px
        line-height: 20px
        text-decoration: none
        color: $new-blue

    .site-checkout-order__option__input
        width: 100%
        position: relative

    .site-checkout-order__option__input-field
        width: 100%
        background: $white
        border-radius: 8px
        padding: 12px 46px 12px 16px
        border: 1px solid $grays-gray-200
        outline: none
        font-family: "Manrope", sans-serif
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $main-black
        &--error
            border-color: $other-red-200-main

    .site-checkout-order__promo-code__check-icon
        position: absolute
        top: 50%
        right: 16px
        transform: translateY(-50%)

    .site-checkout-order__promo-code__error
        display: block
        font-weight: 400
        font-size: 10px
        line-height: 14px
        color: $other-red-200-main

    .site-checkout-order__promo-code__cancel
        color: $new-blue
        text-decoration: none
        border: none
        background: none
        padding: 0
        font-family: "Manrope", sans-serif
        cursor: pointer
        font-weight: 400
        font-size: 10px
        line-height: 14px

    .site-checkout-order__total__content
        display: flex
        justify-content: space-between
        margin-bottom: 20px
        margin-top: 26px

    .site-checkout-order__total__label
        font-weight: 700
        font-size: 20px
        line-height: 20px

    .site-checkout-order__total__cost-block
        display: flex
        grid-gap: 10px

    .site-checkout-order__total__cost-label
        font-weight: 700
        font-size: 20px
        line-height: 24px
        &--old
            color: $grays-gray-400
            text-decoration: line-through
            text-decoration-thickness: 1px

    .site-checkout-order__total__button
        width: 100%
        padding: 17px 32px
        background: $new-blue
        border-radius: 8px
        border: none
        outline: none
        cursor: pointer
        font-family: "Manrope", sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $white


@media screen and (max-width: 1440px)
    .site-checkout-order
        .site-checkout-order__total__cost-block
            flex-direction: column-reverse

@media screen and (max-width: 1024px)
    .site-checkout-order

        .site-checkout-order__header
            justify-content: center

        .site-checkout-order__option
            &--mobile
                display: block

        .site-checkout-order__count
            display: none

    .site-checkout-order__products-block
        display: none
</style>