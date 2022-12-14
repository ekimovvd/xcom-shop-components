<template>
    <div class="site-notifications">
        <div class="site-notifications__list">
            <SiteNotification
                class="site-notifications__notification"
                v-for="notification in notifications"
                :key="notification.id"
                :notification="notification"
                @change="onChangeNotification"
            />
        </div>
        <button class="site-notifications__button">
            Отписаться от всех уведомлений
        </button>
    </div>
</template>

<script>
import { reactive, toRefs } from "vue";

import SiteNotification from "@/components/SiteNotification/SiteNotification.vue";

export default {
    name: "SiteNotifications",
    components: {
        SiteNotification,
    },
    setup() {
        const notifications = reactive([
            {
                id: 0,
                name: "Уведомления по заказам",
                description:
                    "Получайте информацию о статусе заказов на электронную почту",
                list: {
                    email: {
                        slug: "email",
                        name: "E-mail",
                        enabled: false,
                    },
                    telegram: {
                        slug: "telegram",
                        name: "Telegram",
                        enabled: false,
                    },
                },
            },
            {
                id: 1,
                name: "Избранные товары",
                description:
                    "Узнавайте об изменении цены и наличии избранных товаров",
                list: {
                    email: {
                        slug: "email",
                        name: "E-mail",
                        enabled: false,
                    },
                    sms: {
                        slug: "sms",
                        name: "SMS",
                        enabled: false,
                    },
                    telegram: {
                        slug: "telegram",
                        name: "Telegram",
                        enabled: false,
                    },
                },
            },
            {
                id: 2,
                name: "Скидки и акции",
                description:
                    "Получайте информацию об акциях и специальных предложениях на электронную почту",
                list: {
                    email: {
                        slug: "email",
                        name: "E-mail",
                        enabled: false,
                    },
                    telegram: {
                        slug: "telegram",
                        name: "Telegram",
                        enabled: false,
                    },
                },
            },
        ]);

        const onChangeNotification = ({ notificationId, item }) => {
            const findNotificationIndex = notifications.findIndex(
                (findNotification) => findNotification.id === notificationId
            );
            notifications[findNotificationIndex].list[item.slug].enabled =
                !notifications[findNotificationIndex].list[item.slug].enabled;
        };

        return {
            notifications,
            onChangeNotification,
        };
    },
};
</script>

<style lang="sass">
.site-notifications
    .site-notifications__list
        display: flex
        flex-direction: column
        grid-row-gap: 32px

    .site-notifications__notification
        padding-bottom: 32px
        border-bottom: 1px solid $grays-gray-200

        &:last-child
            padding-bottom: 0
            border-bottom: none

    .site-notifications__button
        width: 210px
        background: $main-white
        border: 1px solid $main-blue
        border-radius: 8px
        padding: 8px 0
        cursor: pointer
        outline: none
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $main-blue
        margin-top: 32px
</style>
