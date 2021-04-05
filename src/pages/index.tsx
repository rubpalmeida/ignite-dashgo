import { Flex, Button, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string,
  password: string
}

export default function SignIn() {
  const { register, handleSubmit } = useForm()

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {

  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        padding="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input type="email" name="email" label="E-mail" {...register('email')} />
          <Input type="password" name="password" label="Senha" {...register('password')} />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>

      </Flex>
    </Flex>
  );
}
