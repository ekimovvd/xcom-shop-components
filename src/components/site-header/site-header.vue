<template>
    <div class="site-header">
        <div class="site-header__container">
            <!-- site-header-contacts -->
            <div class="site-header__contacts">
                <div class="site-header__contacts-group">
                    <div class="site-header__toggle">
                        <label class="site-header__toggle-switch">
                            <input
                                class="site-header__toggle-input"
                                type="checkbox"
                            />
                            <span class="site-header__toggle-slider"></span>
                        </label>
                        <p class="site-header__toggle-label">Темная тема</p>
                    </div>
                    <a class="site-header__return" href="#">
                        <img
                            class="site-header__return-svg"
                            src="@/assets/images/header/arrow-left.svg"
                            alt="arrow-left"
                        />
                        <p class="site-header__return-label">
                            Возврат на старую версию
                        </p>
                    </a>
                    <button class="site-header__location-btn">
                        <img
                            class="site-header__location-btn-svg"
                            src="@/assets/images/header/location.svg"
                            alt="location"
                        />
                        <p class="site-header__location-btn-label">Москва</p>
                    </button>
                    <a
                        class="site-header__phone site-header__phone--one"
                        href="tel:+88002000069"
                    >
                        <img
                            class="site-header__phone-svg"
                            src="@/assets/images/header/phone.svg"
                            alt="phone"
                        />
                        <p class="site-header__phone-label">8 800 200-00-69</p>
                    </a>
                    <a
                        class="site-header__phone site-header__phone--two"
                        href="tel:+74957999669"
                    >
                        <img
                            class="site-header__phone-svg"
                            src="@/assets/images/header/phone.svg"
                            alt="phone"
                        />
                        <p class="site-header__phone-label">+7 495 799-96-69</p>
                    </a>
                    <div class="site-header__mode">
                        <img
                            class="site-header__mode-svg"
                            src="@/assets/images/header/clock-circle.svg"
                            alt="clock-circle"
                        />
                        <p class="site-header__mode-label">
                            Режим работы: 9:00 — 21:00
                        </p>
                    </div>
                </div>
                <div class="site-header__references-group">
                    <a
                        class="site-header__reference site-header__reference--purchases"
                        href="#"
                    >
                        <img
                            class="site-header__reference-svg"
                            src="@/assets/images/header/portfolio.svg"
                            alt="portfolio"
                        />
                        <p class="site-header__reference-label">
                            Госзакупки малого бизнеса
                        </p>
                    </a>
                    <a
                        class="site-header__reference site-header__reference--call"
                        href="#"
                    >
                        <img
                            class="site-header__reference-svg"
                            src="@/assets/images/header/phone-blue.svg"
                            alt="phone"
                        />
                        <p class="site-header__reference-label">
                            Заказать звонок
                        </p>
                    </a>
                    <a
                        class="site-header__reference site-header__reference--comment"
                        href="#"
                    >
                        <img
                            class="site-header__reference-svg"
                            src="@/assets/images/header/comment.svg"
                            alt="comment"
                        />
                        <p class="site-header__reference-label">
                            Чат с оператором
                        </p>
                    </a>
                </div>
            </div>
            <!-- site-header-toolbar -->
            <div class="site-header__toolbar">
                <div class="site-header__block">
                    <div class="site-header__logo-group">
                        <button class="site-header__burger">
                            <img
                                class="site-header__burger-svg"
                                src="@/assets/images/header/burger.svg"
                                alt="burger"
                            />
                        </button>
                        <a class="site-header__logo" href="#">
                            <img
                                class="site-header__logo-svg"
                                src="@/assets/images/shared/logo.svg"
                                alt="XCOM-SHOP"
                            />
                        </a>
                    </div>
                    <div class="site-header__search-group">
                        <button class="site-header__catalog-btn">
                            <img
                                class="site-header__catalog-btn-svg"
                                src="@/assets/images/header/catalog.svg"
                                alt="catalog"
                            />
                            <p class="site-header__catalog-btn-label">
                                Каталог
                            </p>
                        </button>
                        <div class="site-header__input">
                            <input
                                class="site-header__input-field"
                                type="text"
                                placeholder="Поиск по каталогу "
                            />
                            <img
                                class="site-header__input-svg"
                                src="@/assets/images/header/search.svg"
                                alt="search"
                            />
                        </div>
                    </div>
                </div>
                <div class="site-header__tabs">
                    <a class="site-header__tab" href="#">
                        <img
                            class="site-header__tab-svg"
                            src="@/assets/images/header/sort.svg"
                            alt="sort"
                        />
                        <p class="site-header__tab-label">Сравнение</p>
                    </a>
                    <a class="site-header__tab" href="#">
                        <img
                            class="site-header__tab-svg"
                            src="@/assets/images/header/heart-filled.svg"
                            alt="heart-filled"
                        />
                        <p class="site-header__tab-label">Избранное</p>
                    </a>
                    <a class="site-header__tab" href="#">
                        <img
                            class="site-header__tab-svg"
                            src="@/assets/images/header/cart.svg"
                            alt="cart"
                        />
                        <p class="site-header__tab-label">Корзина</p>
                    </a>
                </div>
                <div class="site-header__profile">
                    <div class="site-header__profile-info">
                        <p class="site-header__profile-name">Антон Б</p>
                        <a class="site-header__profile-bonuses" href="#">
                            10k бонусов
                        </a>
                    </div>
                    <div class="site-header__profile-img">
                        <p class="site-header__profile-abbreviation">АБ</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- site-header-footer -->
        <div class="site-header__footer">
            <div class="site-header__container">
                <div class="site-header__content">
                    <div class="site-header__group">
                        <a class="site-header__offer" href="#">
                            <img
                                class="site-header__offer-svg"
                                src="@/assets/images/header/stock.svg"
                                alt="stock"
                            />
                            <p class="site-header__offer-label">Акции</p>
                        </a>
                        <a class="site-header__offer" href="#">
                            <img
                                class="site-header__offer-svg"
                                src="@/assets/images/header/percent.svg"
                                alt="percent"
                            />
                            <p class="site-header__offer-label">Распродажа</p>
                        </a>
                        <a
                            class="site-header__section site-header__section--one"
                            href="#"
                        >
                            <p class="site-header__section-label">
                                Компьютеры и ноутбуки
                            </p>
                        </a>
                        <a
                            class="site-header__section site-header__section--two"
                            href="#"
                        >
                            <p class="site-header__section-label">
                                Компьютерные комплектующие
                            </p>
                        </a>
                        <a
                            class="site-header__section site-header__section--three"
                            href="#"
                        >
                            <p class="site-header__section-label">
                                Серверы и СХД
                            </p>
                        </a>
                    </div>
                    <div class="site-header__group">
                        <a class="site-header__service" href="#">
                            <img
                                class="site-header__service-svg"
                                src="@/assets/images/header/service.svg"
                                alt="service"
                            />
                            <p class="site-header__service-label">Услуги</p>
                        </a>
                        <a class="site-header__service" href="#">
                            <img
                                class="site-header__service-svg"
                                src="@/assets/images/header/pay.svg"
                                alt="pay"
                            />
                            <p class="site-header__service-label">Оплата</p>
                        </a>
                        <a class="site-header__service" href="#">
                            <img
                                class="site-header__service-svg"
                                src="@/assets/images/header/delivery.svg"
                                alt="delivery"
                            />
                            <p class="site-header__service-label">Доставка</p>
                        </a>
                        <button class="site-header__menu-btn">
                            <img
                                class="site-header__menu-btn-svg"
                                src="@/assets/images/header/dotted.svg"
                                alt="dotted"
                            />
                            <p class="site-header__menu-btn-label">Меню</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "style-header",
};
</script>

