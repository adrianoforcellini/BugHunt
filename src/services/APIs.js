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

    editAvailable: (id, body) => {
        console.log(id, body)
        return API.put(`available/${id}`, body)
    },

    deleteBook: (id) => {
        return API.delete(`${id}`)
    },

    deleteAll: () => {
        return API.delete('')
    },
}