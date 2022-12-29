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
import HistoryItem from "views/admin/marketplace/components/HistoryItem";
import NFT from "components/card/NFT";
import Card from "components/card/Card.js";
import CardSkeleton from "./components/Skeleton";

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

import axios from "../../../utils/axios";
import { NavLink } from "react-router-dom";

export default function Marketplace() {
    // Chakra Color Mode
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const textColorBrand = useColorModeValue("brand.500", "white");

    const [courses, setCourses] = React.useState([]);

    const getAllCourses = async () => {
        const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        };

        const { data } = await axios.get("/course", config);
        setCourses(data);
    };

    React.useEffect(() => {
        getAllCourses();
    }, []);

    return (
        <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
            {/* Main Fields */}
            <Grid
                mb="20px"
                gridTemplateColumns={{
                    xl: "repeat(3, 1fr)",
                    "2xl": "1fr 0.46fr",
                }}
                gap={{ base: "20px", xl: "20px" }}
                display={{ base: "block", xl: "grid" }}
            >
                <Flex
                    flexDirection="column"
                    gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}
                >
                    <Banner />
                    <Flex direction="column">
                        <Flex
                            mt="45px"
                            mb="20px"
                            justifyContent="space-between"
                            direction={{ base: "column", md: "row" }}
                            align={{ base: "start", md: "center" }}
                        >
                            <Text
                                color={textColor}
                                fontSize="2xl"
                                ms="24px"
                                fontWeight="700"
                            >
                                В тренде
                            </Text>
                            <Flex
                                align="center"
                                me="20px"
                                ms={{ base: "24px", md: "0px" }}
                                mt={{ base: "20px", md: "0px" }}
                            >
                                <Link
                                    color={textColorBrand}
                                    fontWeight="500"
                                    me={{ base: "34px", md: "44px" }}
                                    to="#art"
                                >
                                    Аналитика
                                </Link>
                                <Link
                                    color={textColorBrand}
                                    fontWeight="500"
                                    me={{ base: "34px", md: "44px" }}
                                    to="#music"
                                >
                                    Творчество
                                </Link>
                                <Link
                                    color={textColorBrand}
                                    fontWeight="500"
                                    me={{ base: "34px", md: "44px" }}
                                    to="#collectibles"
                                >
                                    Общение
                                </Link>
                            </Flex>
                        </Flex>
                        <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px">
                            {courses.length !== 0 ? (
                                courses.map((course) => (
                                    <NavLink
                                        key={course.id}
                                        to={`/admin/course/${course.id}`}
                                    >
                                        <NFT
                                            name={course.title}
                                            author={course.brief}
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
                                            currentbid={course.fee}
                                            download="#"
                                            isCatalog={true}
                                        />
                                    </NavLink>
                                ))
                            ) : (
                                <>
                                    <CardSkeleton />
                                    <CardSkeleton />
                                    <CardSkeleton />
                                </>
                            )}
                        </SimpleGrid>
                        <Text
                            mt="45px"
                            mb="36px"
                            color={textColor}
                            fontSize="2xl"
                            ms="24px"
                            fontWeight="700"
                        >
                            Recently Added
                        </Text>
                        <SimpleGrid
                            columns={{ base: 1, md: 3 }}
                            gap="20px"
                            mb={{ base: "20px", xl: "0px" }}
                        >
                            <NFT
                                name="Swipe Circles"
                                author="By Peter Will"
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
                                image={Nft4}
                                currentbid="0.91 ETH"
                                download="#"
                                isCatalog={true}
                            />
                            <NFT
                                name="Colorful Heaven"
                                author="By Mark Benjamin"
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
                                image={Nft5}
                                currentbid="0.91 ETH"
                                download="#"
                                isCatalog={true}
                            />
                            <NFT
                                name="3D Cubes Art"
                                author="By Manny Gates"
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
                                image={Nft6}
                                currentbid="0.91 ETH"
                                download="#"
                                isCatalog={true}
                            />
                        </SimpleGrid>
                    </Flex>
                </Flex>
                <Flex
                    flexDirection="column"
                    gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}
                >
                    {/* <Card px="0px" mb="20px">
                        <TableTopCreators
                            tableData={tableDataTopCreators}
                            columnsData={tableColumnsTopCreators}
                        />
                    </Card> */}
                    <Card p="0px">
                        <Flex
                            align={{ sm: "flex-start", lg: "center" }}
                            justify="space-between"
                            w="100%"
                            px="22px"
                            py="18px"
                        >
                            <Text
                                color={textColor}
                                fontSize="xl"
                                fontWeight="600"
                            >
                                История
                            </Text>
                            <Button variant="action">Посмотреть все</Button>
                        </Flex>

                        <HistoryItem
                            name="Мнемотехника"
                            author="Марк Бенжамин"
                            date="30с назад"
                            image={Nft5}
                            price="430 РУБ"
                        />
                        <HistoryItem
                            name="Коммуникативность"
                            author="Таир Сулейманов"
                            date="58с назад"
                            image={Nft1}
                            price="359 РУБ"
                        />
                        <HistoryItem
                            name="Самопознание"
                            author="Арсен Аджимамбетов"
                            date="1м назад"
                            image={Nft2}
                            price="359 РУБ"
                        />
                        <HistoryItem
                            name="Сам себе психолог"
                            author="Арсен Аджмимамбетов"
                            date="1м назад"
                            image={Nft4}
                            price="249 РУБ"
                        />
                        <HistoryItem
                            name="Сторителлинг"
                            author="Эльдар Эмиров"
                            date="2м назад"
                            image={Nft3}
                            price="910 РУБ"
                        />
                        <HistoryItem
                            name="Профайлинг"
                            author="Эльдар Эмиров"
                            date="3м назад"
                            image={Nft6}
                            price="549 РУБ"
                        />
                    </Card>
                </Flex>
            </Grid>
            {/* Delete Product */}
        </Box>
    );
}
