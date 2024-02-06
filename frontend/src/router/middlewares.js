import store from "@/store/index"


export function checkAuthMuddleware(to, _, next) {
    const login = store.getters["getLogin"]
    let isAuth = to.matched.some(item => item?.meta?.isAuth)

    if (login && isAuth) return next()
    if (isAuth) return next({ name: "authentication" })
    next()
}