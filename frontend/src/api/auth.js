export default function(instance){
    return {
        async login(payload){
            return instance.post("auth/login", payload)
        }
    }
}