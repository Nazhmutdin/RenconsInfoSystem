import router from '@/router'
import api from '../api/index'
import apiErrHandler from '@/funcs/api_err_handlers'


export default{
    namespaced: true,
    state:{
        searchFilters: {
            weldingDateFrom: null,
            weldingDateBefore: null,
            status1From: null,
            status1Before: null,
            status2From: null,
            status2Before: null,
            status3From: null,
            status3Before: null,
        },
        searchValues: {},
        ndts: [],
        count: null,
        currentPage: 1,
        pageSize: 100
    },
    mutations:{
        setNDTs(state, value){
            state.ndts = value
        },
        setCount(state, value){
            state.count = value
        },
        setCurrentPage(state, value){
            state.currentPage = value
        },
        setSearchValues(state, value){
            state.searchValues = value
        },
        setWeldingDateFrom(state, value){
            console.log(value)
            state.searchFilters.weldingDateFrom = value
        },
        setWeldingDateBefore(state, value){
            state.searchFilters.weldingDateBefore = value
        },
        setStatus1From(state, value){
            state.searchFilters.status1From = value
        },
        setStatus1Before(state, value){
            state.searchFilters.status1Before = value
        },
        setStatus2From(state, value){
            state.searchFilters.status2From = value
        },
        setStatus2Before(state, value){
            state.searchFilters.status2Before = value
        },
        setStatus3From(state, value){
            state.searchFilters.status3From = value
        },
        setStatus3Before(state, value){
            state.searchFilters.status3Before = value
        },
    },
    getters:{
        getSearchValues(state){
            return state.searchValues
        },
        getSearchFilters(state){
            return state.searchFilters
        },
        getCurrentPage(state){
            return state.currentPage
        },
        getPageSize(state){
            return state.pageSize
        },
        getNDTs(state){
            return state.ndts
        },
        getCount(state){
            return state.count
        },
        getWeldingDateFrom(state){
            return state.searchFilters.weldingDateFrom
        },
        getWeldingDateBefore(state){
            return state.searchFilters.weldingDateBefore
        },
        getStatus1From(state){
            return state.searchFilters.status1From
        },
        getStatus1Before(state){
            return state.searchFilters.status1Before
        },
        getStatus2From(state){
            return state.searchFilters.status2From
        },
        getStatus2Before(state){
            return state.searchFilters.status2Before
        },
        getStatus3From(state){
            return state.searchFilters.status3From
        },
        getStatus3Before(state){
            return state.searchFilters.status3Before
        },
    },
    actions:{
        async getWelderNDTs(context) {

            let payload = {
                ...context.getters["getSearchValues"],
                ...context.getters["getSearchFilters"]
            }

            let page = context.getters["getCurrentPage"]
            let pageSize = context.getters["getPageSize"]
            console.log(page, pageSize)

            await apiErrHandler(async () => {
                const data = (await api.v1Api.getWelderNDTs(payload, page, pageSize)).data
                console.log(data)
                context.commit("setNDTs", data.result)
                context.commit("setCount", data.count)
            },
            (err) => {
                let detail = err.response.data["detail"]

                if (detail === "token is required") {
                    context.commit("setIsAuthenticated", false, { root: true })
                    router.push("/auth")
                }
            })

        }
    }
}
