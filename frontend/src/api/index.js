import instance from "./instance" 
import auth from "./auth"
import v1Api from "./v1_api"

export default {
    "auth": auth(instance),
    "v1Api": v1Api(instance)
}