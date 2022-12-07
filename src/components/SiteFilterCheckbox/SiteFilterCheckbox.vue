<template>
    <div class="site-filter-checkbox" :class="getIsHiddenClass">
        <button class="site-filter-checkbox__toggle" @click="onToggleIsHidden">
            <p class="site-filter-checkbox__toggle-title">
                {{ title }}
                <span class="site-filter-checkbox__toggle-flag"></span>
            </p>
            <img
                class="site-filter-checkbox__toggle-svg"
                :class="getToggleSvgViewClass"
                src="@/assets/images/filter/chevron-up.svg"
                alt="chevron-up"
            />
        </button>
        <div class="site-filter-checkbox__content" v-if="!isHidden">
            <div class="site-filter-checkbox__search">
                <input
                    class="site-filter-checkbox__search-input"
                    type="text"
                    placeholder="Поиск"
                    v-model="search"
                />
                <img
                    class="site-filter-checkbox__search-svg"
                    src="@/assets/images/filter/search.svg"
                    alt="search"
                />
            </div>
            <ul class="site-filter-checkbox__list">
                <li
                    class="site-filter-checkbox__item"
                    v-for="filter in getFilters"
                    :key="filter.id"
                >
                    <label class="site-filter-checkbox__item-label">
                        <input
                            class="site-filter-checkbox__item-input"
                            type="checkbox"
                            :value="filter.id"
                            @change="onToggleCheckbox(filter)"
                        />
                        <span class="site-filter-checkbox__item-span"></span>
                        <div class="site-filter-checkbox__item-info">
                            <p class="site-filter-checkbox__item-text">
                                {{ filter.name }}
                            </p>
                            <p class="site-filter-checkbox__item-quantity">
                                {{ filter.quantity }}
                            </p>
                        </div>
                    </label>
                </li>
            </ul>
            <button
                class="site-filter-checkbox__show-all"
                v-if="getIsShowAll"
                @click="onToggleIsShowAll"
            >
                <p class="site-filter-checkbox__show-all-label">Показать все</p>
            </button>
        </div>
    </div>
</template>

<script>
import { computed, ref, toRefs, onBeforeUnmount } from "vue";

export default {
    name: "SiteFilterCheckbox",
    props: {
        title: {
            type: String,
            default: "",
        },
        id: {
            type: String,
            requried: true,
        },
        filters: {
            type: Array,
            default: () => [],
        },
    },
    emits: ["changeCheckbox"],
    created() {
        window.addEventListener("resize", this.onChangeResize);
        this.onChangeResize();
    },
    setup(props, { emit }) {
        const screen = {
            small: 768,
        };

        const search = ref("");
        const screenWidth = ref(0);
        const isHidden = ref(false);
        const isShowAll = ref(false);

        const { filters } = toRefs(props);

        onBeforeUnmount(() => {
            window.removeEventListener("resize", onChangeResize);
        });

        const getToggleSvgViewClass = computed(() => {
            return isHidden.value
                ? "site-filter-checkbox__toggle-svg--hidden"
                : "";
        });

        const getFilters = computed(() => {
            if (screenWidth.value > screen.small) {
                return filters.value.filter((item) =>
                    item.name.toLowerCase().includes(search.value)
                );
            }
            return isShowAll.value ? filters.value : filters.value.slice(0, 7);
        });

        const getIsHiddenClass = computed(() => {
            return isHidden.value ? "site-filter-checkbox--hidden" : "";
        });

        const getIsShowAll = computed(() => {
            return screenWidth.value < screen.small && !isShowAll.value;
        });

        const onToggleCheckbox = (value) => {
            emit("changeCheckbox", value);
        };

        const onToggleIsHidden = () => {
            isHidden.value = !isHidden.value;
        };

        const onToggleIsShowAll = () => {
            isShowAll.value = !isShowAll.value;
        };

        const onChangeResize = () => {
            screenWidth.value = window.innerWidth;
        };

        return {
            search,
            isHidden,
            getToggleSvgViewClass,
            getFilters,
            getIsHiddenClass,
            getIsShowAll,
            onToggleCheckbox,
            onToggleIsHidden,
            onToggleIsShowAll,
            onChangeResize,
        };
    },
};
</script>

<style lang="sass">
.site-filter-checkbox
    font-family: 'Manrope', sans-serif
    padding: 16px 20px 16px 20px
    background: $main-white
    box-shadow: $small-down
    border-radius: 24px
    width: 318px
    display: flex
    flex-direction: column
    grid-row-gap: 24px
    position: relative

    &.site-filter-checkbox--hidden
        padding-bottom: 16px

    .site-filter-checkbox__toggle
        display: flex
        align-items: center
        justify-content: space-between
        background: none
        padding: 0
        outline: none
        border: none
        cursor: pointer

    .site-filter-checkbox__toggle-title
        font-family: 'Manrope', sans-serif
        font-weight: 700
        font-size: 14px
        line-height: 18px
        color: $main-black

    .site-filter-checkbox__toggle-flag
        margin-left: 8px
        width: 8px
        height: 8px
        background: $main-blue
        border-radius: 50%
        display: inline-block
        margin-left: 8px

    .site-filter-checkbox__toggle-svg--hidden
        transform: rotate(180deg)

    .site-filter-checkbox__content
        display: flex
        grid-row-gap: 24px
        flex-direction: column

    .site-filter-checkbox__search
        position: relative

    .site-filter-checkbox__search-input
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

    .site-filter-checkbox__search-svg
        position: absolute
        top: 50%
        right: 10px
        transform: translateY(-50%)

    .site-filter-checkbox__list
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

    .site-filter-checkbox__item
        display: flex
        align-items: center

    .site-filter-checkbox__item-label
        display: flex
        align-items: center
        cursor: pointer
        height: 24px
        position: relative
        width: 100%

    .site-filter-checkbox__item-input
        outline: none
        width: 1px
        height: 1px
        overflow: hidden
        position: absolute
        clip: rect(0 0 0 0)

        &:checked + .site-filter-checkbox__item-span::before
            position: absolute
            content: '',
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            width: 25px
            height: 25px
            background-image: url('~@/assets/images/filter/check.svg')
            background-position: center
            background-repeat: no-repeat
            background-color: $main-blue
            border-radius: 4px

    .site-filter-checkbox__item-span
        width: 24px
        height: 24px
        border: 1px solid $grays-gray-300
        border-radius: 4px
        position: absolute

    .site-filter-checkbox__item-info
        display: flex
        align-items: center
        margin-left: 36px
        justify-content: space-between
        font-weight: 400
        font-size: 14px
        line-height: 20px
        width: 100%

    .site-filter-checkbox__item-text
        color: $main-black

    .site-filter-checkbox__item-quantity
        color: $grays-gray-300

    .site-filter-checkbox__show-all
        background: none
        outline: none
        border: none
        padding: 0
        cursor: pointer
        margin-right: auto
        display: none

    .site-filter-checkbox__show-all-label
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $main-blue

@media screen and (max-width: 1440px)
    .site-filter-checkbox
        width: 222px

        .site-filter-checkbox__item-info
            justify-content: flex-start
            grid-column-gap: 5px
</style>
