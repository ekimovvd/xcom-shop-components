<template>
    <div class="site-contacts">
        <div class="site-contacts__block">
            <div class="site-contacts__contact site-contacts__contact--appeals">
                <div class="site-contacts__header">
                    <h4 class="site-contacts__title">Обращения</h4>
                    <button
                        class="site-contacts__toggle"
                        :class="onToggleHiddenClass('appeals')"
                        @click="onToggle('appeals')"
                    >
                        <img
                            class="site-contacts__toggle-svg"
                            src="@/assets/images/contacts/chevron.svg"
                            alt="chevron"
                        />
                    </button>
                </div>
                <div
                    class="site-contacts__content site-contacts__content--appeals"
                    v-if="toggle.appeals"
                >
                    <p
                        class="site-contacts__label site-contacts__label--appeals"
                    >
                        Ответим на вопросы, связанные с качеством продукции и
                        обслуживания
                    </p>
                    <a class="site-contacts__link" href="#">
                        Напишите нам
                        <img
                            class="site-contacts__link-svg site-contacts__link-svg--right"
                            src="@/assets/images/contacts/arrow-right.svg"
                            alt="arrow-right"
                        />
                    </a>
                </div>
            </div>
            <div class="site-contacts__contact site-contacts__contact--store">
                <div class="site-contacts__header">
                    <h4 class="site-contacts__title">Интернет-магазин</h4>
                    <button
                        class="site-contacts__toggle"
                        :class="onToggleHiddenClass('store')"
                        @click="onToggle('store')"
                    >
                        <img
                            class="site-contacts__toggle-svg"
                            src="@/assets/images/contacts/chevron.svg"
                            alt="chevron"
                        />
                    </button>
                </div>
                <div
                    class="site-contacts__content site-contacts__content--store"
                    v-if="toggle.store"
                >
                    <p class="site-contacts__label site-contacts__label--store">
                        С 9:00 до 22:00, без выходных ответим на вопросы и
                        примем заказ
                    </p>
                    <div class="site-contacts__links">
                        <a class="site-contacts__link" href="tel:+78002000069">
                            <img
                                class="site-contacts__link-svg site-contacts__link-svg--left"
                                src="@/assets/images/contacts/phone.svg"
                                alt="phone"
                            />
                            8 (800) 200-00-69
                        </a>
                        <a class="site-contacts__link" href="tel:+78002000069">
                            <img
                                class="site-contacts__link-svg site-contacts__link-svg--left"
                                src="@/assets/images/contacts/phone.svg"
                                alt="phone"
                            />
                            8 (800) 200-00-69
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="site-contacts__contact site-contacts__contact--sales">
            <div class="site-contacts__header">
                <h4 class="site-contacts__title">Корпоративные продажи</h4>
                <button
                    class="site-contacts__toggle"
                    :class="onToggleHiddenClass('sales')"
                    @click="onToggle('sales')"
                >
                    <img
                        class="site-contacts__toggle-svg"
                        src="@/assets/images/contacts/chevron.svg"
                        alt="chevron"
                    />
                </button>
            </div>
            <div
                class="site-contacts__content site-contacts__content--sales"
                v-if="toggle.sales"
            >
                <p class="site-contacts__label site-contacts__label--sales">
                    Будни С 9:00 до 18:00. Обслуживание юридических лиц,
                    специальные услуги и особые условия приобретения техники для
                    корпоративных клиентов
                </p>
                <div class="site-contacts__links">
                    <div class="site-contacts__group-link">
                        <a class="site-contacts__link" href="tel:+78002000069">
                            <img
                                class="site-contacts__link-svg site-contacts__link-svg--left"
                                src="@/assets/images/contacts/phone.svg"
                                alt="phone"
                            />
                            <p class="site-contacts__link-label">
                                8 (800) 200-00-69 -
                                <span class="site-contacts__link-description"
                                    >Звонок по России бесплатно</span
                                >
                            </p>
                        </a>
                    </div>
                    <a class="site-contacts__link" href="tel:+78467999669">
                        <img
                            class="site-contacts__link-svg site-contacts__link-svg--left"
                            src="@/assets/images/contacts/phone.svg"
                            alt="phone"
                        />
                        8 (846) 799-96-69
                    </a>
                    <div class="site-contacts__group-link">
                        <a
                            class="site-contacts__link"
                            href="mailto:shop-tender@xcom.ru"
                        >
                            <img
                                class="site-contacts__link-svg site-contacts__link-svg--left"
                                src="@/assets/images/contacts/mail.svg"
                                alt="mail"
                            />
                            <p class="site-contacts__link-label">
                                shop-tender@xcom.ru -
                                <span class="site-contacts__link-description">
                                    Госзакупки малого бизнеса
                                </span>
                            </p>
                        </a>
                    </div>
                    <div class="site-contacts__location">
                        <img
                            class="site-contacts__location-svg"
                            src="@/assets/images/contacts/location.svg"
                            alt="location"
                        />
                        <p class="site-contacts__location-label">
                            41701, г. Долгопрудный, Транспортный проезд, 6а
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";

