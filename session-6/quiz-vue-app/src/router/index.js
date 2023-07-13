import {createRouter, createWebHistory} from "vue-router";
import QuizesView from "../views/QuizesView.vue";
import QuizeView from "../views/QuizeView.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:"/",
            name:"quizes",
            component: QuizesView
        },
        {
            path:"/quiz/:id",
            name:"quize",
            component: QuizeView
        }
    ]
})