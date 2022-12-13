<template>
    <div class="site-coins">
        <SiteCoinsCard class="site-coins__card" :profile="profile" />
        <SiteCoinsTasks class="site-coins__tasks" :tasks="tasks" />
        <SiteCoinsOperations :operations="operations" />
    </div>
</template>

<script>
import SiteCoinsCard from "@/components/SiteCoinsCard/SiteCoinsCard.vue";
import SiteCoinsTasks from "@/components/SiteCoinsTasks/SiteCoinsTasks.vue";
import SiteCoinsOperations from "@/components/SiteCoinsOperations/SiteCoinsOperations.vue";

export default {
    name: "SiteCoins",
    components: {
        SiteCoinsCard,
        SiteCoinsTasks,
        SiteCoinsOperations,
    },
    setup() {
        const profile = {
            name: "Николай Иванов",
            coins: 10000,
            phone: "+7 (903) 221 86 17",
            email: "ivanov@gmail.com",
            status: {
                name: "Профессионал",
                amount: 100500,
            },
            nextStatus: {
                name: "Эксперт",
                amount: 511000,
            },
        };

        const tasks = [
            {
                id: 0,
                name: "Заполните профиль",
                description:
                    "Перейдите в раздел Профиль и заполните данные о себе",
                coins: 10,
                img: require("@/assets/images/coins-tasks/profile.svg"),
            },
            {
                id: 1,
                name: "Отзыв о любом купленном товаре",
                description: "Напишите отзыв о любом приобретенном вами товаре",
                coins: 10,
                img: require("@/assets/images/coins-tasks/feedback.svg"),
            },
            {
                id: 2,
                name: "Отзыв об интернет-магазине",
                description: "Напишите отзыв о любом приобретенном вами товаре",
                coins: 1432,
                img: require("@/assets/images/coins-tasks/feedback.svg"),
            },
        ];

        const operations = [
            {
                id: 0,
                name: "Оплата заказа бонусными баллами",
                date: "11.07.2022",
                coins: 1000,
                type: "write-downs",
            },
            {
                id: 1,
                name: "Начисление бонусов за покупку",
                date: "11.07.2022",
                coins: 1000,
                type: "accrual",
            },
        ];

        return {
            profile,
            tasks,
            operations,
        };
    },
};
</script>

<style lang="sass">
.site-coins
    .site-coins__card
        margin-bottom: 32px

    .site-coins__tasks
        margin-bottom: 48px

@media screen and (max-width: 768px)
    .site-coins
        .site-coins__card
            margin-bottom: 24px
</style>
