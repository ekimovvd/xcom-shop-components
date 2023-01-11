<template>
    <div class="site-checkout-delivery">
        <div class="site-checkout-delivery__wrapper">
            <div class="site-checkout-delivery__header">
                <h4 class="site-checkout-delivery__title">Способ доставки</h4>
                <div class="site-checkout-delivery__dimensions">
                    <ul class="site-checkout-delivery__dimensions-list">
                        <li class="site-checkout-delivery__dimensions-item">{{ deliveryInfo.count }} {{ getDeclineItems }}</li>
                        <li class="site-checkout-delivery__dimensions-item">{{ deliveryInfo.weight }} кг</li>
                        <li class="site-checkout-delivery__dimensions-item">
                            {{ deliveryInfo.width }}*{{ deliveryInfo.height }}*{{deliveryInfo.depth}} см (Ш*В*Г)
                        </li>
                    </ul>
                </div>
            </div>
            <div class="site-checkout-delivery__methods">
                <ul class="site-checkout-delivery__methods-list">
                    <SiteCheckoutDeliveryItem
                        v-for="deliveryItem in deliveryMethods"
                        :key="deliveryItem.id"
                        :deliveryItem="deliveryItem"
                        @selectingDeliveryMethod="onSelectingDeliveryMethod"
                        :isSelectedDeliveryMethod="isSelectedDeliveryMethod(deliveryItem)"
                    />
                </ul>
            </div>
            <div class="site-checkout-delivery__courier" v-if="isDeliveryByCourier">
                <div class="site-checkout-delivery__courier-address">
                    <label for="address" class="site-checkout-delivery__courier__input-label">Адрес доставки</label>
                    <input id="address" type="text" placeholder="Введите адрес доставки" class="site-checkout-delivery__courier__input-field">
                    <span class="site-checkout-delivery__courier__help">Просьба указать полный адрес (Город, Улица, Дом, Квартира)</span>
                </div>
                <div class="site-checkout-delivery__courier-date">
                    <div class="site-checkout-delivery__courier-date__wrapper">
                        <p>
                            <span class="site-checkout-delivery__courier__date-title">
                                Дата доставки
                            </span>
                            <span class="site-checkout-delivery__courier__date-value">
                                31.12.22
                            </span>
                        </p>
                        <button class="site-checkout-delivery__address__date-change">Изменить</button>
                    </div>
                    <div class="site-checkout-delivery__courier-cost">
                        <span class="site-checkout-delivery__courier-cost__value">
                            390 ₽
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SiteCheckoutDeliveryItem from "@/components/SiteCheckoutDeliveryItem/SiteCheckoutDeliveryItem.vue";
import { computed, toRefs, ref } from "vue";
import { onDecline } from "@/utils/functions";

export default {
    name: "SiteCheckoutDelivery",
    components: {SiteCheckoutDeliveryItem},
    props: {
        deliveryInfo: {
            type: Object,
            required: true,
        },
        deliveryMethods: {
            type: Array,
            default: () => [],
        },
    },
    emits: ["selectDeliveryMethod"],
    setup(props, { emit }) {
        const { deliveryInfo } = toRefs(props);
        const selectingDeliveryMethodType = ref("");
        const selectingDeliveryMethodId = ref("");

        const getDeclineItems = computed(() => {
            return onDecline(["товар", "", "а", "ов"])(deliveryInfo.value.count);
        });

        const onSelectingDeliveryMethod = (deliveryMethod) => {
            selectingDeliveryMethodType.value = deliveryMethod.type;
            selectingDeliveryMethodId.value = deliveryMethod.id;
            emit("selectDeliveryMethod", deliveryMethod);
        };

        const isDeliveryByCourier = computed(() => {
            return selectingDeliveryMethodType.value === "delivery";
        });

        const isSelectedDeliveryMethod = (deliveryMethod) => {
            return selectingDeliveryMethodId.value === deliveryMethod.id;
        };

        return {
            isSelectedDeliveryMethod,
            getDeclineItems,
            onSelectingDeliveryMethod,
            isDeliveryByCourier,
        };
    },
}
</script>

<style lang="sass">
.site-checkout-delivery

    .site-checkout-delivery__header
        display: flex
        grid-gap: 16px
        align-items: center
        margin-bottom: 24px

    .site-checkout-delivery__title
        font-weight: 700
        font-size: 20px
        line-height: 24px
        color: $new-black
        margin: 0

    .site-checkout-delivery__dimensions-list
        display: flex
        list-style: none
        margin: 0
        padding: 0
        grid-column-gap: 1px

    .site-checkout-delivery__dimensions-item
        font-weight: 400
        font-size: 12px
        color: $grays-gray-350
        position: relative

        &:not(:last-child)::after
            content: ""
            width: 3px
            height: 3px
            display: inline-block
            border-radius: 50%
            background-color: $grays-gray-350
            margin: 2px 5px

    .site-checkout-delivery__methods
        margin-top: 24px

    .site-checkout-delivery__methods-list
        display: flex
        flex-wrap: wrap
        grid-gap: 24px
        list-style: none
        margin: 0
        padding: 0

    .site-checkout-delivery__courier
        margin-top: 24px

    .site-checkout-delivery__courier__input
        display: flex
        flex-direction: column
        grid-row-gap: 5px

    .site-checkout-delivery__courier__input-label
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $grays-gray-400

    .site-checkout-delivery__courier__input-field
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

    .site-checkout-delivery__courier__help
        font-weight: 400
        font-size: 10px
        line-height: 14px
        color: $grays-gray-400

    .site-checkout-delivery__courier-date
        display: flex
        justify-content: space-between
        margin-top: 24px

    .site-checkout-delivery__courier-date__wrapper
        display: flex
        grid-gap: 10px
        align-items: center
        & p
            margin: 0

    .site-checkout-delivery__courier__date-title
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-black
        margin-right: 8px

    .site-checkout-delivery__courier__date-value
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $grays-gray-400

    .site-checkout-delivery__address__date-change
        color: $main-blue
        text-decoration: none
        border: none
        background: none
        padding: 0
        font-family: "Manrope", sans-serif
        cursor: pointer
        font-weight: 500
        font-size: 16px
        line-height: 20px

    .site-checkout-delivery__courier-cost__value
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black


@media screen and (max-width: 1024px)
    .site-checkout-delivery

        .site-checkout-delivery__header
            flex-direction: column
            align-items: flex-start

        .site-checkout-delivery__dimensions-item
            &:not(:last-child)::after
                width: 2px
                height: 2px
                margin: 2px 2px

        .site-checkout-delivery__methods-item
            max-width: 260px

@media screen and (max-width: 1024px)
    .site-checkout-delivery
        .site-checkout-delivery__courier-date__wrapper
            flex-direction: column
            align-items: flex-start
            grid-row-gap: 8px
</style>