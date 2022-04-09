import { API } from "./axiosconfig";

export default {

    listAll: () => {
        return API.get('')
    },

    listAvailables: () => {
        return API.get('available')
    },

    getById: (id) => {
        return API.get({ id })
    },

    editBook: (id) => {
        return API.put({ id })
    },

    editAvailable: (id) => {
        return API.put(`available/${id}`)
    },

    deleteBook: (id) => {
        return API.delete({ id })
    },

    deleteAll: () => {
        return API.delete('')
    },
}