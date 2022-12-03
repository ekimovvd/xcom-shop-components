<template>
    <div class="site-question">
        <div class="site-question__header">
            <h6 class="site-question__title">
                {{ question.name }}
            </h6>
            <button class="site-question__toggle" @click="onToggle">
                <img
                    class="site-question__toggle-chevron"
                    :class="getToggleChevronHiddenClass"
                    src="@/assets/images/question/chevron.svg"
                    alt="chevron"
                />
            </button>
        </div>
        <div class="site-question__info" v-if="toggle">
            <p class="site-question__label">
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
                ? "site-questions__toggle-chevron--hidden"
                : "";
        });

        const onToggle = () => {
            toggle.value = !toggle.value;
        };

        return {
            toggle,
            getToggleChevronHiddenClass,
            onToggle,
        };
    },
};
</script>

<style lang="sass">
.site-question
    padding: 24px 32px
    background: $grays-gray-100
    border-radius: 24px
    width: 489px
    font-family: 'Manrope', sans-serif

    .site-question__header
        display: flex
        align-items: center
        justify-content: space-between

    .site-question__title
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-question__toggle
        background: none
        border: none
        outline: none
        padding: 0
        cursor: pointer

    .site-questions__toggle-chevron--hidden
        transform: rotate(-180deg)

    .site-question__info
        width: 270px
        margin-top: 16px

    .site-question__label
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $main-black

@media screen and (max-width: 1440px)
    .site-question
        width: 304px
        padding: 24px 16px

        .site-question__title
            font-size: 14px
            line-height: 18px

@media screen and (max-width: 1024px)
    .site-question
        .site-question__info
            width: 100%

@media screen and (max-width: 1024px)
    .site-question
        width: 100%
</style>
