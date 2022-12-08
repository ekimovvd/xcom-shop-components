<template>
    <div class="site-counterparties">
        <SiteCounterpartiesEmpty />
        <SiteCounterparty
            v-for="counterparty in counterparties"
            :key="counterparty.id"
            :counterparty="counterparty"
        />
    </div>
</template>

<script>
import SiteCounterpartiesEmpty from "@/components/SiteCounterpartiesEmpty/SiteCounterpartiesEmpty.vue";
import SiteCounterparty from "@/components/SiteCounterparty/SiteCounterparty.vue";

export default {
    name: "SiteCounterparties",
    components: {
        SiteCounterpartiesEmpty,
        SiteCounterparty,
    },
    props: {
        counterparties: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style lang="sass">
.site-counterparties
    display: flex
    flex-direction: column
    grid-row-gap: 12px
</style>
