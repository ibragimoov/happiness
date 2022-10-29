import React from "react";

import { Icon } from "@chakra-ui/react";
import {
    MdPerson,
    MdHome,
    MdLock,
    MdOutlineShoppingCart,
} from "react-icons/md";
import { ImBook } from "react-icons/im";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import SignUp from "views/auth/signUp";
import MyCourses from "views/admin/myCourses";
import Home from "views/home/default";

const routes = [
    {
        name: "Дом",
        layout: "/home",
        path: "/default",
        icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
        component: Home,
    },
    {
        name: "Главная",
        layout: "/admin",
        path: "/default",
        icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
        component: MainDashboard,
    },
    {
        name: "Каталог",
        layout: "/admin",
        path: "/catalog",
        icon: (
            <Icon
                as={MdOutlineShoppingCart}
                width="20px"
                height="20px"
                color="inherit"
            />
        ),
        component: NFTMarketplace,
        secondary: true,
    },
    {
        name: "Мои курсы",
        layout: "/admin",
        path: "/my-courses",
        icon: <Icon as={ImBook} width="20px" height="20px" color="inherit" />,
        component: MyCourses,
        secondary: true,
    },
    {
        name: "Настройки",
        layout: "/admin",
        path: "/profile",
        icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
        component: Profile,
    },
    {
        name: "Вход",
        layout: "/auth",
        path: "/signIn",
        icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
        component: SignInCentered,
    },
    {
        name: "Регистрация",
        layout: "/auth",
        path: "/signUp",
        icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
        component: SignUp,
    },
];

export default routes;
