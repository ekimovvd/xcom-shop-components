<template>
    <div class="site-counterparty">
        <div class="site-counterparty__info">
            <h5 class="site-counterparty__title">
                {{ counterparty.name }}
            </h5>
            <p class="site-counterparty__label">
                {{ counterparty.inn }}
            </p>
        </div>
        <div class="site-counterparty__buttons">
            <button class="site-counterparty__button" @click="onEdit">
                <img
                    class="site-counterparty__button-icon"
                    src="@/assets/images/counterparty/edit.svg"
                    alt="edit"
                />
                <p
                    class="site-counterparty__button-label site-counterparty__button-label--edit"
                >
                    Редактировать
                </p>
            </button>
            <button class="site-counterparty__button" @click="onTrash">
                <img
                    class="site-counterparty__button-icon"
                    src="@/assets/images/counterparty/trash.svg"
                    alt="trash"
                />
                <p
                    class="site-counterparty__button-label site-counterparty__button-label--edit"
                >
                    Удалить
                </p>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteCounterparty",
    props: {
        counterparty: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="sass">
.site-counterparty
    background: $main-white
    border: 1px solid $grays-gray-200
    border-radius: 20px
    padding: 18px 24px
    font-family: 'Manrope', sans-serif
    display: flex
    align-items: center
    justify-content: space-between

    .site-counterparty__title
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black
        margin-bottom: 8px

    .site-counterparty__label
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-counterparty__buttons
        display: flex
        align-items: center
        grid-column-gap: 24px

    .site-counterparty__button
        display: flex
        align-items: center
        justify-content: center
        grid-column-gap: 4px
        background: none
        outline: none
        cursor: pointer
        padding: 0
        border: none

    .site-counterparty__button-label
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 12px
        line-height: 16px
        display: none

    .site-counterparty__button-label--edit
        color: $grays-gray-400

    .site-counterparty__button-label--trash
        color: $grays-gray-300

@media screen and (max-width: 1440px)
    .site-counterparty
        border-radius: 24px

@media screen and (max-width: 768px)
    .site-counterparty
        flex-direction: column
        align-items: flex-start
        grid-row-gap: 34px
        padding-right: 40px

        .site-counterparty__button-label
            display: block
</style>
