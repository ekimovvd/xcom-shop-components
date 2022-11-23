<template>
    <div class="site-experts">
        <div class="site-experts__container">
            <div class="site-experts__content">
                <div class="site-experts__info">
                    <h1 class="site-experts__title">Эксперты X-com</h1>
                    <p class="site-experts__label">
                        Мы всегда готовы помочь с выбором техники и предоставить
                        профессиональный сервис
                    </p>
                    <a class="site-experts__link" href="#">
                        <p class="site-experts__link-label">Подробнее</p>
                    </a>
                </div>
                <div class="site-experts__figure">
                    <img
                        class="site-experts__figure-svg"
                        src="@/assets/images/experts/figure.svg"
                        alt="figure"
                    />
                </div>
            </div>
            <img
                class="site-experts__man"
                src="@/assets/images/experts/man.svg"
                alt="man"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "site-experts",
};
</script>

<style lang="sass">
.site-experts
    .site-experts__container
        @include container
        position: relative

    .site-experts__content
        overflow: hidden
        display: flex
        align-items: center
        background: $grays-gray-100
        border-radius: 24px
        font-family: 'Manrope', sans-serif
        position: relative

    .site-experts__info
        padding: 62px 64px 80px 64px
        min-width: 568px

    .site-experts__title
        font-weight: 700
        font-size: 52px
        line-height: 60px
        color: $new-black

    .site-experts__label
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $grays-gray-400
        display: inline-block
        width: 291px
        margin: 32px 0

    .site-experts__link
        width: 141px
        padding: 12px 32px 13px 32px
        background: $main-blue
        border-radius: 8px

    .site-experts__link-label
        font-weight: 500
        font-size: 14px
        line-height: 18px
        color: $main-white

    .site-experts__man
        position: absolute
        right: 213px
        bottom: 0
        z-index: 1

    .site-experts__figure
        position: relative
        width: 100%
        height: 370px

    .site-experts__figure-svg
        position: absolute
        top: 0
        bottom: 0
        right: 92px

@media screen and (max-width: 1440px)
    .site-experts
        .site-experts__man
            right: 52px

        .site-experts__figure-svg
            right: -100px

@media screen and (max-width: 1024px)
    .site-experts
        .site-experts__info
            padding: 44px 44px 72px 44px
            z-index: 100

        .site-experts__title
            font-size: 44px
            line-height: 52px

        .site-experts__man
            right: 0
            width: 289px
            height: 357px

        .site-experts__figure
            height: 336px

        .site-experts__figure-svg
            right: -190px
            transform: rotate(-19deg)

@media screen and (max-width: 768px)
    .site-experts
        .site-experts__content
            flex-direction: column-reverse
            border-radius: 0
            background: none
            grid-row-gap: 32px

        .site-experts__info
            padding: 0
            min-width: auto

        .site-experts__title
            font-size: 32px
            line-height: 40px

        .site-experts__label
            font-size: 14px
            margin-top: 24px

        .site-experts__link
            width: 100%
            text-align: center

        .site-experts__man
            width: 136px
            height: 172px
            top: 0
            bottom: auto

        .site-experts__figure
            height: 172px
            overflow: hidden
            border-radius: 0 0 24px 24px
            background: $grays-gray-100
            border-radius: 12px

        .site-experts__figure-svg
            top: -84px
            bottom: 0
            transform: rotate(0deg)
            width: 302px
            height: 295px
            right: -56px
</style>
