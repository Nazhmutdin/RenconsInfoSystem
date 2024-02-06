<template>
    <div class="welder-page">
        <div class="welder-data-block">
            <div class="name-kleymo-area">
                <span class="welder-name-kleymo">{{ welder.name }} ({{ welder.kleymo }})</span>
                <span v-if="welder.status" class="welder-status ok-status">&#10004;</span>
                <span v-else class="welder-status not-ok-status">&#10008;</span>
            </div>
            <div class="welder-data">
                <div class="passport">
                    <h3>Passport: {{ passport }}</h3>
                </div>
                <div class="birthday">
                    <h3>Birthday: {{ birthday }}</h3>
                </div>
                <div class="nation">
                    <h3>Nation: {{ nation }}</h3>
                </div>
            </div>
        </div>
        <WelderCertificationTable :certifications="certifications"></WelderCertificationTable>
        <WelderNDTTable :ndts="ndts"></WelderNDTTable>
    </div>
</template>

<script>
    import utils from "@/mixins/utils.js"
    import WelderCertificationTable from "@/components/welder_page_components/WelderCertificationTable"
    import WelderNDTTable from "@/components/welder_page_components/WelderNDTTable"
    export default{
        name: "WelderPage",
        mixins: [utils],
        components: { WelderCertificationTable, WelderNDTTable },
        created(){
            this.$store.dispatch("welderPage/searchWelder", {kleymo: this.$route.params.id})
            this.$store.dispatch("welderPage/searchWelderCertifications", {kleymo: this.$route.params.id})
            this.$store.dispatch("welderPage/searchWelderNDTs", {kleymo: this.$route.params.id})
        },
        computed: {
            welder: function(){
                return this.$store.getters["welderPage/getWelder"]
            },
            certifications: function(){
                return this.$store.getters["welderPage/getCertifications"]
            },
            ndts: function(){
                return this.$store.getters["welderPage/getNDTs"]
            },
            passport: function(){
                if (this.welder.passport_id !== null){
                    return this.welder.passport_id
                }
                return "-"
            },
            birthday: function(){
                if (this.welder.birthday !== null){
                    return this.formatDate(this.welder.birthday, "ru-RU")
                }
                return "-"
            },
            nation: function(){
                if (this.welder.nation !== null){
                    return this.welder.nation
                }
                return "-"
            }
        }
    }
</script>

<style scoped>
    .welder-page{
        margin: 2vh 0 0 1vw ;
    }
    .ok-status{
        color:green;
    }
    .not-ok-status{
        color:red;
    }
    .name-kleymo-area{
        color: rgb(21, 82, 151);
        font-size: 30px;
    }
    .welder-name-kleymo{
        font-weight: bold;
        margin-right: 10px;
    }
    .welder-data{
        margin-top: 1.5vh;
    }
    .welder-data div{
        color: rgb(21, 82, 151);
        font-size: 18px;
        font-weight: 600;
        margin-bottom: .5vh;
    }
</style>
