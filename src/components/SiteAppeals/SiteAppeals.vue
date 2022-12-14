<template>
    <div class="site-appeals">
        <SiteAppealsHeader :isTabs="getTabsIsShow" />
        <SiteAppealsEmpty />
        <div class="site-appeals__list">
            <SiteAppeal
                v-for="appeal in appeals"
                :key="appeal.id"
                :appeal="appeal"
                @cancel="onCancel"
            />
        </div>
    </div>
</template>

<script>
import { computed, toRefs } from "vue";

import SiteAppealsHeader from "@/components/SiteAppealsHeader/SiteAppealsHeader.vue";
import SiteAppealsEmpty from "@/components/SiteAppealsEmpty/SiteAppealsEmpty.vue";
import SiteAppeal from "@/components/SiteAppeal/SiteAppeal.vue";

export default {
    name: "SiteAppeals",
    components: {
        SiteAppealsHeader,
        SiteAppealsEmpty,
        SiteAppeal,
    },
    props: {
        appeals: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        const { appeals } = toRefs(props);

        const getTabsIsShow = computed(() => {
            return appeals.value;
        });

        const onCancel = (value) => {
            console.log("Appeal cancel", value);
        };

        return {
            getTabsIsShow,
            onCancel,
        };
    },
};
</script>

<style lang="sass">
.site-appeals
    .site-appeals__header
        margin-bottom: 40px

    .site-appeals__list
        display: flex
        flex-direction: column
        grid-row-gap: 24px
</style>
