<template>
    <div class="site-address" :class="getAddressViewClass">
        <div class="site-address__group" :class="getGroupViewClass">
            <h6 class="site-address__title" v-if="getPvzIsShow">
                {{ address.pvz }}
            </h6>
            <p class="site-address__label">
                {{ address.address }}
            </p>
        </div>
        <div class="site-address__buttons">
            <button class="site-address__button" @click="onEdit">
                <img
                    class="site-address__button-img"
                    :src="require('@/assets/images/address/edit.svg')"
                    alt="edit"
                />
                <p
                    class="site-address__button-label site-address__button-label--edit"
                >
                    Редактировать
                </p>
            </button>
            <button class="site-address__button" @click="onTrash">
                <img
                    class="site-address__button-img"
                    :src="require('@/assets/images/address/trash.svg')"
                    alt="trash"
                />
                <p
                    class="site-address__button-label site-address__button-label--trash"
                >
                    Удалить
                </p>
            </button>
        </div>
    </div>
</template>

<script>
import { computed, toRefs } from "vue";

export default {
    name: "SiteAddress",
    props: {
        address: {
            type: Object,
            required: true,
        },
    },
    emits: ["edit", "trash"],
    setup(props, { emit }) {
        const { address } = toRefs(props);

        const getAddressViewClass = computed(() => {
            return address.value.pvz ? "site-address--pvz" : "";
        });

        const getPvzIsShow = computed(() => {
            return address.value.pvz;
        });

        const getGroupViewClass = computed(() => {
            return address.value.pvz ? "site-address__group--pvz" : "";
        });

        const onEdit = () => {
            emit("edit", address.value);
        };

        const onTrash = () => {
            emit("trash", address.value);
        };

        return {
            getAddressViewClass,
            getPvzIsShow,
            getGroupViewClass,
            onEdit,
            onTrash,
        };
    },
};
</script>

<style lang="sass">
.site-address
    background: $main-white
    border: 1px solid $grays-gray-200
    border-radius: 20px
    padding: 32px
    display: flex
    align-items: center
    justify-content: space-between
    font-family: 'Manrope', sans-serif

    &.site-address--pvz
        padding: 18px 32px

    .site-address__title
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black
        margin-bottom: 8px

    .site-address__label
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-address__buttons
        display: flex
        grid-column-gap: 24px

    .site-address__button
        background: none
        padding: 0
        outline: none
        cursor: pointer
        border: none
        display: flex
        align-items: center
        justify-content: center
        grid-column-gap: 4px

    .site-address__button-label
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 12px
        line-height: 16px
        display: none

    .site-address__button-label--edit
        color: $grays-gray-400

    .site-address__button-label--trash
        color: $grays-gray-300

    .site-address__button-img
        display: block

@media screen and (max-width: 1440px)
    .site-address
        border-radius: 24px

@media screen and (max-width: 768px)
    .site-address
        flex-direction: column
        align-items: flex-start
        padding: 25px 40px 24px 24px

        &.site-address--pvz
            padding: 25px 40px 24px 24px

        .site-address__group
            margin-bottom: 52px

        .site-address__group--pvz
            margin-bottom: 24px

        .site-address__label
            font-size: 14px
            line-height: 18px

        .site-address__button-label
            display: block
</style>
