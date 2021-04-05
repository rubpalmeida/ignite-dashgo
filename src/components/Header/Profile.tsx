import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex>
      <Box mr="4" textAlign="right">
        <Text>
          Rubens Almeida
        </Text>
        <Text color="gray.300">
          rubpalmeida@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Rubens Almeida"
        src="https://github.com/rubpalmeida.png"
      />
    </Flex>
  );
}
