import router from "@/router/index"


export function tokenRequiredErrHandler(err) {
    let detail = err.response.data["detail"]
    if (detail === "token is required") router.push({ name: "authentication" }) 
}