<template>
    <div class="site-questions">
        <SiteToggle title="Вопросы" :isHidden="isHidden" @toggle="onToggle" />

        <div
            class="site-questions__wrapper"
            :class="getWrapperViewClass"
            v-if="getWrapperIsShow"
        >
            <SiteQuestionsCreate />
            <div class="site-questions__list" v-if="getListIsShow">
                <SiteQuestion
                    class="site-questions__item"
                    v-for="question in questions"
                    :key="question.id"
                    :question="question"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref, toRefs } from "vue";

import SiteToggle from "@/components/site-toggle/site-toggle.vue";
import SiteQuestionsCreate from "@/components/SiteQuestionsCreate/SiteQuestionsCreate.vue";
import SiteQuestion from "@/components/SiteQuestion/SiteQuestion.vue";

export default {
    name: "SiteQuestions",
    components: {
        SiteToggle,
        SiteQuestionsCreate,
        SiteQuestion,
    },
    props: {
        questions: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        const { questions } = toRefs(props);

        const isHidden = ref(false);

        const getWrapperIsShow = computed(() => {
            return !isHidden.value;
        });

        const getWrapperViewClass = computed(() => {
            return !questions.value.length
                ? "site-questions__wrapper--empty"
                : "";
        });

        const getListIsShow = computed(() => {
            return questions.value.length;
        });

        const onToggle = () => {
            isHidden.value = !isHidden.value;
        };

        return {
            isHidden,
            getWrapperIsShow,
            getWrapperViewClass,
            getListIsShow,
            onToggle,
        };
    },
};
</script>

<style lang="sass">
.site-questions
    .site-questions__wrapper
        display: grid
        grid-template-columns: 318px 1fr
        grid-column-gap: 24px
        align-items: flex-start
        margin-top: 64px

    .site-questions__list
        display: flex
        flex-direction: column
        padding: 24px 32px 32px 32px
        background: $main-white
        box-shadow: $small-down
        border-radius: 24px
        grid-row-gap: 10px

    .site-questions__item
        border-bottom: 1px solid $grays-gray-200
        border-radius: 1px
        padding-bottom: 16px

        &:last-child
            border-bottom: none
            padding-bottom: 0

@media screen and (max-width: 1440px)
    .site-questions
        .site-questions__wrapper
            grid-template-columns: 222px 1fr

        .site-questions__wrapper--empty
            grid-template-columns: 318px 1fr

@media screen and (max-width: 1024px)
    .site-questions
        .site-questions__wrapper
            grid-template-columns: 100%
            grid-row-gap: 48px
            margin-top: 48px

@media screen and (max-width: 1024px)
    .site-questions
        .site-questions__wrapper
            grid-row-gap: 32px
            margin-top: 32px
</style>
