import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ADMIN_DASHBOARD_LINK, DASHBOARD_LINK, EMPLOYEE_DASHBOARD_LINK, FORGOT_PASSWORD_LINK, MANAGER_DASHBOARD_LINK, SIGNUP_LINK } from '../../routes/route';
import { TextInput, NumberInput, Select, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import axios, { GENERATE_TOKEN } from '../../api/api';
// import { EMPLOYEE_BASE_URL, LOGIN_URL, MANAGER_BASE_URL } from '../../api/url';
import { errorNotification, loadingNotification, successNotification } from '../../components';
import { request } from '../../utils/baseAxios';
import { loginRequest } from '../../utils/authResquest';
import { useMutation, useQuery } from 'react-query';
import { setToken } from '../../utils/localstorageItem';
import jwtDecode from 'jwt-decode';
import useAuth from '../../hooks/useAuth';

export default function LoginPage() {
    const { auth, setAuth, user, setUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const comeFrom = location.state?.form?.pathname || '/';
    function toUpperLower(text) {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()
    }
    
    useEffect(() => {
        const goToPage = auth?.roles?.[0]?.authority
        if(goToPage === 'ADMIN') {
            navigate(ADMIN_DASHBOARD_LINK, { replace: true })
        }
        else if(goToPage === 'MANAGER') {
            navigate(MANAGER_DASHBOARD_LINK, { replace: true })
        }
        if(goToPage === 'EMPLOYEE') {
            navigate(EMPLOYEE_DASHBOARD_LINK, { replace: true })
        }
        // else {
        //     navigate(comeFrom, { replace: true })
        // }
    }, [auth, navigate])

    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        },
    });

    const formSubmit = async (values) => {
        loadingNotification()
        const credentials = {
            username: values.email,
            password: values.password
        }
        await axios.post(GENERATE_TOKEN, credentials)
        .then(res => {
            console.log(res?.data);
            const isLoggedIn = setToken(res?.data?.token);
            const roles = jwtDecode(res.data.token).roles;
            const email = jwtDecode(res.data.token).sub;
            // console.log(jwtDecode(res.data.token).sub, jwtDecode(res.data.token).roles[0].authority);
            setAuth({email, roles, isLoggedIn})
            setUser(res?.data?.user)
            successNotification(`${toUpperLower(roles[0].authority)} Logged in Successfully`);
        })
        .catch(err => {
            console.log(err)
            errorNotification(err?.response?.data?.message || 'Oops... Something went wrong')
        })
    }

    return (
        <Container size={420} my={50}>
            <Title align="center" sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}>
                Welcome back!
            </Title>
            {/* <Text color="dimmed" size="sm" align="center" mt={5}>
                Do not have an account yet?{' '}
                <Anchor component={Link} to={SIGNUP_LINK} size="sm">Create account</Anchor>
            </Text> */}

            <Paper withBorder shadow="md" p={30} mt={30} radius="md" className='text-left'>
                <form onSubmit={form.onSubmit(values => formSubmit(values))}>
                    <TextInput label="Email" placeholder="Your Email" {...form.getInputProps('email')} required />
                    <PasswordInput label="Password" placeholder="Your Password" {...form.getInputProps('password')} required mt="md" />
                    <Group position="apart" mt="lg">
                        <Checkbox label="Remember me" sx={{ lineHeight: 2 }} />
                        <Anchor component={Link} to={FORGOT_PASSWORD_LINK} size="sm">Forgot password?</Anchor>
                    </Group>
                    <Button type="submit" fullWidth mt='xl' className='mt-10'>Sign in</Button>
                </form>
            </Paper>
        </Container>
    )
}