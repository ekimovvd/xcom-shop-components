<template>
    <div class="site-filter-radio" :class="getIsHiddenClass">
        <button class="site-filter-radio__toggle" @click="onToggleIsHidden">
            <p class="site-filter-radio__toggle-title">
                Бренд <span class="site-filter-radio__toggle-flag"></span>
            </p>
            <img
                class="site-filter-radio__toggle-svg"
                :class="getToggleSvgViewClass"
                src="@/assets/images/filter/chevron-up.svg"
                alt="chevron-up"
            />
        </button>
        <div class="site-filter-radio__content" v-if="!isHidden">
            <div class="site-filter-radio__search">
                <input
                    class="site-filter-radio__search-input"
                    type="text"
                    placeholder="Поиск"
                    v-model="search"
                />
                <img
                    class="site-filter-radio__search-svg"
                    src="@/assets/images/filter/search.svg"
                    alt="search"
                />
            </div>
            <ul class="site-filter-radio__list">
                <li
                    class="site-filter-radio__item"
                    v-for="filter in getFilters"
                    :key="filter.id"
                >
                    <label class="site-filter-radio__item-label">
                        <input
                            class="site-filter-radio__item-input"
                            type="radio"
                            :value="filter.id"
                            @change="onToggleRadio(filter)"
                        />
                        <span class="site-filter-radio__item-span"></span>
                        <div class="site-filter-radio__item-info">
                            <p class="site-filter-radio__item-text">
                                {{ filter.name }}
                            </p>
                            <p class="site-filter-radio__item-quantity">
                                {{ filter.quantity }}
                            </p>
                        </div>
                    </label>
                </li>
            </ul>
            <button
                class="site-filter-radio__show-all"
                v-if="getIsShowAll"
                @click="onToggleIsShowAll"
            >
                <p class="site-filter-radio__show-all-label">Показать все</p>
            </button>
        </div>
    </div>
</template>

<script>
import { computed, ref, toRefs, onBeforeUnmount } from "vue";

export default {
    name: "SiteFilterRadio",
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
    emits: ["changeRadio"],
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
                ? "site-filter-radio__toggle-svg--hidden"
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
            return isHidden.value ? "site-filter-radio--hidden" : "";
        });

        const getIsShowAll = computed(() => {
            return screenWidth.value < screen.small && !isShowAll.value;
        });

        const onToggleRadio = (value) => {
            emit("changeRadio", value);
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
            onToggleRadio,
            onToggleIsHidden,
            onToggleIsShowAll,
            onChangeResize,
        };
    },
};
</script>

<style lang="sass">
.site-filter-radio
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

  &.site-filter-radio--hidden
      padding-bottom: 16px

  .site-filter-radio__toggle
      display: flex
      align-items: center
      justify-content: space-between
      background: none
      padding: 0
      outline: none
      border: none
      cursor: pointer

  .site-filter-radio__toggle-title
      font-family: 'Manrope', sans-serif
      font-weight: 700
      font-size: 14px
      line-height: 18px
      color: $main-black

  .site-filter-radio__toggle-flag
      margin-left: 8px
      width: 8px
      height: 8px
      background: $main-blue
      border-radius: 50%
      display: inline-block
      margin-left: 8px

  .site-filter-radio__toggle-svg--hidden
      transform: rotate(180deg)

  .site-filter-radio__content
      display: flex
      grid-row-gap: 24px
      flex-direction: column

  .site-filter-radio__search
      position: relative

  .site-filter-radio__search-input
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

  .site-filter-radio__search-svg
      position: absolute
      top: 50%
      right: 10px
      transform: translateY(-50%)

  .site-filter-radio__list
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

  .site-filter-radio__item
      display: flex
      align-items: center

  .site-filter-radio__item-label
      display: flex
      align-items: center
      cursor: pointer
      height: 24px
      position: relative
      width: 100%

  .site-filter-radio__item-input
      outline: none
      width: 1px
      height: 1px
      overflow: hidden
      position: absolute
      clip: rect(0 0 0 0)

      &:checked + .site-filter-radio__item-span
        border: 5px solid $main-blue

  .site-filter-radio__item-span
      width: 24px
      height: 24px
      border: 1px solid $grays-gray-300
      border-radius: 4px
      position: absolute
      border-radius: 50%

  .site-filter-radio__item-info
      display: flex
      align-items: center
      margin-left: 36px
      justify-content: space-between
      font-weight: 400
      font-size: 14px
      line-height: 20px
      width: 100%

  .site-filter-radio__item-text
      color: $main-black

  .site-filter-radio__item-quantity
      color: $grays-gray-300

  .site-filter-radio__show-all
      background: none
      outline: none
      border: none
      padding: 0
      cursor: pointer
      margin-right: auto
      display: none

  .site-filter-radio__show-all-label
      font-family: 'Manrope', sans-serif
      font-weight: 500
      font-size: 12px
      line-height: 16px
      color: $main-blue

@media screen and (max-width: 1440px)
  .site-filter-radio
      width: 222px

      .site-filter-radio__item-info
          justify-content: flex-start
          grid-column-gap: 5px
</style>
