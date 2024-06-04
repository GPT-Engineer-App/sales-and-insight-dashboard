import React from "react";
import { Container, VStack, HStack, Box, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, IconButton } from "@chakra-ui/react";
import { FaChartLine, FaDollarSign, FaUsers, FaShoppingCart } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" py={10}>
      <VStack spacing={8} width="100%">
        <Text fontSize="3xl" fontWeight="bold">
          Business Dashboard
        </Text>

        <HStack spacing={8} width="100%" justifyContent="space-around">
          <StatBox icon={FaDollarSign} label="Revenue" value="$50,000" change="+5%" />
          <StatBox icon={FaShoppingCart} label="Sales" value="1,200" change="+8%" />
          <StatBox icon={FaUsers} label="Customers" value="300" change="+2%" />
          <StatBox icon={FaChartLine} label="Growth" value="15%" change="+3%" />
        </HStack>
      </VStack>
    </Container>
  );
};

const StatBox = ({ icon, label, value, change }) => {
  return (
    <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="200px">
      <HStack spacing={4}>
        <IconButton aria-label={label} icon={React.createElement(icon)} size="lg" isRound />
        <VStack align="start">
          <Stat>
            <StatLabel>{label}</StatLabel>
            <StatNumber>{value}</StatNumber>
            <StatHelpText>
              <StatArrow type={change.startsWith("+") ? "increase" : "decrease"} />
              {change}
            </StatHelpText>
          </Stat>
        </VStack>
      </HStack>
    </Box>
  );
};

export default Index;
