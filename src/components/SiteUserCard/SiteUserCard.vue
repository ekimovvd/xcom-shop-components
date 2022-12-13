<template>
    <div class="site-user-card">
        <div class="site-user-card__header">
            <h4 class="site-user-card__title">{{ user.name }}</h4>
            <button class="site-user-card__setting" @click="onSetting">
                <img
                    class="site-user-card__setting-icon"
                    src="@/assets/images/user-card/setting.svg"
                    alt="icon"
                />
            </button>
        </div>
        <p class="site-user-card__status">
            Статус
            <span class="site-user-card__status-name">
                {{ user.status.name }}
            </span>
        </p>
        <div class="site-user-card__coins">
            <img
                class="site-user-card__coins-img"
                src="@/assets/images/user-card/coins.svg"
                alt="img"
            />
            <p class="site-user-card__coins-label">
                {{ getCoins }}
                {{ getDeclineCoins }}
            </p>
        </div>
        <div class="site-user-card__links">
            <div class="site-user-card__link">
                <p class="site-user-card__link-label">Телефон</p>
                <a class="site-user-card__link-reference" :href="getPhoneLink">
                    {{ user.phone }}
                </a>
            </div>
            <div class="site-user-card__link">
                <p class="site-user-card__link-label">E-mail</p>
                <a class="site-user-card__link-reference" :href="getEmailLink">
                    {{ user.email }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, toRefs } from "vue";

import { onNumberWithSpaces, onDecline } from "@/utils/functions.js";

export default {
    name: "SiteUserCard",
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { user } = toRefs(props);

        const getPhoneLink = computed(() => {
            return `tel:${user.value.phone}`;
        });

        const getEmailLink = computed(() => {
            return `mailto:${user.value.email}`;
        });

        const getCoins = computed(() => {
            return onNumberWithSpaces(user.value.coins);
        });

        const getDeclineCoins = computed(() => {
            return onDecline(["бонус", "", "а", "ов"])(user.value.coins);
        });

        const onSetting = () => {
            console.log("Setting");
        };

        return {
            getPhoneLink,
            getEmailLink,
            getCoins,
            getDeclineCoins,
            onNumberWithSpaces,
            onSetting,
        };
    },
};
</script>

<style lang="sass">
.site-user-card
    background: $secondary-blue-400
    border-radius: 24px
    width: 426px
    padding: 24px 24px 32px 24px
    font-family: 'Manrope', sans-serif

    .site-user-card__header
        display: flex
        align-items: center
        justify-content: space-between
        margin-bottom: 8px

    .site-user-card__title
        font-weight: 500
        font-size: 20px
        line-height: 26px
        color: $main-white

    .site-user-card__status
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $main-white
        display: inline-flex
        align-items: center
        grid-column-gap: 8px

    .site-user-card__status-name
        font-weight: 500
        font-size: 16px

    .site-user-card__setting
        display: flex
        align-items: center
        justify-content: center
        padding: 0
        border: none
        outline: none
        background: none
        cursor: pointer

    .site-user-card__coins
        margin: 16px 0 40px 0
        display: flex
        align-items: center
        grid-column-gap: 8px

    .site-user-card__coins-label
        font-weight: 400
        font-size: 16px
        line-height: 22px
        color: $main-white

    .site-user-card__links
        display: flex
        flex-direction: column
        grid-row-gap: 9px

    .site-user-card__link
        display: flex
        align-items: center
        grid-column-gap: 8px

    .site-user-card__link-label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $main-white

    .site-user-card__link-reference
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-white

@media screen and (max-width: 1440px)
    .site-user-card
        width: 100%
</style>
