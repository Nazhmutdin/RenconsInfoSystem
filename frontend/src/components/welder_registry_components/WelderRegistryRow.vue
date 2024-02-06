<template>
    <RegistryRow>
        <td class="row_cell row_index"><span>{{ index + 1 }}</span></td>
        <td class="row_cell name"><router-link :to="{ name: 'welder', params: { id: welder.kleymo } }" class="welder_link">{{ welder.name }}</router-link></td>
        <td class="row_cell kleymo"><span>{{ welder.kleymo }}</span></td>
        <td class="row_cell birthday"><span>{{ birthday }}</span></td>
        <td class="row_cell nation"><span>{{ nation }}</span></td>
        <td class="row_cell passport"><span>{{ passportId }}</span></td>
        <td class="row_cell sicil"><span>{{ sicilNumber }}</span></td>
        <td v-if="welder.status==0" class="row_cell status status_not_ok">&#10008;</td>
        <td v-else-if="welder.status==1" class="row_cell status status_ok">&#10004;</td>
    </RegistryRow>
</template>


<script>
    import RegistryRow from "@/components/RegistryRow.vue"

    export default{
        name: "WelderRegisrtyRow",
        components: { RegistryRow },
        computed: {
            birthday: function(){
                if (!this.welder.birthday) {
                    return "-"
                }
                return this.welder.birthday
            },
            nation: function(){
                if (!this.welder.nation) {
                    return "-"
                }
                return this.welder.nation
            },
            passportId: function(){
                if (!this.welder.passport_id) {
                    return "-"
                }
                return this.welder.passport_id
            },
            sicilNumber: function(){
                if (!this.welder.sicil_number) {
                    return "-"
                }
                return this.welder.sicil_number
            }
        },
        props: {
            welder: {
                type: Object
            },
            index: {
                type: Number,
            }
        }
    }
</script>

<style scoped>
    .row_index{
        min-width: 3vw;
    }
    .name{
        text-align: left;
        min-width: 15vw;
    }
    .kleymo{
        min-width: 5vw;
    }
    .birthday{
        min-width: 3vw;
    }
    .welder_link{
        text-decoration: none;
        color: rgb(7, 80, 175);;
    }
    .status_ok{
        color: green;
    }
    .status_not_ok{
        color: red;
    }
    .welder_link:hover{
        cursor: pointer;
        font-weight: bold;
    }
</style>