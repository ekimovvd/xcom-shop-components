<template>
    <div class="site-account-header">
        <div class="site-account-header__group">
            <img
                class="site-account-header__arrow"
                src="@/assets/images/account-header/arrow-left.svg"
                alt="arrow"
            />
            <h2 class="site-account-header__title">{{ title }}</h2>
        </div>
        <button
            class="site-account-header__button"
            v-if="getButtonAddIsShow"
            @click="onAdd"
        >
            <img
                class="site-account-header__button-icon"
                src="@/assets/images/account-header/plus.svg"
                alt="plus"
            />
            {{ label }}
        </button>
    </div>
</template>

<script>
import { computed, toRefs } from "vue";

export default {
    name: "SiteAccountHeader",
    props: {
        title: {
            type: String,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        isAdd: {
            type: Boolean,
            required: true,
        },
    },
    emits: ["add"],
    setup(props, { emit }) {
        const { isAdd } = toRefs(props);

        const getButtonAddIsShow = computed(() => {
            return isAdd.value;
        });

        const onAdd = () => {
            emit("add");
        };

        return {
            getButtonAddIsShow,
            onAdd,
        };
    },
};
</script>

<style lang="sass">
.site-account-header
    display: flex
    align-items: center
    justify-content: space-between

    .site-account-header__group
        display: flex
        align-items: center
        grid-column-gap: 12px

    .site-account-header__arrow
        display: none

    .site-account-header__title
        font-family: 'Manrope', sans-serif
        font-weight: 700
        font-size: 32px
        line-height: 40px
        color: #070707

    .site-account-header__button
        display: flex
        justify-content: center
        align-items: center
        padding: 8px
        background: $main-white
        border: 1px solid $main-blue
        border-radius: 8px
        outline: none
        cursor: pointer
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $main-blue
        grid-column-gap: 4px

@media screen and (max-width: 1440px)
    .site-account-header
        .site-account-header__title
            font-size: 28px
            line-height: 36px

@media screen and (max-width: 1024px)
    .site-account-header
        .site-account-header__arrow
            display: block

@media screen and (max-width: 768px)
    .site-account-header
        flex-direction: column
        align-items: flex-start
        grid-row-gap: 24px

        .site-account-header__title
            font-size: 24px
            line-height: 32px

        .site-account-header__button
            width: 100%
</style>
