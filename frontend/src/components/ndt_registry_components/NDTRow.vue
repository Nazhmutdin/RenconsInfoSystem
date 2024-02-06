<template>
    <tr class="welder-ndt-table-row">
        <td class="table-row-item">{{ index + 1 }}</td>
        <td class="table-row-item"><router-link :to="{ name: 'welder', params: { id: ndt.kleymo } }" class="router-link">{{ ndt.kleymo }}</router-link></td>
        <td class="table-row-item">{{ ndt.comp }}</td>
        <td class="table-row-item">{{ ndt.subcon }}</td>
        <td class="table-row-item">{{ ndt.project }}</td>
        <td class="table-row-item">{{ weldingDate }}</td>
        <td class="table-row-item">{{ ndt.total_weld_1 }}</td>
        <td class="table-row-item">{{ ndt.total_ndt_1 }}</td>
        <td class="table-row-item">{{ ndt.total_accepted_1 }}</td>
        <td class="table-row-item">{{ ndt.total_repair_1 }}</td>
        <td class="table-row-item">{{ status1 }}</td>
        <td class="table-row-item">{{ ndt.total_weld_2 }}</td>
        <td class="table-row-item">{{ ndt.total_ndt_2 }}</td>
        <td class="table-row-item">{{ ndt.total_accepted_2 }}</td>
        <td class="table-row-item">{{ ndt.total_repair_2 }}</td>
        <td class="table-row-item">{{ status2 }}</td>
        <td class="table-row-item">{{ ndt.total_weld_3 }}</td>
        <td class="table-row-item">{{ ndt.total_ndt_3 }}</td>
        <td class="table-row-item">{{ ndt.total_accepted_3 }}</td>
        <td class="table-row-item">{{ ndt.total_repair_3 }}</td>
        <td class="table-row-item">{{ status3 }}</td>
    </tr>
</template>

<script>
    import utils from "@/mixins/utils"
    export default {
        name: "NDTRow",
        mixins: [utils],
        props: {
            ndt: {
                type: Object
            },
            index: {
                type: Number
            }
        },
        computed: {
            weldingDate: function(){
                return this.formatDate(this.ndt.welding_date, "ru-RU")
            },
            status1: function(){
                return `${this.ndt.repair_status_1}%`
            },
            status2: function(){
                return `${this.ndt.repair_status_2}%`
            },
            status3: function(){
                return `${this.ndt.repair_status_3}%`
            }
        }
    }
</script>

<style scoped>
    .table-row-item{
        height: 3vh;
        color: rgb(7, 80, 175);
        font-size: 15px;
        text-align: center;
        padding: 0 7px;
    }
    td{
        border-bottom: 1px solid rgb(78, 184, 238);
    }
    .router-link{
        text-decoration: none;
        font-weight: normal;
        color: rgb(7, 80, 175);
        transition: all .1 ease;
    }
    .router-link:hover{
        font-weight: bold;
        cursor: pointer;
    }
    .welder-ndt-table-row:hover{
        background-color: rgb(204, 231, 248);
    }
</style>
