<template>
    <div class="site-contacts-appeals">
        <div class="site-contacts-appeals__header">
            <h4 class="site-contacts-appeals__title">Обращения</h4>
            <button
                class="site-contacts-appeals__toggle"
                :class="getToggleViewClass"
                @click="onToggle"
            >
                <img
                    class="site-contacts-appeals__toggle-svg"
                    src="@/assets/images/contacts/chevron.svg"
                    alt="chevron"
                />
            </button>
        </div>
        <div class="site-contacts-appeals__content" v-if="getContentIsShow">
            <p class="site-contacts-appeals__label">
                Ответим на вопросы, связанные с качеством продукции и
                обслуживания
            </p>
            <a class="site-contacts-appeals__link" href="#">
                Напишите нам
                <img
                    class="site-contacts-appeals__link-svg"
                    src="@/assets/images/contacts/arrow-right.svg"
                    alt="arrow-right"
                />
            </a>
        </div>
    </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
    name: "SiteContactsAppeals",
    setup() {
        const toggle = ref(true);

        const getContentIsShow = computed(() => {
            return toggle.value;
        });

        const getToggleViewClass = computed(() => {
            return !toggle.value ? "site-contacts-appeals__toggle--hidden" : "";
        });

        const onToggle = () => {
            toggle.value = !toggle.value;
        };

        return {
            getContentIsShow,
            getToggleViewClass,
            onToggle,
        };
    },
};
</script>

<style lang="sass">
.site-contacts-appeals
    font-family: 'Manrope', sans-serif
    background: #F9F9FD
    border-radius: 20px
    padding: 32px 44px 32px 32px

    .site-contacts-appeals__header
        display: flex
        align-items: center
        justify-content: space-between

    .site-contacts-appeals__title
        font-weight: 700
        font-size: 24px
        line-height: 32px
        color: $main-black

    .site-contacts-appeals__toggle
        width: 32px
        height: 32px
        border-radius: 50%
        border: none
        outline: none
        padding: 0
        display: none
        align-items: center
        justify-content: center
        cursor: pointer
        background: none

    .site-contacts-appeals__toggle--hidden
        transform: rotate(-180deg)

    .site-contacts-appeals__content
        margin-top: 8px

    .site-contacts-appeals__label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-400

    .site-contacts-appeals__link
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-blue
        display: inline-flex
        align-items: center
        grid-column-gap: 4px
        margin-top: 24px

@media screen and (max-width: 1440px)
    .site-contacts-appeals
        padding: 32px

        .site-contacts-appeals__title
            font-size: 22px
            line-height: 28px

@media screen and (max-width: 1024px)
    .site-contacts-appeals
        .site-contacts-appeals__toggle
            display: flex

@media screen and (max-width: 768px)
    .site-contacts-appeals
        padding: 24px

        .site-contacts-appeals__title
            font-size: 20px
            line-height: 26px
</style>
