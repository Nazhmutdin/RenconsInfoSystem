<template>
  <SideBar></SideBar>
  <div class="content">
    <div class="input-area">
        <input @keypress="searchNDTsOnEnter" type="text" v-model="searchValuesString">
        <button @click="searchNDTs">Search</button>
        <button @click="showFilters = !showFilters">filters</button>
        <div v-if="showFilters" class="modal"><Filters :showFilters="showFilters" @close="showFilters = false"></Filters></div>
        <div v-else class="modal"></div> 
    </div>
    <WelderNDTRegistryPagination></WelderNDTRegistryPagination>
    <NDTList></NDTList>
  </div>
</template>

<script>
    import SideBar from "@/components/SideBar.vue"
    import WelderNDTRegistryPagination from "@/components/ndt_registry_components/WelderNDTRegistryPagination.vue"
    import NDTList from "@/components/ndt_registry_components/NDTList.vue"
    import Filters from "@/components/ndt_registry_components/WelderNDTFiltersModalWindow.vue"

    export default {
        name: "WelderNDTRegistry",
        components: { SideBar, WelderNDTRegistryPagination, NDTList, Filters },
        data(){
            return {
                searchValuesString: "",
                showFilters: false
            }
        },
        methods: {
            searchNDTs() {
                this.$store.commit("welderNDTRegistry/setCurrentPage", 1)
                this.extractSearchValues()
                this.$store.dispatch("welderNDTRegistry/getWelderNDTs")
            },
            searchNDTsOnEnter(event){
                if (event.key == "Enter"){
                    this.searchNDTs()
                }
            },
            extractSearchValues(){
                if (this.searchValuesString === ""){
                    return 
                }

                let kleymos = [];
                let names = []
                let searchValues = this.searchValuesString.split(';');

                for (let i = 0; i < searchValues.length; i++){
                    let value = searchValues[i].trim()
                    if (/^[A-Z0-9]{4}$/.test(value)) {
                        kleymos.push(value)
                    }
                    else {
                        names.push(value)
                    }
                }

                this.$store.commit("welderNDTRegistry/setSearchValues", {
                    'kleymos': kleymos,
                    'names': names,
                })
            }
        }
    }

</script>

<style scoped>

    body {
        background: rgb(237, 246, 252); 
    }
    *{
        margin: auto;
    }
    .content{
        float: left;
        margin: 2vw;
        margin-top: 5vw;
    }
    .welder-filter-bar{
        margin-top: 12vh;
        width: 20vw;
        float: right;
    }
    .input-area{
        margin-bottom: 2vw;
    }
    .input-area input[type=text]{
        width: 40vw;
        height: 3vh;
        margin-right: 1.5vw;
        border: 1px solid blue;
        border-radius: 5px;
    }
    .input-area button{
        background-color: aqua;
        border: 1px solid lightblue;
        margin-right: .5vw;
        border-radius: 5px;
    }
    .input-area input:focus{
        border: 3px solid lightblue;
        border-radius: 5px;
    }
    .input-area button:hover{
        cursor: pointer
    }
</style>