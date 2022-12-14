<template>
    <div class="site-notification">
        <h4 class="site-notification__title">
            {{ notification.name }}
        </h4>
        <p class="site-notification__label">
            {{ notification.description }}
        </p>
        <div class="site-notification__list">
            <div
                class="site-notification__item"
                v-for="item in notification.list"
                :key="item.id"
            >
                <p class="site-notification__item-label">
                    {{ item.name }}
                </p>
                <label class="site-notification__item-checkbox">
                    <input
                        class="site-notification__item-input"
                        type="checkbox"
                        :checked="item.enabled"
                        @change="onChangeNotification(item)"
                    />
                    <span class="site-notification__item-span"></span>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
import { toRefs } from "vue";

export default {
    name: "SiteNotification",
    props: {
        notification: {
            type: Object,
            required: true,
        },
    },
    emits: ["change"],
    setup(props, { emit }) {
        const { notification } = toRefs(props);

        const onChangeNotification = (item) => {
            emit("change", {
                notificationId: notification.value.id,
                item,
            });
        };

        return {
            onChangeNotification,
        };
    },
};
</script>

<style lang="sass">
.site-notification
    font-family: 'Manrope', sans-serif

    .site-notification__title
        font-weight: 700
        font-size: 20px
        line-height: 24px
        color: $grays-black

    .site-notification__label
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $grays-gray-400
        margin-top: 12px

    .site-notification__list
        display: flex
        flex-direction: column
        grid-row-gap: 16px
        margin-top: 24px

    .site-notification__item
        display: flex
        align-items: center
        justify-content: space-between
        width: 226px

    .site-notification__item-checkbox
        display: flex
        align-items: center
        cursor: pointer
        height: 24px
        position: relative

    .site-notification__item-input
        outline: none
        width: 1px
        height: 1px
        overflow: hidden
        position: absolute
        clip: rect(0 0 0 0)

        &:checked + .site-notification__item-span::before
            position: absolute
            content: '',
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            width: 25px
            height: 25px
            background-image: url('~@/assets/images/notification/check.svg')
            background-position: center
            background-repeat: no-repeat
            background-color: $main-blue
            border-radius: 4px

    .site-notification__item-span
        width: 24px
        height: 24px
        border: 1px solid $grays-gray-300
        border-radius: 4px
        position: absolute


@media screen and (max-width: 1024px)
    .site-notification
        .site-notification__title
            font-size: 18px
            line-height: 24px
</style>
