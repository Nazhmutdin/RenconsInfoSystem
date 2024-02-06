<template>
    <tr class="welder-certification-table-row">
        <td class="table-row-item">{{ index + 1 }}</td>
        <td class="table-row-item">{{ certification.certification_number }}</td>
        <td class="table-row-item">{{ certification.method }}</td>
        <td class="table-row-item">{{ certificationDate }}</td>
        <td class="table-row-item">{{ expirationDate }}</td>
        <td class="table-row-item">{{ expirationDateFact }}</td>
        <td class="table-row-item">{{ fromBeforeThikness }}</td>
        <td class="table-row-item">{{ fromBeforeDiameter }}</td>
        <td class="table-row-item">{{ gtd }}</td>
    </tr>
</template>


<script>
    import utils from "@/mixins/utils.js"
    export default{
        name: "WelderCertificationTableRow",
        mixins: [utils],
        props: {
            certification: {
                type: Object
            },
            index: {
                type: Number
            }
        },
        methods: {
            getFromBeforeString(fromValue, beforeValue) {
                let fromValueString = ""
                let beforeValueString = ""

                if (fromValue !== 0 && fromValue !== undefined && fromValue !== null){
                    // console.log(fromValue)
                    fromValueString = `от ${fromValue} `
                }

                if (beforeValue !== 0 && beforeValue !== undefined && beforeValue !== null){
                    // console.log(beforeValue, beforeValue == null)
                    beforeValueString = `до ${beforeValue}`
                }

                let result = fromValueString + beforeValueString

                if (result == ""){
                    return "-"
                }
                return result
            }
        },
        computed: {
            certificationDate: function(){
                return this.formatDate(this.certification.certification_date, "ru-RU")
            },
            expirationDate: function(){
                return this.formatDate(this.certification.expiration_date, "ru-RU")
            },
            expirationDateFact: function(){
                return this.formatDate(this.certification.expiration_date_fact, "ru-RU")
            },
            fromBeforeThikness: function() {
                return this.getFromBeforeString(this.certification.details_thikness_from, this.certification.details_thikness_before)
            },
            fromBeforeDiameter: function() {
                let fromValue = Math.min([this.certification.details_diameter_from, this.certification.outer_diameter_from, this.certification.rod_diameter_from].filter(n => n))
                let beforeValue = Math.max([this.certification.details_diameter_before, this.certification.outer_diameter_before, this.certification.rod_diameter_before].filter(n => n))

                return this.getFromBeforeString(fromValue, beforeValue)
            },
            company: function(){
                return this.certification.company.split(",")[0]
            },
            gtd: function(){
                let result = {}

                for (let i = 0; i < this.certification.gtd.length; i++){
                    let gtd_type = this.certification.gtd[i].split("(")[0].trim()
                    let gtd_number = this.certification.gtd[i].split("(")[1].replace(")", "").trim()

                    if (result[gtd_type]===undefined){
                        result[gtd_type] = [gtd_number]
                    }

                    if (result[gtd_type]!==undefined){
                        result[gtd_type].push(gtd_number)
                    }
                }

                let gtdStrings = []

                for (let key in result){
                    let gtdNumbers = [...new Set(result[key])].join(",")
                    gtdStrings.push(`${key}(${gtdNumbers})`)
                }

                return gtdStrings.join("; ")
            }
        }
    }
</script>

<style scoped src="@/styles/welder_page_table.css">
</style>