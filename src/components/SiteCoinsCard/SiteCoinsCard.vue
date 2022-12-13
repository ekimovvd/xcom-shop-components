<template>
    <div class="site-coins-card">
        <div class="site-coins-card__balance">
            <h4 class="site-coins-card__title">Ваш баланс</h4>

            <div class="site-coins-card__balance-info">
                <img
                    class="site-coins-card__balance-img"
                    src="@/assets/images/coins-card/coins.svg"
                    alt="img"
                />
                <p class="site-coins-card__balance-info-label">
                    {{ getCoins }} {{ getDeclineCoins }}
                </p>
            </div>

            <div class="site-coins-card__message">
                <p class="site-coins-card__message-label">
                    155 бонусов сгорят 15 ноября!
                </p>
                <a class="site-coins-card__message-link" href="#">
                    Перейти в каталог
                </a>
            </div>
        </div>

        <div class="site-coins-card__info">
            <h4 class="site-coins-card__title">
                Оплачивайте бонусами до 50% покупок
            </h4>

            <div class="site-coins-card__info-description">
                <p class="site-coins-card__info-label">
                    При совершении первой покупки онлайн, вы получите бонусные
                    баллы. Ими вы сможете оплатить до 50% покупок.
                </p>
                <p class="site-coins-card__info-label">
                    Потратить бонусы xcom необходимо в течение 1.5 лет с момента
                    их начисления, иначе они сгорят. Списание “просроченных”
                    бонусов происходит два раза в год: 15 января и 15 июля.
                </p>
            </div>

            <a class="site-coins-card__info-link" href="#">
                Условия бонусной программы
                <img
                    class="site-coins-card__info-link-icon"
                    src="@/assets/images/coins-card/arrow-right.svg"
                    alt="icon"
                />
            </a>
        </div>
    </div>
</template>

<script>
import { computed, toRefs } from "vue";

import { onNumberWithSpaces, onDecline } from "@/utils/functions.js";

export default {
    name: "SiteCoinsCard",
    props: {
        profile: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { profile } = toRefs(props);

        const getCoins = computed(() => {
            return onNumberWithSpaces(profile.value.coins);
        });

        const getDeclineCoins = computed(() => {
            return onDecline(["бонус", "", "а", "ов"])(profile.value.coins);
        });

        return {
            getCoins,
            getDeclineCoins,
        };
    },
};
</script>

<style lang="sass">
.site-coins-card
    padding: 24px
    border-radius: 24px
    background: $secondary-blue-400
    display: flex
    grid-column-gap: 75px
    justify-content: space-between
    font-family: 'Manrope', sans-serif

    .site-coins-card__title
        font-weight: 500
        font-size: 20px
        line-height: 26px
        color: $main-white

    .site-coins-card__balance
        display: flex
        flex-direction: column

    .site-coins-card__balance-info
        display: flex
        align-items: center
        grid-column-gap: 8px
        margin-top: 16px

    .site-coins-card__balance-img
        width: 24px
        height: 24px

    .site-coins-card__balance-info-label
        font-weight: 400
        font-size: 16px
        line-height: 22px
        color: $main-white

    .site-coins-card__message
        margin-top: auto

    .site-coins-card__message-label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $main-white

    .site-coins-card__message-link
        padding: 8px
        background: $main-white
        border-radius: 8px
        display: inline-block
        margin-top: 12px
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $main-blue

    .site-coins-card__info
        width: 383px

    .site-coins-card__info-description
        display: flex
        flex-direction: column
        grid-row-gap: 20px
        margin-top: 16px

    .site-coins-card__info-label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $main-white

    .site-coins-card__info-link
        display: inline-flex
        align-items: center
        grid-column-gap: 4px
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-white
        margin-top: 12px

@media screen and (max-width: 1024px)
    .site-coins-card
        grid-column-gap: 70px

@media screen and (max-width: 768px)
    .site-coins-card
        flex-direction: column
        grid-row-gap: 32px

        .site-coins-card__message
            margin-top: 32px

        .site-coins-card__message-label
            width: 136px

        .site-coins-card__info
            width: 100%
</style>
