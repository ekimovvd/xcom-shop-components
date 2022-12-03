<template>
    <div class="site-profile-status">
        <div class="site-profile-status__progress">
            <svg viewBox="0 0 168 168">
                <circle
                    class="site-profile-status__progress-circle"
                    ref="circle"
                    stroke-width="16"
                    cx="84"
                    cy="84"
                    r="76"
                    fill="transparent"
                ></circle>
            </svg>
            <p class="site-profile-status__progress-label">
                {{ status.finalAmount }} ₽
            </p>
        </div>
        <div class="site-profile-status__info">
            <p class="site-profile-status__title">
                Следующий статус:
                <span class="site-profile-status__status">{{
                    status.status
                }}</span>
            </p>
            <p class="site-profile-status__label">
                {{ status.currentAmount }} ₽
            </p>
        </div>
    </div>
</template>

<script>
import { ref, toRefs, onMounted } from "vue";

export default {
    name: "site-profile-status",
    props: {
        status: {
            type: Object,
            required: true,
        },
    },
    setup(props, { $refs }) {
        const { status } = toRefs(props);
        const circle = ref(null);

        onMounted(() => {
            const radius = circle.value.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;

            circle.value.style.strokeDasharray = `${circumference} ${circumference}`;
            circle.value.style.strokeDashoffset = circumference;

            const percent =
                (status.value.currentAmount / status.value.finalAmount) * 100;
            const offset = circumference - (percent / 100) * circumference;
            circle.value.style.strokeDashoffset = offset;
        });

        return {
            circle,
        };
    },
};
</script>

<style lang="sass">
.site-profile-status
    padding: 24px 32px
    background: $grays-gray-100
    border-radius: 24px
    width: 343px
    font-family: 'Manrope', sans-serif
    display: flex
    align-items: center
    grid-column-gap: 16px

    .site-profile-status__progress
        min-width: 84px
        height: 84px
        position: relative

    .site-profile-status__progress-circle
        stroke: $main-blue
        transform-origin: center
        transform: rotate(-90deg)
        stroke-linecap: round

    .site-profile-status__progress-label
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $main-black
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        width: 100%
        text-align: center
        display: inline-block

    .site-profile-status__info
        display: flex
        flex-direction: column
        grid-row-gap: 8px

    .site-profile-status__title
        font-weight: 500
        font-size: 12px
        line-height: 16px
        color: $main-black

    .site-profile-status__status
        color: $main-blue

    .site-profile-status__label
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $grays-gray-400

@media screen and (max-width: 1440px)
    .site-profile-status
        width: 468px
</style>
