import { lazy } from "react";

const Home = lazy(() => import('./Components/Home/Home'));
const Contact = lazy(() => import('./Components/Contact/Contact'));
const Services = lazy(() => import('./Components/Services/Services'));
const Companies = lazy(() => import('./Components/Companies/Companies'));

const routes = [
    {
        id: 1,
        component: Home,
    },
    {
        id: 2,
        component: Companies,
    },
    {
        id: 3,
        component: Services
    },
    {
        id: 4,
        component: Contact,
    },
];

export default routes;