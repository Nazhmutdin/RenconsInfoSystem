export default{
    methods: {
        formatDate(date, locals){
            let parsed_date = new Date(Date.parse(date))
            return parsed_date.toLocaleDateString(locals)
        }
    }
}