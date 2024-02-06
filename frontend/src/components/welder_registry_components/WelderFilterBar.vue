<template>
    <div class="filter-bar">
        <ul class="filters">
            <li class="filter">
                <strong>certification date:</strong>
                <div class="from_before">
                    <div class="from_filter">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;from:&nbsp;</span>
                        <input @change="setSearchFilters" v-model="certificationDateFrom" type="date" class="filter-input date-filter-input">  
                    </div>
                    <div class="before_filter">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;before:&nbsp;</span>
                        <input @change="setSearchFilters" v-model="certificationDateBefore" type="date" class="filter-input date-filter-input">
                    </div>
                </div>
            </li>
            <li class="filter">
                <strong>expiration date:</strong>
                <div class="from_before">
                    <div class="from_filter">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;from:&nbsp;</span>
                        <input @change="setSearchFilters" v-model="expirationDateFrom" type="date" class="filter-input date-filter-input">
                    </div>
                    <div class="before_filter">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;before:&nbsp;</span>
                        <input @change="setSearchFilters" v-model="expirationDateBefore" type="date" class="filter-input date-filter-input">
                    </div>
                </div>
            </li>
            <li class="filter">
                <strong>expiration date (fact):</strong>
                <div class="from_before">
                    <div class="from_filter">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;from:&nbsp;</span>
                        <input @change="setSearchFilters" v-model="expirationDateFactFrom" type="date" class="filter-input date-filter-input">
                    </div>
                    <div class="before_filter">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;before:&nbsp;</span>
                        <input @change="setSearchFilters" v-model="expirationDateFactBefore" type="date" class="filter-input date-filter-input">
                    </div>
                </div>
            </li>
            <li class="filter status-filter">
                <strong>status true:&nbsp;</strong>
                <select v-model="status" class="status-select" name="select" id="">
                    <option value="null">all</option>
                    <option value=1>&#10004;</option>
                    <option value=0>&#10008;</option>
                </select>
            </li>
            <div class="filter-bar-buttons">
                <button @click="clearFilters" class="clear-search-filters filter-bar-button">clear filters</button>
                <button @click="setSoonExpirationDateFilters" class="soon-expiration-button filter-bar-button">soon expiration</button>
            </div>
        </ul>
    </div>
</template>



<!--
<=====================================================================>
-->


<script>
    export default{
        name: "WelderFilterBar",
        methods: {
            setSoonExpirationDateFilters(){
                let date = new Date()
                this.expirationDateFactFrom = date.toISOString().split("T")[0]
                date.setMonth(date.getMonth()+2)
                this.expirationDateFactBefore = date.toISOString().split("T")[0]
            },
            clearFilters(){
                this.certificationDateFrom = null
                this.certificationDateBefore = null
                this.expirationDateFrom = null
                this.expirationDateBefore = null
                this.expirationDateFactFrom = null
                this.expirationDateFactBefore = null
                this.status = null
            }
        },
        computed: {
            certificationDateFrom:{
                get(){
                    return this.$store.getters["welderRegistry/getCertificationDateFrom"]
                },
                set(value){
                    this.$store.commit("welderRegistry/setCertificationDateFrom", value)
                }
            },
            certificationDateBefore:{
                get(){
                    return this.$store.getters["welderRegistry/getCertificationDateBefore"]
                },
                set(value){
                    this.$store.commit("welderRegistry/setCertificationDateBefore", value)
                }
            },
            expirationDateFrom:{
                get(){
                    return this.$store.getters["welderRegistry/getExpirationDateFrom"]
                },
                set(value){
                    this.$store.commit("welderRegistry/setExpirationDateFrom", value)
                }
            },
            expirationDateBefore:{
                get(){
                    return this.$store.getters["welderRegistry/getExpirationDateBefore"]
                },
                set(value){
                    this.$store.commit("welderRegistry/setExpirationDateBefore", value)
                }
            },
            expirationDateFactFrom:{
                get(){
                    return this.$store.getters["welderRegistry/getExpirationDateFactFrom"]
                },
                set(value){
                    this.$store.commit("welderRegistry/setExpirationDateFactFrom", value)
                }
            },
            expirationDateFactBefore:{
                get(){
                    return this.$store.getters["welderRegistry/getExpirationDateFactBefore"]
                },
                set(value){
                    this.$store.commit("welderRegistry/setExpirationDateFactBefore", value)
                }
            },
            status:{
                get(){
                    return this.$store.getters["welderRegistry/getStatus"]
                },
                set(value){
                    if (value === "null"){
                        value = null
                    }
                    this.$store.commit("welderRegistry/setStatus", value)
                }
            }
        }
    }
</script>


<!--
<=====================================================================>
-->


<style scoped>
    .filters{
        padding-left: 25px;
        padding-top: .3vw;
    }
    .filter-bar{
        border-radius: 7px;
        border: 1px solid blue;
        width: 18vw;
        margin: 0;
        font-size: max(16px, 1.1vw);
    }
    .filter{
        color:blue;
        list-style: none;
        padding-bottom: 1vw;
    }
    .filter:not(:last-child)::after{
        content: "";
        display: block;
        margin: 1vw auto 0;
        width: 6vw;
        height: 2px;
        background-color: rgb(33, 33, 248);
    }
    .filter-bar-button{
        margin-bottom: 1vw;
        border: 1px solid blue;
        border-radius: 3px;
        color: blue;
        margin-right: 0.5vw;
        background-color: rgb(237, 246, 252);
    }
    .filter-input{
        border: rgb(152, 201, 245) solid 1px;
        border-radius: 5px;
        background-color: rgb(221, 245, 252);
        height: max(14px, .9vw);
    }
    .date-filter-input{
        width: 7vw;
    }
    .from_filter, .before_filter{
        padding-top: 5px;
    }
    .status-filter .filter-input{
        padding-top: 100px;
    }
    .status-select{
        border: 1px solid blue;
        border-radius: 3px;
        background-color: rgb(221, 245, 252);
    }
    .filter-input:focus{ 
        outline: none; 
    }
</style>
