<template>
    <tr class="welder-ndt-table-row">
        <td class="table-row-item">{{ index + 1 }}</td>
        <td class="table-row-item">{{ ndt.comp }}</td>
        <td class="table-row-item">{{ ndt.subcon }}</td>
        <td class="table-row-item">{{ ndt.project }}</td>
        <td class="table-row-item">{{ weldingDate }}</td>
        <td class="table-row-item">{{ ndt.total_weld_1 }}</td>
        <td class="table-row-item">{{ ndt.total_ndt_1 }}</td>
        <td class="table-row-item">{{ ndt.total_accepted_1 }}</td>
        <td class="table-row-item">{{ ndt.total_repair_1 }}</td>
        <td class="table-row-item">{{ ndt.repair_status_1 }}</td>
        <td class="table-row-item">{{ ndt.total_weld_2 }}</td>
        <td class="table-row-item">{{ ndt.total_ndt_2 }}</td>
        <td class="table-row-item">{{ ndt.total_accepted_2 }}</td>
        <td class="table-row-item">{{ ndt.total_repair_2 }}</td>
        <td class="table-row-item">{{ ndt.repair_status_2 }}</td>
        <td class="table-row-item">{{ ndt.total_weld_3 }}</td>
        <td class="table-row-item">{{ ndt.total_ndt_3 }}</td>
        <td class="table-row-item">{{ ndt.total_accepted_3 }}</td>
        <td class="table-row-item">{{ ndt.total_repair_3 }}</td>
        <td class="table-row-item">{{ ndt.repair_status_3 }}</td>
    </tr>
</template>

<script>
    import utils from "@/mixins/utils.js"
    export default{
        name: "WelderNDTTableRow",
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
            }
        }
    }
</script>


<style scoped src="@/styles/welder_page_table.css">
</style>