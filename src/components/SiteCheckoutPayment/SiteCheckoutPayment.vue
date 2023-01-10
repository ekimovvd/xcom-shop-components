<template>
    <div class="site-checkout-payment">
        <div class="site-checkout-payment__wrapper">
            <h4 class="site-checkout-payment__title">Способ оплаты для физлица</h4>
            <SiteSplide
                class="site-checkout-payment__slider"
                v-if="getContentIsShow"
                :options="getOptions"
            >
                <SiteSlide
                    class="site-checkout-payment__slide"
                    v-for="paymentMethod in paymentMethods"
                    :key="paymentMethod.id"
                >
                    <a
                        href="#"
                        class="site-checkout-payment__slide-link"
                        @click.prevent="onSelectPaymentMethod"
                    >
                        <div class="site-checkout-payment__slide-content">
                            <img
                                class="site-checkout-payment__slide-icon"
                                :src="require(`@/assets/images/checkout/${paymentMethod.icon}`)"
                                alt="payment icon"
                            />
                            <div class="site-checkout-payment__slide-label">
                                {{ paymentMethod.title }}
                            </div>
                        </div>
                    </a>
                </SiteSlide>
            </SiteSplide>
            <div class="site-checkout-payment__empty" v-else>Список пустой</div>
        </div>
    </div>
</template>

<script>
import {computed, onBeforeUnmount, ref, toRefs} from "vue";

const SCREEN_SIZES = {
    medium: 1024,
    small: 768,
};
const SLIDER_PAGES = {
    max: 3,
    medium: 2,
    min: 1,
};

export default {
    name: "SiteCheckoutPayment",
    props: {
        paymentMethods: {
            type: Array,
            default: () => [],
        }
    },
    created() {
        window.addEventListener("resize", this.onChangeResize);
        this.onChangeResize();
    },
    setup(props) {
        const { paymentMethods } = toRefs(props);
        const screenWidth = ref(0);

        const getPerPage = computed(() => {
            if (
                screenWidth.value <= SCREEN_SIZES.medium &&
                screenWidth.value > SCREEN_SIZES.small
            ) {
                return SLIDER_PAGES.medium;
            } else if (screenWidth.value <= SCREEN_SIZES.small) {
                return SLIDER_PAGES.min;
            }
            return SLIDER_PAGES.max;
        });

        const onSelectPaymentMethod = () => {
            console.log("selected");
        };

        const getOptions = computed(() => {
            return {
                pagination: false,
                perPage: getPerPage.value,
                gap: "16px",
            };
        });

        const getContentIsShow = computed(() => {
            return paymentMethods.value.length > 0;
        });

        const onChangeResize = () => {
            screenWidth.value = window.innerWidth;
        };

        onBeforeUnmount(() => {
            window.removeEventListener("resize", onChangeResize);
        });

        return {
            getOptions,
            getContentIsShow,
            onChangeResize,
            onSelectPaymentMethod,
        };
    }
}
</script>

<style lang="sass">
.site-checkout-payment

    .site-checkout-payment__title
        font-weight: 700
        font-size: 20px
        line-height: 24px
        color: $new-black
        margin-bottom: 24px
        margin-top: 0

    .site-checkout-payment__slider
        margin-top: 24px

    .site-checkout-payment__slide
        border-radius: 24px
        border: 2px solid $new-gray-200

    .site-checkout-payment__slide-link
        display: flex
        align-items: center
        justify-content: center
        text-decoration: none
        color: $new-black
        padding: 16px 24px
        height: 100%

    .site-checkout-payment__slide-content
        display: flex
        flex-direction: column
        align-items: center
        grid-row-gap: 10px
        justify-content: center

    .site-checkout-payment__slide-icon
        display: block

    .site-checkout-payment__slide-label
        font-weight: 700
        font-size: 12px
        color: $main-black
        text-align: center

    .site-checkout-payment__empty
        text-align: center

    .splide__arrow
        width: 44px
        height: 44px
        opacity: 1
        background: $main-white
        box-shadow: $small-down

        &:disabled
            display: none

        &:hover:not(:disabled)
            opacity: 1

        &:focus-visible
            outline: none

    .splide__arrow--prev
        left: -25px

    .splide__arrow--next
        right: -25px
</style>