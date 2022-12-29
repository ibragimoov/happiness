import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
//
// Replace test data with your own
const features = [
    {
        id: 1,
        title: "Из мечты в цель",
        text: "Умение выбирать и достигать цели.",
    },
    {
        id: 2,
        title: "Сам себе психолог",
        text: "Знания и умения, как поддерживать своё здоровье на хорошем уровне.",
    },
    {
        id: 3,
        title: "Мозг и нейронауки",
        text: "Техники по развитию когнитивных способностей и обходу ловушек мышления.",
    },
    {
        id: 4,
        title: "Критическое мышление",
        text: "Умение мыслить независимо и не поддаваться на обман и самообман.",
    },
    {
        id: 5,
        title: "Сторителлинг",
        text: "Умение красиво писать и излагать свои мысли.",
    },
    {
        id: 6,
        title: "Изобретательство",
        text: "Применение креативных алгоритмов решения нетривиальных задач.",
    },
    {
        id: 7,
        title: "Быстрое чтение",
        text: "Способность быстро читать и эффективно усваивать информацию.",
    },
    {
        id: 8,
        title: "Мнемотехники",
        text: "Приёмы эффективного запоминания разной информации.",
    },
];

export default function Info() {
    return (
        <Box p={4}>
            <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
                <Heading fontSize={"3xl"}>
                    Чему можно научиться на 4brain?
                </Heading>
                <Text color={"gray.600"} fontSize={"xl"}>
                    Некоторым полезным навыкам редко учат в школе или вузе.
                    Именно поэтому мы сделали проект 4brain.ru, чтобы вы смогли
                    освоить эти навыки:
                </Text>
            </Stack>

            <Container maxW={"6xl"} mt={10}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                    {features.map((feature) => (
                        <HStack key={feature.id} align={"top"}>
                            <Box color={"green.400"} px={2}>
                                <Icon as={CheckIcon} />
                            </Box>
                            <VStack align={"start"}>
                                <Text fontWeight={600}>{feature.title}</Text>
                                <Text color={"gray.600"}>{feature.text}</Text>
                            </VStack>
                        </HStack>
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    );
}
