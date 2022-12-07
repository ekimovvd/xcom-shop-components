<template>
    <div class="site-filters">
        <component
            v-for="filter in filters"
            :key="filter.id"
            :is="onFilterComponent(filter)"
            :id="filter.id"
            :title="filter.title"
            :filters="filter.list"
            :value="range"
            @changeCheckbox="onToggleCheckbox"
            @changeRadio="onToggleRadio"
            @change="onChangeRange"
        ></component>
    </div>
</template>

<script>
import { ref } from "vue";

import SiteFilterRange from "@/components/SiteFilterRange/SiteFilterRange.vue";
import SiteFilterCheckbox from "@/components/SiteFilterCheckbox/SiteFilterCheckbox.vue";
import SiteFilterRadio from "@/components/SiteFilterRadio/SiteFilterRadio.vue";

export default {
    name: "SiteFilters",
    components: {
        SiteFilterRange,
        SiteFilterCheckbox,
        SiteFilterRadio,
    },
    props: {
        filters: {
            type: Array,
            default: () => [],
        },
    },
    setup() {
        const range = ref([0, 100]);

        const onToggleCheckbox = (value) => {
            console.log("Toggle checkbox", value);
        };

        const onToggleRadio = (value) => {
            console.log("Radio toggle", value);
        };

        const onChangeRangeMinValue = (value) => {
            console.log("Range min", value);
        };

        const onChangeRangeMaxValue = (value) => {
            console.log("Range max", value);
        };

        const onChangeRange = (value) => {
            range.value = value;
        };

        const onFilterComponent = ({ type }) => {
            switch (type) {
                case "checkbox":
                    return SiteFilterCheckbox;
                case "radio":
                    return SiteFilterRadio;
                case "range":
                    return SiteFilterRange;
                default:
                    return "";
            }
        };

        return {
            range,
            onToggleCheckbox,
            onToggleRadio,
            onChangeRangeMinValue,
            onChangeRangeMaxValue,
            onChangeRange,
            onFilterComponent,
        };
    },
};
</script>

<style lang="sass">
.site-filters
    display: flex
    flex-direction: column
    grid-row-gap: 24px
</style>
