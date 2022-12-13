<template>
    <div class="site-user-advantages">
        <div class="site-user-advantages__wrapper">
            <h4 class="site-user-advantages__title">Ваши преимущества</h4>
            <div class="site-user-advantages__group">
                <ul class="site-user-advantages__list">
                    <li
                        class="site-user-advantages__item"
                        v-for="advantage in advantagesPersonally"
                        :key="advantage.id"
                    >
                        <img
                            class="site-user-advantages__item-icon"
                            :src="advantage.icon"
                            alt="icon"
                        />
                        <p class="site-user-advantages__item-label">
                            {{ advantage.label }}
                        </p>
                    </li>
                </ul>
                <ul class="site-user-advantages__list">
                    <li
                        class="site-user-advantages__item"
                        v-for="advantage in advantagesOther"
                        :key="advantage.id"
                    >
                        <img
                            class="site-user-advantages__item-icon"
                            :src="advantage.icon"
                            alt="icon"
                        />
                        <p class="site-user-advantages__item-label">
                            {{ advantage.label }}
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <a class="site-user-advantages__link" href="#">
            Узнать подробнее о программе лояльности
        </a>
    </div>
</template>

<script>
export default {
    name: "SiteUserAdvantages",
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    setup() {
        const advantagesPersonally = [
            {
                id: 0,
                label: "Вы получаете 1% бонусами",
                icon: require("@/assets/images/user-advantages/coins.svg"),
            },
            {
                id: 1,
                label: "Личный менеджер",
                icon: require("@/assets/images/user-advantages/expert.svg"),
            },
            {
                id: 2,
                label: "Скидка 15% на все услуги Xcom",
                icon: require("@/assets/images/user-advantages/percent.svg"),
            },
        ];
        const advantagesOther = [
            {
                id: 0,
                label: "Возможность оплаты бонусами до 65% от суммы заказа",
                icon: require("@/assets/images/user-advantages/wallet.svg"),
            },
            {
                id: 1,
                label: "Рассылка с эксклюзивными промокодами и скидками",
                icon: require("@/assets/images/user-advantages/mail.svg"),
            },
            {
                id: 2,
                label: "Бесплатная доставка (1 раз в месяц, Москва и Питер)",
                icon: require("@/assets/images/user-advantages/delivery.svg"),
            },
            {
                id: 3,
                label: "+1000 бонусов ко Дню Рождения (доступны 1 неделю)",
                icon: require("@/assets/images/user-advantages/gift.svg"),
            },
        ];

        return {
            advantagesPersonally,
            advantagesOther,
        };
    },
};
</script>

<style lang="sass">
.site-user-advantages
    display: flex
    flex-direction: column
    font-family: 'Manrope', sans-serif
    width: 100%

    .site-user-advantages__wrapper
        background: $grays-gray-100
        border-radius: 24px
        padding: 24px

    .site-user-advantages__title
        font-weight: 700
        font-size: 20px
        line-height: 24px
        color: $main-black
        margin-bottom: 26px

    .site-user-advantages__link
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-blue
        margin-top: 8px
        margin-left: auto

    .site-user-advantages__group
        display: flex
        grid-column-gap: 96px

    .site-user-advantages__list
        display: flex
        flex-direction: column
        grid-row-gap: 16px

    .site-user-advantages__item
        display: flex
        align-items: center
        grid-column-gap: 12px

    .site-user-advantages__item-label
        font-weight: 400
        font-size: 16px
        line-height: 22px
        color: #000000

@media screen and (max-width: 1440px)
    .site-user-advantages
        .site-user-advantages__group
            flex-direction: column
            grid-row-gap: 16px

@media screen and (max-width: 768px)
    .site-user-advantages
        .site-user-advantages__link
            width: 182px
            text-align: right
</style>
