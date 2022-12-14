<template>
    <div class="site-specialist">
        <img class="site-specialist__img" :src="specialist.img" alt="img" />
        <div class="site-specialist__info">
            <h4 class="site-specialist__title">{{ specialist.name }}</h4>
            <p class="site-specialist__label">
                Доб.номер {{ specialist.phone }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "SiteSpecialist",
    props: {
        specialist: {
            type: Object,
            required: true,
        },
    },
};
</script>

<style lang="sass">
.site-specialist
    padding: 32px 32px 32px 33px
    background: $grays-gray-100
    border-radius: 24px
    display: flex
    grid-column-gap: 24px
    font-family: 'Manrope', sans-serif

    .site-specialist__img
        width: 100px
        height: 100px

    .site-specialist__title
        font-weight: 700
        font-size: 24px
        line-height: 32px
        color: $main-black
        margin-bottom: 8px

    .site-specialist__label
        font-family: 'Manrope', sans-serif
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $grays-gray-400

@media screen and (max-width: 1024px)
    .site-specialist
        flex-direction: column
        grid-row-gap: 24px
</style>
