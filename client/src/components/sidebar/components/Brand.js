import React from "react";
import { NavLink } from "react-router-dom";

// Chakra imports
import { Flex, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HappinessLogo } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
    //   Chakra color mode
    let logoColor = useColorModeValue("navy.700", "white");

    return (
        <Flex align="center" direction="column">
            <NavLink to={"/admin/default"}>
                <HappinessLogo h="26px" w="175px" my="32px" color={logoColor} />
            </NavLink>
            <HSeparator mb="20px" />
        </Flex>
    );
}

export default SidebarBrand;
