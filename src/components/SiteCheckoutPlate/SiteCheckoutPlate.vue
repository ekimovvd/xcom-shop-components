<template>
    <div class="site-checkout-plate">
        <slot />
    </div>
</template>

<script>
export default {
    name: "SiteCheckoutPlate"
}
</script>

<style lang="sass">
.site-checkout-plate
    font-family: 'Manrope', sans-serif
    background: $white
    border-radius: 20px
    padding: 32px
    box-shadow: $small-down

@media screen and (max-width: 1024px)
    .site-checkout-plate
        padding: 24px
</style>