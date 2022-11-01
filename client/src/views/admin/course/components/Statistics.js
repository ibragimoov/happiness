import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
} from "@chakra-ui/react";

function StatsCard(props) {
    const { title, stat } = props;
    return (
        <Stat
            px={{ base: 4, md: 8 }}
            py={"5"}
            shadow={"xl"}
            border={"1px solid"}
            borderColor={useColorModeValue("gray.800", "gray.500")}
            rounded={"lg"}
            _hover={{
                backgroundColor: "blue.500",
                transition: "0.4s",
                transitionProperty: "all",
                color: "white",
            }}
            transition="0.4s"
            transitionProperty="all"
        >
            <StatLabel fontWeight={"medium"}>{title}</StatLabel>
            <StatNumber
                cursor={"default"}
                fontSize={"2xl"}
                fontWeight={"medium"}
            >
                {stat}
            </StatNumber>
        </Stat>
    );
}

export default function Statistics() {
    return (
        <Box maxW="7xl" mx={"auto"} pt={0} px={{ base: 2, sm: 12, md: 17 }}>
            <chakra.h1
                textAlign={"center"}
                fontSize={"5xl"}
                py={10}
                fontWeight={"bold"}
            >
                На этом курсе Вы:
            </chakra.h1>
            <SimpleGrid
                columns={{ base: 1, md: 3 }}
                spacing={{ base: 5, lg: 8 }}
            >
                <StatsCard title={"Подписано"} stat={"50,000 чел"} />
                <StatsCard title={"Из"} stat={"30 стран"} />
                <StatsCard title={"Отзывов"} stat={"100"} />
            </SimpleGrid>
        </Box>
    );
}
