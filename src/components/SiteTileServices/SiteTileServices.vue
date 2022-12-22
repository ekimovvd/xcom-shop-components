<template>
    <div class="site-tile-services">
        <SiteToggle
            class="site-tile-services"
            title="Услуги"
            :isHidden="isHidden"
            @toggle="onToggle"
        />

        <SiteSplide
            class="site-tile-services__slider"
            v-if="getListIsShow"
            :options="getOptions"
        >
            <SiteSlide
                class="site-tile-services__slide"
                v-for="service in services"
                :key="service.id"
            >
                <SiteTileService
                    :service="service"
                    @add="onAddService"
                    @variant="onAddVariant"
                />
            </SiteSlide>
        </SiteSplide>
    </div>
</template>

<script>
import { computed, onBeforeUnmount, ref } from "vue";

import SiteToggle from "@/components/site-toggle/site-toggle.vue";
import SiteTileService from "@/components/SiteTileService/SiteTileService.vue";

export default {
    name: "SiteTileServices",
    components: {
        SiteToggle,
        SiteTileService,
    },
    props: {
        services: {
            type: Array,
            default: () => [],
        },
    },
    created() {
        window.addEventListener("resize", this.onChangeResize);
        this.onChangeResize();
    },
    setup() {
        const isHidden = ref(false);
        const screenWidth = ref(0);

        const screen = {
            medium: 1024,
            small: 768,
        };
        const sliderPages = {
            max: 4,
            medium: 2,
            min: 1,
        };

        onBeforeUnmount(() => {
            window.removeEventListener("resize", onChangeResize);
        });

        const getPerPage = computed(() => {
            if (screenWidth.value > screen.medium) {
                return sliderPages.max;
            } else if (
                screenWidth.value > screen.small &&
                screenWidth.value <= screen.medium
            ) {
                return sliderPages.medium;
            }
            return sliderPages.min;
        });

        const getOptions = computed(() => {
            return {
                pagination: false,
                perPage: getPerPage.value,
                gap: "24px",
            };
        });

        const getListIsShow = computed(() => {
            return !isHidden.value;
        });

        const onToggle = () => {
            isHidden.value = !isHidden.value;
        };

        const onAddService = (service) => {
            console.log("Add Service: ", service);
        };

        const onAddVariant = (variant) => {
            console.log("Add Variant", variant);
        };

        const onChangeResize = () => {
            screenWidth.value = window.innerWidth;
        };

        return {
            isHidden,
            getOptions,
            getListIsShow,
            onToggle,
            onAddService,
            onAddVariant,
            onChangeResize,
        };
    },
};
</script>

<style lang="sass">
.site-tile-services
    .site-tile-services__slider
        margin-top: 64px

    .splide__arrow
        background: none
        height: 24px
        width: 24px
        opacity: 1

        &:hover
            opacity: 1

            &:not(:disabled)
                opacity: 1

        &:disabled
            opacity: 1
            border: rounded
            display: none

    .splide__arrow svg
        fill: $grays-gray-400

    .splide__arrow--prev
        left: -36px

    .splide__arrow--next
        right: -36px

@media screen and (max-width: 1440px)
    .site-tile-services
        .site-tile-services__slider
            margin-top: 48px

@media screen and (max-width: 768px)
    .site-tile-services
        .splide__arrow--prev
            left: -26px

        .splide__arrow--next
            right: -26px
</style>