export default {
    name: "SiteContacts",
    setup() {
        const toggle = reactive({
            appeals: true,
            store: true,
            sales: true,
        });

        const onToggle = (type) => {
            toggle[type] = !toggle[type];
        };

        const onToggleHiddenClass = (type) => {
            return !toggle[type] ? "site-contacts__toggle--hidden" : "";
        };

        return {
            toggle,
            onToggle,
            onToggleHiddenClass,
        };
    },
};
</script>

<style lang="sass">
.site-contacts
    font-family: 'Manrope', sans-serif
    display: flex
    grid-column-gap: 24px

    .site-contacts__block
        display: flex
        flex-direction: column
        grid-row-gap: 24px

    .site-contacts__contact
        width: 660px
        background: #F9F9FD
        border-radius: 20px
        padding: 32px 44px 32px 32px

    .site-contacts__contact--appeals
        height: 166px

    .site-contacts__contact--store
        height: 234px

    .site-contacts__header
        display: flex
        align-items: center
        justify-content: space-between

    .site-contacts__title
        font-weight: 700
        font-size: 24px
        line-height: 32px
        color: $main-black

    .site-contacts__toggle
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

    .site-contacts__toggle--hidden
        transform: rotate(-180deg)

    .site-contacts__content--appeals
        margin-top: 8px

    .site-contacts__content--store
        margin-top: 8px

    .site-contacts__content--sales
        margin-top: 12px

    .site-contacts__label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-400

    .site-contacts__label--appeals
        margin-bottom: 24px

    .site-contacts__label--store
        margin-bottom: 24px

    .site-contacts__label--sales
        margin-bottom: 16px

    .site-contacts__links
        display: inline-flex
        flex-direction: column
        grid-row-gap: 12px

    .site-contacts__group-link
        display: flex
        align-items: center

    .site-contacts__link
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-blue
        display: inline-flex
        align-items: center

    .site-contacts__link-description
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-black

    .site-contacts__link-svg--right
        margin-left: 4px

    .site-contacts__link-svg--left
        margin-right: 12px

    .site-contacts__location
        display: flex
        align-items: center
        grid-column-gap: 12px

    .site-contacts__location-label
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-blue

@media screen and (max-width: 1440px)
    .site-contacts
        .site-contacts__contact
            width: 468px
            padding: 32px

        .site-contacts__contact--appeals
            height: 182px

        .site-contacts__contact--store
            height: 224px

        .site-contacts__title
            font-size: 22px
            line-height: 28px

        .site-contacts__content--store
            margin-top: 16px

        .site-contacts__label--store
            margin-bottom: 16px

@media screen and (max-width: 1024px)
    .site-contacts
        flex-direction: column
        grid-row-gap: 24px

        .site-contacts__contact
            width: 100%

        .site-contacts__contact--appeals
            height: auto

        .site-contacts__contact--store
            height: auto

        .site-contacts__toggle
            display: flex

@media screen and (max-width: 768px)
    .site-contacts
        .site-contacts__contact
            padding: 24px

        .site-contacts__link-label
            display: flex
            flex-direction: column
</style>
