import { Text, Container, TextInput, Center, Button, Group, Box, createStyles, SimpleGrid, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
// import { DatePicker } from '@mantine/dates';
import { IconAlertTriangle } from '@tabler/icons';

const CreateEmployeePage = () => {

  const form = useForm({
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Container size={900} my={60}>
      <Text fw={700} fz={30} ta="center">Create Employee</Text>
      <Box sx={{ maxWidth: 900 }} mt={20} mx="auto" className='text-left'>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]} spacing={20}>
            <TextInput
              withAsterisk
              label="First Name" position=""
              placeholder="FirstName"
              {...form.getInputProps('name')}
              required
            />

            <TextInput
              label="Middle Name" position=""
              placeholder="MiddleName"
              {...form.getInputProps('name')}
            />

            <TextInput
              withAsterisk
              label="Last Name" position=""
              placeholder="LastName"
              {...form.getInputProps('name')}
              required
            />

            <TextInput
              withAsterisk
              mt="sm"
              label="Email"
              placeholder="xyz@nseit.com"
              {...form.getInputProps('email')}
            />

            <PasswordInput
              withAsterisk
              mt="sm"
              placeholder="password"
              label="Password"
              disabled
            />

            {/* <DatePicker
            withAsterisk
            mt="sm"
            placeholder="DOJ"
            label="Date of Joining"
          /> */}

            <TextInput
              withAsterisk
              mt="sm"
              placeholder="Location"
              label="Office Location"
              required
            />

            <TextInput
              withAsterisk
              mt="sm"
              placeholder="Probation Period"
              label="Probation Period"
              required
            />

            <TextInput
              withAsterisk
              mt="sm"
              placeholder="Designation"
              label="Designation"
              required
            />
          </SimpleGrid>

          {/* <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        /> */}

          <Center mt={50}>
              <Button size="md" type="submit">Create Employee</Button>
          </Center>
        </form>
      </Box>
    </Container>
  )
}

export default CreateEmployeePage