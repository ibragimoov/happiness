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

export default function MyCourses() {
    // Chakra Color Mode
    const textColor = useColorModeValue("secondaryGray.900", "white");
    const textColorBrand = useColorModeValue("brand.500", "white");
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
                        <SimpleGrid columns={{ base: 1, md: 3 }} gap="20px">
                            <NFT
                                name="Мнемотехники"
                                author="От Усние Бекировой"
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
                                currentbid="0.91 ETH"
                                download="#"
                            />
                            <NFT
                                name="Самопознание"
                                author="От Эмирова Эльдара"
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
                                image={Nft2}
                                currentbid="0.91 ETH"
                                download="#"
                            />
                            <NFT
                                name="Психическая саморегуляция"
                                author="От Усние Бекировой"
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
                                image={Nft3}
                                currentbid="0.91 ETH"
                                download="#"
                            />
                        </SimpleGrid>
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
                            mb={{ base: "20px", xl: "0px" }}
                        >
                            <NFT
                                name="Сам себе психолог"
                                author="От Усние Бекировой"
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
                            />
                            <NFT
                                name="Сторителлинг"
                                author="От Кристины Безбородовой"
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
                            />
                            <NFT
                                name="Профайлинг"
                                author="От Кристины Безбородовой"
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
                            />
                        </SimpleGrid>
                    </Flex>
                </Flex>
            </Grid>
            {/* Delete Product */}
        </Box>
    );
}
