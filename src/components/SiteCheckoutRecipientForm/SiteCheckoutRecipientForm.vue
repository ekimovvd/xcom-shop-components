<template>
    <form class="site-checkout-recipient__form">
        <div class="site-checkout-recipient__inputs">
            <div class="site-checkout-recipient__inputs-row">
                <div class="site-checkout-recipient__input">
                    <label for="name" class="site-checkout-recipient__input-label">Имя</label>
                    <input id="name" type="text" class="site-checkout-recipient__input-field" placeholder="Введите имя">
                </div>
                <div class="site-checkout-recipient__input">
                    <label for="surname" class="site-checkout-recipient__input-label">Фамилия</label>
                    <input id="surname" type="text" class="site-checkout-recipient__input-field" placeholder="Введите фамилию">
                </div>
            </div>
            <div class="site-checkout-recipient__inputs-row">
                <div class="site-checkout-recipient__input">
                    <label for="phone" class="site-checkout-recipient__input-label">Телефон</label>
                    <input id="phone" type="text" class="site-checkout-recipient__input-field" placeholder="+7 (">
                </div>
                <div class="site-checkout-recipient__input">
                    <label for="email" class="site-checkout-recipient__input-label">E-mail</label>
                    <input id="email" type="text" class="site-checkout-recipient__input-field" placeholder="Введите e-mail">
                </div>
            </div>
            <div class="site-checkout-recipient__legalEntity" v-if="isLegalEntity">
                <div class="site-checkout-recipient__inputs-row">
                    <div class="site-checkout-recipient__input">
                        <label
                            for="nameOrInnCompany"
                            class="site-checkout-recipient__input-label site-checkout-recipient__input-label--hidden"
                        >
                            Название или ИНН компании
                        </label>
                        <input
                            id="nameOrInnCompany"
                            type="text"
                            class="site-checkout-recipient__input-field"
                            placeholder="Название или ИНН компании"
                        >
                        <img
                            class="site-checkout-recipient__input-icon"
                            src="@/assets/images/header/search.svg"
                            alt="search"
                        />
                    </div>
                </div>
                <div class="site-checkout-recipient__inputs-row">
                    <div class="site-checkout-recipient__input">
                        <label for="companyName" class="site-checkout-recipient__input-label">Название</label>
                        <input
                            id="companyName"
                            disabled
                            type="text"
                            class="site-checkout-recipient__input-field"
                            placeholder="Название"
                        >
                    </div>
                </div>
                <div class="site-checkout-recipient__inputs-row">
                    <div class="site-checkout-recipient__input">
                        <label for="inn" class="site-checkout-recipient__input-label">ИНН</label>
                        <input
                            id="inn"
                            disabled
                            type="text"
                            class="site-checkout-recipient__input-field"
                            placeholder="ИНН"
                        >
                    </div>
                    <div class="site-checkout-recipient__input">
                        <label for="kpp" class="site-checkout-recipient__input-label">КПП</label>
                        <input id="kpp" type="text" class="site-checkout-recipient__input-field" placeholder="КПП">
                    </div>
                </div>
                <div class="site-checkout-recipient__inputs-row">
                    <div class="site-checkout-recipient__input">
                        <label for="address" class="site-checkout-recipient__input-label">Адрес</label>
                        <input
                            id="address"
                            disabled
                            type="text"
                            class="site-checkout-recipient__input-field"
                            placeholder="Адрес"
                        >
                    </div>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: "SiteCheckoutRecipientForm",
    props: {
        isLegalEntity: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
}
</script>

<style lang="sass">
.site-checkout-recipient__form
    margin-bottom: 24px
    .site-checkout-recipient__inputs
        display: flex
        flex-direction: column
        grid-gap: 24px
    .site-checkout-recipient__legalEntity
        display: flex
        flex-direction: column
        grid-gap: 24px
    .site-checkout-recipient__inputs-row
        display: flex
        grid-gap: 24px
    .site-checkout-recipient__input
        display: flex
        flex-direction: column
        grid-row-gap: 4px
        flex: 1
        position: relative
    .site-checkout-recipient__input-label
        font-weight: 500
        font-size: 12px
        color: $grays-gray-400
        &--hidden
            display: none
    .site-checkout-recipient__input-field
        width: 100%
        background: $white
        border-radius: 8px
        padding: 12px 46px 12px 16px
        border: 1px solid $grays-gray-200
        outline: none
        font-family: 'Manrope', sans-serif
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-300

        &:disabled
            background: $grays-gray-100
            border-color: $grays-gray-100

        &::placeholder
            color: $grays-gray-300
    .site-checkout-recipient__input-icon
        position: absolute
        top: 50%
        right: 16px
        transform: translateY(-50%)
@media screen and (max-width: 768px)
    .site-checkout-recipient
        .site-checkout-recipient__inputs-row
            flex-direction: column
</style>