// Chakra imports
import { Box, Grid } from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/profile/components/Banner";
import General from "views/admin/profile/components/General";
import Notifications from "views/admin/profile/components/Notifications";
import Projects from "views/admin/profile/components/Projects";
import Storage from "views/admin/profile/components/Storage";
import Upload from "views/admin/profile/components/Upload";

// Assets
import banner from "assets/img/auth/banner.png";
import avatar from "assets/img/avatars/avatar4.png";
import React from "react";

import axios from "../../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../../redux/slices/user.slice";

export default function Overview() {
    const { userInfo, userToken } = useSelector((state) => state.user);
    const { email } = userInfo;
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getUserDetails());
    }, []);

    return (
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            {/* Main Fields */}
            <Grid
                templateColumns={{
                    base: "1fr",
                    lg: "1.34fr 1fr 1.62fr",
                }}
                templateRows={{
                    base: "repeat(1, 1fr)",
                    lg: "1fr",
                }}
                gap={{ base: "20px", xl: "20px" }}
                // mb="20px"
            >
                <Banner
                    banner={banner}
                    // avatar={}
                    name={`${userInfo.first_name} ${userInfo.last_name}`}
                    job={userInfo.isTeacher ? "Учитель" : "Ученик"}
                    posts="0"
                    followers="0"
                    following="0"
                />
            </Grid>
        </Box>
    );
}
