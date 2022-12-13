<template>
    <div class="site-contacts">
        <div class="site-contacts__block">
            <SiteContactsAppeals />
            <SiteContactsStore />
        </div>
        <SiteContactsSales />
    </div>
</template>

<script>
import { computed, reactive } from "vue";

import SiteContactsAppeals from "@/components/SiteContactsAppeals/SiteContactsAppeals.vue";
import SiteContactsStore from "@/components/SiteContactsStore/SiteContactsStore.vue";
import SiteContactsSales from "@/components/SiteContactsSales/SiteContactsSales.vue";

export default {
    name: "SiteContacts",
    components: {
        SiteContactsAppeals,
        SiteContactsStore,
        SiteContactsSales,
    },
    setup() {
        const toggle = reactive({
            appeals: true,
            store: true,
            sales: true,
        });

        const getAppealsIsShow = computed(() => {
            return toggle.appeals;
        });

        const onToggle = (type) => {
            toggle[type] = !toggle[type];
        };

        const onToggleHiddenClass = (type) => {
            return !toggle[type] ? "site-contacts__toggle--hidden" : "";
        };

        return {
            toggle,
            getAppealsIsShow,
            onToggle,
            onToggleHiddenClass,
        };
    },
};
</script>

<style lang="sass">
.site-contacts
    display: flex
    grid-column-gap: 24px

    .site-contacts__block
        display: flex
        flex-direction: column
        grid-row-gap: 24px

@media screen and (max-width: 1024px)
    .site-contacts
        flex-direction: column
        grid-row-gap: 24px
</style>
