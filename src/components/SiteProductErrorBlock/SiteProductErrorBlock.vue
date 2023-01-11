<template>
    <div class="site-product-error-block">
        <img
            src="@/assets/images/product/error-icon.svg"
            alt="error"
            class="site-product-error-block__img"
        />
        <span class="site-product-error-block__text">{{ text }}</span>
    </div>
</template>

<script>
export default {
    name: "SiteProductErrorBlock",
    props: {
        text: {
            type: String,
            default: "Возникла ошибка",
        },
    },
}
</script>

<style lang="sass">
.site-product-error-block
    background-color: $other-red-100
    padding: 14px 16px
    border-radius: 8px
    display: flex
    grid-column-gap: 8px
    flex: 1

    .site-product-error-block__text
        font-weight: 400
        font-size: 12px
        line-height: 16px
</style>