<template>
    <div class="site-checkout">
        <SiteCheckoutHeader/>
        <div class="site-checkout__plates">
            <div class="site-checkout__steps">
                <SiteCheckoutOrderProducts
                    v-if="isProductsBlockVisible"
                    :productList="orderInfo.productList"
                />
                <SiteCheckoutPlate>
                    <SiteCheckoutRecipient/>
                </SiteCheckoutPlate>
                <SiteCheckoutPlate>
                    <SiteCheckoutDelivery
                        :deliveryInfo="deliveryInfo"
                        :deliveryMethods="deliveryMethods"
                        @selectDeliveryMethod="selectDeliveryMethod"
                    />
                </SiteCheckoutPlate>
                <SiteCheckoutPlate v-if="isPickupDeliveryMethod">
                    <SiteCheckoutPickup
                        :pickupInfo="selectingDeliveryMethod.data"
                    />
                </SiteCheckoutPlate>
                <SiteCheckoutPlate>
                    <SiteCheckoutPayment
                        :paymentMethods="paymentMethods"
                    />
                </SiteCheckoutPlate>
            </div>
            <div class="site-checkout__order-block">
                <SiteCheckoutPlate>
                    <SiteCheckoutOrder
                        :orderInfo="orderInfo"
                    />
                </SiteCheckoutPlate>
                <SiteCheckoutAddBonusPoints />
            </div>
        </div>
        <SiteCheckoutRecommendations
            :recommendations="recommendations"
        />
    </div>
</template>

<script>
import SiteCheckoutHeader from "@/components/SiteCheckoutHeader/SiteCheckoutHeader.vue";
import SiteCheckoutRecipient from "@/components/SiteCheckoutRecipient/SiteCheckoutRecipient.vue";
import SiteCheckoutDelivery from "@/components/SiteCheckoutDelivery/SiteCheckoutDelivery.vue";
import SiteCheckoutPayment from "@/components/SiteCheckoutPayment/SiteCheckoutPayment.vue";
import SiteCheckoutOrder from "@/components/SiteCheckoutOrder/SiteCheckoutOrder.vue";
import SiteCheckoutRecommendations from "@/components/SiteCheckoutRecommendations/SiteCheckoutRecommendations.vue";
import SiteCheckoutPickup from "@/components/SiteCheckoutPickup/SiteCheckoutPickup.vue";
import SiteCheckoutOrderProducts from "@/components/SiteCheckoutOrderProducts/SiteCheckoutOrderProducts.vue";
import {ref, computed, reactive, onBeforeUnmount, toRefs} from "vue";
import SiteCheckoutPlate from "@/components/SiteCheckoutPlate/SiteCheckoutPlate.vue";
import SiteCheckoutAddBonusPoints from "@/components/SiteCheckoutAddBonusPoints/SiteCheckoutAddBonusPoints.vue";

const MEDIUM_SCREEN_SIZE = 1024;

export default {
    name: "SiteCheckout",
    components: {
        SiteCheckoutAddBonusPoints,
        SiteCheckoutPlate,
        SiteCheckoutOrderProducts,
        SiteCheckoutPickup,
        SiteCheckoutRecommendations,
        SiteCheckoutOrder,
        SiteCheckoutPayment,
        SiteCheckoutDelivery,
        SiteCheckoutRecipient,
        SiteCheckoutHeader,
    },
    props: {
        deliveryInfo: {
            type: Object,
            required: true,
        },
        deliveryMethods: {
            type: Array,
            default: () => [],
        },
        paymentMethods: {
            type: Array,
            default: () => [],
        },
        orderInfo: {
            type: Object,
            required: true,
        },
        recommendations: {
            type: Array,
            default: () => [],
        },
    },
    created() {
        window.addEventListener("resize", this.onChangeResize);
        this.onChangeResize();
    },
    setup(props) {
        const { orderInfo } = toRefs(props);
        const selectingDeliveryMethod = reactive({
            data: null,
        });
        const selectingDeliveryMethodType = ref("");
        const screenWidth = ref(0);

        const selectDeliveryMethod = (deliveryMethod) => {
            selectingDeliveryMethodType.value = deliveryMethod.type;
            selectingDeliveryMethod.data = deliveryMethod;
        };

        const isPickupDeliveryMethod = computed(() => {
            return selectingDeliveryMethodType.value === "pickup";
        });

        const onChangeResize = () => {
            screenWidth.value = window.innerWidth;
        };

        const isProductsBlockVisible = computed(() => {
            return screenWidth.value <= MEDIUM_SCREEN_SIZE && orderInfo.value.productList.length > 0;
        });

        onBeforeUnmount(() => {
            window.removeEventListener("resize", onChangeResize);
        });

        return {
            selectingDeliveryMethod,
            isPickupDeliveryMethod,
            selectDeliveryMethod,
            onChangeResize,
            isProductsBlockVisible,
        };
    },
}
</script>

<style lang="sass">
.site-checkout
    .site-checkout__plates
        display: flex
        grid-gap: 24px

    .site-checkout__steps
        display: flex
        grid-gap: 24px
        flex-direction: column

    .site-checkout__order-block
        max-width: 546px
        width: 100%
        display: flex
        grid-gap: 24px
        flex-direction: column

@media screen and (max-width: 1440px)
    .site-checkout
        .site-checkout__steps
            max-width: 632px
            width: 100%

@media screen and (max-width: 1024px)
    .site-checkout
        .site-checkout__plates
            flex-direction: column

        .site-checkout__order-block
            max-width: 100%
</style>