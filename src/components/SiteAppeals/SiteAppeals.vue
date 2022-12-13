<template>
    <div class="site-appeals">
        <SiteAppealsEmpty />
        <SiteAppeal
            v-for="appeal in appeals"
            :key="appeal.id"
            :appeal="appeal"
            @cancel="onCancel"
        />
    </div>
</template>

<script>
import SiteAppealsEmpty from "@/components/SiteAppealsEmpty/SiteAppealsEmpty.vue";
import SiteAppeal from "@/components/SiteAppeal/SiteAppeal.vue";

export default {
    name: "SiteAppeals",
    components: {
        SiteAppealsEmpty,
        SiteAppeal,
    },
    props: {
        appeals: {
            type: Array,
            default: () => [],
        },
    },
    setup() {
        const onCancel = (value) => {
            console.log("Appeal cancel", value);
        };

        return {
            onCancel,
        };
    },
};
</script>

<style lang="sass">
.site-appeals
    display: flex
    flex-direction: column
    grid-row-gap: 24px
</style>
