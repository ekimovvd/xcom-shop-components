<template>
    <div class="site-checkout-recipient">
        <div class="site-checkout-recipient__wrapper">
            <h4 class="site-checkout-recipient__title">Данные получателя</h4>
            <div class="site-checkout-recipient__bonus">
                <p class="site-checkout-recipient__bonus-text">
                    Войдите в личный кабинет чтобы получить 1 363 бонуса xcom.
                    На основании введенных данных вы будете автоматически зарегистрированы в нашем магазине.
                </p>
                <button
                    class="site-checkout-recipient__bonus-button"
                >
                    войти
                </button>
            </div>
            <SiteCheckoutRecipientForm
                :isLegalEntity="isLegalEntity"
            />
            <div class="site-checkout-recipient__buy">
                <button
                    class="site-checkout-recipient__buy-button"
                    @click="onToggle"
                >
                    Купить как {{ renderIndividualOrLegalEntity }}
                </button>
                <button class="site-checkout-recipient__buy-hint">
                    <img
                        class="site-checkout-recipient__buy-icon"
                        src="@/assets/images/checkout/hint-gray.svg"
                        alt="hint-gray"
                    />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from "vue";
import SiteCheckoutRecipientForm from "@/components/SiteCheckoutRecipientForm/SiteCheckoutRecipientForm.vue";

export default {
    name: "SiteCheckoutRecipient",
    components: { SiteCheckoutRecipientForm },
    setup() {
        const isLegalEntity = ref(false);

        const onToggle = () => {
            isLegalEntity.value = !isLegalEntity.value;
        };

        const renderIndividualOrLegalEntity = computed(() => {
           return isLegalEntity.value ? "физлицо" : "юрлицо";
        });

        return {
            isLegalEntity,
            renderIndividualOrLegalEntity,
            onToggle,
        }
    }
}
</script>

<style lang="sass">
.site-checkout-recipient

    .site-checkout-recipient__title
        font-weight: 700
        font-size: 20px
        line-height: 24px
        color: $new-black
        margin-bottom: 24px
        margin-top: 0

    .site-checkout-recipient__bonus
        display: flex
        grid-column-gap: 14px
        justify-content: space-between
        align-items: center
        margin-bottom: 24px

    .site-checkout-recipient__bonus-text
        font-weight: 400
        font-size: 12px
        color: $new-black

    .site-checkout-recipient__bonus-button
        display: flex
        align-items: center
        justify-content: center
        cursor: pointer
        background: none
        padding: 4px 8px
        border: 1px solid $main-blue
        border-radius: 8px
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-blue
        grid-column-gap: 8px

    .site-checkout-recipient__buy
        display: flex
        grid-gap: 14px
        justify-content: space-between
        align-items: center

    .site-checkout-recipient__buy-button
        padding: 13px 32px
        display: flex
        align-items: center
        justify-content: center
        border: 1px solid $main-blue
        background: none
        border-radius: 8px
        outline: none
        cursor: pointer
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-blue

    .site-checkout-recipient__buy-hint
        background: none
        outline: none
        cursor: pointer
        border: none
        padding: 0

    .site-checkout-recipient__buy-icon
        display: block
</style>