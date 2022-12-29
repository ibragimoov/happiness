import { ReactNode } from "react";
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
} from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function PriceWrapper(props) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: "center", lg: "flex-start" }}
            borderColor={useColorModeValue("gray.200", "gray.500")}
            borderRadius={"xl"}
        >
            {props.children}
        </Box>
    );
}

const Pricing = () => {
    return (
        <Box py={12}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl">
                    Планы, соответствующие вашим потребностям
                </Heading>
                <Text fontSize="lg" color={"gray.500"}>
                    Начните с 14-дневной бесплатной пробной версии.
                </Text>
            </VStack>
            <Stack
                direction={{ base: "column", md: "row" }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}
            >
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            Хобби
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                ₽
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                79
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                /месяц
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue("gray.50", "gray.700")}
                        py={4}
                        borderBottomRadius={"xl"}
                    >
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                доступ к онлайн-курсам
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <NavLink to={"/auth/signup"}>
                                <Button
                                    w="full"
                                    colorScheme="blue"
                                    variant="outline"
                                >
                                    Попробовать
                                </Button>
                            </NavLink>
                        </Box>
                    </VStack>
                </PriceWrapper>

                <PriceWrapper>
                    <Box position="relative">
                        <Box
                            position="absolute"
                            top="-16px"
                            left="50%"
                            style={{ transform: "translate(-50%)" }}
                        >
                            <Text
                                textTransform="uppercase"
                                bg={useColorModeValue("blue.300", "blue.700")}
                                px={3}
                                py={1}
                                color={useColorModeValue(
                                    "gray.900",
                                    "gray.300"
                                )}
                                fontSize="sm"
                                fontWeight="600"
                                rounded="xl"
                            >
                                Хит продаж
                            </Text>
                        </Box>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                Развитие
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" fontWeight="600">
                                    ₽
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    149
                                </Text>
                                <Text fontSize="3xl" color="gray.500">
                                    /месяц
                                </Text>
                            </HStack>
                        </Box>
                        <VStack
                            bg={useColorModeValue("gray.50", "gray.700")}
                            py={4}
                            borderBottomRadius={"xl"}
                        >
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="green.500"
                                    />
                                    больше контента
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={FaCheckCircle}
                                        color="green.500"
                                    />
                                    доступ к блогу
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <NavLink to={"/auth/signup"}>
                                    <Button w="full" colorScheme="blue">
                                        Попробовать
                                    </Button>
                                </NavLink>
                            </Box>
                        </VStack>
                    </Box>
                </PriceWrapper>
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            Гений
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                ₽
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                349
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                /месяц
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue("gray.50", "gray.700")}
                        py={4}
                        borderBottomRadius={"xl"}
                    >
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                доступ к закрытым отчётам
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                прогресс онлайн-курсов
                            </ListItem>
                            <ListItem>
                                <ListIcon
                                    as={FaCheckCircle}
                                    color="green.500"
                                />
                                эксклюзивные онлайн-курсы
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <NavLink to={"/auth/signup"}>
                                <Button
                                    w="full"
                                    colorScheme="blue"
                                    variant="outline"
                                >
                                    Попробовать
                                </Button>
                            </NavLink>
                        </Box>
                    </VStack>
                </PriceWrapper>
            </Stack>
        </Box>
    );
};

export default Pricing;
