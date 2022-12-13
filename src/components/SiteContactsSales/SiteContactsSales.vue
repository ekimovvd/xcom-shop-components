<template>
    <div class="site-contacts-sales">
        <div class="site-contacts-sales__header">
            <h4 class="site-contacts-sales__title">Корпоративные продажи</h4>
            <button
                class="site-contacts-sales__toggle"
                :class="getToggleViewClass"
                @click="onToggle"
            >
                <img
                    class="site-contacts-sales__toggle-svg"
                    src="@/assets/images/contacts/chevron.svg"
                    alt="chevron"
                />
            </button>
        </div>
        <div class="site-contacts-sales__content" v-if="getContentIsShow">
            <p class="site-contacts-sales__label">
                Будни С 9:00 до 18:00. Обслуживание юридических лиц, специальные
                услуги и особые условия приобретения техники для корпоративных
                клиентов
            </p>
            <div class="site-contacts-sales__links">
                <a class="site-contacts-sales__link" href="tel:+78002000069">
                    <img
                        class="site-contacts-sales__link-svg"
                        src="@/assets/images/contacts/phone.svg"
                        alt="phone"
                    />
                    <p class="site-contacts-sales__link-label">
                        8 (800) 200-00-69 -
                        <span class="site-contacts-sales__link-description"
                            >Звонок по России бесплатно</span
                        >
                    </p>
                </a>
                <a class="site-contacts-sales__link" href="tel:+78467999669">
                    <img
                        class="site-contacts-sales__link-svg"
                        src="@/assets/images/contacts/phone.svg"
                        alt="phone"
                    />
                    8 (846) 799-96-69
                </a>
                <a
                    class="site-contacts-sales__link"
                    href="mailto:shop-tender@xcom.ru"
                >
                    <img
                        class="site-contacts-sales__link-svg"
                        src="@/assets/images/contacts/mail.svg"
                        alt="mail"
                    />
                    <p class="site-contacts-sales__link-label">
                        shop-tender@xcom.ru -
                        <span class="site-contacts-sales__link-description">
                            Госзакупки малого бизнеса
                        </span>
                    </p>
                </a>
                <div class="site-contacts-sales__location">
                    <img
                        class="site-contacts-sales__location-svg"
                        src="@/assets/images/contacts/location.svg"
                        alt="location"
                    />
                    <p class="site-contacts-sales__location-label">
                        41701, г. Долгопрудный, Транспортный проезд, 6а
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, ref } from "vue";

export default {
    name: "SiteContactsSales",
    setup() {
        const toggle = ref(true);

        const getToggleViewClass = computed(() => {
            return !toggle.value ? "site-contacts-sales__toggle--hidden" : "";
        });

        const getContentIsShow = computed(() => {
            return toggle.value;
        });

        const onToggle = () => {
            toggle.value = !toggle.value;
        };

        return {
            getToggleViewClass,
            getContentIsShow,
            onToggle,
        };
    },
};
</script>

<style lang="sass">
.site-contacts-sales
    font-family: 'Manrope', sans-serif
    background: #F9F9FD
    border-radius: 20px
    padding: 32px 44px 160px 32px

    .site-contacts-sales__header
        display: flex
        align-items: center
        justify-content: space-between

    .site-contacts-sales__title
        font-weight: 700
        font-size: 24px
        line-height: 32px
        color: $main-black

    .site-contacts-sales__toggle
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

    .site-contacts-sales__toggle--hidden
        transform: rotate(-180deg)

    .site-contacts-sales__content
        margin-top: 12px

    .site-contacts-sales__label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-400

    .site-contacts-sales__label
        margin-bottom: 16px

    .site-contacts-sales__links
        display: flex
        flex-direction: column
        align-items: flex-start
        grid-row-gap: 14px

    .site-contacts-sales__link
        display: inline-flex
        align-items: center

    .site-contacts-sales__link-svg
        margin-right: 12px

    .site-contacts-sales__link-description
        color: $main-black

    .site-contacts-sales__location
        display: flex
        align-items: center
        grid-column-gap: 12px

    .site-contacts-sales__location-label
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-blue

@media screen and (max-width: 1440px)
    .site-contacts-sales
        padding: 32px 32px 150px 32px

        .site-contacts-sales__title
            font-size: 22px
            line-height: 28px

@media screen and (max-width: 1024px)
    .site-contacts-sales
        padding: 32px

        .site-contacts-sales__toggle
            display: flex

@media screen and (max-width: 768px)
    .site-contacts-sales
        padding: 24px

        .site-contacts-sales__title
            font-size: 20px
            line-height: 26px
</style>
