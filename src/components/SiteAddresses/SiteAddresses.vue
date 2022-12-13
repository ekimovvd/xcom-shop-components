<template>
    <div class="site-addresses">
        <SiteAccountHeader
            class="site-addresses__header"
            title="Мои адреса"
            label="Добавить новый адрес"
            :isAdd="getButtonAddIsShow"
            @add="onAddAddress"
        />
        <SiteAddressesEmpty />
        <div class="site-addresses__list">
            <SiteAddress
                v-for="address in addresses"
                :key="address.id"
                :address="address"
                @edit="onEdit"
                @trash="onTrash"
            />
        </div>
    </div>
</template>

<script>
import { computed, toRefs } from "vue";

import SiteAccountHeader from "@/components/SiteAccountHeader/SiteAccountHeader.vue";
import SiteAddress from "@/components/SiteAddress/SiteAddress.vue";
import SiteAddressesEmpty from "@/components/SiteAddressesEmpty/SiteAddressesEmpty.vue";

export default {
    name: "SiteAddresses",
    components: {
        SiteAccountHeader,
        SiteAddress,
        SiteAddressesEmpty,
    },
    props: {
        addresses: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        const { addresses } = toRefs(props);

        const getButtonAddIsShow = computed(() => {
            return addresses.value.length;
        });

        const onEdit = (value) => {
            console.log("Edit: ", value);
        };

        const onTrash = (value) => {
            console.log("Trash: ", value);
        };

        const onAddAddress = () => {
            console.log("Add Address");
        };

        return {
            getButtonAddIsShow,
            onEdit,
            onTrash,
            onAddAddress,
        };
    },
};
</script>

<style lang="sass">
.site-addresses
    .site-addresses__header
        margin-bottom: 48px

    .site-addresses__list
        display: flex
        flex-direction: column
        grid-row-gap: 12px
</style>
