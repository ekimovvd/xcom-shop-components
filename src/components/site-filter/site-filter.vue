<template>
    <div class="site-filter">
        <div class="site-filter__header">
            <h6 class="site-filter__title">Бренд</h6>
            <button class="site-filter__toggle">
                <img
                    class="site-footer__toggle-svg"
                    src="@/assets/images/filter/chevron-up.svg"
                    alt="chevron-up"
                />
            </button>
        </div>
        <div class="site-footer__search">
            <input
                class="site-footer__search-input"
                type="text"
                placeholder="Поиск"
            />
            <img
                class="site-footer__search-svg"
                src="@/assets/images/filter/search.svg"
                alt="search"
            />
        </div>
        <ul class="site-filter__checkboxes">
            <li
                class="site-filter__checkbox"
                v-for="value in values"
                :key="value.id"
            >
                <label class="site-filter__checkbox-label">
                    <input
                        class="site-filter__checkbox-input"
                        type="checkbox"
                        @change="onToggleCheckbox(value)"
                    />
                    <span class="site-filter__checkbox-span"></span>
                </label>
                <div class="site-filter__checkbox-info">
                    <p
                        class="site-filter__checkbox-text site-filter__checkbox-text--name"
                    >
                        {{ value.name }}
                    </p>
                    <p
                        class="site-filter__checkbox-text site-filter__checkbox-text--quantity"
                    >
                        {{ value.quantity }}
                    </p>
                </div>
            </li>
        </ul>
        <div class="site-filter__rectangel"></div>
    </div>
</template>

<script>
export default {
    name: "site-filter",
    props: {
        id: {
            type: String,
            requried: true,
        },
        values: {
            type: Array,
            default: () => [],
        },
    },
    emits: ["toggleCheckbox"],
    setup(_, { emit }) {
        const onToggleCheckbox = (value) => {
            emit("toggleCheckbox", value);
        };

        return {
            onToggleCheckbox,
        };
    },
};
</script>

<style lang="sass">
.site-filter
    font-family: 'Manrope', sans-serif
    padding: 16px 20px 0 20px
    background: $main-white
    box-shadow: $small-down
    border-radius: 24px
    width: 318px
    display: flex
    flex-direction: column
    grid-row-gap: 24px
    position: relative

    .site-filter__header
        display: flex
        align-items: center
        justify-content: space-between

    .site-filter__title
        font-weight: 700
        font-size: 14px
        line-height: 18px
        color: $main-black

    .site-filter__toggle
        background: none
        padding: 0
        outline: none
        border: none
        cursor: pointer

    .site-footer__search
        position: relative

    .site-footer__search-input
        background: $main-white
        border: 1px solid $grays-gray-200
        border-radius: 8px
        padding: 10px 30px 10px 12px
        outline: none
        width: 100%
        font-family: 'Manrope', sans-serif
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $grays-gray-400

        &::placeholder
            opacity: 1
            font-size: 12px

    .site-footer__search-svg
        position: absolute
        top: 50%
        right: 10px
        transform: translateY(-50%)

    .site-filter__checkboxes
        display: flex
        flex-direction: column
        grid-row-gap: 12px
        max-height: 227px
        overflow-y: auto
        scrollbar-color: $grays-gray-100 transparent

        &::-webkit-scrollbar
            width: 6px

        &::-webkit-scrollbar-track
            background: none

        &::-webkit-scrollbar-thumb
            background: $grays-gray-100
            border-radius: 4px
            height: 45px

    .site-filter__checkbox
        display: flex
        align-items: center

    .site-filter__checkbox-label
        display: flex
        align-items: center
        cursor: pointer
        height: 24px
        position: relative

    .site-filter__checkbox-input
        outline: none
        width: 1px
        height: 1px
        overflow: hidden
        position: absolute
        clip: rect(0 0 0 0)

        &:checked + .site-filter__checkbox-span::before
            content: '',
            background-image: url('~@/assets/images/filter/check.svg')
            background-position: center
            background-repeat: no-repeat
            width: 25px
            height: 25px
            background-color: $main-blue
            border-radius: 4px
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)

    .site-filter__checkbox-span
        width: 24px
        height: 24px
        border: 1px solid $grays-gray-300
        position: absolute
        border-radius: 4px

    .site-filter__checkbox-info
        display: flex
        align-items: center
        justify-content: space-between
        font-weight: 400
        font-size: 14px
        line-height: 20px
        width: 100%
        margin-left: 36px

    .site-filter__checkbox-text
        &.site-filter__checkbox-text--name
            color: $main-black

        &.site-filter__checkbox-text--quantity
            color: $grays-gray-300

    .site-filter__rectangel
        position: absolute
        bottom: 0
        left: 0
        right: 0
        z-index: 100
        height: 24px
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)
        border-radius: 0 0 24px 24px

@media screen and (max-width: 1440px)
    .site-filter
        width: 222px

        .site-filter__checkbox-info
            justify-content: flex-start
            grid-column-gap: 5px
</style>
