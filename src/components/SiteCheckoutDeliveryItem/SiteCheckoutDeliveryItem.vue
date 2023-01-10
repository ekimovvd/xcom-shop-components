<template>
    <li class="site-checkout-delivery-item">
        <a
            href="#"
            class="site-checkout-delivery-item__content"
            :class="getActiveDeliveryMethodClass"
            @click.prevent="onSelectingDeliveryMethod(deliveryItem)"
        >
            <img
                class="site-checkout-delivery-item__icon"
                :src="getDeliveryIcon"
                :alt="deliveryItem.type"
            />
            <div class="site-checkout-delivery-item__text">
                <h4 class="site-checkout-delivery-item__title">{{ deliveryItem.title }}</h4>
                <div class="site-checkout-delivery-item__info">
                    <span class="site-checkout-delivery-item__date">С {{ deliveryItem.date }}</span>
                    <span class="site-checkout-delivery-item__cost">{{ deliveryItem.cost }}</span>
                </div>
            </div>
        </a>
    </li>
</template>

<script>
import { computed, toRefs } from "vue";

export default {
    name: "SiteCheckoutDeliveryItem",
    props: {
        deliveryItem: {
            type: Object,
            required: true,
        },
        isSelectedDeliveryMethod: {
            type: Boolean,
            default: false,
        },
    },
    emits: ["selectingDeliveryMethod"],
    setup(props, { emit }) {
        const { deliveryItem, isSelectedDeliveryMethod } = toRefs(props);

        const getDeliveryIcon = computed(() => {
            return require(`@/assets/images/checkout/${deliveryItem.value.icon}`);
        });

        const onSelectingDeliveryMethod = (deliveryMethod) => {
            emit("selectingDeliveryMethod", deliveryMethod);
        };

        const getActiveDeliveryMethodClass = computed(() => {
            return isSelectedDeliveryMethod.value ? "site-checkout-delivery-item__content--active" : "";
        });

        return {
            getDeliveryIcon,
            onSelectingDeliveryMethod,
            getActiveDeliveryMethodClass,
        };
    },
}
</script>

<style lang="sass">
.site-checkout-delivery-item
    flex-grow: 1
    border-radius: 16px
    max-width: 215px

    .site-checkout-delivery-item__content
        display: flex
        align-items: flex-start
        grid-column-gap: 16px
        padding: 24px 16px
        border-radius: 16px
        border: 1px solid $grays-gray-200
        text-decoration: none
        color: $new-black
        &--active
            border-color: $main-blue

    .site-checkout-delivery-item__text
        display: flex
        flex-direction: column
        grid-row-gap: 10px

    .site-checkout-delivery-item__title
        margin: 0

    .site-checkout-delivery-item__info
        display: flex
        justify-content: space-between
        grid-column-gap: 10px

    .site-checkout-delivery-item__date
        font-size: 12px
        font-weight: 400
        color: $grays-gray-300

    .site-checkout-delivery-item__cost
        font-size: 12px
        font-weight: 500
        color: $grays-gray-300

@media screen and (max-width: 1024px)
    .site-checkout-delivery-item
        max-width: 260px
</style>