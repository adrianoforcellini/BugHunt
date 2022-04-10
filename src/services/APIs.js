import { API } from "./axiosconfig";

export default {

    listAll: () => {
        return API.get('')
    },

    listAvailables: () => {
        return API.get('available')
    },

    getById: (id) => {
        return API.get(`${id}`)
    },

    addBook: (body) => {
        return API.post('', body)
    },

    editBook: (id, body) => {
        return API.put(`${id}`, body)
    },

    editAvailable: (id) => {
        return API.put(`available/${id}`)
    },

    deleteBook: (id) => {
        return API.delete(`${id}`)
    },

    deleteAll: () => {
        return API.delete('')
    },
}