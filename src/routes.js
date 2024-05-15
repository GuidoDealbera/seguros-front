import { lazy } from "react";

const Home = lazy(() => import('./Components/Home/Home'));
const Contact = lazy(() => import('./Components/Contact/Contact'));
const Services = lazy(() => import('./Components/Services/Services'));

const routes = [
    {
        id: 1,
        component: Home,
    },
    {
        id: 2,
        component: Contact,
    },
    {
        id: 3,
        component: Services
    }
];

export default routes;