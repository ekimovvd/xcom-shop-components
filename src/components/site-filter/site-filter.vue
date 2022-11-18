<template>
    <div class="site-filter" :class="getIsHiddenClass">
        <div class="site-filter__header">
            <h6 class="site-filter__title">Бренд</h6>
            <button class="site-filter__toggle" @click="onToggleIsHidden">
                <img
                    class="site-filter__toggle-svg"
                    src="@/assets/images/filter/chevron-up.svg"
                    alt="chevron-up"
                />
            </button>
        </div>
        <div class="site-filter__content">
            <div class="site-footer__search">
                <input
                    class="site-footer__search-input"
                    type="text"
                    placeholder="Поиск"
                    v-model="search"
                />
                <img
                    class="site-footer__search-svg"
                    src="@/assets/images/filter/search.svg"
                    alt="search"
                />
            </div>
            <!-- <ul class="site-filter__list">
                <li
                    class="site-filter__item"
                    v-for="item in getList"
                    :key="item.id"
                >
                    <label class="site-filter__item-label">
                        <input
                            class="site-filter__item-input site-filter__item-input--checkbox"
                            type="checkbox"
                            @change="onToggleCheckbox(item)"
                        />
                        <span
                            class="site-filter__item-span site-filter__item-span--checkbox"
                        ></span>
                    </label>
                    <div class="site-filter__item-info">
                        <p
                            class="site-filter__item-text site-filter__item-text--name"
                        >
                            {{ item.name }}
                        </p>
                        <p
                            class="site-filter__item-text site-filter__item-text--quantity"
                        >
                            {{ item.quantity }}
                        </p>
                    </div>
                </li>
            </ul> -->
            <ul class="site-filter__list">
                <li
                    class="site-filter__item"
                    v-for="item in getList"
                    :key="item.id"
                >
                    <label class="site-filter__item-label">
                        <input
                            class="site-filter__item-input site-filter__item-input--radio"
                            type="radio"
                            :value="item.id"
                            @change="onToggleRadio(item)"
                        />
                        <span
                            class="site-filter__item-span site-filter__item-span--radio"
                        ></span>
                    </label>
                    <div class="site-filter__item-info">
                        <p
                            class="site-filter__item-text site-filter__item-text--name"
                        >
                            {{ item.name }}
                        </p>
                        <p
                            class="site-filter__item-text site-filter__item-text--quantity"
                        >
                            {{ item.quantity }}
                        </p>
                    </div>
                </li>
            </ul>
            <div class="site-filter__rectangel"></div>
        </div>
    </div>
</template>

<script>
import { computed, ref, toRefs } from "vue";

export default {
    name: "site-filter",
    props: {
        id: {
            type: String,
            requried: true,
        },
        list: {
            type: Array,
            default: () => [],
        },
    },
    emits: ["toggleCheckbox", "toggleRadio"],
    setup(props, { emit }) {
        const search = ref("");
        const isHidden = ref(false);

        const { list } = toRefs(props);

        const getList = computed(() => {
            return list.value.filter((item) =>
                item.name.toLowerCase().includes(search.value)
            );
        });

        const getIsHiddenClass = computed(() => {
            return isHidden.value ? "site-filter--hidden" : "";
        });

        const onToggleCheckbox = (value) => {
            emit("toggleCheckbox", value);
        };

        const onToggleRadio = (value) => {
            emit("toggleRadio", value);
        };

        const onToggleIsHidden = () => {
            isHidden.value = !isHidden.value;
        };

        return {
            search,
            isHidden,
            getList,
            getIsHiddenClass,
            onToggleCheckbox,
            onToggleRadio,
            onToggleIsHidden,
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

    &.site-filter--hidden
        padding-bottom: 16px

        .site-filter__content
            display: none

        .site-filter__toggle-svg
            transform: rotate(180deg)

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

    .site-filter__content
        display: flex
        grid-row-gap: 24px
        flex-direction: column

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

    .site-filter__list
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

    .site-filter__item
        display: flex
        align-items: center

    .site-filter__item-label
        display: flex
        align-items: center
        cursor: pointer
        height: 24px
        position: relative

    .site-filter__item-input
        outline: none
        width: 1px
        height: 1px
        overflow: hidden
        position: absolute
        clip: rect(0 0 0 0)

        &:checked + .site-filter__item-span::before
            position: absolute
            content: '',
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)

        &.site-filter__item-input--checkbox
            &:checked + .site-filter__item-span--checkbox::before
                width: 25px
                height: 25px
                background-image: url('~@/assets/images/filter/check.svg')
                background-position: center
                background-repeat: no-repeat
                background-color: $main-blue
                border-radius: 4px

        &.site-filter__item-input--radio
            &:checked + .site-filter__item-span--radio
                border: 5px solid $main-blue

    .site-filter__item-span
        width: 24px
        height: 24px
        border: 1px solid $grays-gray-300
        position: absolute

        &.site-filter__item-span--checkbox
            border-radius: 4px

        &.site-filter__item-span--radio
            border-radius: 50%

    .site-filter__item-info
        display: flex
        align-items: center
        justify-content: space-between
        font-weight: 400
        font-size: 14px
        line-height: 20px
        width: 100%
        margin-left: 36px

    .site-filter__item-text
        &.site-filter__item-text--name
            color: $main-black

        &.site-filter__item-text--quantity
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

        .site-filter__item-info
            justify-content: flex-start
            grid-column-gap: 5px
</style>
