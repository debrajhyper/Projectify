import { Container, Grid, Divider, Checkbox, Select, SimpleGrid, Text, Skeleton, useMantineTheme, Flex, Image } from '@mantine/core';

import { ProjectCard } from '../../components'
const PRIMARY_COL_HEIGHT = 300;

const ProjectsPage = () => {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;
  const child = <Skeleton height={140} radius="md" animate={false} />;

  return (
    <Container my="lg" mx='lg' py='lg' px='lg' fluid>
      <div className='border-4 border-red-600'>
      <Grid gutter="md" grow>
          <Grid.Col span='auto'>
            <div className='text-left w-full border-2 border-red-900'>
              <Text fw={700} fz="xl">Filters</Text>
              <Flex gap='md'>
                <div>
                  <Divider my="xs"/>
                  <Checkbox.Group
                    defaultValue={['react']}
                    orientation="vertical"
                    label="Schedule"
                    description="This is anonymous"
                    spacing="md"
                    offset="sm"
                  >
                    <Checkbox value="react" label="React" />
                    <Checkbox value="svelte" label="Svelte" />
                    <Checkbox value="ng" label="Angular" />
                    <Checkbox value="vue" label="Vue" />
                  </Checkbox.Group>
                </div>
              </Flex>
            </div>
          </Grid.Col>
          <Grid.Col span={7}>
            <Flex justify='space-between'>
              <Text>Results</Text>
              <Flex>
                <Text>Sort By</Text>
                <Select
                  placeholder="Pick one"
                  data={[
                    { value: 'react', label: 'React' },
                    { value: 'ng', label: 'Angular' },
                    { value: 'svelte', label: 'Svelte' },
                    { value: 'vue', label: 'Vue' },
                  ]}
                />
              </Flex>
            </Flex>
            <SimpleGrid cols={3}>
              <ProjectCard />
              <div class="flex flex-col bg-blue-50 p-4 rounded-xl">

                <div class="flex items-center justify-between pb-6">
                    <span class="text-xs text-gray-400">7 Jul 2022</span>
                </div>

                <div class="flex flex-col items-start justify-between gap-4 w-full">
                    <div class="flex items-center justify-between w-full">
                        <p class="text-2xl font-semibold truncate">UX Designer</p>
                        <span class="text-xs text-blue-500 font-semibold">20 applied</span>
                    </div>

                    <div class="flex items-center justify-start gap-2 w-full">
                        <label class="bg-purple-200 text-purple-500 px-2 py-1 text-xs rounded-2xl">Full time</label>
                        <label class="bg-green-100 text-green-300 px-2 py-1 text-xs rounded-2xl">Package</label>
                        <label class="bg-blue-100 text-indigo-500 px-2 py-1 text-xs rounded-2xl">Remot</label>
                    </div>

                    <div>
                        <h1 class="text-sm font-semibold">Web Developer</h1>
                    </div>

                    <div>
                        <p class="text-sm text-gray-500 truncate whitespace-normal">
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
                            egestas.
                        </p>
                    </div>

                    <div class="grid grid-cols-2 gap-2 w-full">
                        <a href="#" class=" px-4 rounded-xl text-white py-3 inline-flex items-center justify-center bg-blue-500">Apply</a>
                        <a href="#" class=" px-4 rounded-xl py-3 inline-flex items-center justify-center border border-gray-400 text-gray-500">Bookmark</a>
                    </div>
                </div>
            </div>
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </div>
    </Container>
  )
}

export default ProjectsPage