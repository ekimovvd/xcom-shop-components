<template>
    <div class="site-support">
        <a class="site-support__link site-support__link--refund" href="#">
            <p
                class="site-support__link-label site-support__link-label--refund"
            >
                Обмен и возврат
            </p>
            <img
                class="site-support__link-img site-support__link-img--refund"
                src="@/assets/images/support/refund.png"
                alt="refund"
            />
        </a>
        <a class="site-support__link site-support__link--bubble" href="#">
            <p
                class="site-support__link-label site-support__link-label--bubble"
            >
                Поддержка и гарантия
            </p>
            <img
                class="site-support__link-img site-support__link-img--bubble"
                src="@/assets/images/support/bubble.png"
                alt="bubble"
            />
        </a>
        <a class="site-support__link site-support__link--book" href="#">
            <p class="site-support__link-label site-support__link-label--book">
                Расширение гарантии
            </p>
            <img
                class="site-support__link-img site-support__link-img--book"
                src="@/assets/images/support/book.png"
                alt="book"
            />
        </a>
        <a class="site-support__link site-support__link--truck" href="#">
            <p class="site-support__link-label site-support__link-label--truck">
                Где мой заказ?
            </p>
            <img
                class="site-support__link-img site-support__link-img--truck"
                src="@/assets/images/support/truck.png"
                alt="truck"
            />
        </a>
        <a class="site-support__link site-support__link--paper" href="#">
            <p class="site-support__link-label site-support__link-label--paper">
                Контакты
            </p>
            <img
                class="site-support__link-img site-support__link-img--paper"
                src="@/assets/images/support/paper.png"
                alt="paper"
            />
        </a>
    </div>
</template>

<script>
export default {
    name: "SiteSupport",
};
</script>

<style lang="sass">
.site-support
    font-family: 'Manrope', sans-serif
    display: flex
    flex-wrap: wrap
    grid-gap: 24px

    .site-support__link
        position: relative
        background: #F9F9FD
        border-radius: 20px
        padding: 32px
        height: 216px
        overflow: hidden

    .site-support__link-label
        font-weight: 700
        font-size: 24px
        line-height: 32px
        color: $main-black
        display: inline-block

    .site-support__link--refund
        width: 660px

    .site-support__link--bubble
        width: 660px

    .site-support__link--book
        width: 424px

    .site-support__link--truck
        width: 424px

    .site-support__link--paper
        width: 424px

    .site-support__link-img
        position: absolute

    .site-support__link-img--refund
        top: 50%
        right: 89px
        transform: translateY(-50%)

    .site-support__link-img--bubble
        top: 50%
        right: 55px
        transform: translateY(-50%)

    .site-support__link-img--book
        bottom: 0
        right: 20px

    .site-support__link-img--truck
        bottom: 0
        right: 6px

    .site-support__link-img--paper
        bottom: 0
        right: 10px

@media screen and (max-width: 1440px)
    .site-support
        .site-support__link--refund
            width: 468px

        .site-support__link--bubble
            width: 468px

        .site-support__link--book
            width: 304px

        .site-support__link--truck
            width: 304px

        .site-support__link--paper
            width: 304px

        .site-support__link-label
            font-size: 22px
            line-height: 28px

        .site-support__link-label--bubble
            width: 126px

        .site-support__link-label__book
            width: 142px

        .site-support__link-img--refund
            width: 207px
            right: 20px

        .site-support__link-img--bubble
            right: 32px

        .site-support__link-img--book
            right: 0
            bottom: -20px

        .site-support__link-img--truck
            right: 11px

        .site-support__link-img--paper
            right: 0

@media screen and (max-width: 1024px)
    .site-support
        .site-support__link
            padding: 24px

        .site-support__link--refund
            width: 304px

        .site-support__link--bubble
            width: 304px

        .site-support__link--book
            width: 194px

        .site-support__link--truck
            width: 194px

        .site-support__link--paper
            width: 194px

        .site-support__link-img--refund
            width: 147px
            top: auto
            right: 5px
            bottom: 13px
            transform: translateY(0)

        .site-support__link-img--bubble
            width: 140px
            top: auto
            bottom: 24px
            right: 24px
            transform: translateY(0)

        .site-support__link-img--book
            width: 160px
            right: 14px
            bottom: 0px

        .site-support__link-img--truck
            width: 160px
            right: auto
            left: 50%
            transform: translateX(-50%)

        .site-support__link-img--paper
            width: 160px
            right: auto
            left: 50%
            transform: translateX(-50%)

@media screen and (max-width: 768px)
    .site-support
        grid-row-gap: 16px

        .site-support__link
            width: 100%

        .site-support__link-label
            font-size: 20px
            line-height: 26px

        .site-support__link-label--refund
            width: 96px

        .site-support__link-img--bubble
            right: 10px
            bottom: 10px

        .site-support__link-img--book
            right: 0

        .site-support__link-img--paper
            left: auto
            right: 16px
            bottom: 0
            transform: translateX(0)
</style>
