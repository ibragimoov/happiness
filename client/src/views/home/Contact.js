import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from "@chakra-ui/react";
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

export default function contact() {
    return (
        <Container
            // bg="#9DC4FB"
            maxW="full"
            mt={0}
            centerContent
            overflow="hidden"
        >
            <Flex>
                <Box
                    bg="#02054B"
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}
                >
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                    <Heading>Контакты</Heading>
                                    <Text
                                        mt={{ sm: 3, md: 3, lg: 5 }}
                                        color="gray.500"
                                    >
                                        Заполните форму ниже, чтобы связаться
                                    </Text>
                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <VStack
                                            pl={0}
                                            spacing={3}
                                            alignItems="flex-start"
                                        >
                                            <Button
                                                as={"a"}
                                                href="tel:79785167961"
                                                size="md"
                                                height="48px"
                                                width="100%"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{
                                                    border: "2px solid #1C6FEB",
                                                }}
                                                leftIcon={
                                                    <MdPhone
                                                        color="#1970F1"
                                                        size="20px"
                                                    />
                                                }
                                            >
                                                +7 (978) 516 79-61
                                            </Button>
                                            <Button
                                                as={"a"}
                                                href={
                                                    "mailto:1ibragimov.e.i20@gmail.com"
                                                }
                                                size="md"
                                                height="48px"
                                                width="100%"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{
                                                    border: "2px solid #1C6FEB",
                                                }}
                                                leftIcon={
                                                    <MdEmail
                                                        color="#1970F1"
                                                        size="20px"
                                                    />
                                                }
                                            >
                                                1ibragimov.e.i20@gmail.com
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="100%"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{
                                                    border: "2px solid #1C6FEB",
                                                }}
                                                leftIcon={
                                                    <MdLocationOn
                                                        color="#1970F1"
                                                        size="20px"
                                                    />
                                                }
                                            >
                                                Симферополь, Крым
                                            </Button>
                                        </VStack>
                                    </Box>
                                    <HStack
                                        mt={{ lg: 10, md: 10 }}
                                        spacing={5}
                                        px={5}
                                        alignItems="flex-start"
                                    >
                                        <IconButton
                                            as={"a"}
                                            href={
                                                "https://github.com/ibragimoov"
                                            }
                                            aria-label="github"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: "#0D74FF" }}
                                            icon={<BsGithub size="28px" />}
                                        />
                                    </HStack>
                                </Box>
                            </WrapItem>
                            <WrapItem>
                                <Box bg="white" borderRadius="lg">
                                    <Box m={8} color="#0B0E3F">
                                        <VStack spacing={5}>
                                            <FormControl id="name">
                                                <FormLabel>Имя</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={
                                                            <BsPerson color="gray.800" />
                                                        }
                                                    />
                                                    <Input
                                                        type="text"
                                                        size="md"
                                                    />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="name">
                                                <FormLabel>Почта</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={
                                                            <MdOutlineEmail color="gray.800" />
                                                        }
                                                    />
                                                    <Input
                                                        type="text"
                                                        size="md"
                                                    />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="name">
                                                <FormLabel>Сообщение</FormLabel>
                                                <Textarea
                                                    borderColor="gray.300"
                                                    _hover={{
                                                        borderRadius:
                                                            "gray.300",
                                                    }}
                                                    placeholder="Готов стать вашим инвестором"
                                                />
                                            </FormControl>
                                            <FormControl
                                                id="name"
                                                float="right"
                                            >
                                                <Button
                                                    variant="solid"
                                                    bg="#0D74FF"
                                                    color="white"
                                                    _hover={{}}
                                                >
                                                    Отправить сообщение
                                                </Button>
                                            </FormControl>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
}
