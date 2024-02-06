import api from '../api/index'
import apiErrHandler from "@/funcs/api_err_handlers"


export default{
    namespaced: true,
    state:{
        searchFilters: {
            certificationDateFrom: null,
            certificationDateBefore: null,
            expirationDateFrom: null,
            expirationDateBefore: null,
            expirationDateFactFrom: null,
            expirationDateFactBefore: null,
            status: null
        },
        searchValues: {
            names: null,
            kleymos: null,
            certificationNumbers: null
        },
        welders: [],
        count : 0,
        currentPage: 1,
        pageSize: 100
    },
    mutations:{
        setSearchFilters(state, searchFilters){
            state.searchFilters = searchFilters
        },
        setWelders(state, welders){
            state.welders = welders
        },
        setSearchValues(state, values){
            state.searchValues = values
        },
        setCertificationDateFrom(state, value){
            state.searchFilters.certificationDateFrom = value
        },
        setCertificationDateBefore(state, value){
            state.searchFilters.certificationDateBefore = value
        },
        setExpirationDateFrom(state, value){
            state.searchFilters.expirationDateFrom = value
        },
        setExpirationDateBefore(state, value){
            state.searchFilters.expirationDateBefore = value
        },
        setExpirationDateFactFrom(state, value){
            state.searchFilters.expirationDateFactFrom = value
        },
        setExpirationDateFactBefore(state, value){
            state.searchFilters.expirationDateFactBefore = value
        },
        setStatus(state, value){
            state.searchFilters.status = value
        },
        setCount(state, count){
            state.count = count
        },
        setCurrentPage(state, currentPage){
            state.currentPage = currentPage
        },
        setPageSize(state, pageSize){
            state.pageSize = pageSize
        }
    },
    getters:{
        getWelders(state){
            return state.welders
        },
        getSearchFilters(state){
            return state.searchFilters
        },
        getSearchValues(state){
            return state.searchValues
        },
        getCount(state){
            return state.count
        },
        getCurrentPage(state){
            return state.currentPage
        },
        getPageSize(state){
            return state.pageSize
        },
        getCertificationDateFrom(state){
            return state.searchFilters.certificationDateFrom
        },
        getCertificationDateBefore(state){
            return state.searchFilters.certificationDateBefore
        },
        getExpirationDateFrom(state){
            return state.searchFilters.expirationDateFrom
        },
        getExpirationDateBefore(state){
            return state.searchFilters.expirationDateBefore
        },
        getExpirationDateFactFrom(state){
            return state.searchFilters.expirationDateFactFrom
        },
        getExpirationDateFactBefore(state){
            return state.searchFilters.expirationDateFactBefore
        },
        getStatus(state){
            return state.searchFilters.status
        }
    },
    actions:{
        async searchWelders(context, errAction) {

            let payload = {
                ...context.getters["getSearchValues"],
                ...context.getters["getSearchFilters"]
            }

            let page = context.getters["getCurrentPage"]
            let pageSize = context.getters["getPageSize"]

            await apiErrHandler( async () => {
                const data = (await api.v1Api.getWelders(payload, page, pageSize)).data
                context.commit("setWelders", data.result)
                context.commit("setCount", data.count)
            }, errAction)
        }
    }
}
