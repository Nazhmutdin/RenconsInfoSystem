<template>
    <Transition name="modal">
        <div class="modal" v-show="showFilters">
            <div class="modal-inner">
                <div class="modal-content">
                    <div class="filters">
                        <div class="filter">
                            <div class="filter-name">welding date:</div>
                            <div class="filter-area">
                                <div class="filter-area filter-from">
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;from:&nbsp;</span>
                                    <input v-model="weldingDateFrom" type="date">
                                </div>
                                <div class="filter-area filter-before">
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;before:&nbsp;</span>
                                    <input v-model="weldingDateBefore" type="date">
                                </div>
                            </div>
                        </div>
                        <div class="filter">
                            <div class="filter-name">total welded pipe status:</div>
                            <div class="filter-area">
                                <div class="filter-area filter-from">
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;from:&nbsp;</span>
                                    <input v-model="status1From" type="number">
                                </div>
                                <div class="filter-area filter-before">
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;before:&nbsp;</span>
                                    <input v-model="status1Before" type="number">
                                </div>
                            </div>
                        </div>
                        <div class="filter">
                            <div class="filter-name">length of pipe weld joint status:</div>
                            <div class="filter-area">
                                <div class="filter-area filter-from">
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;from:&nbsp;</span>
                                    <input v-model="status2From" type="number">
                                </div>
                                <div class="filter-area filter-before">
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;before:&nbsp;</span>
                                    <input v-model="status2Before" type="number">
                                </div>
                            </div>
                        </div>
                        <div class="filter">
                            <div class="filter-name">structural status:</div>
                            <div class="filter-area">
                                <div class="filter-area filter-from">
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;from:&nbsp;</span>
                                    <input v-model="status3From" type="number">
                                </div>
                                <div class="filter-area filter-before">
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;before:&nbsp;</span>
                                    <input v-model="status3Before" type="number">
                                </div>
                            </div>
                        </div>
                        <div class="filter">
                            <div class="filter-name">companies:</div>
                            <div class="filter-area">
                                <div class="select-filter">
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                    <select multiple name="" id="">
                                        <option value="RHI">RHI</option>
                                        <option value="Rencons">Rencons</option>
                                        <option value="Kalkedon">Kalkedon</option>
                                        <option value="URAN">URAN</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" @click="$emit('close')">Confirm</button>
                </div>
            </div>
        </div>
    </Transition>
</template>


<script>
    export default {
        name: "WelderNDTRegistryFilters",
        props: {
            showFilters: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            weldingDateFrom: {
                get(){
                    return this.$store.getters["welderNDTRegistry/getWeldingDateFrom"]
                },
                set(value){
                    this.$store.commit("welderNDTRegistry/setWeldingDateFrom", value)
                    console.log(this.$store.getters["welderNDTRegistry/getSearchFilters"])
                }
            },
            weldingDateBefore: {
                get(){
                    return this.$store.getters["welderNDTRegistry/getWeldingDateBefore"]
                },
                set(value){
                    this.$store.commit("welderNDTRegistry/setWeldingDateBefore", value)
                    console.log(this.$store.getters["welderNDTRegistry/getSearchFilters"])
                }
            },
            status1From: {
                get(){
                    return this.$store.getters["welderNDTRegistry/getStatus1From"]
                },
                set(value){
                    this.$store.commit("welderNDTRegistry/setStatus1From", value)
                    console.log(this.$store.getters["welderNDTRegistry/getSearchFilters"])
                }
            },
            status1Before: {
                get(){
                    return this.$store.getters["welderNDTRegistry/getStatus1Before"]
                },
                set(value){
                    this.$store.commit("welderNDTRegistry/setStatus1Before", value)
                    console.log(this.$store.getters["welderNDTRegistry/getSearchFilters"])
                }
            },
            status2From: {
                get(){
                    return this.$store.getters["welderNDTRegistry/getStatus2From"]
                },
                set(value){
                    this.$store.commit("welderNDTRegistry/setStatus2From", value)
                    console.log(this.$store.getters["welderNDTRegistry/getSearchFilters"])
                }
            },
            status2Before: {
                get(){
                    return this.$store.getters["welderNDTRegistry/getStatus2Before"]
                },
                set(value){
                    this.$store.commit("welderNDTRegistry/setStatus2Before", value)
                    console.log(this.$store.getters["welderNDTRegistry/getSearchFilters"])
                }
            },
            status3From: {
                get(){
                    return this.$store.getters["welderNDTRegistry/getStatus3From"]
                },
                set(value){
                    this.$store.commit("welderNDTRegistry/setStatus3From", value)
                    console.log(this.$store.getters["welderNDTRegistry/getSearchFilters"])
                }
            },
            status3Before: {
                get(){
                    return this.$store.getters["welderNDTRegistry/getStatus3Before"]
                },
                set(value){
                    this.$store.commit("welderNDTRegistry/setStatus3Before", value)
                    console.log(this.$store.getters["welderNDTRegistry/getSearchFilters"])
                }
            }
        }
    }
</script>


<style scoped>
    *,
    ::before,
    ::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1;
    }
    .modal-inner {
        max-width: 500px;
        margin: 2rem auto;
    }
    .modal-content {
        font-size: 16px;
        color: blue;
        position: relative;
        background-color: rgb(237, 246, 252);
        border: 1px solid rgba(0, 0, 0, 0.3);
        background-clip: padding-box;
        border-radius: 0.3rem;
        padding: 1rem;
    }
    .filter{
        padding: 10px;
    }
    .filter input{
        border: 1px solid blue;
        border-radius: 1rem;
        color: blue;
    }
    .filter-name{
        padding-bottom: 5px;
        font-size: 16px;
        font-weight: bold;
    }
    .filter-from{
        padding-bottom: 5px;
    }
    .modal-enter-active,
    .modal-leave-active {
        transition: opacity 0.5s;
    }
    .modal-enter,
    .modal-leave-to {
        opacity: 0;
    }
</style>
