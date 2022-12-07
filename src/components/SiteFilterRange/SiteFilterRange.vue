<template>
    <div class="site-filter-range" :class="getIsHiddenClass">
        <button class="site-filter-range__toggle" @click="onToggleIsHidden">
            <p class="site-filter-range__toggle-title">
                {{ title }},
                <span class="site-filter-range__toggle-label">руб</span>
                <span class="site-filter-range__toggle-flag"></span>
            </p>
            <img
                class="site-filter-range__toggle-svg"
                :class="getToggleChevronViewClass"
                src="@/assets/images/filter/chevron-up.svg"
                alt="chevron-up"
            />
        </button>
        <div class="site-filter-range__group" v-if="!isHidden">
            <div class="site-filter-range__inputs">
                <div class="site-filter-range__input">
                    <p class="site-filter-range__input-placeholder">От</p>
                    <input
                        type="number"
                        class="site-filter-range__input-field"
                    />
                    <p class="site-filter-range__input-label">₽</p>
                </div>
                <div class="site-filter-range__input">
                    <p class="site-filter-range__input-placeholder">До</p>
                    <input
                        type="number"
                        class="site-filter-range__input-field"
                    />
                    <p class="site-filter-range__input-label">₽</p>
                </div>
            </div>
            <el-slider
                range
                v-model="currentValue"
                :min="min"
                :max="max"
                :show-tooltip="false"
            />
        </div>
    </div>
</template>

<script>
import { computed, ref, toRefs } from "vue";
import { ElSlider } from "element-plus";
import "element-plus/theme-chalk/el-slider.css";

export default {
    name: "SiteFilterRange",
    components: {
        ElSlider,
    },
    emit: ["change"],
    props: {
        title: {
            type: String,
            default: "",
        },
        id: {
            type: String,
            required: true,
        },
        min: {
            type: Number,
            default: 0,
        },
        max: {
            type: Number,
            default: 100,
        },
        value: {
            type: Array,
            default: () => [0, 1],
        },
    },
    setup(props, { emit }) {
        const { value } = toRefs(props);
        const isHidden = ref(false);

        const currentValue = computed({
            get() {
                return value.value;
            },

            set(newValue) {
                emit("change", newValue);
            },
        });

        const getToggleChevronViewClass = computed(() => {
            return isHidden.value
                ? "site-filter-range__toggle-svg--hidden"
                : "";
        });

        const getIsHiddenClass = computed(() => {
            return isHidden.value ? "site-filter-range--hidden" : "";
        });

        const onToggleIsHidden = () => {
            isHidden.value = !isHidden.value;
        };

        return {
            isHidden,
            currentValue,
            getToggleChevronViewClass,
            getIsHiddenClass,
            onToggleIsHidden,
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
        padding: 16px 20px

    .site-filter-range__toggle
        border: none
        outline: none
        cursor: pointer
        background: none
        display: flex
        align-items: center
        justify-content: space-between
        font-family: 'Manrope', sans-serif
        padding: 0

    .site-filter-range__toggle-title
        font-weight: 700
        font-size: 14px
        line-height: 18px
        color: $main-black

    .site-filter-range__toggle-label
        color: $grays-gray-300

    .site-filter-range__toggle-flag
        width: 8px
        height: 8px
        background: $main-blue
        border-radius: 50%
        display: inline-block
        margin-left: 8px

    .site-filter-range__toggle-svg--hidden
        transform: rotate(180deg)

    .site-filter-range__group
        display: flex
        flex-direction: column
        grid-row-gap: 24px

    .el-slider__runway
        background: $grays-gray-200
        border-radius: 2px
        height: 4px

    .el-slider__bar
        height: 4px
        background: $main-blue
        border-radius: 2px

    .el-slider
        height: 4px

    .el-slider__button-wrapper
        width: 16px
        height: 16px
        background: $main-white
        border: 4px solid $main-blue
        border-radius: 50%
        top: -6px

    .site-filter-range__inputs
        display: grid
        grid-template-columns: repeat(2, 1fr)
        align-items: center
        grid-column-gap: 16px

    .site-filter-range__input
        position: relative

    .site-filter-range__input-field
        background: $main-white
        border: 1px solid $grays-gray-200
        border-radius: 8px
        padding: 10px 28px 10px 32px
        outline: none
        font-family: 'Manrope', sans-serif
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $main-black
        width: 100%

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button
            -webkit-appearance: none
            margin: 0

        -moz-appearance: textfield

    .site-filter-range__input-placeholder
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $grays-gray-400
        position: absolute
        top: 50%
        transform: translateY(-50%)
        left: 12px

    .site-filter-range__input-label
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $grays-gray-300
        position: absolute
        top: 50%
        transform: translateY(-50%)
        right: 12px

@media screen and (max-width: 1440px)
    .site-filter-range
        width: 222px
        grid-column-gap: 30px

        .site-filter-range__group
            flex-direction: column-reverse
            grid-column-gap: 31px
</style>
