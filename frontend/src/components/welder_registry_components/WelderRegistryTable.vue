<template>
    <RegistryTable :amountRows="welders.length">
        <thead class="table_header">
            <tr>
                <th class="header_cell index_column">№</th>
                <th class="header_cell name_column">Full Name</th>
                <th class="header_cell kleymo_column">Kleymo</th>
                <th class="header_cell birthday_column">Birthday</th>
                <th class="header_cell nation_column">Nation</th>
                <th class="header_cell passport_column">Passport</th>
                <th class="header_cell sicil_column">Sicil</th>
                <th class="header_cell status_column">Status</th>
            </tr>
        </thead>
        <tbody>
            <WelderRegistryRow v-for="(welder, index) in welders" 
            :key="index" 
            :index="index" 
            :welder="welder"
            ></WelderRegistryRow>
        </tbody>
    </RegistryTable>
</template>

<script>
    import RegistryTable from "@/components/RegistryTable.vue"
    import WelderRegistryRow from "@/components/welder_registry_components/WelderRegistryRow.vue"
    export default{
        name: "WelderRegistryTable",
        components: { RegistryTable, WelderRegistryRow },
        computed: {
            welders: function(){
                return this.$store.getters["welderRegistry/getWelders"]
            }
        }
    }
</script>

<style scoped>
    .index_column{
        width: 1vw;
    }
    .kleymo_column, .nation_column, .status_column{
        width: 3.5vw;
    }
    .birthday_column, .passport_column, .sicil_column{
        width: 5vw;
    }
</style>