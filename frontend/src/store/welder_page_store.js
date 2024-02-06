import api from "@/api/index"
import apiErrHandler from "@/funcs/api_err_handlers"

export default{
    namespaced: true,
    state: {
        welder: {},
        welderCertifications: [],
        ndts: []
    },
    getters: {
        getWelder(state){
            return state.welder
        },
        getCertifications(state){
            return state.welderCertifications
        },
        getNDTs(state){
            return state.ndts
        }
    },
    mutations: {
        setWelder(state, value){
            state.welder = value
        },
        setCertifications(state, value){
            state.welderCertifications = value
        },
        setNDTs(state, value){
            state.ndts = value
        }
    },
    actions: {
        async searchWelder(context, { kleymo, errHandler }) {
            await apiErrHandler(async () => {
                let res = (await api.v1Api.getWelder(kleymo))
                console.log(res.data)
                context.commit("setWelder", res.data)
            }, errHandler)
        },
        async searchWelderCertifications(context, { kleymo, errHandler }) {
            await apiErrHandler(async () => {
                let payload = {kleymos: [kleymo]}
                let res = (await api.v1Api.getWelderCertifications(payload, 1, 100))
                console.log(res.data.result)
                context.commit("setCertifications", res.data.result)
            }, errHandler)
        },
        async searchWelderNDTs(context, { kleymo, errHandler }) {
            await apiErrHandler( async () => {
                let payload = {kleymos: [kleymo]}
                let res = (await api.v1Api.getWelderNDTs(payload, 1, 100))
                console.log(res.data.result)
                context.commit("setNDTs", res.data.result)
            }, errHandler)
        }
    }
}