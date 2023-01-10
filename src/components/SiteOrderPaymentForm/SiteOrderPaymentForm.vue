<template>
    <form class="site-order-payment__form">
        <div class="site-order-payment__form__wrapper">
            <div class="site-order-payment__inputs">
                <div class="site-order-payment__inputs-row">
                    <div class="site-order-payment__input site-order-payment__input--custom">
                        <label for="cardNumber" class="site-order-payment__input-label">Номер карты</label>
                        <input id="cardNumber" type="text" class="site-order-payment__input-field" placeholder="XXXX XXXX XXXX XXXX">
                    </div>
                    <div class="site-order-payment__input">
                        <label for="validityPeriod" class="site-order-payment__input-label">Срок действия</label>
                        <input id="validityPeriod" type="text" class="site-order-payment__input-field" placeholder="ММ/ГГ">
                    </div>
                </div>
                <div class="site-order-payment__inputs-row site-order-payment__inputs-row--custom">
                    <div class="site-order-payment__cvv-wrapper">
                        <p class="site-order-payment__cvv-value">Последние 3 цифры на обороте карты</p>
                    </div>
                    <div class="site-order-payment__input">
                        <label for="cvv" class="site-order-payment__input-label">CVV</label>
                        <input id="cvv" type="text" class="site-order-payment__input-field" placeholder="XXX">
                    </div>
                </div>
                <div class="site-order-payment__inputs-row">
                    <div class="site-order-payment__input">
                        <label for="cardHolder" class="site-order-payment__input-label">Владелец карты</label>
                        <input id="cardHolder" type="text" class="site-order-payment__input-field" placeholder="">
                    </div>
                </div>
            </div>
        </div>
        <button
            class="site-order-payment__pay-button"
            :disabled="true"
        >
            Оплатить {{ totalCost }} ₽
        </button>
    </form>
</template>

<script>
export default {
    name: "SiteOrderPaymentForm",
    props: {
        totalCost: {
            type: String,
        }
    },
}
</script>

<style lang="sass">
.site-order-payment__form
    .site-order-payment__form__wrapper
        padding: 32px
        background: $white
        box-shadow: $small-down
        border-radius: 20px
        margin-bottom: 32px

    .site-order-payment__inputs
        display: flex
        flex-direction: column
        grid-gap: 24px

    .site-order-payment__inputs-row
        display: flex
        grid-gap: 24px
        &--custom
            align-items: center

    .site-order-payment__input
        display: flex
        flex-direction: column
        grid-row-gap: 4px
        flex: 1
        position: relative
        &--custom
            flex: 2

    .site-order-payment__input-label
        font-weight: 500
        font-size: 12px
        color: $grays-gray-400

    .site-order-payment__input-field
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
        color: $grays-gray-300
        &:disabled
            background: $grays-gray-100
            border-color: $grays-gray-100

        &::placeholder
            color: $grays-gray-300


    .site-order-payment__cvv-wrapper
        flex: 2
        display: flex
        justify-content: flex-end

    .site-order-payment__cvv-value
        font-weight: 400
        font-size: 12px
        line-height: 16px
        margin: 0
        text-align: right
        max-width: 150px
        color: $grays-gray-300

    .site-order-payment__pay-button
        width: 100%
        padding: 17px 32px
        background: $main-blue
        border-radius: 8px
        border: none
        outline: none
        cursor: pointer
        font-family: "Manrope", sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $white
        &:disabled
            background-color: $grays-gray-300
            cursor: not-allowed

@media screen and (max-width: 768px)
    .site-order-payment__form

        .site-order-payment__form__wrapper
            box-shadow: none
            border-radius: 0
            padding: 0

        .site-order-payment__inputs-row
            flex-direction: column

        .site-order-payment__inputs-row
            &--custom
                flex-direction: row-reverse
                align-items: flex-end

        .site-order-payment__cvv-wrapper
            flex: 1

        .site-order-payment__cvv-value
            text-align: left
</style>