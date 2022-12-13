<template>
    <div class="site-user-status">
        <div class="site-user-status__progress">
            <svg width="144" height="144">
                <circle
                    class="site-user-status__progress-circle site-user-status__progress-circle--gray"
                    stroke-width="12"
                    cx="72"
                    cy="72"
                    r="66"
                    fill="transparent"
                ></circle>
                <circle
                    class="site-user-status__progress-circle"
                    ref="circle"
                    stroke-width="12"
                    cx="72"
                    cy="72"
                    r="66"
                    fill="transparent"
                ></circle>
            </svg>
            <div class="site-user-status__progress-info">
                <p class="site-user-status__progress-label">
                    Осталось потратить
                </p>
                <p class="site-user-status__progress-amount">
                    {{ getRemainingAmount }} ₽
                </p>
            </div>
        </div>
        <div class="site-user-status__info">
            <p class="site-user-status__label site-user-status__label--status">
                Следующий статус
                <span class="site-user-status__name">
                    {{ user.nextStatus.name }}
                </span>
            </p>
            <p class="site-user-status__label">
                Сумма ваших покупок
                <span class="site-user-status__amount">
                    {{ getStatusAmount }} ₽
                </span>
            </p>
            <p
                class="site-user-status__label site-user-status__label--description"
            >
                Чтобы приобрести новый статус и его преимущества, преобретите
                товаров на
                <span
                    class="site-user-status__amount site-user-status__amount--next"
                >
                    {{ getNextStatusAmount }} ₽
                </span>
            </p>
        </div>
    </div>
</template>

<script>
import { computed, onMounted, ref, toRefs } from "vue";

export default {
    name: "SiteUserStatus",
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
    setup(props) {
        const { user } = toRefs(props);

        const circle = ref(null);

        onMounted(() => {
            const radius = circle.value.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;

            circle.value.style.strokeDasharray = `${circumference} ${circumference}`;
            circle.value.style.strokeDashoffset = circumference;

            const percent =
                (user.value.status.amount / user.value.nextStatus.amount) * 100;

            const offset = circumference - (percent / 100) * circumference;
            circle.value.style.strokeDashoffset = offset;
        });

        const getRemainingAmount = computed(() => {
            return onNumberWithSpaces(
                user.value.nextStatus.amount - user.value.status.amount
            );
        });

        const getStatusAmount = computed(() => {
            return onNumberWithSpaces(user.value.status.amount);
        });

        const getNextStatusAmount = computed(() => {
            return onNumberWithSpaces(user.value.nextStatus.amount);
        });

        const onNumberWithSpaces = (number) => {
            return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        };

        return {
            circle,
            getRemainingAmount,
            getStatusAmount,
            getNextStatusAmount,
            onNumberWithSpaces,
        };
    },
};
</script>

<style lang="sass">
.site-user-status
    display: flex
    align-items: center
    grid-column-gap: 48px
    background: $grays-gray-100
    border-radius: 24px
    padding: 47px 30px 48px 23px
    font-family: 'Manrope', sans-serif
    width: 478px

    .site-user-status__progress
        min-width: 144px
        height: 144px
        position: relative

    .site-user-status__progress-circle
        stroke: $main-blue
        transform-origin: center
        transform: rotate(-90deg)
        stroke-linecap: round

    .site-user-status__progress-circle--gray
        stroke: $grays-gray-300

    .site-user-status__progress-info
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        text-align: center

    .site-user-status__progress-label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $main-black
        margin-bottom: 8px

    .site-user-status__progress-amount
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black

    .site-user-status__label
        font-weight: 400
        font-size: 14px
        line-height: 20px
        color: $main-black

    .site-user-status__label--status
        margin-bottom: 8px

    .site-user-status__label--description
        margin-top: 35px

    .site-user-status__name
        font-weight: 500
        font-size: 16px
        line-height: 20px
        color: $main-blue
        margin-left: 8px

    .site-user-status__amount
        font-weight: 700
        font-size: 16px
        line-height: 20px
        color: $main-black
        margin-left: 8px

    .site-user-status__amount--next
        margin-left: 0

@media screen and (max-width: 1440px)
    .site-user-status
        width: 100%

@media screen and (max-width: 768px)
    .site-user-status
        padding: 32px 31px 24px 24px
        flex-direction: column
        grid-row-gap: 31px
</style>
