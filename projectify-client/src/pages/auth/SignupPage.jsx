import { Link } from 'react-router-dom';
import { LOGIN_LINK } from '../../routes/route';
import { EmployeeSignup, ManagerSignup } from '../../components';
import { Tabs, Anchor, Paper, Title, Text, Container } from '@mantine/core';

const SignupPage = () => {
  return (
    <Container size={420} my={50}>
      <Title align="center" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}>
        Create your Account
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        Already have an account?{' '}
        <Anchor component={Link} to={LOGIN_LINK} size="sm">Login here</Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md" className='text-left'>
        <Tabs variant="pills" defaultValue="employee">
          <Tabs.List grow>
            <Tabs.Tab value="employee">Employee</Tabs.Tab>
            <Tabs.Tab value="manager">Manager</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="employee" pt="xs">
            <EmployeeSignup/>
          </Tabs.Panel>
          <Tabs.Panel value="manager" pt="xs">
            <ManagerSignup/>
          </Tabs.Panel>
        </Tabs>
      </Paper>
    </Container>
  )
}

export default SignupPage