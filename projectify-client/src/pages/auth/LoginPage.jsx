import { Link } from 'react-router-dom';
import { FORGOT_PASSWORD_LINK, SIGNUP_LINK } from '../../routes/route';
import { TextInput, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button } from '@mantine/core';

export default function LoginPage() {
    return (
        <Container size={420} my={50}>
            <Title align="center" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}>
                Welcome back!
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                Do not have an account yet?{' '}
                <Anchor component={Link} to={SIGNUP_LINK} size="sm">Create account</Anchor>
            </Text>

            <Paper withBorder shadow="md" p={30} mt={30} radius="md" className='text-left'>
                <TextInput label="Email" placeholder="you@nseit.com" required />
                <PasswordInput label="Password" placeholder="Your password" required mt="md" />
                <Group position="apart" mt="lg">
                    <Checkbox label="Remember me" sx={{ lineHeight: 2 }} />
                    <Anchor component={Link} to={FORGOT_PASSWORD_LINK} size="sm">Forgot password?</Anchor>
                </Group>
                <Button fullWidth mt='xl' className='mt-10'>Sign in</Button>
            </Paper>
        </Container>
    )
}