export default {
    methods: {
        onEnterAction(event, action){
            if (event.key == "Enter"){
                action()
            }
        }
    }
}