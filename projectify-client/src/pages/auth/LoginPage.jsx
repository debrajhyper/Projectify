import { Link, useNavigate } from 'react-router-dom';
import { DASHBOARD_LINK, FORGOT_PASSWORD_LINK, SIGNUP_LINK } from '../../routes/route';
import { TextInput, NumberInput, Select, PasswordInput, Checkbox, Anchor, Paper, Title, Text, Container, Group, Button } from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';
import { EMPLOYEE_BASE_URL, LOGIN_URL, MANAGER_BASE_URL } from '../../api/url';
import { errorNotification, loadingNotification, successNotification } from '../../components';
import { request } from '../../utils/baseAxios';
import { loginRequest } from '../../utils/authResquest';
import { useMutation, useQuery } from 'react-query';

// const loginRequest = credentials => {
//     return request({
//         url: '/generate-token',
//         method: 'post',
//         data: credentials
//     })
// }

export default function LoginPage({setisLoggedIn}) {
    const navigate = useNavigate();

    // const onSuccess = () => {
    //     console.log("success")
    // }
    // const onError = () => {
    //     console.log("Error");
    // }

    // const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    //     'auth-login',
    //     loginRequest,
    //     {
    //         onSuccess,
    //         onError,
    //         enabled: false,
    //     }
    // )
    const { isLoading, data, isError, error, isFetching, mutateAsync } = useMutation('auth-login', loginRequest)
    console.log(data)
    console.log(error)
    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        },
    });

    const formSubmit = values => {
        loadingNotification()
        console.log(values);
            mutateAsync({
                username: values.email,
                password: values.password
            })

        

        // if(values.authority === 'employee') {
        //     axios.post(EMPLOYEE_BASE_URL+LOGIN_URL, values)
        //     .then(res => {
        //         console.log(res)
        //         successNotification(res.data)
        //         setisLoggedIn({
        //             login: true,
        //             authority: 'employee'
        //         });
        //         // if(res.status === 200) {
        //         //     localStorage.setItem('isLoggedIn', true);
        //         //     localStorage.setItem('authority', 'employee')
        //         // }
        //         navigate(DASHBOARD_LINK);
        //     })
        //     .catch(err => {
        //         console.log(err)
        //         errorNotification(err.response.data || err.response.data.error || err.message)
        //     })
        // } else if(values.authority === 'admin') {
        //     axios.post(MANAGER_BASE_URL+LOGIN_URL, values)
        //     .then(res => {
        //         console.log(res)
        //         successNotification(res.data)
        //         setisLoggedIn({
        //             login: true,
        //             authority: 'admin'
        //         });
        //         // if(res.status === 200) {
        //         //     localStorage.setItem('isLoggedIn', true);
        //         //     localStorage.setItem('authority', 'admin')
        //         // }
        //         navigate(DASHBOARD_LINK);
        //     })
        //     .catch(err => {
        //         console.log(err)
        //         errorNotification(err.response.data || err.response.data.error || err.message)
        //     })
        // } else {
        //     errorNotification('Select any authority')
        // }
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