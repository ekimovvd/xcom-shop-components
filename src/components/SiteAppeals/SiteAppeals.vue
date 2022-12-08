<template>
    <div class="site-appeals">
        <SiteAppealsEmpty />
    </div>
</template>

<script>
import SiteAppealsEmpty from "@/components/SiteAppealsEmpty/SiteAppealsEmpty.vue";

export default {
    name: "SiteAppeals",
    components: {
        SiteAppealsEmpty,
    },
    props: {
        appeals: {
            type: Array,
            default: () => [],
        },
    },
};
</script>

<style lang="sass">
.site-appeals
</style>
