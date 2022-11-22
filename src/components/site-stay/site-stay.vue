<template>
    <div class="site-stay">
        <div class="site-stay__container">
            <div class="site-stay__group">
                <div class="site-stay__app">
                    <p class="site-stay__app-label">
                        Установите приложение Xcom
                    </p>
                    <img
                        class="site-stay__app-iphone"
                        src="@/assets/images/stay/iphone.png"
                        alt="iphone"
                    />
                    <div class="site-stay__app-links">
                        <a class="site-stay__app-link" href="#">
                            <img
                                class="site-stay__app-svg"
                                src="@/assets/images/stay/app-store.svg"
                                alt="App Store"
                            />
                        </a>
                        <a class="site-stay__app-link" href="#">
                            <img
                                class="site-stay__app-svg"
                                src="@/assets/images/stay/google-play.svg"
                                alt="Goggle Play"
                            />
                        </a>
                    </div>
                </div>
                <div class="site-stay__mailing">
                    <div class="site-stay__mailing-header">
                        <h4 class="site-stay__mailing-title">
                            Оставайтесь в курсе
                        </h4>
                        <p class="site-stay__mailing-label">
                            Подпишитесь на рассылку Xcom и получайте новости,
                            информацию о скидках и специальные предложения
                        </p>
                        <div class="site-stay__mailing-links">
                            <a class="site-stay__mailing-link" href="#">
                                <img
                                    class="site-stay__mailing-svg"
                                    src="@/assets/images/stay/vk.svg"
                                    alt="vk"
                                />
                            </a>
                            <a class="site-stay__mailing-link" href="#">
                                <img
                                    class="site-stay__mailing-svg"
                                    src="@/assets/images/stay/ok.svg"
                                    alt="ok"
                                />
                            </a>
                            <a class="site-stay__mailing-link" href="#">
                                <img
                                    class="site-stay__mailing-svg"
                                    src="@/assets/images/stay/youtube.svg"
                                    alt="youtube"
                                />
                            </a>
                            <a class="site-stay__mailing-link" href="#">
                                <img
                                    class="site-stay__mailing-svg"
                                    src="@/assets/images/stay/tik-tok.svg"
                                    alt="tik-tok"
                                />
                            </a>
                        </div>
                    </div>
                    <div class="site-stay__mailing-form">
                        <input
                            class="site-stay__mailing-input"
                            type="text"
                            placeholder="E-mail"
                        />
                        <button class="site-stay__mailing-button">
                            Отправить
                        </button>
                    </div>
                    <img
                        class="site-stay__mailing-img site-stay__mailing-img--medium"
                        src="@/assets/images/stay/logo.png"
                        alt="X"
                    />
                    <img
                        class="site-stay__mailing-img site-stay__mailing-img--small"
                        src="@/assets/images/stay/logo-small.png"
                        alt="X"
                    />
                </div>
            </div>
            <div class="site-stay__about">
                <div class="site-stay__about-info">
                    <img
                        class="site-stay__about-img"
                        src="@/assets/images/stay/arrow-right.svg"
                        alt="arrow-right"
                    />
                    <p class="site-stay__about-title">
                        Интернет-магазин XCOM-SHOP как нельзя лучше подходит для
                        быстрой и выгодной покупки современной техники и
                        электроники.
                    </p>
                </div>
                <div class="site-stay__about-groups">
                    <div class="site-stay__about-group">
                        <p class="site-stay__about-label">
                            На полках нашего интернет-магазина всегда можно
                            обнаружить широкий выбор товаров, от USB-флешки и
                            ноутбука до серверов и торгового оборудования.
                        </p>
                        <p class="site-stay__about-label">
                            Возможна продажа компьютерных комплектующих оптом.
                            Для обсуждения индивидуальных условий следует
                            обратиться к менеджерам по продажам наиболее удобным
                            способом: по телефону, с помощью электронной почты,
                            ICQ или Skype.
                        </p>
                    </div>
                    <div class="site-stay__about-group">
                        <p class="site-stay__about-label">
                            Чтобы купить товар, можно зарегистрироваться и
                            отобрать позиции в электронном каталоге или
                            обратиться напрямую к менеджерам по продажам.
                        </p>
                        <p class="site-stay__about-label">
                            Оплата производится любым удобным способом:
                            наличными или банковской картой при получении,
                            банковской картой на сайте, банковским переводом или
                            электронными деньгами, наложенным платежом, бонусами
                            «Спасибо» от Сбербанка. Возможна покупка товара в
                            кредит с сервисом Яндекс.Касса.
                        </p>
                        <p class="site-stay__about-label">
                            Для получения товаров необходимо обратиться в один
                            из пунктов выдачи в Москве, либо оформить доставку.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "site-stay",
};
</script>

