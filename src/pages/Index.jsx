import { useState } from "react";
import { Container, Input, Button, VStack, Text, Box, HStack } from "@chakra-ui/react";
import { FaSearch, FaCartPlus } from "react-icons/fa";

const Index = () => {
  const [domain, setDomain] = useState("");
  const [availability, setAvailability] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const checkDomainAvailability = async () => {
    // Mock API call to check domain availability
    const isAvailable = Math.random() > 0.5; // Randomly decide if the domain is available
    setAvailability(isAvailable);

    if (!isAvailable) {
      // Mock suggestions
      setSuggestions([
        `${domain}.net`,
        `${domain}.org`,
        `${domain}-online.com`,
        `my${domain}.com`,
      ]);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack width="100%">
          <Input
            placeholder="Enter domain name"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
          <Button leftIcon={<FaSearch />} onClick={checkDomainAvailability}>
            Search
          </Button>
        </HStack>
        {availability !== null && (
          <Box width="100%" textAlign="center">
            {availability ? (
              <Button leftIcon={<FaCartPlus />} colorScheme="green">
                Add to Cart
              </Button>
            ) : (
              <Box>
                <Text color="red.500">Domain not available. Try these suggestions:</Text>
                <VStack spacing={2} mt={2}>
                  {suggestions.map((suggestion, index) => (
                    <Text key={index}>{suggestion}</Text>
                  ))}
                </VStack>
              </Box>
            )}
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;