<style lang="sass">
.site-header
    padding: 25px 0
    font-family: 'Manrope', sans-serif

    .site-header__container
        margin: 0 auto
        padding: 0 48px

    // site-header-contacts
    .site-header__contacts
        margin-bottom: 23px
        display: flex
        align-items: center
        justify-content: space-between
        grid-column-gap: 13px

    .site-header__contacts-group
        display: flex
        align-items: center

    .site-header__toggle
        display: flex
        align-items: center

    .site-header__toggle-switch
        width: 40px
        height: 21px
        position: relative
        display: inline-block

    .site-header__toggle-input
        opacity: 0
        width: 0
        height: 0
        outline: none

        &:checked + .site-header__toggle-slider
            background-color: $main-blue

        &:checked + .site-header__toggle-slider:before
            transform: translateX(17px)
            -ms-transform: translateX(17px)
            -webkit-transform: translateX(17px)

    .site-header__toggle-slider
        position: absolute
        cursor: pointer
        top: 0
        left: 0
        right: 0
        bottom: 0
        border-radius: 20px
        background-color: $grays-gray-300
        transition: .4s
        -webkit-transition: .4s

        &::before
            position: absolute
            content: ""
            width: 15px
            height: 15px
            left: 4px
            bottom: 3px
            border-radius: 50%
            background-color: $white
            -webkit-transition: .4s
            transition: .4s

    .site-header__toggle-label
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $grays-gray-300
        margin-left: 8px

    .site-header__return
        display: flex
        align-items: center
        margin-left: 16px

    .site-header__return-label
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $grays-gray-300
        margin-left: 4px

    .site-header__location-btn
        display: flex
        align-items: center
        cursor: pointer
        background: none
        border: none
        outline: none
        padding: 0
        margin-left: 24px

    .site-header__location-btn-label
        font-family: 'Manrope', sans-serif
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $grays-gray-300
        margin-left: 4px

    .site-header__phone
        display: flex
        align-items: center
        margin-left: 24px

    .site-header__phone-label
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $grays-gray-300
        margin-left: 4px

    .site-header__mode
        display: flex
        align-items: center
        margin-left: 24px

    .site-header__mode-label
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $grays-gray-300
        margin-left: 5px

    .site-header__references-group
        display: flex
        align-items: center
        grid-column-gap: 12px

    .site-header__reference
        display: flex
        align-items: center

    .site-header__reference-label
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $main-blue
        margin-left: 4px

    // site-header-toolbar
    .site-header__toolbar
        display: flex
        align-items: center
        grid-column-gap: 32px

    .site-header__block
        display: flex
        align-items: center
        width: 100%
        grid-column-gap: 40px

    .site-header__logo-group
        display: flex
        align-items: center

    .site-header__search-group
        display: flex
        align-items: center
        width: 100%

    .site-header__burger
        cursor: pointer
        margin-right: 24px
        display: none
        background: none
        padding: 0
        border: none
        outline: none

    .site-header__logo
        cursor: pointer

    .site-header__catalog-btn
        padding: 12px 20px
        margin-right: 12px
        background: $main-blue
        border-radius: 8px
        display: flex
        align-items: center
        border: none
        cursor: pointer

    .site-header__catalog-btn-svg
        margin-right: 12px

    .site-header__catalog-btn-label
        font-family: 'Manrope', sans-serif
        font-weight: 600
        font-size: 14px
        line-height: 18px
        color: $main-white

    .site-header__input
        width: 100%
        position: relative

    .site-header__input-field
        width: 100%
        background: $grays-gray-100
        border-radius: 8px
        padding: 12px 46px 12px 24px
        border: none
        outline: none
        font-family: 'Manrope', sans-serif
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-400

        &::placeholder
            opacity: 1

    .site-header__input-svg
        position: absolute
        top: 50%
        right: 16px
        transform: translateY(-50%)

    .site-header__tabs
        display: flex
        align-items: center
        grid-column-gap: 24px

    .site-header__tab
        display: flex
        flex-direction: column
        align-items: center

    .site-header__tab-label
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $main-black

    .site-header__profile
        display: flex
        align-items: center
        margin-left: 24px

    .site-header__profile-info
        font-weight: 400
        font-size: 10px
        line-height: 14px

    .site-header__profile-name
        text-align: right
        color: $main-black

    .site-header__profile-bonuses
        color: $main-blue
        white-space: nowrap

    .site-header__profile-img
        width: 44px
        height: 44px
        min-width: 44px
        min-height: 44px
        display: flex
        align-items: center
        justify-content: center
        background: $secondary-blue-400
        border-radius: 100%
        margin-left: 8px

    .site-header__profile-abbreviation
        font-weight: 500
        font-size: 20px
        line-height: 26px
        color: $main-white

    // site-header-footer
    .site-header__footer
        padding: 16px 0 18px 0
        margin-top: 18px
        border-top: 1px solid $grays-gray-200

    .site-header__content
        display: flex
        align-items: center
        justify-content: space-between

    .site-header__group
        display: flex
        align-items: center
        grid-column-gap: 32px

    .site-header__offer
        display: flex

    .site-header__offer-label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $main-blue
        margin-left: 8px

    .site-header__section-label
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $main-black

    .site-header__service
        display: flex
        align-items: center

    .site-header__service-label
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $main-black
        margin-left: 8px

    .site-header__menu-btn
        display: flex
        align-items: center
        cursor: pointer
        background: none
        padding: 0
        border: none
        outline: none

    .site-header__menu-btn-label
        font-family: 'Manrope', sans-serif
        font-weight: 400
        font-size: 12px
        line-height: 16px
        color: $main-black
        margin-left: 8px

