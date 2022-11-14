<template>
    <SiteHeader />
    <SiteFooter />
</template>

<script>
import SiteHeader from "@/components/site-header/site-header.vue";
import SiteFooter from "./components/site-footer/site-footer.vue";

export default {
    name: "App",
    components: {
        SiteHeader,
        SiteFooter,
    },
};
</script>
