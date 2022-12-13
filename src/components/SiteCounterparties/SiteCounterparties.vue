<template>
    <div class="site-counterparties">
        <SiteAccountHeader
            class="site-counterparties__header"
            title="Мои юрлица"
            label="Добавить новое юрлицо"
            :isAdd="getButtonAddIsShow"
            @add="onAddCounterparty"
        />
        <SiteCounterpartiesEmpty />
        <div class="site-counterparties__list">
            <SiteCounterparty
                v-for="counterparty in counterparties"
                :key="counterparty.id"
                :counterparty="counterparty"
            />
        </div>
    </div>
</template>

<script>
import { computed, toRefs } from "vue";

import SiteAccountHeader from "@/components/SiteAccountHeader/SiteAccountHeader.vue";
import SiteCounterpartiesEmpty from "@/components/SiteCounterpartiesEmpty/SiteCounterpartiesEmpty.vue";
import SiteCounterparty from "@/components/SiteCounterparty/SiteCounterparty.vue";

export default {
    name: "SiteCounterparties",
    components: {
        SiteAccountHeader,
        SiteCounterpartiesEmpty,
        SiteCounterparty,
    },
    props: {
        counterparties: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        const { counterparties } = toRefs(props);

        const getButtonAddIsShow = computed(() => {
            return counterparties.value.length;
        });

        const onAddCounterparty = () => {
            console.log("Add Counterparty");
        };

        return {
            getButtonAddIsShow,
            onAddCounterparty,
        };
    },
};
</script>

<style lang="sass">
.site-counterparties
    .site-counterparties__header
        margin-bottom: 48px

    .site-counterparties__list
        display: flex
        flex-direction: column
        grid-row-gap: 12px
</style>
