import { Container, Grid, Divider, Checkbox, Select, SimpleGrid, Text, Skeleton, useMantineTheme, Flex, Image, Center } from '@mantine/core';
import { ProjectCard } from '../../components'

const ProjectsPage = () => {
  return (
    <Center>
      <Container size="lg" my="lg" mx='lg' py='lg' px='lg'>
        <Grid gutter="md" grow>
          <Grid.Col>
            <Flex justify='space-between'>
              <Text fz={20} fw={700} color="dimmed">Results 6</Text>
              <Select
                placeholder="Sort By"
                data={[
                  { value: 'latest', label: 'Latest' },
                  { value: 'salary', label: 'Salary' },
                  { value: 'needed', label: 'Needed' },
                  { value: 'applied', label: 'Applied' },
                ]}
              />
            </Flex>
            <SimpleGrid cols={4} spacing="xl" py={30} breakpoints={[
              { maxWidth: 980, cols: 3, spacing: 'md' },
              { maxWidth: 755, cols: 2, spacing: 'sm' },
              { maxWidth: 600, cols: 1, spacing: 'sm' },
            ]}>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Container>
    </Center>
  )
}

export default ProjectsPage