import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex>
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>
            Rubens Almeida
          </Text>
          <Text color="gray.300">
            rubpalmeida@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Rubens Almeida"
        src="https://github.com/rubpalmeida.png"
      />
    </Flex>
  );
}
