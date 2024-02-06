<template>
    <div v-if="ndts.length > 0" class="welder-ndt-table welder-table">
        <h2>NDTs ({{ ndts.length }})</h2>
        <table>
            <thead>
                <tr>
                    <th colspan="5">ndt summary data</th>
                    <th colspan="5">Total welded pipe</th>
                    <th colspan="5">Length of pipe weld joint</th>
                    <th colspan="5">Structural</th>
                </tr>
                <tr>
                    <th class="table-header">№</th>
                    <th class="table-header">company</th>
                    <th class="table-header">subcompany</th>
                    <th class="table-header">project</th>
                    <th class="table-header subcol-border">welding date</th>
                    <th class="table-header">total welded</th>
                    <th class="table-header">total ndt</th>
                    <th class="table-header">total accepted</th>
                    <th class="table-header">total repair</th>
                    <th class="table-header subcol-border">total status</th>
                    <th class="table-header">total welded</th>
                    <th class="table-header">total ndt</th>
                    <th class="table-header">total accepted</th>
                    <th class="table-header">total repair</th>
                    <th class="table-header subcol-border">total status</th>
                    <th class="table-header">total welded</th>
                    <th class="table-header">total ndt</th>
                    <th class="table-header">total accepted</th>
                    <th class="table-header">total repair</th>
                    <th class="table-header subcol-border">total status</th>
                </tr>
            </thead>
            <tbody>
                <WelderNDTTableRow v-for="(ndt, index) in ndts" 
                :key="index"
                :index="index"
                :ndt="ndt">
                </WelderNDTTableRow>
            </tbody>
        </table>
    </div>
    <div v-else class="welder-ndt-table welder-table">
        <h2>No ndts</h2>
    </div>
</template>


<script>
    import WelderNDTTableRow from '@/components/welder_page_components/WelderNDTTableRow.vue'
    export default{
        name: "WelderNDTTable",
        components: { WelderNDTTableRow },
        props: {
            ndts: {
                type: Array
            }
        }
    }
</script>


<style scoped src="@/styles/welder_page_table.css">
    .subcol-border{
        border-right: 1px solid blue;
    }

</style>
