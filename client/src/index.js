import React from "react";
import ReactDOM from "react-dom";
import "assets/css/App.css";
import { HashRouter, Route, Switch, Redirect, Router } from "react-router-dom";
import AuthLayout from "layouts/auth";
import AdminLayout from "layouts/admin";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "theme/theme";
import { ThemeEditorProvider } from "@hypertheme-editor/chakra-ui";
import Home from "views/home/default";
import Course from "views/admin/course";

import { store } from "./redux/store";
import { Provider } from "react-redux";
import EditCourse from "views/admin/edit-course/CreateCourse";

ReactDOM.render(
    <Provider store={store}>
        <ChakraProvider theme={theme}>
            <ThemeEditorProvider>
                <HashRouter>
                    <Switch>
                        <Route exact path={"/"} component={Home} />
                        <Route path={`/course/:id`} component={Course} />
                        <Route path={`/auth`} component={AuthLayout} />
                        <Route path={`/admin`} component={AdminLayout} />
                    </Switch>
                </HashRouter>
            </ThemeEditorProvider>
        </ChakraProvider>
    </Provider>,
    document.getElementById("root")
);
