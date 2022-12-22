<template>
    <div class="site-materials">
        <SiteToggle
            title="Инструкции и сертификаты"
            :isHidden="isHidden"
            @toggle="onToggle"
        />

        <div class="site-materials__list" v-if="getListIsShow">
            <SiteMaterial
                v-for="material in materials"
                :key="material.id"
                :material="material"
            />
        </div>
    </div>
</template>

<script>
import { computed, ref } from "vue";

import SiteToggle from "@/components/site-toggle/site-toggle.vue";
import SiteMaterial from "@/components/SiteMaterial/SiteMaterial.vue";

export default {
    name: "SiteMaterials",
    components: {
        SiteToggle,
        SiteMaterial,
    },
    props: {
        materials: {
            type: Array,
            default: () => [],
        },
    },
    setup() {
        const isHidden = ref(false);

        const onToggle = () => {
            isHidden.value = !isHidden.value;
        };

        const getListIsShow = computed(() => {
            return !isHidden.value;
        });

        return {
            isHidden,
            getListIsShow,
            onToggle,
        };
    },
};
</script>

<style lang="sass">
.site-materials
    .site-materials__list
        margin-top: 64px
        display: flex
        flex-wrap: wrap
        grid-column-gap: 64px
        grid-row-gap: 24px

@media screen and (max-width: 1024px)
    .site-materials
        .site-materials__list
            margin-top: 48px
            grid-column-gap: 48px

@media screen and (max-width: 768px)
    .site-materials
        .site-materials__list
            margin-top: 32px
</style>
