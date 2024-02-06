<template>
  <div class="sidebar_area">
    <SideBar></SideBar>
  </div>
  <div class="input_area">
    <input @keypress="searchWeldersOnEnter" type="text" v-model="searchValuesString">
    <button @click="searchWelders">Search</button>
    <WelderRegistryPagination 
    :currentPage="currentPage" 
    :amountPages="amountPages" 
    @nextPage="nextPage" 
    @previousPage="previousPage" 
    class="pagination">
  </WelderRegistryPagination>
  </div>
  <div class="content">
    <WelderRegistryTable></WelderRegistryTable>
  </div>
  <div class="filter_area">
    <WelderFilterBar></WelderFilterBar>
  </div>
</template>


<!--
<=====================================================================>
-->


<script>
  import SideBar from "@/components/SideBar.vue"
  import WelderRegistryTable from "@/components/welder_registry_components/WelderRegistryTable.vue"
  import WelderFilterBar from "@/components/welder_registry_components/WelderFilterBar.vue"
  import WelderRegistryPagination from "@/components/Pagination.vue"

  export default{
    name: "WelderRegistry",
    data(){
      return {
        searchValuesString: ""
      }
    },
    components: { SideBar, WelderRegistryTable, WelderRegistryPagination, WelderFilterBar },
    computed: {
      currentPage: {
        get(){
          return this.$store.getters["welderRegistry/getCurrentPage"] 
        },
        set(value){
          this.$store.commit("welderRegistry/setCurrentPage", value)
        }
      },
      amountPages: function(){
        return Math.ceil(this.$store.getters["welderRegistry/getCount"] / this.$store.getters["welderRegistry/getPageSize"])
      }
    },
    methods: {
      searchWelders() {
        this.$store.commit("welderRegistry/setCurrentPage", 1)
        this.extractSearchValues()
        this.$store.dispatch("welderRegistry/searchWelders", (err) => {
          console.log(err)
          this.$router.push({ name: "authentication" })
        })
      },
      searchWeldersOnEnter(event){
        if (event.key == "Enter"){
          this.searchWelders()
        }
      },
      nextPage() {
        if (this.currentPage < this.amountPages){
          this.$store.commit("welderRegistry/setCurrentPage", this.currentPage + 1)
          this.$store.dispatch("welderRegistry/searchWelders")
        }
      },
      previousPage() {
        if (this.currentPage > 1){
          this.$store.commit("welderRegistry/setCurrentPage", this.currentPage - 1)
          this.$store.dispatch("welderRegistry/searchWelders")
        }
      },
      extractSearchValues(){
        let kleymos = [];
        let certificationNumbers = []
        let names = []
        let searchValues = this.searchValuesString.split(';');

        for (let i = 0; i < searchValues.length; i++){
          let value = searchValues[i].trim()
          if (/^[A-Z0-9]{4}$/.test(value)) {
            kleymos.push(value)
          }
          else if (/^[А-Я]+[-][0-9А-Я]+[-][IV]+[-][0-9]+$/.test(value)) {
            certificationNumbers.push(value)
          }
          else {
            names.push(value)
          }
        }

        this.$store.commit("welderRegistry/setSearchValues", {
          'kleymos': kleymos,
          'names': names,
          'certificationNumbers': certificationNumbers
        })
      }
    }
  }
</script>


<!--
<=====================================================================>
-->


<style scoped>
  .input_area{
    margin-left: 2vw;
  }
  .input_area *{
    margin-right: 2vw;
  }
  .pagination{
    display: inline-block;
  }
  .content{
    margin: 0 0 0 2vw;
    width: 70%;
  }
  .content, .filter_area{
    display: inline-block;
  }
  .filter_area{
    margin: 0;
    width: 100%;
    position: fixed;
  }
  .filter_area div{
    transform: translateX(25%);
  }
  .sidebar_area{
    width: 100%;
    margin-bottom: 2vh;
    position: sticky;
  }
  .input_area{
    margin-bottom: 2vw;
  }
  .input_area input[type=text]{
    width: 40vw;
    height: 3vh;
    margin-right: 2vw;
    border: 1px solid blue;
    border-radius: 5px;
  }
  .input_area button{
    background-color: aqua;
    border: 1px solid lightblue;
    border-radius: 5px;
  }
  .input_area input:focus{
    border: 3px solid lightblue;
    border-radius: 5px;
  }
  .input_area button:hover{
    cursor: pointer
  }
</style>
