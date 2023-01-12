import { Container, Grid, SimpleGrid, Center, Card, CardSection } from '@mantine/core'
import { IconHighlight, IconUser, IconUserCircle } from '@tabler/icons';
import { useState } from 'react'
import { createStyles, Text, UnstyledButton, Anchor, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { ADD_EMPLOYEE_LINK, ADD_MANAGER_LINK, ADD_SKILL_LINK } from '../../../routes/route';

const mockdata = [
  { title: 'Add Manager', icon: IconUserCircle, color: 'dark', href: ADD_MANAGER_LINK },
  { title: 'Add Employee', icon: IconUser, color: 'dark', href: ADD_EMPLOYEE_LINK },
  { title: 'Add Skills', icon: IconHighlight, color: 'dark', href: ADD_SKILL_LINK }
];

const useStyles = createStyles((theme) => ({
  card: {
    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
  },

  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: theme.radius.md,
    height: 90,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
    transition: 'box-shadow 150ms ease, transform 100ms ease',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.05)',
    },
  },
}));

const AdminDashboardPage = () => {
  const { classes, theme } = useStyles();

  const items = mockdata.map((item) => (
    <UnstyledButton component={Link} to={item.href} key={item.title} className={classes.item}>
      <item.icon color={theme.colors[item.color][6]} size={32} />
      <Text size="xs" mt={7}>
        {item.title}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Container size="sm" px="xs" mt='xl'>
      <Card p="xl" className={classes.card}>
        <Group position="apart">
          <Text className={classes.title}>Welcome to Admin Page</Text>
        </Group>
        <SimpleGrid cols={3} mt="md">
          {items}
        </SimpleGrid>
      </Card>
    </Container>
  )
}

export default AdminDashboardPage