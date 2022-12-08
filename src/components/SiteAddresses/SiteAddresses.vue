<template>
    <div class="site-addresses">
        <SiteAddressesEmpty />
        <SiteAddress
            v-for="address in addresses"
            :key="address.id"
            :address="address"
            @edit="onEdit"
            @trash="onTrash"
        />
    </div>
</template>

<script>
import SiteAddress from "@/components/SiteAddress/SiteAddress.vue";
import SiteAddressesEmpty from "@/components/SiteAddressesEmpty/SiteAddressesEmpty.vue";

export default {
    name: "SiteAddresses",
    components: {
        SiteAddress,
        SiteAddressesEmpty,
    },
    props: {
        addresses: {
            type: Array,
            default: () => [],
        },
    },
    setup() {
        const onEdit = (value) => {
            console.log("Edit: ", value);
        };

        const onTrash = (value) => {
            console.log("Trash: ", value);
        };

        return {
            onEdit,
            onTrash,
        };
    },
};
</script>

<style lang="sass">
.site-addresses
    display: flex
    flex-direction: column
    grid-row-gap: 12px
</style>
