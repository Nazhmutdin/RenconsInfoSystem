<template>
    <div v-show="getCount() != 0" class="summary-ndt-count">
        <span><b>NDTs found:</b>&nbsp;{{ getCount() }}</span>
    </div>
    <table v-if="ndts.length != 0" class="content-table">
        <thead class="content-table-header">
            <tr>
                <th class="table-header-item" colspan="5">ndt data</th>
                <th class="table-header-item" colspan="5">Total welded pipe</th>
                <th class="table-header-item" colspan="5">Length of pipe weld joint</th>
                <th class="table-header-item" colspan="5">Structural</th>
            </tr>
            <tr>
                <th class="table-header-subitem">№</th>
                <th class="table-header-subitem">kleymo</th>
                <th class="table-header-subitem">company</th>
                <th class="table-header-subitem">subcompany</th>
                <th class="table-header-subitem">project</th>
                <th class="table-header-subitem subcol-border">welding date</th>
                <th class="table-header-subitem">welded</th>
                <th class="table-header-subitem">ndt</th>
                <th class="table-header-subitem">accepted</th>
                <th class="table-header-subitem">repair</th>
                <th class="table-header-subitem subcol-border">status</th>
                <th class="table-header-subitem">welded</th>
                <th class="table-header-subitem">ndt</th>
                <th class="table-header-subitem">accepted</th>
                <th class="table-header-subitem">repair</th>
                <th class="table-header-subitem subcol-border">status</th>
                <th class="table-header-subitem">welded</th>
                <th class="table-header-subitem">ndt</th>
                <th class="table-header-subitem">accepted</th>
                <th class="table-header-subitem">repair</th>
                <th class="table-header-subitem subcol-border">status</th>
            </tr>
        </thead>
        <tbody>
            <NDTRow v-for="(ndt, index) in ndts"
            :key="index"
            :ndt="ndt"
            :index="index"
            ></NDTRow>
        </tbody>
    </table>
    <table v-else><div class="empty-content-container">Empty😧</div></table>
</template>


<!--
<=====================================================================>
-->


<script>
    import NDTRow from "@/components/ndt_registry_components/NDTRow.vue"
    export default{
        name: "NDTList",
        components: { NDTRow },
        methods: {
            getCount(){
                return this.$store.getters["welderNDTRegistry/getCount"]
            }
        },
        computed: {
            ndts: function(){
                return this.$store.getters["welderNDTRegistry/getNDTs"]
            }
        }
    }
</script>


<!--
<=====================================================================>
-->


<style scoped>
    .summary-ndt-count{
        margin-top: 1vw;
        font-size: 16px;
        color: rgb(24, 114, 217);
    }
    .table-header-subitem{
        border-bottom: 4px double rgb(32, 78, 186);
        font-size: min(2.5vh, 18px);
        font-weight: bold;
        padding: 0 7px;
        color: rgb(24, 114, 217);
    }
    .table-header-item{
        font-size: min(2.5vh, 18px);
        font-weight: bold;
        color: rgb(24, 114, 217);
    }
    .content-table{
        border-collapse: collapse;
    }
</style>