@media screen and (max-width: 1440px)
    .site-header
        // site-header-contacts
        .site-header__return
            margin-left: 20px

        .site-header__location-btn
            margin-left: 28px

        .site-header__phone
            margin-left: 28px

            &.site-header__phone--two
                display: none

        .site-header__mode
            display: none

        .site-header__references-group
            grid-column-gap: 28px

        .site-header__reference
            &.site-header__reference--call
                display: none

        // site-header-toolbar
        .site-header__profile
            margin-left: 46px

        .site-header__profile-info
            display: none

        .site-header__profile-img
            margin-left: 0

        // site-header-footer
        .site-header__footer
            border-radius: 0px 0px 24px 24px
            box-shadow: 0px 4px 16px rgba(99, 94, 130, 0.16)

        .site-header__section
            &.site-header__section--two,
            &.site-header__section--three
                display: none

@media screen and (max-width: 1024px)
    .site-header
        padding: 12px 0

        .site-header__container
            margin: 0 auto
            padding: 0 68px

        // site-header-contacts
        .site-header__contacts
            display: none

        // site-header-toolbar
        .site-header__block
            grid-column-gap: 24px

        .site-header__burger
            display: block

        .site-header__catalog-btn
            display: none

        .site-header__tabs
            display: none

        .site-header__profile
            display: none

        // site-header-footer
        .site-header__footer
            display: none

@media screen and (max-width: 768px)
    .site-header
        padding: 14px 0

        .site-header__container
            margin: 0 auto
            padding: 0 24px

        // site-header-toolbar
        .site-header__block
            flex-direction: column
            align-items: flex-start
            grid-row-gap: 18px
</style>
