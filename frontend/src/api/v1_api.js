export default function(instance) {
    return {
        async getWelder(ident) {
            return instance.get(`api/v1/welders/${ident}`)
        },
        async getWelders(payload, page, pageSize) {
            return instance.post(`api/v1/welders?page=${page}&page_size=${pageSize}`, payload)
        },
        async getWelderCertification(ident) {
            return instance.get(`api/v1/welder-certifications/${ident}`)
        },
        async getWelderCertifications(payload, page, pageSize) {
            return instance.post(`api/v1/welder-certifications?page=${page}&page_size=${pageSize}`, payload)
        },
        async getWelderNDT(ident) {
            return instance.get(`api/v1/ndts/${ident}`)
        },
        async getWelderNDTs(payload, page, pageSize) {
            return instance.post(`api/v1/ndts?page=${page}&page_size=${pageSize}`, payload)
        }
    }
}