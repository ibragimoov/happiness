// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInformation(props) {
    const { ...rest } = props;
    // Chakra Color Mode
    const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
    const textColorSecondary = "gray.400";
    const cardShadow = useColorModeValue(
        "0px 18px 40px rgba(112, 144, 176, 0.12)",
        "unset"
    );
    return (
        <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
            <Text
                color={textColorPrimary}
                fontWeight="bold"
                fontSize="2xl"
                mt="10px"
                mb="4px"
            >
                Основная Информация
            </Text>
            <Text color={textColorSecondary} fontSize="md" me="26px" mb="40px">
                Обнаружьте, что по мере того, как мы живем, наши сердца
                становятся холоднее. Потому что боль - это то, через что мы
                проходим, становясь старше. Нас оскорбляют другие, мы теряем
                доверие к этим другим. Друзья наносят нам ответный удар ножом.
                Нам становится все труднее протягивать другим руку помощи...
            </Text>
            <SimpleGrid columns="2" gap="20px">
                <Information
                    boxShadow={cardShadow}
                    title="Образование"
                    value="МБОУ 'CЭЛ'"
                />
                <Information
                    boxShadow={cardShadow}
                    title="Языки"
                    value="Русский, Английский, Турецкий"
                />
                <Information
                    boxShadow={cardShadow}
                    title="День Рождения"
                    value="6 Сен 2006"
                />
            </SimpleGrid>
        </Card>
    );
}
