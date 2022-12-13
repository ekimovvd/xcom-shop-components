<template>
    <div class="site-contacts-store">
        <div class="site-contacts-store__header">
            <h4 class="site-contacts-store__title">Интернет-магазин</h4>
            <button
                class="site-contacts-store__toggle"
                :class="getToggleViewClass"
                @click="onToggle"
            >
                <img
                    class="site-contacts-store__toggle-svg"
                    src="@/assets/images/contacts/chevron.svg"
                    alt="chevron"
                />
            </button>
        </div>
        <div class="site-contacts-store__content" v-if="getContentIsShow">
            <p class="site-contacts-store__label">
                С 9:00 до 22:00, без выходных ответим на вопросы и примем заказ
            </p>
            <div class="site-contacts-store__links">
                <a class="site-contacts-store__link" href="tel:+78002000069">
                    <img
                        class="site-contacts-store__link-svg"
                        src="@/assets/images/contacts/phone.svg"
                        alt="phone"
                    />
                    8 (800) 200-00-69
                </a>
                <a class="site-contacts-store__link" href="tel:+78002000069">
                    <img
                        class="site-contacts-store__link-svg"
                        src="@/assets/images/contacts/phone.svg"
                        alt="phone"
                    />
                    8 (800) 200-00-69
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
    name: "SiteContactsStore",
    setup() {
        const toggle = ref(true);

        const getContentIsShow = computed(() => {
            return toggle.value;
        });

        const getToggleViewClass = computed(() => {
            return !toggle.value;
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
.site-contacts-store
    font-family: 'Manrope', sans-serif
    background: #F9F9FD
    border-radius: 20px
    padding: 32px 44px 58px 32px

    .site-contacts-store__header
        display: flex
        align-items: center
        justify-content: space-between

    .site-contacts-store__title
        font-weight: 700
        font-size: 24px
        line-height: 32px
        color: $main-black

    .site-contacts-store__toggle
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

    .site-contacts-store__toggle--hidden
        transform: rotate(-180deg)

    .site-contacts-store__content
        margin-top: 8px

    .site-contacts-store__label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-400
        margin-bottom: 24px

    .site-contacts-store__links
        display: inline-flex
        flex-direction: column
        grid-row-gap: 12px

    .site-contacts-store__link
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-blue
        display: inline-flex
        align-items: center
        grid-column-gap: 12px

@media screen and (max-width: 1440px)
    .site-contacts-store
        padding: 32px

        .site-contacts-store__title
            font-size: 22px
            line-height: 28px

        .site-contacts-store__content
            margin-top: 16px

        .site-contacts-store__label
            margin-bottom: 16px

@media screen and (max-width: 1024px)
    .site-contacts-store
        .site-contacts-store__toggle
            display: flex

@media screen and (max-width: 768px)
    .site-contacts-store
        padding: 24px

        .site-contacts-store__title
            font-size: 20px
            line-height: 26px
</style>
