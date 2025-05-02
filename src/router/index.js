import { createRouter, createWebHistory } from "vue-router";
import PhoneWindows from "@/components/PhoneWindows.vue";
import Inbox from "@/components/windows/Inbox.vue";
import MyComputer from "@/components/windows/MyComputer.vue";
import NetworkNeighborhood from "@/components/windows/NetworkNeighborhood.vue";
import RecycleBin from "@/components/windows/RecycleBin.vue";
import TheInternet from "@/components/windows/TheInternet.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            component: { render: () => null },
        },
        {
            path: "/inbox",
            component: PhoneWindows,
            meta: {
                name: "Inbox",
                icon: "src/assets/images/inbox.ico",
            },
            children: [
                {
                    path: "",
                    component: Inbox,
                },
            ],
        },
        {
            path: "/my-computer",
            component: PhoneWindows,
            meta: {
                name: "My computer",
                icon: "src/assets/images/my-computer.ico",
            },
            children: [
                {
                    path: "",
                    component: MyComputer,
                },
            ],
        },
        {
            path: "/network-neighborhood",
            component: PhoneWindows,
            meta: {
                name: "Network Neighborhood",
                icon: "src/assets/images/network-neighborhood.ico",
            },
            children: [
                {
                    path: "",
                    component: NetworkNeighborhood,
                },
            ],
        },
        {
            path: "/recycle-bin",
            component: PhoneWindows,
            meta: {
                name: "Recycle Bin",
                icon: "src/assets/images/recycle-bin.ico",
            },
            children: [
                {
                    path: "",
                    component: RecycleBin,
                },
            ],
        },
        {
            path: "/the-internet",
            component: PhoneWindows,
            meta: {
                name: "The Internet",
                icon: "src/assets/images/the-internet.ico",
            },
            children: [
                {
                    path: "",
                    component: TheInternet,
                },
            ],
        },
    ],
});

export default router;
