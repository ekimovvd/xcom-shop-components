<template>
    <div class="site-filter-range" :class="getIsHiddenClass">
        <button class="site-filter-range__header" @click="onToggleIsHidden">
            <p class="site-filter-range__header-title">
                Цена, <span class="site-filter-range__text">руб</span>
                <span class="site-filter-range__header-flag"></span>
            </p>
            <img
                class="site-filter-range__header-svg"
                src="@/assets/images/filter/chevron-up.svg"
                alt="chevron-up"
            />
        </button>
        <div class="site-filter-range__content">
            <div class="site-filter-range__inputs">
                <div class="site-filter-range__group">
                    <p
                        class="site-filter-range__input-label site-filter-range__input-label--text"
                    >
                        От
                    </p>
                    <input
                        class="site-filter-range__input"
                        type="number"
                        v-model="min"
                    />
                    <p
                        class="site-filter-range__input-label site-filter-range__input-label--ruble"
                    >
                        ₽
                    </p>
                </div>
                <div class="site-filter-range__group">
                    <p
                        class="site-filter-range__input-label site-filter-range__input-label--text"
                    >
                        До
                    </p>
                    <input
                        class="site-filter-range__input"
                        type="number"
                        v-model="max"
                    />
                    <p
                        class="site-filter-range__input-label site-filter-range__input-label--ruble"
                    >
                        ₽
                    </p>
                </div>
            </div>
            <div class="site-filter-range__slider">
                <div
                    class="site-filter-range__slider-progress"
                    :style="getProgressStyle"
                ></div>
                <div class="site-filter-range__slider-inputs">
                    <input
                        type="range"
                        class="site-filter-range__slider-input"
                        :min="minValue"
                        :max="maxValue"
                        v-model="currentMinValue"
                        @change="onChangeRangeValue"
                    />
                    <input
                        type="range"
                        class="site-filter-range__slider-input"
                        :min="minValue"
                        :max="maxValue"
                        v-model="currentMaxValue"
                        @change="onChangeRangeValue"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref, toRefs } from "vue";

export default {
    name: "site-filter-range",
    emit: ["changeMin", "changeMax"],
    props: {
        id: {
            type: String,
            required: true,
        },
        min: {
            type: Number,
            required: true,
        },
        max: {
            type: Number,
            required: true,
        },
        minValue: {
            type: Number,
            required: true,
        },
        maxValue: {
            type: Number,
            required: true,
        },
    },
    setup(props, { emit }) {
        const { min, max, minValue, maxValue } = toRefs(props);

        const isHidden = ref(false);

        const getIsHiddenClass = computed(() => {
            return isHidden.value ? "site-filter-range--hidden" : "";
        });

        const currentMinValue = computed({
            get() {
                return min.value;
            },

            set(value) {
                emit("changeMin", value);
            },
        });

        const currentMaxValue = computed({
            get() {
                return max.value;
            },

            set(value) {
                emit("changeMax", value);
            },
        });

        const getProgressStyle = computed(() => {
            const percent = 100;

            return {
                left: `${
                    ((min.value !== "" ? min.value : minValue.value) /
                        maxValue.value) *
                    percent
                }%`,
                right: `${
                    percent -
                    ((max.value !== "" ? max.value : maxValue.value) /
                        maxValue.value) *
                        percent
                }%`,
            };
        });

        const onToggleIsHidden = () => {
            isHidden.value = !isHidden.value;
        };

        const onChangeRangeValue = () => {
            if (parseInt(min.value) > parseInt(max.value)) {
                const temporaryValue = max.value;
                emit("changeMin", temporaryValue);
                emit("changeMax", min.value);
            }
        };

        return {
            currentMinValue,
            currentMaxValue,
            getIsHiddenClass,
            getProgressStyle,
            onToggleIsHidden,
            onChangeRangeValue,
        };
    },
};
</script>

