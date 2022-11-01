import React, { useState } from "react";
import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    GridItem,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

import axios from "../../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../../redux/slices/user.slice";
import { Redirect } from "react-router-dom";

const CreateCourse = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const toast = useToast();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [step, setStep] = useState(1);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [progress, setProgress] = useState(33.33);

    const [show, setShow] = React.useState(false);

    const { userInfo, userToken } = useSelector((state) => state.user);
    const { email } = userInfo;
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getUserDetails());
    }, []);

    // course
    const [title, setTitle] = React.useState("");
    const [brief, setBrief] = React.useState("");
    const [numChap, setNumChap] = React.useState(0);
    const [fee, setFee] = React.useState(0);

    const [created, setCreated] = React.useState(false);

    // chapters
    const [chap_title, setChapTitle] = React.useState("");
    const [chap_brief, setChapBrief] = React.useState("");
    const [chap_content, setChapContent] = React.useState("");

    const handleClick = () => setShow(!show);

    const createCourse = async (data) => {
        await axios.post("/course", data);
    };

    const handleSubmit = (e, data) => {
        e.preventDefault();

        createCourse({ ...data, user_id: userInfo.id });
        setCreated(true);
    };

    if (created) {
        console.log(created);
        return <Redirect to={"/admin/default"} />;
    }

    return (
        <>
            <Box
                backgroundColor={"white"}
                borderWidth="1px"
                rounded="lg"
                shadow="1px 1px 3px rgba(0,0,0,0.3)"
                maxWidth={800}
                p={6}
                m="10px auto"
                mt={"150px"}
                as="form"
            >
                {/* <Progress
                    hasStripe
                    value={progress}
                    mb="5%"
                    mx="5%"
                    isAnimated
                ></Progress> */}
                <Heading
                    w="100%"
                    textAlign={"center"}
                    fontWeight="bold"
                    color={"blue.500"}
                    mb="2%"
                >
                    {`Курс: ${title}`}
                </Heading>
                <Flex>
                    <FormControl mr="5%">
                        <FormLabel htmlFor="first-name" fontWeight={"normal"}>
                            Название
                        </FormLabel>
                        <Input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            id="first-name"
                            placeholder="Мнемотехника"
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="last-name" fontWeight={"normal"}>
                            Описание
                        </FormLabel>
                        <Input
                            value={brief}
                            onChange={(e) => setBrief(e.target.value)}
                            id="last-name"
                            placeholder="Полезный курс для начинающих"
                        />
                    </FormControl>
                </Flex>
                <Flex mt={"10px"}>
                    <FormControl mr="5%">
                        <FormLabel htmlFor="first-name" fontWeight={"normal"}>
                            Кол-во глав
                        </FormLabel>
                        <Input
                            value={numChap}
                            onChange={(e) => setNumChap(e.target.value)}
                            id="first-name"
                            type="number"
                            placeholder="Например: 2"
                        />
                    </FormControl>

                    <FormControl>
                        <FormLabel htmlFor="last-name" fontWeight={"normal"}>
                            Цена
                        </FormLabel>
                        <Input
                            value={fee}
                            onChange={(e) => setFee(e.target.value)}
                            id="first-name"
                            type="number"
                            placeholder="Например: 249"
                        />
                    </FormControl>
                </Flex>
                <FormControl mt="2%">
                    <FormLabel htmlFor="" fontWeight={"normal"}>
                        Название главы
                    </FormLabel>
                    <Input
                        value={chap_title}
                        onChange={(e) => setChapTitle(e.target.value)}
                        id="first-name"
                        placeholder="Мнемотехника"
                    />
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="" fontWeight={"normal"} mt="2%">
                        Описание главы
                    </FormLabel>
                    <InputGroup size="md">
                        <Input
                            value={chap_brief}
                            onChange={(e) => setChapBrief(e.target.value)}
                            id="last-name"
                            type={"text"}
                            placeholder="Полезный курс для начинающих"
                        />
                    </InputGroup>
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="" fontWeight={"normal"} mt="2%">
                        Контент
                    </FormLabel>
                    <InputGroup size="md">
                        <Textarea
                            value={chap_content}
                            onChange={(e) => setChapContent(e.target.value)}
                            id="last-name"
                            type={"text"}
                            placeholder="Введите контент главы"
                        />
                    </InputGroup>
                </FormControl>
                <ButtonGroup mt="5%" w="100%">
                    <Flex w="100%" justifyContent="space-between">
                        <Flex>
                            <Button
                                w="7rem"
                                colorScheme="blue"
                                alignItems={"center"}
                                variant="solid"
                                onClick={(e) => {
                                    handleSubmit(e, {
                                        title,
                                        brief,
                                        num_of_chapters: numChap,
                                        fee,
                                        chapters: [
                                            {
                                                title: chap_title,
                                                brief: chap_brief,
                                                content: chap_content,
                                            },
                                        ],
                                    });
                                }}
                            >
                                Создать
                            </Button>
                        </Flex>
                    </Flex>
                </ButtonGroup>
            </Box>
        </>
    );
};

export default CreateCourse;
