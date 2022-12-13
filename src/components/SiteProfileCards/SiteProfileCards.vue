<template>
    <div class="site-profile-cards">
        <SiteProfileCard
            class="site-profile-cards__profile"
            :profile="profile"
        />
        <SiteDeliveryCard
            class="site-profile-cards__delivery"
            :delivery="delivery"
        />
        <SiteProfileStatus
            class="site-profile-cards__status"
            :profile="profile"
        />
    </div>
</template>

<script>
import SiteProfileCard from "@/components/SiteProfileCard/SiteProfileCard.vue";
import SiteDeliveryCard from "@/components/SiteDeliveryCard/SiteDeliveryCard.vue";
import SiteProfileStatus from "../SiteProfileStatus/SiteProfileStatus.vue";

export default {
    name: "site-profile-cards",
    components: {
        SiteProfileCard,
        SiteDeliveryCard,
        SiteProfileStatus,
    },
    setup() {
        const profile = {
            name: "Александр Константинов ",
            coins: 10257,
            status: {
                amount: 300000,
                name: "Профессионал",
            },
            nextStatus: {
                amount: 500000,
                name: "Эксперт",
            },
        };

        const delivery = {
            date: "16 августа",
        };

        return {
            profile,
            delivery,
            status,
        };
    },
};
</script>

<style lang="sass">
.site-profile-cards
    display: flex
    flex-wrap: wrap
    grid-gap: 20px

@media screen and (max-width: 1024px)
    .site-profile-cards
        .site-profile-cards__delivery,
        .site-profile-cards__status
            display: none

@media screen and (max-width: 768px)
    .site-profile-cards
        .site-profile-cards__profile
            display: none
</style>
