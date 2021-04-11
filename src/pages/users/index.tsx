import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";

import Link from "next/link";

import { RiAddLine, RiPencilLine, RiRefreshLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { SideBar } from "../../components/SideBar";
import { useUsers } from "../../services/hooks/useUsers";

export default function UserList() {
  const { data, isLoading, isFetching, error, refetch } = useUsers()


  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  function handleRefreshData() {
    refetch();
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center" >
            <Heading size="lg" fontWeight="normal" >
              Usuários

              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.600" ml="4" />
              )}
            </Heading>

            <Flex>
              <Button
                as="button"
                onClick={handleRefreshData}
                mr="4"
                size="sm"
                colorScheme="purple"
              >
                <Icon as={RiRefreshLine} />
              </Button>

              <Link href="/users/create" passHref>
                <Button
                  as="a"
                  size="sm"
                  fontSize="sm"
                  colorScheme="pink"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                >
                  Criar novo
            </Button>
              </Link>
            </Flex>
          </Flex>

          {isLoading ? (
            <Flex justify="center">
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify="center">
              <Text>Falha ao obter os dados do usuário</Text>
            </Flex>
          ) : (
            <>
              <Table colorScheme="whiteAlpha">
                <Thead>
                  <Tr>
                    <Th px={["2", "4", "6"]} color="gray.300" width="8">
                      <Checkbox colorScheme="pink" />
                    </Th>
                    <Th>
                      Usuário

                    </Th>
                    {isWideVersion && <Th>Data de cadastro</Th>}
                    <Th width="8">Editar</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {data.map((user) => {
                    return (
                      <Tr key={user.id}>
                        <Td px={["2", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            {isWideVersion && <Text fontSize="sm" color="gray.300">{user.email}</Text>}
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.createdAt}</Td>}
                        <Td>
                          {isWideVersion
                            ? <Button as="a" size="sm" fontSize="sm" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} fontSize="16" />}>
                              Editar
                              </Button>
                            : <Button as="a" size="sm" fontSize="sm" colorScheme="purple">
                              {<Icon as={RiPencilLine} fontSize="16" />}
                            </Button>}
                        </Td>
                      </Tr>
                    )
                  })}

                </Tbody>
              </Table>

              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
