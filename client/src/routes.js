import React from "react";

import { Icon } from "@chakra-ui/react";
import {
    MdPerson,
    MdHome,
    MdLock,
    MdOutlineShoppingCart,
} from "react-icons/md";
import { ImBook } from "react-icons/im";

import { FiPlusSquare } from "react-icons/fi";

// Admin Imports
import MainDashboard from "views/admin/default";
import NFTMarketplace from "views/admin/marketplace";
import Profile from "views/admin/profile";

// Auth Imports
import SignInCentered from "views/auth/signIn";
import SignUp from "views/auth/signUp";
import MyCourses from "views/admin/myCourses";
import Home from "views/home/default";
import Course from "views/admin/course";
import CreateCourse from "views/admin/create-course/CreateCourse";
import WatchCourse from "views/admin/watchCourse";
import Chapter from "views/admin/chapter";
import EditCourse from "views/admin/edit-course/CreateCourse";

const routes = [
    {
        name: "Глава",
        layout: "/admin",
        path: "/course/:courseId/chapter/:id",
        icon: <Icon as={ImBook} width="20px" height="20px" color="inherit" />,
        component: Chapter,
        secondary: true,
    },
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
        name: "Библиотека",
        layout: "/admin",
        path: "/my-courses",
        icon: <Icon as={ImBook} width="20px" height="20px" color="inherit" />,
        component: MyCourses,
        secondary: true,
    },
    {
        name: "Создание курса",
        layout: "/admin",
        path: "/create-course",
        icon: (
            <Icon
                as={FiPlusSquare}
                width="20px"
                height="20px"
                color="inherit"
            />
        ),
        component: CreateCourse,
        secondary: true,
    },
    {
        name: "Изменение курса",
        layout: "/admin",
        path: "/watchCourse/:id/edit",
        icon: (
            <Icon
                as={FiPlusSquare}
                width="20px"
                height="20px"
                color="inherit"
            />
        ),
        component: EditCourse,
        secondary: true,
    },
    {
        name: "Курс",
        layout: "/admin",
        path: "/course",
        icon: <Icon as={ImBook} width="20px" height="20px" color="inherit" />,
        component: Course,
        secondary: true,
    },
    {
        name: "Курс",
        layout: "/admin",
        path: "/watchCourse/",
        icon: <Icon as={ImBook} width="20px" height="20px" color="inherit" />,
        component: WatchCourse,
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
