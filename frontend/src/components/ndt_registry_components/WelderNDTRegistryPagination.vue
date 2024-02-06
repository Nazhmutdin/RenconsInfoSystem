<template>
    <div v-if="amountPages > 1" class="pagination">
        <div class="pages-amount">Amount Pages: {{ amountPages }}</div>
        <div class="pagination-buttons">
            <div class="previous-page-button welder-registry-page-button">
                <button @click="previousPage()">Previous</button>
            </div>
            <div class="current-page">{{ currentPage }}</div>
            <div class="next-page-button welder-registry-page-button">
                <button @click="nextPage()">Next</button>
            </div>
        </div>
    </div>
</template>


<script>
    export default{
        name: "WelderNDTRegistryPagination",
        methods:{
            nextPage(){
                if (this.currentPage < this.amountPages){
                    this.$store.commit("welderNDTRegistry/setCurrentPage", this.currentPage + 1)
                    this.$store.dispatch("welderNDTRegistry/getWelderNDTs")
                }
            },
            previousPage(){
                if (this.currentPage > 1){
                    this.$store.commit("welderNDTRegistry/setCurrentPage", this.currentPage - 1)
                    this.$store.dispatch("welderNDTRegistry/getWelderNDTs")
                }
            }
        },
        computed:{
            amountPages: function(){
                return Math.ceil(this.$store.getters["welderNDTRegistry/getCount"] / this.$store.getters["welderRegistry/getPageSize"])
            },
            currentPage: function(){
                return this.$store.getters["welderNDTRegistry/getCurrentPage"]
            }
        }
    }
</script>


<style scoped>
    .pagination{
        margin-left: 0;
    }
    .pagination-buttons{
        padding: 1vw 0;
        display: inline-flex;
    }
    .welder-registry-page-button{
        padding: 0 25px;
    }
    .pages-amount{
        font-size: min(2.5vh, 16px);
        color: rgb(24, 114, 217);
    }
    .welder-registry-page-button button{
        color: darkblue;
        background-color: lightblue;
        border: 1px, solid, darkblue;
        border-radius: 5px;
    }
    .previous-page-button{
        padding-left: 0;
    }
</style>