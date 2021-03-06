import Vue from "vue";
import Router from "vue-router";
import Home from "@/pages/Home";
import BooksList from "@/pages/BooksList";
import AddBook from "@/pages/AddBook";
import EditBook from "@/pages/EditBook";

Vue.use(Router);

export default new Router({
    routes: [{
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/bookslist",
            name: "Books List",
            component: BooksList
        },
        {
            path: "/addbook",
            name: "Add Book",
            component: AddBook
        }, {
            path: "/editbook",
            name: "Edit Book",
            component: EditBook
        }
    ]
});