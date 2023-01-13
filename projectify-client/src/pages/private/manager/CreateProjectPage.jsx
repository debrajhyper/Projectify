import React from 'react'
import { Container, TextInput, Box, SimpleGrid, NumberInput, FileInput } from '@mantine/core';
import { useForm } from '@mantine/form';
// import { DatePicker } from '@mantine/dates';
// import { IconAlertTriangle } from '@tabler/icons';

const CreateProjectPage = () => {

  const form = useForm({
    initialValues: {
      dateOfCreation:'',
      title:'',
      location:'',
      requiredEmployee:0,
      type:'',
      image:'',
      experience:0,
      description:'',
    }
  })

  return (
    <Container size={900} my={50}>
      <Box sx={{ maxWidth: 900 }} mx="auto" className='text-left'>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <SimpleGrid cols={3} breakpoints={[{maxWidth: 'sm', cols: 1}]} spacing={20}>
            <TextInput
              withAsterisk
              label="Project Title"
              placeholder='Title'
              {...form.getInputProps('name')}
              required
            />

            <TextInput
              withAsterisk
              label="Project Domain"
              placeholder='Domain'
              {...form.getInputProps('domain')}
              required
            />

            <TextInput
              withAsterisk
              label="Date of Creation"
              placeholder='Date'
              {...form.getInputProps('dateOfCreation')}
              required
            />

            <TextInput
              withAsterisk
              label="Project Location"
              placeholder='Location'
              {...form.getInputProps('location')}
              required
            />

            <NumberInput
              withAsterisk
              defaultValue={0}
              label="Number of open possitions"
              placeholder='Assign Resources'
              {...form.getInputProps('requiredEmployee')}
              required
            />

            <NumberInput
              withAsterisk
              defaultValue={0}
              label="Required experience"
              placeholder='Experience in years'
              {...form.getInputProps('experience')}
              required
            />

            <FileInput
              label="Upload Project Img"
              placeholder='png/jpeg'
              accept='image/png,image/jpeg'
            />

            <TextInput
              label="Project Description"
              placeholder='Description'
              {...form.getInputProps('description')}
              required
            />

          </SimpleGrid>
        </form>
      </Box>
    </Container>
  )
}

export default CreateProjectPage