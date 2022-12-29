import {
    Avatar,
    Box,
    Flex,
    FormLabel,
    Icon,
    Select,
    SimpleGrid,
    useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
    MdAddTask,
    MdAttachMoney,
    MdBarChart,
    MdFileCopy,
} from "react-icons/md";
import CheckTable from "./components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
    columnsDataCheck,
    columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";

import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../../redux/slices/user.slice";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import axios from "../../../utils/axios";
import * as moment from "moment";

import {
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    Stack,
} from "@chakra-ui/react";

export default function UserReports() {
    // Chakra Color Mode
    const brandColor = useColorModeValue("brand.500", "white");
    const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");

    const { userInfo, userToken } = useSelector((state) => state.user);
    const token = Cookies.get("jwt");
    const dispatch = useDispatch();

    const [ownCourses, setOwnCourses] = React.useState([]);
    const [tableData, setTableData] = React.useState([]);
    const [chaptersDone, setChaptersDone] = React.useState(0);
    const [coursesDone, setCoursesDone] = React.useState(0);

    const getOwnCourses = async () => {
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
    };

    React.useEffect(() => {
        dispatch(getUserDetails());
    }, []);

    React.useEffect(() => {
        getOwnCourses();
    }, [userInfo]);

    React.useEffect(() => {
        setTable(ownCourses);
    }, [ownCourses]);

    const setTable = async (ownCourses) => {
        let c = 0;
        let newTable = await Promise.all(
            ownCourses.map(async (own) => {
                let k = 0;
                let learningProgress = 0;
                learningProgress = await axios
                    .get(`/course/${own.course.id}`)
                    .then((res) => {
                        const { chapters } = res.data;
                        chapters.forEach(async (chap) => {
                            if (chap.isChecked) {
                                k++;
                            }
                        });
                        setChaptersDone(k);
                        return (learningProgress = (k / chapters.length) * 100);
                    });
                if (learningProgress === 100) c++;
                return {
                    name: own.course.title,
                    date: moment(own.enrollment_date).format("D MMM YYYY"),
                    progress: learningProgress,
                };
            })
        );
        setCoursesDone(c);
        setTableData(newTable);
    };

    if (!token) {
        return <Redirect to={"/auth/signIn"} />;
    }
    return (
        <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
            <SimpleGrid
                columns={{ base: 1, md: 2, lg: 3, "2xl": 6 }}
                gap="20px"
                mb="20px"
            >
                <MiniStatistics
                    startContent={
                        <IconBox
                            w="56px"
                            h="56px"
                            bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"
                            icon={
                                <Icon
                                    w="28px"
                                    h="28px"
                                    as={MdAddTask}
                                    color="white"
                                />
                            }
                        />
                    }
                    name="Пройдено курсов"
                    value={coursesDone}
                />
                <MiniStatistics
                    startContent={
                        <IconBox
                            w="56px"
                            h="56px"
                            bg={boxBg}
                            icon={
                                <Icon
                                    w="32px"
                                    h="32px"
                                    as={MdFileCopy}
                                    color={brandColor}
                                />
                            }
                        />
                    }
                    name="Пройдено глав"
                    value={chaptersDone}
                />
            </SimpleGrid>
            {/* <SimpleGrid
                columns={{ base: 1, md: 2, xl: 2 }}
                gap="20px"
                mb="20px"
            >
                <TotalSpent />
                <WeeklyRevenue />
            </SimpleGrid> */}{" "}
            <SimpleGrid
                columns={{ base: 1, md: 1, xl: 2 }}
                gap="20px"
                mb="20px"
            >
                <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
                    <DailyTraffic />
                    <MiniCalendar h="100%" minW="100%" selectRange={false} />
                </SimpleGrid>
                <ComplexTable
                    columnsData={columnsDataComplex}
                    tableData={tableData}
                />
            </SimpleGrid>
            <SimpleGrid
                columns={{ base: 1, md: 1, xl: 2 }}
                gap="20px"
                mb="20px"
            ></SimpleGrid>
        </Box>
    );
}
