import Vuex from 'vuex'

import welder_registry_store from "./welder_registry_store"
import welder_page_store from "./welder_page_store"
import welder_ndt_registry_store from "./welder_ndt_registry_store"
import apiErrHandler from "@/funcs/api_err_handlers"
import router from "@/router/index"
import api from "@/api/index"


export default new Vuex.Store({
    modules: { 
        welderRegistry: welder_registry_store,
        welderNDTRegistry: welder_ndt_registry_store,
        welderPage: welder_page_store
    },
    state: {
        isAuthenticated: false,
        login: null,
        email: null,
        password: null,
        isSuperUser: null
    },
    getters: {
        getIsAuthenticated(state){
            return state.isAuthenticated
        },
        getLogin(state){
            return state.login
        },
        getEmail(state){
            return state.email
        },
        getIsSuperUser(state){
            return state.isSuperUser
        }
    },
    mutations: {
        setIsAuthenticated(state, value){
            state.isAuthenticated = value
        },
        setLogin(state, value){
            state.login = value
        },
        setPassword(state, value){
            state.password = value
        },
        setEmail(state, value){
            state.email = value
        },
        setIsSuperUser(state, value){
            state.isSuperUser = value
        }
    },
    actions: {
        async login(context, payload, errHandler) {
            await apiErrHandler(async () => {
                let res = await api.auth.login(payload)
                context.commit("setIsAuthenticated", true)
                context.commit("setLogin", res.data.login)
                context.commit("setEmail", res.data.email)
                context.commit("setIsSuperUser", res.data.isSuperUser)
                router.push({ "name": "welderRegistry" })
            }, errHandler)
        }
    }
})