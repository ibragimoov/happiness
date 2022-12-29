import React from "react";
import { NavLink, Redirect } from "react-router-dom";
// Chakra imports
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Custom components
import { HSeparator } from "components/separator/Separator";
import DefaultAuth from "layouts/auth/Default";
// Assets
import illustration from "assets/img/auth/auth.png";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

import axios from "../../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../redux/slices/user.slice";
import Cookies from "js-cookie";

function SignIn() {
    // Chakra color mode
    const notify = () => toast.success("Аккаунт зарегистрирован");

    const textColor = useColorModeValue("navy.700", "white");
    const textColorSecondary = "gray.400";
    const textColorDetails = useColorModeValue("navy.700", "secondaryGray.600");
    const textColorBrand = useColorModeValue("brand.500", "white");
    const brandStars = useColorModeValue("brand.500", "brand.400");
    const googleBg = useColorModeValue("secondaryGray.300", "whiteAlpha.200");
    const googleText = useColorModeValue("navy.700", "white");
    const googleHover = useColorModeValue(
        { bg: "gray.200" },
        { bg: "whiteAlpha.300" }
    );
    const googleActive = useColorModeValue(
        { bg: "secondaryGray.300" },
        { bg: "whiteAlpha.200" }
    );
    const [show, setShow] = React.useState(false);

    // data for register
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isTeacher, setIsTeacher] = React.useState(false);

    let token = Cookies.get("jwt");

    // redux
    const { loading, userInfo, error, success } = useSelector(
        (state) => state.user
    );
    const dispatch = useDispatch();

    const handleClick = () => setShow(!show);

    const handleSignUp = async (e) => {
        e.preventDefault();
        dispatch(
            registerUser({ email, password, firstName, lastName, isTeacher })
        );
        token = Cookies.get("jwt");
    };

    if (token) {
        notify();
        return <Redirect to={"/admin/default"} />;
    }

    return (
        <DefaultAuth illustrationBackground={illustration} image={illustration}>
            <Flex
                maxW={{ base: "100%", md: "max-content" }}
                w="100%"
                mx={{ base: "auto", lg: "0px" }}
                me="auto"
                h="100%"
                alignItems="start"
                justifyContent="center"
                mb={{ base: "30px", md: "60px" }}
                px={{ base: "25px", md: "0px" }}
                mt={{ base: "40px", md: "10px" }}
                flexDirection="column"
            >
                <ToastContainer />
                <Box me="auto">
                    <Heading color={textColor} fontSize="36px" mb="10px">
                        Регистрация
                    </Heading>
                    <Text
                        mb="36px"
                        ms="4px"
                        color={textColorSecondary}
                        fontWeight="400"
                        fontSize="md"
                    >
                        Введите свою почту и пароль для входа
                    </Text>
                </Box>
                <Flex
                    zIndex="2"
                    direction="column"
                    w={{ base: "100%", md: "420px" }}
                    maxW="100%"
                    background="transparent"
                    borderRadius="15px"
                    mx={{ base: "auto", lg: "unset" }}
                    me="auto"
                    mb={{ base: "20px", md: "auto" }}
                >
                    <Button
                        fontSize="sm"
                        me="0px"
                        mb="26px"
                        py="15px"
                        h="50px"
                        borderRadius="16px"
                        bg={googleBg}
                        color={googleText}
                        fontWeight="500"
                        _hover={googleHover}
                        _active={googleActive}
                        _focus={googleActive}
                        disabled={true}
                    >
                        <Icon as={FcGoogle} w="20px" h="20px" me="10px" />
                        Войти с помощью Google
                    </Button>
                    <Flex align="center" mb="25px">
                        <HSeparator />
                        <Text color="gray.400" mx="14px">
                            или
                        </Text>
                        <HSeparator />
                    </Flex>
                    {error && (
                        <Text color="red.400" mb="14px">
                            {error}
                        </Text>
                    )}
                    <HStack>
                        <FormControl>
                            <FormLabel
                                display="flex"
                                ms="4px"
                                fontSize="sm"
                                fontWeight="500"
                                color={textColor}
                                mb="8px"
                            >
                                Имя<Text color={brandStars}>*</Text>
                            </FormLabel>
                            <Input
                                isRequired={true}
                                variant="auth"
                                fontSize="sm"
                                ms={{ base: "0px", md: "0px" }}
                                type="email"
                                placeholder="Эльдар"
                                mb="24px"
                                fontWeight="500"
                                size="lg"
                                value={firstName}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel
                                display="flex"
                                ms="4px"
                                fontSize="sm"
                                fontWeight="500"
                                color={textColor}
                                mb="8px"
                            >
                                Фамилия<Text color={brandStars}>*</Text>
                            </FormLabel>
                            <Input
                                isRequired={true}
                                variant="auth"
                                fontSize="sm"
                                ms={{ base: "0px", md: "0px" }}
                                type="email"
                                placeholder="Ибрагимов"
                                mb="24px"
                                fontWeight="500"
                                size="lg"
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }}
                            />
                        </FormControl>
                    </HStack>

                    <FormControl>
                        <FormLabel
                            display="flex"
                            ms="4px"
                            fontSize="sm"
                            fontWeight="500"
                            color={textColor}
                            mb="8px"
                        >
                            Почта<Text color={brandStars}>*</Text>
                        </FormLabel>
                        <Input
                            isRequired={true}
                            variant="auth"
                            fontSize="sm"
                            ms={{ base: "0px", md: "0px" }}
                            type="email"
                            placeholder="mail@simmmple.com"
                            mb="24px"
                            fontWeight="500"
                            size="lg"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <FormLabel
                            ms="4px"
                            fontSize="sm"
                            fontWeight="500"
                            color={textColor}
                            display="flex"
                        >
                            Пароль<Text color={brandStars}>*</Text>
                        </FormLabel>
                        <InputGroup size="md">
                            <Input
                                isRequired={true}
                                fontSize="sm"
                                placeholder="Min. 8 characters"
                                mb="24px"
                                size="lg"
                                type={show ? "text" : "password"}
                                variant="auth"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                            />
                            <InputRightElement
                                display="flex"
                                alignItems="center"
                                mt="4px"
                            >
                                <Icon
                                    color={textColorSecondary}
                                    _hover={{ cursor: "pointer" }}
                                    as={
                                        show
                                            ? RiEyeCloseLine
                                            : MdOutlineRemoveRedEye
                                    }
                                    onClick={handleClick}
                                />
                            </InputRightElement>
                        </InputGroup>
                        <Flex
                            justifyContent="flex-start"
                            align="center"
                            mb="24px"
                        >
                            <Switch
                                id="email-alerts"
                                mr={"15px"}
                                variant="brand"
                                value={isTeacher}
                                onChange={() => {
                                    setIsTeacher((prev) => !prev);
                                }}
                            />
                            <FormLabel htmlFor="email-alerts" mb="0">
                                Я учитель
                            </FormLabel>
                        </Flex>
                        <Button
                            fontSize="sm"
                            variant="brand"
                            fontWeight="500"
                            w="100%"
                            h="50"
                            mb="24px"
                            onClick={handleSignUp}
                        >
                            Зарегистрироваться
                        </Button>
                    </FormControl>

                    <Flex
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="start"
                        maxW="100%"
                        mt="0px"
                    >
                        <Text
                            color={textColorDetails}
                            fontWeight="400"
                            fontSize="14px"
                        >
                            Уже зарегистрированы?
                            <NavLink to="/auth/signIn">
                                <Text
                                    color={textColorBrand}
                                    as="span"
                                    ms="5px"
                                    fontWeight="500"
                                >
                                    Войти в аккаунт
                                </Text>
                            </NavLink>
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </DefaultAuth>
    );
}

export default SignIn;
