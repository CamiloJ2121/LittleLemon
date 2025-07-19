import React from "react";
import { Text, VStack, Image, HStack } from "@chakra-ui/react";

const HighlightsCard = ({ title, price, description, footer, src }) => {
  return (
    <VStack
      borderTopRadius="xl"
      spacing={4}
      align="start"
      background='#EDEFEE'
      width={250}
    >
      <Image alt={title} src={src} borderTopRadius="md" />
      <HStack
        spacing={4}
        align="center"
        bg='#EDEFEE'
        width={240}
        >
        <Text pl={5} as="h2" size="lg" color="#000" fontWeight="bold">{title}</Text>
        <Text pl={5} as="h2" size="lg" color="#EE9972">{price}</Text>
      </HStack>
      <Text pl={5} fontSize="md" color="#333" p={4}>{description}</Text>
      <Text pl={5} mt="auto" pb={4} as="h4" size="md" color="#000" fontWeight="bold">{footer}</Text>
    </VStack>
  );
};

export default HighlightsCard;
