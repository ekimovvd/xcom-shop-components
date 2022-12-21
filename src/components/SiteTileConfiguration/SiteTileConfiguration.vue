<template>
    <button class="site-tile-configuration" @click="onConfiguration">
        <img
            class="site-tile-configuration__img"
            src="@/assets/images/tile-configuration/configuration.svg"
            alt="configuration"
        />
        Подобрать конфигурации
    </button>
</template>

<script>
export default {
    name: "SiteTileConfiguration",
    setup() {
        const onConfiguration = () => {
            console.log("CONFIGURATION");
        };

        return {
            onConfiguration,
        };
    },
};
</script>

<style lang="sass">
.site-tile-configuration
    display: flex
    align-items: center
    justify-content: center
    grid-column-gap: 8px
    padding: 13px 32px
    border: 1px solid $main-blue
    border-radius: 8px
    background: none
    outline: none
    cursor: pointer
    font-family: 'Manrope', sans-serif
    font-weight: 500
    font-size: 14px
    line-height: 18px
    color: $main-blue
    width: 100%
</style>