<style lang="sass">
.site-stay
    .site-stay__container
        @include container
        font-family: 'Manrope', sans-serif

    .site-stay__group
        display: flex
        align-items: center
        grid-column-gap: 24px

    .site-stay__app
        width: 318px
        height: 424px
        background: linear-gradient(209.36deg, #0DFFC5 0%, #3354FF 100%)
        border-radius: 24px 24px 25px 24px
        padding: 24px
        display: flex
        flex-direction: column
        justify-content: space-between
        position: relative

    .site-stay__app-label
        display: inline-block
        width: 160px
        font-weight: 500
        font-size: 20px
        line-height: 26px
        color: $new-gray-100
        z-index: 1

    .site-stay__app-iphone
        position: absolute
        left: 50%
        bottom: 0
        transform: translateX(-50%)
        z-index: 0

    .site-stay__app-links
        display: flex
        align-items: center
        grid-column-gap: 12px
        z-index: 1

    .site-stay__mailing
        width: 100%
        height: 424px
        background: $grays-gray-100
        border-radius: 24px
        padding: 24px
        display: flex
        flex-direction: column
        justify-content: space-between
        position: relative

    .site-stay__mailing-header
        width: 294px
        color: $new-black
        z-index: 1

    .site-stay__mailing-title
        font-weight: 700
        font-size: 24px
        line-height: 32px

    .site-stay__mailing-label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        margin-top: 14px

    .site-stay__mailing-links
        display: flex
        align-items: center
        grid-column-gap: 12px
        margin-top: 18px

    .site-stay__mailing-link
        width: 58px
        height: 58px
        background: $grays-gray-100
        border-radius: 11
        display: flex
        align-items: center
        justify-content: center

    .site-stay__mailing-form
        display: flex
        align-items: center
        grid-column-gap: 12px
        z-index: 1

    .site-stay__mailing-input
        background: $main-white
        border: 1px solid $grays-gray-200
        border-radius: 8px
        padding: 12px 24px
        font-family: 'Manrope', sans-serif
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-400
        outline: none
        width: 408px

        &::placeholder
            opacity: 1

    .site-stay__mailing-button
        padding: 12px 32px 13px 32px
        background: $main-blue
        border-radius: 8px
        font-family: 'Manrope', sans-serif
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-white
        border: none
        outline: none
        cursor: pointer

    .site-stay__mailing-img
        position: absolute
        right: 0
        top: 0
        bottom: 0

        &.site-stay__mailing-img--small
            display: none

    .site-stay__about
        padding: 32px 24px
        background: $grays-gray-100
        border-radius: 16px
        margin-top: 84px
        display: flex
        grid-column-gap: 114px
        height: 370px

    .site-stay__about-info
        display: flex
        align-items: flex-start
        min-width: 522px
        grid-column-gap: 32px

    .site-stay__about-title
        font-weight: 500
        font-size: 20px
        line-height: 26px
        color: $secondary-blue-400

    .site-stay__about-groups
        display: flex
        grid-column-gap: 24px

    .site-stay__about-group
        display: flex
        flex-direction: column
        grid-row-gap: 24px

    .site-stay__about-label
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $grays-gray-400

@media screen and (max-width: 1440px)
    .site-stay
        .site-stay__group
            grid-column-gap: 29px

        .site-stay__mailing
            overflow: hidden

        .site-stay__mailing-input
            width: 290px

        .site-stay__mailing-img
            &.site-stay__mailing-img--medium
                display: none

            &.site-stay__mailing-img--small
                display: block
                right: -15px
                height: 100%

        .site-stay__about
            margin-top: 64px
            flex-direction: column
            height: auto
            padding: 32px 24px 41px 24px
            grid-row-gap: 26px

        .site-stay__about-label
            font-weight: 400
            font-size: 14px
            line-height: 20px

@media screen and (max-width: 1024px)
    .site-stay
        .site-stay__group
            grid-column-gap: 24px

        .site-stay__app
            width: 304px
            height: 375px

        .site-stay__app-iphone
            width: 270px

        .site-stay__mailing
            padding: 24px 24px 25px 24px
            height: 375px
            width: 304px

        .site-stay__mailing-header
            width: 100%

        .site-stay__mailing-label
            margin-top: 16px

        .site-stay__mailing-links
            margin-top: 16px

        .site-stay__mailing-form
            flex-direction: column
            grid-row-gap: 12px

        .site-stay__mailing-input
            width: 100%

        .site-stay__mailing-button
            width: 100%

        .site-stay__mailing-img
            &.site-stay__mailing-img--small
                display: none

        .site-stay__about-groups
            flex-direction: row-reverse
            grid-column-gap: 23px

        .site-stay__about-info
            min-width: auto
            max-width: 420px

        .site-stay__about-img
            display: none

        .site-stay__about-label
            font-size: 12px
            line-height: 16px

@media screen and (max-width: 768px)
    .site-stay
        .site-stay__group
            flex-direction: column
            grid-row-gap: 32px

        .site-stay__app
            width: 100%
            height: 120px
            flex-direction: row
            justify-content: space-between
            border-radius: 16px

        .site-stay__app-label
            font-size: 18px
            line-height: 24px

        .site-stay__app-links
            flex-direction: column
            grid-row-gap: 8px

        .site-stay__app-link
            width: 90px

        .site-stay__app-svg
            width: 100%
            height: 100%

        .site-stay__app-iphone
            display: none

        .site-stay__mailing
            width: 100%
            height: auto
            padding: 24px
            border-radius: 16px

        .site-stay__mailing-title
            font-size: 20px
            line-height: 26px

        .site-stay__mailing-label
            font-size: 12px
            line-height: 16px

        .site-stay__mailing-links
            margin-bottom: 16px

        .site-stay__about
            display: none
</style>
