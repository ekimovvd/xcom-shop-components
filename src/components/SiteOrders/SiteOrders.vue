<template>
    <div class="site-orders">
        <SiteOrdersHeader class="site-orders__header" :label="getHeaderLabel" />
        <SiteOrdersEmpty />
        <div class="site-orders__list">
            <SiteOrderArchive
                v-for="order in archive"
                :key="order.pk_order"
                :order="order"
            />
            <SiteOrder
                v-for="order of orders"
                :key="order.order_id"
                :order="order"
            />
        </div>
    </div>
</template>

<script>
import { computed } from "vue";

import SiteOrdersHeader from "@/components/SiteOrdersHeader/SiteOrdersHeader.vue";
import SiteOrderArchive from "@/components/SiteOrderArchive/SiteOrderArchive.vue";
import SiteOrder from "@/components/SiteOrder/SiteOrder.vue";
import SiteOrdersEmpty from "@/components/SiteOrdersEmpty/SiteOrdersEmpty.vue";

export default {
    name: "SiteOrders",
    components: {
        SiteOrdersHeader,
        SiteOrderArchive,
        SiteOrder,
        SiteOrdersEmpty,
    },
    setup() {
        const archive = {
            1: {
                pk_order: "1240279",
                tag: "В пути",
                amount: 3453403,
                items: {},
            },
            2: {
                pk_order: "1240280",
                tag: "В пути",
                amount: 4500000,
                items: {},
            },
        };

        const orders = {
            1240279: {
                pk_order: "1240279",
                fk_site: "1",
                fk_user: "2",
                email: "user2@mail.local",
                phone: "+7 645 123 4567",
                phone_additional: "",
                name: "\u0418\u0432\u0430\u043d\u043e\u04322 \u0418\u0432\u0430\u043d2",
                firstname: "\u0418\u0432\u0430\u043d2",
                midname: "",
                lastname: "\u0418\u0432\u0430\u043d\u043e\u04322",
                user_type: "1",
                firm_name:
                    "\u041e\u041e\u041e '\
    		u041f\ u0440\ u0438\ u043c\ u0435\ u0440 2 '",
                firm_inn: "6449013711",
                firm_kpp: "644901001",
                firm_address:
                    "\u041c\u043e\u0441\u043a\u0432\u0430, \u041a\u0440\u0435\u043c\u043b\u044c",
                firm_fax: "",
                firm_phone: "+7 645 123 4567",
                dtime: "1669718254",
                order_id: "29.11.2022\/3",
                url_key: "6385e0ee05555972393655",
                total: "230",
                dlv_fk_city: "0",
                dlv_fk_metro: "1",
                dlv_type: "5",
                payment: "14",
                dlv_prefer_dtime: "1669669200",
                dlv_address: "\u043b\u0435\u043d\u0438\u043d\u0430\u00a02",
                delivery_cost: "0",
                payment_st: "",
                delivery_st: "",
                user_comment: "",
                fk_manager: "176",
                manager:
                    "\u041d\u0435\u043c\u0447\u0438\u043d\u043e\u0432 \u0410\u043d\u0442\u043e\u043d",
                manager_1c:
                    "\u041d\u0435\u043c\u0447\u0438\u043d\u043e\u0432 \u0410\u043d\u0442\u043e\u043d",
                user_ip: "172.18.0.1",
                wh_offset: "0",
                tracking: "",
                book_number: "",
                send_sms: "0",
                approve_type: "0",
                points_used: "0",
                credit: "0",
                wholesale: "0",
                source: "0",
                reward: "1",
                fk_outlet: "5",
                order_log:
                    "[2022-11-29 13:37:34] \u042d\u0442\u0430\u043f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430\u043a\u0430\u0437\u0430 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u043e\u043c.<br \/>[2022-11-29 13:37:34] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u0432\u044b\u0445\u043e\u0434\u043d\u043e\u0439.<br \/>[2022-11-29 13:37:34] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.<br \/>[2022-11-29 13:37:34] \u0420\u0430\u0431\u043e\u0447\u0438\u0439 \u0434\u0435\u043d\u044c.<br \/>[2022-11-29 13:37:34] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.<br \/>[2022-11-29 13:37:34] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u0432\u044b\u0445\u043e\u0434\u043d\u043e\u0439.<br \/>[2022-11-29 13:37:34] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.<br \/>[2022-11-29 13:37:34] \u0420\u0430\u0431\u043e\u0447\u0438\u0439 \u0434\u0435\u043d\u044c.<br \/>[2022-11-29 13:37:34] -----<br \/>[2022-11-29 13:37:34] \u042d\u0442\u0430\u043f \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438.<br \/>[2022-11-29 13:37:34] \u041f\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0442\u043e\u0432\u0430\u0440\u0430 511919 \u0432 stadium<br \/>[2022-11-29 13:37:34] -----<br \/>[2022-11-29 13:37:34] \u041f\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0438\u0437 stadium, \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: 1<br \/>[2022-11-29 13:37:34] \u0422\u043e\u0432\u0430\u0440 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438.<br \/>[2022-11-29 13:37:34] \u0417\u0430\u043a\u0430\u0437 \u043d\u0430 \u0441\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437, \u0442\u043e\u0432\u0430\u0440\u044b \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438. \u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0435\u043c \u043d\u0430 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437\u0430 \u0441\u0435\u0433\u043e\u0434\u043d\u044f.<br \/>[2022-11-29 13:37:34] -----<br \/>[2022-11-29 13:37:34] \u042d\u0442\u0430\u043f \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0438.<br \/>[2022-11-29 13:37:34] \u0412\u0435\u0441: 2.5<br \/>[2022-11-29 13:37:34] \u0413\u0435\u043e\u0437\u043e\u043d\u0430: 0<br \/>[2022-11-29 13:37:34] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.<br \/>[2022-11-29 13:37:34] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.<br \/>[2022-11-29 13:37:34] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.<br \/>[2022-11-29 13:37:34] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.<br \/>[2022-11-29 00:00:00] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.",
                points: 0,
                items: {
                    511919: {
                        pk_item: "2372122",
                        fk_item: "0",
                        fk_order: "1240279",
                        fk_good: "511919",
                        price: "230",
                        amount: "1",
                        vendor: "SvetoCopy",
                        model: "SVETO COPY (\u04104,80\u0433,146%CIE)",
                        part_number: "13500",
                        type: "\u0411\u0443\u043c\u0430\u0433\u0430 \u0438 \u043f\u043b\u0435\u043d\u043a\u0430",
                        weight: "2.5",
                        minidesc:
                            "\u0411\u0443\u043c\u0430\u0433\u0430 \u0411\u0443\u043c\u0430\u0433\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u043d\u0430\u044f \u0431\u0435\u043b\u0430\u044f \u0434\u043b\u044f \u043e\u0444\u0438\u0441\u043d\u043e\u0439 \u0442\u0435\u0445\u043d\u0438\u043a\u0438 \u043f\u0430\u0447\u043a\u0430 500\u043b.",
                        image: "5a\/c3\/575bdf65ac399822934703",
                        warehouse: "2",
                        wh_offset: "0",
                        discount: "0",
                        options: "[]",
                        source: "1c",
                        name_url: "svetocopy_sveto_copy_a480g146cie",
                        available: "511919",
                    },
                    511920: {
                        pk_item: "2372125",
                        fk_item: "0",
                        fk_order: "1240279",
                        fk_good: "511919",
                        price: "230",
                        amount: "1",
                        vendor: "SvetoCopy",
                        model: "SVETO COPY (\u04104,80\u0433,146%CIE)",
                        part_number: "13500",
                        type: "\u0411\u0443\u043c\u0430\u0433\u0430 \u0438 \u043f\u043b\u0435\u043d\u043a\u0430",
                        weight: "2.5",
                        minidesc:
                            "\u0411\u0443\u043c\u0430\u0433\u0430 \u0411\u0443\u043c\u0430\u0433\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u043d\u0430\u044f \u0431\u0435\u043b\u0430\u044f \u0434\u043b\u044f \u043e\u0444\u0438\u0441\u043d\u043e\u0439 \u0442\u0435\u0445\u043d\u0438\u043a\u0438 \u043f\u0430\u0447\u043a\u0430 500\u043b.",
                        image: "5a\/c3\/575bdf65ac399822934703",
                        warehouse: "2",
                        wh_offset: "0",
                        discount: "0",
                        options: "[]",
                        source: "1c",
                        name_url: "svetocopy_sveto_copy_a480g146cie",
                        available: "511919",
                    },
                    511921: {
                        pk_item: "2372126",
                        fk_item: "0",
                        fk_order: "1240279",
                        fk_good: "511919",
                        price: "230",
                        amount: "1",
                        vendor: "SvetoCopy",
                        model: "SVETO COPY (\u04104,80\u0433,146%CIE)",
                        part_number: "13500",
                        type: "\u0411\u0443\u043c\u0430\u0433\u0430 \u0438 \u043f\u043b\u0435\u043d\u043a\u0430",
                        weight: "2.5",
                        minidesc:
                            "\u0411\u0443\u043c\u0430\u0433\u0430 \u0411\u0443\u043c\u0430\u0433\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u043d\u0430\u044f \u0431\u0435\u043b\u0430\u044f \u0434\u043b\u044f \u043e\u0444\u0438\u0441\u043d\u043e\u0439 \u0442\u0435\u0445\u043d\u0438\u043a\u0438 \u043f\u0430\u0447\u043a\u0430 500\u043b.",
                        image: "5a\/c3\/575bdf65ac399822934703",
                        warehouse: "2",
                        wh_offset: "0",
                        discount: "0",
                        options: "[]",
                        source: "1c",
                        name_url: "svetocopy_sveto_copy_a480g146cie",
                        available: "511919",
                    },
                    511922: {
                        pk_item: "2372127",
                        fk_item: "0",
                        fk_order: "1240279",
                        fk_good: "511919",
                        price: "230",
                        amount: "1",
                        vendor: "SvetoCopy",
                        model: "SVETO COPY (\u04104,80\u0433,146%CIE)",
                        part_number: "13500",
                        type: "\u0411\u0443\u043c\u0430\u0433\u0430 \u0438 \u043f\u043b\u0435\u043d\u043a\u0430",
                        weight: "2.5",
                        minidesc:
                            "\u0411\u0443\u043c\u0430\u0433\u0430 \u0411\u0443\u043c\u0430\u0433\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u043d\u0430\u044f \u0431\u0435\u043b\u0430\u044f \u0434\u043b\u044f \u043e\u0444\u0438\u0441\u043d\u043e\u0439 \u0442\u0435\u0445\u043d\u0438\u043a\u0438 \u043f\u0430\u0447\u043a\u0430 500\u043b.",
                        image: "5a\/c3\/575bdf65ac399822934703",
                        warehouse: "2",
                        wh_offset: "0",
                        discount: "0",
                        options: "[]",
                        source: "1c",
                        name_url: "svetocopy_sveto_copy_a480g146cie",
                        available: "511919",
                    },
                    511935: {
                        pk_item: "2372135",
                        fk_item: "0",
                        fk_order: "1240279",
                        fk_good: "511919",
                        price: "230",
                        amount: "1",
                        vendor: "SvetoCopy",
                        model: "SVETO COPY (\u04104,80\u0433,146%CIE)",
                        part_number: "13500",
                        type: "\u0411\u0443\u043c\u0430\u0433\u0430 \u0438 \u043f\u043b\u0435\u043d\u043a\u0430",
                        weight: "2.5",
                        minidesc:
                            "\u0411\u0443\u043c\u0430\u0433\u0430 \u0411\u0443\u043c\u0430\u0433\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u043d\u0430\u044f \u0431\u0435\u043b\u0430\u044f \u0434\u043b\u044f \u043e\u0444\u0438\u0441\u043d\u043e\u0439 \u0442\u0435\u0445\u043d\u0438\u043a\u0438 \u043f\u0430\u0447\u043a\u0430 500\u043b.",
                        image: "5a\/c3\/575bdf65ac399822934703",
                        warehouse: "2",
                        wh_offset: "0",
                        discount: "0",
                        options: "[]",
                        source: "1c",
                        name_url: "svetocopy_sveto_copy_a480g146cie",
                        available: "511919",
                    },
                    511940: {
                        pk_item: "2372140",
                        fk_item: "0",
                        fk_order: "1240279",
                        fk_good: "511919",
                        price: "230",
                        amount: "1",
                        vendor: "SvetoCopy",
                        model: "SVETO COPY (\u04104,80\u0433,146%CIE)",
                        part_number: "13500",
                        type: "\u0411\u0443\u043c\u0430\u0433\u0430 \u0438 \u043f\u043b\u0435\u043d\u043a\u0430",
                        weight: "2.5",
                        minidesc:
                            "\u0411\u0443\u043c\u0430\u0433\u0430 \u0411\u0443\u043c\u0430\u0433\u0430 \u0444\u043e\u0440\u043c\u0430\u0442\u043d\u0430\u044f \u0431\u0435\u043b\u0430\u044f \u0434\u043b\u044f \u043e\u0444\u0438\u0441\u043d\u043e\u0439 \u0442\u0435\u0445\u043d\u0438\u043a\u0438 \u043f\u0430\u0447\u043a\u0430 500\u043b.",
                        image: "5a\/c3\/575bdf65ac399822934703",
                        warehouse: "2",
                        wh_offset: "0",
                        discount: "0",
                        options: "[]",
                        source: "1c",
                        name_url: "svetocopy_sveto_copy_a480g146cie",
                        available: "511919",
                    },
                },
                cancel_requested: false,
                adjust_requested: false,
                allowCancel: true,
                allowAdjust: true,
                hash: "0668dc05809833c64f594fc2cccc15bf",
                allowPayOnline: true,
            },
            1240271: {
                pk_order: "1240271",
                fk_site: "1",
                fk_user: "2",
                email: "user2@mail.local",
                phone: "+7 645 123 4567",
                phone_additional: "",
                name: "\u0418\u0432\u0430\u043d\u043e\u04322 \u0418\u0432\u0430\u043d2",
                firstname: "\u0418\u0432\u0430\u043d2",
                midname: "",
                lastname: "\u0418\u0432\u0430\u043d\u043e\u04322",
                user_type: "1",
                firm_name:
                    "\u041e\u041e\u041e '\
    		u041f\ u0440\ u0438\ u043c\ u0435\ u0440 2 '",
                firm_inn: "6449013711",
                firm_kpp: "644901001",
                firm_address:
                    "\u041c\u043e\u0441\u043a\u0432\u0430, \u041a\u0440\u0435\u043c\u043b\u044c",
                firm_fax: "",
                firm_phone: "+7 645 123 4567",
                dtime: "1669375771",
                order_id: "25.11.2022\/2",
                url_key: "6380a71bc36f6666645512",
                total: "72030",
                dlv_fk_city: "0",
                dlv_fk_metro: "1",
                dlv_type: "5",
                payment: "14",
                dlv_prefer_dtime: "1669496400",
                dlv_address: "\u043b\u0435\u043d\u0438\u043d\u0430\u00a02",
                delivery_cost: "0",
                payment_st: "",
                delivery_st: "",
                user_comment: "",
                fk_manager: "123",
                manager:
                    "\u0428\u043b\u044f\u043f\u043d\u0438\u043a\u043e\u0432\u0430 \u0415\u043b\u0435\u043d\u0430",
                manager_1c:
                    "\u0428\u043b\u044f\u043f\u043d\u0438\u043a\u043e\u0432\u0430 \u0415\u043b\u0435\u043d\u0430",
                user_ip: "172.18.0.1",
                wh_offset: "0",
                tracking: "",
                book_number: "",
                send_sms: "0",
                approve_type: "0",
                points_used: "0",
                credit: "0",
                wholesale: "0",
                source: "0",
                reward: "1",
                fk_outlet: "5",
                order_log:
                    "[2022-11-25 14:29:31] \u042d\u0442\u0430\u043f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0437\u0430\u043a\u0430\u0437\u0430 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u043e\u043c.<br \/>[2022-11-25 14:29:31] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u0432\u044b\u0445\u043e\u0434\u043d\u043e\u0439.<br \/>[2022-11-25 14:29:31] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.<br \/>[2022-11-25 14:29:31] \u0420\u0430\u0431\u043e\u0447\u0438\u0439 \u0434\u0435\u043d\u044c.<br \/>[2022-11-25 14:29:31] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.<br \/>[2022-11-25 14:29:31] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u0432\u044b\u0445\u043e\u0434\u043d\u043e\u0439.<br \/>[2022-11-25 14:29:31] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.<br \/>[2022-11-25 14:29:31] \u0420\u0430\u0431\u043e\u0447\u0438\u0439 \u0434\u0435\u043d\u044c.<br \/>[2022-11-25 14:29:31] -----<br \/>[2022-11-25 14:29:31] \u042d\u0442\u0430\u043f \u043f\u043e\u0441\u0442\u0430\u0432\u043a\u0438.<br \/>[2022-11-25 14:29:31] \u041f\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0442\u043e\u0432\u0430\u0440\u0430 523568 \u0432 stadium<br \/>[2022-11-25 14:29:31] -----<br \/>[2022-11-25 14:29:31] \u041f\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0438\u0437 himki, \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: 1<br \/>[2022-11-25 14:29:31] \u0422\u043e\u0432\u0430\u0440 \u0432 \u043d\u0430\u043b\u0438\u0447\u0438\u0438.<br \/>[2022-11-25 14:29:31] \u0422\u0440\u0430\u043d\u0441\u0444\u0435\u0440 \u0438\u0437 \u0414\u043e\u043b\u0433\u043e\u043f\u0440\u0443\u0434\u043d\u043e\u0433\u043e \u043d\u0430 \u0412\u043e\u0434\u043d\u044b\u0439 \u0441\u0442\u0430\u0434\u0438\u043e\u043d<br \/>[2022-11-25 14:29:31] \u041f\u0440\u0438\u043d\u044f\u0442\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u0442\u0440\u0430\u043d\u0441\u0444\u0435\u0440.<br \/>[2022-11-25 14:29:31] \u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u043a\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 (2100), H = 21, M = 00<br \/>[2022-11-25 21:00:00] \u041c\u0430\u0448\u0438\u043d\u0430 \u0443\u0435\u0445\u0430\u043b\u0430.<br \/>[2022-11-25 21:00:00] \u041f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u043d\u0430 \u0437\u0430\u0432\u0442\u0440\u0430.<br \/>[2022-11-26 00:00:00] \u041f\u0435\u0440\u0435\u0445\u043e\u0434 \u043a\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 (900), H = 9, M = 00<br \/>[2022-11-26 09:00:00] \u041c\u0430\u0448\u0438\u043d\u0430 \u043f\u0440\u0438\u0435\u0445\u0430\u043b\u0430.<br \/>[2022-11-26 09:00:00] -----<br \/>[2022-11-26 09:00:00] \u042d\u0442\u0430\u043f \u043e\u0442\u0433\u0440\u0443\u0437\u043a\u0438.<br \/>[2022-11-26 09:00:00] \u0412\u0435\u0441: 0.001<br \/>[2022-11-26 09:00:00] \u0413\u0435\u043e\u0437\u043e\u043d\u0430: 0<br \/>[2022-11-26 09:00:00] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.<br \/>[2022-11-26 09:00:00] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.<br \/>[2022-11-26 09:00:00] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.<br \/>[2022-11-26 09:00:00] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.<br \/>[2022-11-26 09:00:00] \u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0442\u043e\u0432\u0430\u0440\u0430 \u0441 \u0434\u0440\u0443\u0433\u043e\u0433\u043e \u0441\u043a\u043b\u0430\u0434\u0430. \u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437 \u043d\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0434\u0435\u043d\u044c \u043f\u043e\u0441\u043b\u0435 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u0442\u043e\u0432\u0430\u0440\u0430.<br \/>[2022-11-26 09:00:00] \u041f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u043d\u0430 \u0437\u0430\u0432\u0442\u0440\u0430.<br \/>[2022-11-27 00:00:00] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.<br \/>[2022-11-27 00:00:00] \u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u043d\u0430 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435. \u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0439 \u043d\u0435\u0442.",
                points: 0,
                items: {
                    523568: {
                        pk_item: "2372114",
                        fk_item: "0",
                        fk_order: "1240271",
                        fk_good: "523568",
                        price: "72030",
                        amount: "1",
                        vendor: "Adobe",
                        model: "Creative Cloud for teams - All Apps with Stock ALL Level 2 10-49",
                        part_number: "65270530BA02A12",
                        type: "\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0435 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435",
                        weight: "0.001",
                        minidesc:
                            "\u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 (\u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e) \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 (\u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e) \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043e 02.09.2016",
                        image: "a8\/2b\/577ce3ca82b07689796655",
                        warehouse: "4",
                        wh_offset: "2",
                        discount: "0",
                        options: "[]",
                        source: "1c",
                        name_url:
                            "adobe_creative_cloud_for_teams_-_all_apps_with_stock_all_level_2_10-49",
                        available: "523568",
                    },
                },
                cancel_requested: false,
                adjust_requested: false,
                allowCancel: true,
                allowAdjust: true,
                hash: "86f86ebd069e5d33510a4618867022c6",
                allowPayOnline: false,
            },
        };

        const getHeaderLabel = computed(() => {
            return Object.keys(orders).length;
        });

        return {
            archive,
            orders,
            getHeaderLabel,
        };
    },
};
</script>

<style lang="sass">
.site-orders
    .site-orders-header
        margin-bottom: 48px

    .site-orders__list
        display: flex
        flex-direction: column
        grid-row-gap: 24px
</style>
