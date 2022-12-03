<template>
    <div class="site-profile-card">
        <img
            class="site-profile-card__img"
            src="@/assets/images/profile-card/user.png"
            alt="user"
        />
        <div class="site-profile-card__user">
            <p class="site-profile-card__user-name">{{ profile.name }}</p>
            <div class="site-profile-card__user-group">
                <p class="site-profile-card__user-label">Профессионал:</p>
                <span class="site-profile-card__user-statistics">
                    {{ profile.bonuses }}
                    {{ onDeclineBonuses(profile.bonuses) }}
                </span>
            </div>
        </div>
        <a class="site-profile-card__link" href="#"> Личный кабинет </a>
    </div>
</template>

<script>
import { declineWrapper } from "decline-word";

export default {
    name: "SiteProfileCard",
    props: {
        profile: {
            type: Object,
            required: true,
        },
    },
    setup() {
        const onDeclineBonuses = declineWrapper("бонус", "", "а", "ов");

        return {
            onDeclineBonuses,
        };
    },
};
</script>

<style lang="sass">
.site-profile-card
    font-family: 'Manrope', sans-serif
    padding: 41px 32px
    border-radius: 24px
    background: $grays-gray-100
    width: 480px
    display: flex
    align-items: center

    .site-profile-card__img
        width: 84px
        height: 84px
        margin-right: 24px
        display: none

    .site-profile-card__user
        display: flex
        flex-direction: column
        grid-row-gap: 8px

    .site-profile-card__user-name
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-profile-card__user-group
        display: flex
        align-items: center
        grid-column-gap: 4px

    .site-profile-card__user-label
        font-weight: 400
        font-size: 16px
        line-height: 22px
        color: $main-black

    .site-profile-card__user-statistics
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $main-white
        padding: 2px 8px
        background: $secondary-blue-200
        border-radius: 8px

    .site-profile-card__link
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-blue
        padding: 13px 0
        border: 1px solid $main-blue
        border-radius: 8px
        margin-left: 64px
        width: 172px
        display: none
        align-items: center
        justify-content: center

@media screen and (max-width: 1440px)
    .site-profile-card
        width: 468px

@media screen and (max-width: 1024px)
    .site-profile-card
        width: 100%
        padding: 24px 32px 13px 32px

        .site-profile-card__img
            display: block

        .site-profile-card__link
            display: flex
</style>