<style lang="sass">
.site-filter-range
    font-family: 'Manrope', sans-serif
    padding: 16px 20px 30px 20px
    background: $main-white
    box-shadow: $small-down
    border-radius: 24px
    width: 318px
    display: flex
    flex-direction: column
    grid-row-gap: 24px
    position: relative

    &.site-filter-range--hidden
        padding-bottom: 16px

        .site-filter-range__content
            display: none

        .site-filter-range__header-svg
            transform: rotate(180deg)

    .site-filter-range__header
        display: flex
        align-items: center
        background: none
        padding: 0
        outline: none
        border: none
        cursor: pointer

    .site-filter-range__header-title
        font-weight: 700
        font-size: 14px
        line-height: 18px
        color: $main-black

    .site-filter-range__header-title
        font-family: 'Manrope', sans-serif
        font-weight: 700
        font-size: 14px
        line-height: 18px
        color: $main-black

    .site-filter-range__header-flag
        margin-left: 8px
        width: 8px
        height: 8px
        background: $main-blue
        border-radius: 50%
        display: inline-block

    .site-filter-range__header-svg
        margin-left: auto

    .site-filter-range__text
        color: $grays-gray-300

    .site-filter-range__content
        display: flex
        grid-row-gap: 30px
        flex-direction: column

    .site-filter-range__inputs
        display: flex
        align-items: center
        grid-column-gap: 16px

    .site-filter-range__group
        position: relative

    .site-filter-range__input
        outline: none
        padding: 10px 25px 10px 35px
        background: $main-white
        border: 1px solid $grays-gray-200
        border-radius: 8px
        -moz-appearance: textfield
        width: 131px
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $main-black

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button
            -webkit-appearance: none
            margin: 0

    .site-filter-range__input-label
        position: absolute
        top: 11px

        &.site-filter-range__input-label--text
            left: 12px
            font-weight: 400
            font-size: 12px
            line-height: 16px
            color: $grays-gray-400

        &.site-filter-range__input-label--ruble
            right: 12px
            font-weight: 500
            font-size: 12px
            line-height: 16px
            color: $grays-gray-300


    .site-filter-range__slider
        height: 4px
        border-radius: 2px
        background: $grays-gray-200
        position: relative

    .site-filter-range__slider-progress
        height: 4px
        left: 0
        right: 0
        position: absolute
        border-radius: 2px
        background: $main-blue

    .site-filter-range__slider-inputs
        position: relative
        height: 4px

    .site-filter-range__slider-input
        position: absolute
        top: 50%
        transform: translateY(-50%)
        height: 5px
        width: 100%
        background: none
        -webkit-appearance: none
        pointer-events: none
        margin: 0
        cursor: pointer

        &::-moz-range-thumb
            height: 10px
            width: 10px
            border-radius: 50%
            border: 4px solid $main-blue
            -webkit-appearance: none
            background: $main-white
            pointer-events: auto

        &::moz-range-thumb
            height: 10px
            width: 10px
            border-radius: 50%
            border: 4px solid $main-blue
            -webkit-appearance: none
            background: $main-white
            pointer-events: auto

@media screen and (max-width: 1440px)
    .site-filter-range
        width: 222px
        grid-row-gap: 30px
        padding-bottom: 23px

        .site-filter-range__content
            flex-direction: column-reverse

        .site-filter-range__inputs
            grid-column-gap: 4px

        .site-filter-range__input
            width: 89px
            padding-left: 30px
            padding-right: 25px

@media screen and (max-width: 1024px)
    .site-filter-range
        width: 314px
        padding: 16px 24px 24px 24px

        .site-filter-range__inputs
            grid-column-gap: 16px

        .site-filter-range__input
            width: 125px

@media screen and (max-width: 768px)
    .site-filter-range
        width: 100%
        padding: 16px 0 20px 0
        background: $white
        box-shadow: none
        grid-row-gap: 26px

        .site-filter-range__content
            grid-row-gap: 26px

        .site-filter-range__inputs
            grid-column-gap: 12px

        .site-filter-range__input
            width: 132px
</style>
