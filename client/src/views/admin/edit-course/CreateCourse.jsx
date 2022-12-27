import React, { Fragment, useState } from "react";
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
    Divider,
} from "@chakra-ui/react";
import { CgMathPlus } from "react-icons/cg";

import { useToast } from "@chakra-ui/react";

import axios from "../../../utils/axios";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../../redux/slices/user.slice";
import { Redirect, useParams } from "react-router-dom";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const EditCourse = () => {
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

    const { id } = useParams();

    React.useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getUserDetails());

        if (id) {
            const config = {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            };

            axios.get(`/course/${id}`, config).then((res) => {
                setChapters(res.data.chapters);
                setTitle(res.data.title);
                setBrief(res.data.brief);
                setFee(res.data.fee);
            });
        }
    }, []);

    // course
    const [title, setTitle] = React.useState("");
    const [brief, setBrief] = React.useState("");
    const [numChap, setNumChap] = React.useState(1);
    const [fee, setFee] = React.useState(0);

    const [created, setCreated] = React.useState(false);

    // chapters
    const [chapters, setChapters] = React.useState([
        { title: "", brief: "", content: "" },
    ]);

    const handleClick = () => setShow(!show);

    const updateCourse = async (data) => {
        await axios.put(`/course/${id}`, data);
    };

    const handleSubmit = (e, data) => {
        e.preventDefault();

        updateCourse({ ...data });
        setCreated(true);
    };

    const handleAddChapter = () => {
        setChapters((prev) => {
            return [...prev, { title: "", brief: "", content: "" }];
        });
    };

    const addTitle = (id, value) => {
        const newChapters = chapters.map((chap, i) => {
            if (i === id) {
                return { ...chap, title: value };
            } else {
                return chap;
            }
        });
        setChapters(newChapters);
    };

    const addBrief = (id, value) => {
        const newChapters = chapters.map((chap, i) => {
            if (i === id) {
                return { ...chap, brief: value };
            } else {
                return chap;
            }
        });
        setChapters(newChapters);
    };

    const addContent = React.useCallback(
        (data, id) => {
            const newChapters = chapters.map((chap, i) => {
                if (i === id) {
                    return { ...chap, content: data };
                } else {
                    return chap;
                }
            });
            setChapters(newChapters);
        },
        [chapters]
    );

    const handleDelete = (id) => {
        const newChapters = chapters.filter((_, idx) => idx !== id);
        setChapters(newChapters);
    };

    const options = React.useMemo(
        () => ({
            spellChecker: false,
            maxHeight: "400px",
            autofocus: true,
            placeholder: "Введите текст...",
            status: false,
            autosave: {
                enabled: true,
                delay: 1000,
            },
        }),
        []
    );

    if (created) {
        return <Redirect to={"/admin/default"} />;
    }

    const chaptersElelemnt = chapters.map((_, idx) => (
        <Flex flexDirection={"column"} key={idx}>
            <FormControl mt="2%">
                <FormLabel htmlFor="" fontWeight={"normal"}>
                    Название главы #{idx + 1}{" "}
                </FormLabel>
                <Input
                    value={_.title}
                    onChange={(e) => addTitle(idx, e.target.value)}
                    id="first-name"
                    placeholder="Мнемотехника"
                />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="" fontWeight={"normal"} mt="2%">
                    Описание главы #{idx + 1}
                </FormLabel>
                <InputGroup size="md">
                    <Input
                        value={_.brief}
                        onChange={(e) => addBrief(idx, e.target.value)}
                        id="last-name"
                        type={"text"}
                        placeholder="Полезный курс для начинающих"
                    />
                </InputGroup>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="" fontWeight={"normal"} mt="2%">
                    Контент главы #{idx + 1}
                </FormLabel>
                <SimpleMDE
                    value={_.content}
                    onChange={(e) => addContent(e, idx)}
                    options={options}
                />
            </FormControl>
            <br />
            <Button
                onClick={(e) => handleDelete(idx)}
                w={"100%"}
                backgroundColor={"red.300"}
                _hover={{ backgroundColor: "red.400" }}
                _active={{ backgroundColor: "red.500" }}
                color={"black"}
            >
                X
            </Button>
            <br />
        </Flex>
    ));

    return (
        <>
            <Box
                backgroundColor={"white"}
                borderWidth="1px"
                rounded="30px"
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
                    {`${title}`}
                </Heading>

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
                <br />
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

                <Flex mt={"10px"}>
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

                {chaptersElelemnt}
                <br />
                <ButtonGroup w="100%">
                    <Flex w="100%" justifyContent={"space-between"}>
                        <Button
                            onClick={handleAddChapter}
                            colorScheme="blue"
                            variant="outline"
                            rightIcon={<CgMathPlus />}
                        >
                            Добавить главу
                        </Button>
                        <Flex justifyContent={"space-between"}>
                            <Button
                                w="10rem"
                                colorScheme="blue"
                                alignItems={"center"}
                                variant="solid"
                                onClick={(e) => {
                                    handleSubmit(e, {
                                        title,
                                        brief,
                                        num_of_chapters: numChap,
                                        fee,
                                        chapters,
                                    });
                                }}
                            >
                                Обновить курс
                            </Button>
                        </Flex>
                    </Flex>
                </ButtonGroup>
            </Box>
        </>
    );
};

export default EditCourse;
