<template>
    <div class="site-specialists">
        <SiteSpecialist
            v-for="specialist in specialists"
            :key="specialist.id"
            :specialist="specialist"
        />
    </div>
</template>

<script>
import SiteSpecialist from "@/components/SiteSpecialist/SiteSpecialist.vue";

export default {
    name: "SiteSpecialists",
    components: {
        SiteSpecialist,
    },
    setup() {
        const specialists = [
            {
                id: 0,
                name: "Пешков Павел",
                phone: "1249",
                img: require("@/assets/images/specialist/preview.png"),
            },
            {
                id: 1,
                name: "Пешков Павел",
                phone: "1249",
                img: require("@/assets/images/specialist/preview.png"),
            },
            {
                id: 2,
                name: "Пешков Павел",
                phone: "1249",
                img: require("@/assets/images/specialist/preview.png"),
            },
            {
                id: 3,
                name: "Пешков Павел",
                phone: "1249",
                img: require("@/assets/images/specialist/preview.png"),
            },
        ];

        return {
            specialists,
        };
    },
};
</script>

<style lang="sass">
.site-specialists
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-gap: 32px

@media screen and (max-width: 1440px)
    .site-specialists
        grid-template-columns: repeat(2, 1fr)

@media screen and (max-width: 768px)
    .site-specialists
        grid-column-gap: 28

@media screen and (max-width: 768px)
    .site-specialists
        grid-template-columns: 1fr
        grid-row-gap: 24px
</style>
