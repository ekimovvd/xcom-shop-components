<template>
    <div class="site-frequent-question">
        <div class="site-frequent-question__header">
            <h6 class="site-frequent-question__title">
                {{ question.name }}
            </h6>
            <button class="site-frequent-question__toggle" @click="onToggle">
                <img
                    class="site-frequent-question__toggle-chevron"
                    :class="getToggleChevronHiddenClass"
                    src="@/assets/images/question/chevron.svg"
                    alt="chevron"
                />
            </button>
        </div>
        <div class="site-frequent-question__info" v-if="getContentIsShow">
            <p class="site-frequent-question__label">
                {{ question.description }}
            </p>
        </div>
    </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
    name: "SiteQuestion",
    props: {
        question: {
            type: Object,
            required: true,
        },
    },
    setup() {
        const toggle = ref(true);

        const getToggleChevronHiddenClass = computed(() => {
            return !toggle.value
                ? "site-frequent-questions__toggle-chevron--hidden"
                : "";
        });

        const getContentIsShow = computed(() => {
            return toggle.value;
        });

        const onToggle = () => {
            toggle.value = !toggle.value;
        };

        return {
            toggle,
            getToggleChevronHiddenClass,
            getContentIsShow,
            onToggle,
        };
    },
};
</script>

<style lang="sass">
.site-frequent-question
    padding: 24px 32px
    background: $grays-gray-100
    border-radius: 24px
    width: 489px
    font-family: 'Manrope', sans-serif

    .site-frequent-question__header
        display: flex
        align-items: center
        justify-content: space-between

    .site-frequent-question__title
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-frequent-question__toggle
        background: none
        border: none
        outline: none
        padding: 0
        cursor: pointer

    .site-frequent-questions__toggle-chevron--hidden
        transform: rotate(-180deg)

    .site-frequent-question__info
        width: 270px
        margin-top: 16px

    .site-frequent-question__label
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $main-black

@media screen and (max-width: 1440px)
    .site-frequent-question
        width: 304px
        padding: 24px 16px

        .site-frequent-question__title
            font-size: 14px
            line-height: 18px

@media screen and (max-width: 1024px)
    .site-frequent-question
        .site-frequent-question__info
            width: 100%

@media screen and (max-width: 768px)
    .site-frequent-question
        width: 100%
</style>
