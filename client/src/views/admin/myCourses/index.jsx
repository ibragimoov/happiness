import React from "react";

// Chakra imports
import {
    Box,
    Button,
    Flex,
    Grid,
    Link,
    Text,
    useColorModeValue,
    SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/marketplace/components/Banner";
import TableTopCreators from "views/admin/marketplace/components/TableTopCreators";
import HistoryItem from "views/admin/marketplace/components/HistoryItem";
import NFT from "components/card/NFT";
import Card from "components/card/Card.js";

// Assets
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";
import Avatar1 from "assets/img/avatars/avatar1.png";
import Avatar2 from "assets/img/avatars/avatar2.png";
import Avatar3 from "assets/img/avatars/avatar3.png";
import Avatar4 from "assets/img/avatars/avatar4.png";
import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";
import { NavLink, Redirect } from "react-router-dom";
import Cookies from "js-cookie";

import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../../redux/slices/user.slice";
import {
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    Stack,
    Spinner,
} from "@chakra-ui/react";

import axios from "../../../utils/axios";

export default function MyCourses() {
    // Chakra Color Mode
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const textColorBrand = useColorModeValue("brand.500", "white");

    const [ownCourses, setOwnCourses] = React.useState([]);
    const [createdCourses, setCreatedCourses] = React.useState([]);
    const { userInfo, userToken } = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const getOwnCourses = async (userInfo) => {
        if (userInfo.email === undefined) {
            return;
        } else {
            const config = {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            };

            const { data } = await axios.post(
                `/user/ownCourses`,
                { email: userInfo.email },
                config
            );
            setOwnCourses(data);
        }
    };

    const getCreatedCourses = async (userInfo) => {
        if (userInfo.email === undefined) {
            return;
        } else {
            const config = {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            };

            const { data } = await axios.post(
                `/user/createdCourses`,
                { email: userInfo.email },
                config
            );
            setCreatedCourses(data);
        }
    };

    React.useEffect(() => {
        dispatch(getUserDetails());
    }, []);

    React.useEffect(() => {
        getOwnCourses(userInfo);
        getCreatedCourses(userInfo);
    }, [userInfo]);

    return (
        <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
            {/* Main Fields */}
            <Grid
                mb="20px"
                gridTemplateColumns={{
                    xl: "1fr",
                    "2xl": "1fr 0.2fr",
                }}
                gap={{ base: "20px", xl: "20px" }}
                display={{ base: "block", xl: "grid" }}
            >
                <Flex
                    flexDirection="column"
                    gridArea={{ xl: "1 / 1 / 2 / 2  ", "2xl": "1 / 1 / 2 / 2" }}
                >
                    <Flex direction="column">
                        {!userInfo.isTeacher && (
                            <>
                                <Text
                                    mt="45px"
                                    mb="36px"
                                    color={textColor}
                                    fontSize="2xl"
                                    ms="24px"
                                    fontWeight="700"
                                >
                                    Недавно добавленные
                                </Text>
                                <SimpleGrid
                                    columns={{ base: 1, md: 3 }}
                                    gap="20px"
                                >
                                    {ownCourses.length !== 0 ? (
                                        ownCourses.map((own) => (
                                            <NavLink
                                                key={own.course.id}
                                                to={`/admin/watchCourse/${own.course.id}`}
                                            >
                                                <NFT
                                                    name={own.course.title}
                                                    author={`${own.author_name}`}
                                                    bidders={[
                                                        Avatar1,
                                                        Avatar2,
                                                        Avatar3,
                                                        Avatar4,
                                                        Avatar1,
                                                        Avatar1,
                                                        Avatar1,
                                                        Avatar1,
                                                    ]}
                                                    image={Nft1}
                                                    currentbid={own.fee}
                                                    download="#"
                                                />
                                            </NavLink>
                                        ))
                                    ) : ownCourses.length === 0 ? (
                                        <Text
                                            mb="36px"
                                            maxW={"300px"}
                                            color={textColor}
                                            fontSize="1xl"
                                            ms="24px"
                                            fontWeight="500"
                                        >
                                            У вас пока нету курсов. Вы можете
                                            приобрести их в{" "}
                                            <NavLink
                                                to={"/admin/catalog"}
                                                style={{
                                                    color: "blue",
                                                }}
                                            >
                                                каталоге
                                            </NavLink>
                                        </Text>
                                    ) : (
                                        <Spinner
                                            ml={"20px"}
                                            thickness="4px"
                                            speed="0.65s"
                                            emptyColor="gray.200"
                                            color="blue.500"
                                            size="xl"
                                        />
                                    )}
                                </SimpleGrid>
                            </>
                        )}

                        {userInfo.isTeacher && (
                            <>
                                <Text
                                    mt="45px"
                                    mb="36px"
                                    color={textColor}
                                    fontSize="2xl"
                                    ms="24px"
                                    fontWeight="700"
                                >
                                    Недавно созданные
                                </Text>
                                <SimpleGrid
                                    columns={{ base: 1, md: 3 }}
                                    gap="20px"
                                    mb={{ base: "20px", xl: "0px" }}
                                >
                                    {createdCourses.length !== 0 ? (
                                        createdCourses.map((created) => (
                                            <NavLink
                                                key={created.id}
                                                to={`/admin/watchCourse/${created.id}/edit`}
                                            >
                                                <NFT
                                                    name={created.title}
                                                    bidders={[
                                                        Avatar1,
                                                        Avatar2,
                                                        Avatar3,
                                                        Avatar4,
                                                        Avatar1,
                                                        Avatar1,
                                                        Avatar1,
                                                        Avatar1,
                                                    ]}
                                                    image={Nft1}
                                                    currentbid={created.fee}
                                                    download="#"
                                                />
                                            </NavLink>
                                        ))
                                    ) : createdCourses.length === 0 ? (
                                        <>
                                            <Text
                                                mb="36px"
                                                maxW={"300px"}
                                                color={textColor}
                                                fontSize="1xl"
                                                ms="24px"
                                                fontWeight="500"
                                            >
                                                У вас пока нету созданных
                                                курсов. Вы можете создать первый{" "}
                                                <NavLink
                                                    to={"/admin/create-course"}
                                                    style={{
                                                        color: "blue",
                                                    }}
                                                >
                                                    тут
                                                </NavLink>
                                            </Text>
                                        </>
                                    ) : (
                                        <>
                                            <Spinner
                                                ml={"20px"}
                                                thickness="4px"
                                                speed="0.65s"
                                                emptyColor="gray.200"
                                                color="blue.500"
                                                size="xl"
                                            />
                                        </>
                                    )}
                                </SimpleGrid>
                            </>
                        )}
                    </Flex>
                </Flex>
            </Grid>
            {/* Delete Product */}
        </Box>
    );
}
