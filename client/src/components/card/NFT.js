// Chakra imports
import {
    AvatarGroup,
    Avatar,
    Box,
    Button,
    Flex,
    Icon,
    Image,
    Link,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
// Assets
import React, { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

export default function NFT(props) {
    const { image, name, author, bidders, download, currentbid, isCatalog } =
        props;
    const [like, setLike] = useState(false);
    const textColor = useColorModeValue("navy.700", "white");
    const textColorBid = useColorModeValue("brand.500", "white");
    return (
        <Card
            p="20px"
            _hover={{
                "-webkit-box-shadow": "1px 10px 70px -18px rgba(0,0,0,0.75)",
                "-moz-box-shadow": "1px 10px 70px -18px rgba(0,0,0,0.75)",
                "box-shadow": "1px 10px 70px -18px rgba(0,0,0,0.45)",
                transition: "0.5s",
            }}
            transition="0.5s"
            transitionProperty="all"
        >
            <Flex direction={{ base: "column" }} justify="center">
                <Box mb={{ base: "20px", "2xl": "20px" }} position="relative">
                    <Image
                        src={image}
                        w={{ base: "100%", "3xl": "100%" }}
                        h={{ base: "100%", "3xl": "100%" }}
                        borderRadius="20px"
                    />
                    <Button
                        position="absolute"
                        bg="white"
                        _hover={{ bg: "whiteAlpha.900" }}
                        _active={{ bg: "white" }}
                        _focus={{ bg: "white" }}
                        p="0px !important"
                        top="14px"
                        right="14px"
                        borderRadius="50%"
                        minW="36px"
                        h="36px"
                        onClick={() => {
                            setLike(!like);
                        }}
                    >
                        <Icon
                            transition="0.2s linear"
                            w="20px"
                            h="20px"
                            as={like ? IoHeart : IoHeartOutline}
                            color="brand.500"
                        />
                    </Button>
                </Box>
                <Flex flexDirection="column" justify="space-between" h="100%">
                    <Flex
                        justify="space-between"
                        direction={{
                            base: "row",
                            md: "column",
                            lg: "row",
                            xl: "column",
                            "2xl": "row",
                        }}
                        mb="auto"
                    >
                        <Flex direction="column">
                            <Text
                                color={textColor}
                                fontSize={{
                                    base: "xl",
                                    md: "lg",
                                    lg: "lg",
                                    xl: "lg",
                                    "2xl": "md",
                                    "3xl": "lg",
                                }}
                                mb="5px"
                                fontWeight="bold"
                                me="14px"
                            >
                                {name}
                            </Text>
                            <Text
                                color="secondaryGray.600"
                                fontSize={{
                                    base: "sm",
                                }}
                                fontWeight="400"
                                me="14px"
                            >
                                {author}
                            </Text>
                        </Flex>
                        <AvatarGroup
                            max={2}
                            color={textColorBid}
                            size="sm"
                            mt={{
                                base: "0px",
                                md: "10px",
                                lg: "0px",
                                xl: "10px",
                                "2xl": "0px",
                            }}
                            fontSize="12px"
                        >
                            {bidders.map((avt, key) => (
                                <Avatar key={key} src={avt} />
                            ))}
                        </AvatarGroup>
                    </Flex>
                    {isCatalog && (
                        <Flex
                            align="start"
                            justify="space-between"
                            direction={{
                                base: "row",
                                md: "column",
                                lg: "row",
                                xl: "column",
                                "2xl": "row",
                            }}
                            mt="25px"
                        >
                            <Text
                                display={"flex"}
                                alignItems="center"
                                justifyContent={"center"}
                                fontWeight="700"
                                fontSize="lg"
                                color={textColorBid}
                            >
                                {currentbid}₽
                            </Text>
                            <Link
                                href={download}
                                mt={{
                                    base: "0px",
                                    md: "10px",
                                    lg: "0px",
                                    xl: "10px",
                                    "2xl": "0px",
                                }}
                            >
                                <Button
                                    variant="darkBrand"
                                    color="white"
                                    fontSize="sm"
                                    fontWeight="500"
                                    borderRadius="70px"
                                    px="24px"
                                    py="5px"
                                >
                                    Подписаться
                                </Button>
                            </Link>
                        </Flex>
                    )}
                </Flex>
            </Flex>
        </Card>
    );
}
