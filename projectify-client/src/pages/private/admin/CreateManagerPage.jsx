import React from 'react'
import { Text, Container, TextInput, Center, Button, Group, Box, createStyles, SimpleGrid, PasswordInput } from '@mantine/core';
import { useForm } from '@mantine/form';
// import { DatePicker } from '@mantine/dates';
import { IconAlertTriangle } from '@tabler/icons';


const CreateManagerPage = () => {

  const form = useForm({
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  // const useStyles = createStyles((theme) => ({
  //   invalid: {
  //     backgroundColor:
  //       theme.colorScheme === 'dark' ? theme.fn.rgba(theme.colors.red[8], 0.15) : theme.colors.red[0],
  //   },

  //   icon: {
  //     color: theme.colors.red[theme.colorScheme === 'dark' ? 7 : 6],
  //   },
  // }));

  // const { classes } = useStyles();

  return (
    <Container size={900} my={60}>
      <Text fw={700} fz={30} ta="center">Create Manager</Text>
      <Box sx={{ maxWidth: 900 }} mt={20} mx="auto" className='text-left'>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'md', cols: 2 }, { maxWidth: 'xs', cols: 1 }]} spacing={20}>
            <TextInput
              label="First Name"
              placeholder="First Name"
              {...form.getInputProps('name')}
              required
            />

            <TextInput
              label="Middle Name"
              placeholder="Middle Name"
              {...form.getInputProps('name')}
            />

            <TextInput
              label="Last Name"
              placeholder="Last Name"
              {...form.getInputProps('name')}
              required
            />

            <TextInput
              mt="sm"
              label="Email"
              placeholder="xyz@nseit.com"
              {...form.getInputProps('email')}
              required
            />

            <PasswordInput
              mt="sm"
              placeholder="password"
              label="Password"
              required
            />

            {/* <DatePicker
            withAsterisk
            mt="sm"
            placeholder="DOJ"
            label="Date of Joining"
          /> */}

            <TextInput
              mt="sm"
              label="Office Location"
              placeholder="Location"
            />

            <TextInput
              mt="sm"
              label="Probation Period"
              placeholder="Probation Period"
            />

            <TextInput
              mt="sm"
              label="Designation"
              placeholder="Designation"
            />
          </SimpleGrid>

          <Center mt={50}>
              <Button size="md" type="submit">Create Manager</Button>
          </Center>
        </form>
      </Box>
    </Container>
  )
}

export default CreateManagerPage