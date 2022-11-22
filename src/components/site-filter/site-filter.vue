<template>
    <div class="site-filter" :class="getIsHiddenClass">
        <button class="site-filter__header" @click="onToggleIsHidden">
            <p class="site-filter__header-title">
                Бренд <span class="site-filter__header-flag"></span>
            </p>
            <img
                class="site-filter__header-svg"
                src="@/assets/images/filter/chevron-up.svg"
                alt="chevron-up"
            />
        </button>
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
            <ul class="site-filter__list">
                <li
                    class="site-filter__item"
                    v-for="item in getList"
                    :key="item.id"
                >
                    <label class="site-filter__item-label">
                        <input
                            class="site-filter__item-input site-filter__item-input--checkbox"
                            type="checkbox"
                            :value="item.id"
                            @change="onToggleCheckbox(item)"
                        />
                        <span
                            class="site-filter__item-span site-filter__item-span--checkbox"
                        ></span>
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
                    </label>
                </li>
            </ul>
            <!-- <ul class="site-filter__list">
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
                    </label>
                </li>
            </ul> -->
            <button
                class="site-filter__show-all"
                v-if="getIsShowAll"
                @click="onToggleIsShowAll"
            >
                <p class="site-filter__show-all-label">Показать все</p>
            </button>
            <div class="site-filter__rectangel"></div>
        </div>
    </div>
</template>

<script>
import { computed, reactive, ref, toRefs, onBeforeUnmount } from "vue";

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
    created() {
        window.addEventListener("resize", this.onChangeResize);
        this.onChangeResize();
    },
    setup(props, { emit }) {
        const widthSmallScreen = 768;

        const search = ref("");
        const isHidden = ref(false);
        const isShowAll = ref(false);

        const screen = reactive({
            width: 0,
            height: 0,
        });
        const { list } = toRefs(props);

        onBeforeUnmount(() => {
            window.removeEventListener("resize", onChangeResize);
        });

        const getList = computed(() => {
            if (screen.width > widthSmallScreen) {
                return list.value.filter((item) =>
                    item.name.toLowerCase().includes(search.value)
                );
            }
            return isShowAll.value ? list.value : list.value.slice(0, 7);
        });

        const getIsHiddenClass = computed(() => {
            return isHidden.value ? "site-filter--hidden" : "";
        });

        const getIsShowAll = computed(() => {
            return screen.width < widthSmallScreen && !isShowAll.value;
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

        const onToggleIsShowAll = () => {
            isShowAll.value = !isShowAll.value;
        };

        const onChangeResize = () => {
            screen.width = window.innerWidth;
            screen.height = window.innerHeight;
        };

        return {
            screen,
            search,
            isHidden,
            getList,
            getIsHiddenClass,
            getIsShowAll,
            onToggleCheckbox,
            onToggleRadio,
            onToggleIsHidden,
            onToggleIsShowAll,
            onChangeResize,
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

        .site-filter__header-svg
            transform: rotate(180deg)

    .site-filter__header
        display: flex
        align-items: center
        background: none
        padding: 0
        outline: none
        border: none
        cursor: pointer

    .site-filter__header-title
        font-family: 'Manrope', sans-serif
        font-weight: 700
        font-size: 14px
        line-height: 18px
        color: $main-black

    .site-filter__header-flag
        margin-left: 8px
        width: 8px
        height: 8px
        background: $main-blue
        border-radius: 50%
        display: inline-block

    .site-filter__header-svg
        margin-left: auto

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
        width: 100%

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
        margin-left: 36px
        justify-content: space-between
        font-weight: 400
        font-size: 14px
        line-height: 20px
        width: 100%

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

    .site-filter__show-all
        background: none
        outline: none
        border: none
        padding: 0
        cursor: pointer
        margin-right: auto
        display: none

    .site-filter__show-all-label
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $main-blue

@media screen and (max-width: 1440px)
    .site-filter
        width: 222px

        .site-filter__item-info
            justify-content: flex-start
            grid-column-gap: 5px

@media screen and (max-width: 1024px)
    .site-filter
        width: 314px
        padding: 16px 24px 0 24px

        .site-filter__list
            max-height: 335px

@media screen and (max-width: 768px)
    .site-filter
        width: 100%
        padding: 16px 0
        grid-row-gap: 16px
        background: $main-white
        box-shadow: none

        .site-footer__search
            display: none

        .site-filter__list
            max-height: 100%
            flex-wrap: wrap
            flex-direction: row
            grid-gap: 8px

        .site-filter__item-label
            width: auto
            padding: 8px 12px
            height: 32px
            background: $main-white

        .site-filter__item-span
            width: 100%
            height: 100%
            border: 1px solid $grays-gray-100
            top: 0
            right: 0
            bottom: 0
            left: 0

            &.site-filter__item-span--radio,
            &.site-filter__item-span--checkbox
                border-radius: 30px

        .site-filter__item-input
            &.site-filter__item-input--checkbox
                &:checked + .site-filter__item-span--checkbox
                    border: 1px solid $main-blue

                    &::before
                        width: 0
                        height: 0
                        background-image: none

            &.site-filter__item-input--radio
                &:checked + .site-filter__item-span--radio
                    border: 1px solid $main-blue

        .site-filter__item-info
            font-size: 12px
            line-height: 16px
            margin-left: 0

        .site-filter__rectangel
            display: none

        .site-filter__show-all
            display: block
</style>
