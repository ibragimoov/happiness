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
import Course from "./views/admin/course";

ReactDOM.render(
    <ChakraProvider theme={theme}>
        <ThemeEditorProvider>
            <HashRouter>
                <Switch>
                    <Route exact path={"/"} component={Home} />
                    <Route path={`/course/:id`} component={Course} />
                    <Route path={`/auth`} component={AuthLayout} />
                    <Route path={`/admin`} component={AdminLayout} />
                    {/* <Redirect from="/" to="/admin" component={AdminLayout} /> */}
                </Switch>
            </HashRouter>
        </ThemeEditorProvider>
    </ChakraProvider>,
    document.getElementById("root")
);
