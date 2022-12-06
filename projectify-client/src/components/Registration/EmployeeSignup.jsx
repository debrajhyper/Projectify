import { Link } from "react-router-dom";
import { BASE_PATH } from "../../routes/route";
import PasswordRequirementInput from "../Form/PasswordRequirementInput";
import { useForm } from '@mantine/form';
import { Select, FileInput, Group, TextInput, Anchor, Button, Text } from "@mantine/core";
import { IconUpload } from '@tabler/icons';
import axios from "axios";
import { EMPLOYEE_BASE_URL, REGISTER_URL } from "../../api/url";
import { loadingNotification, successNotification,errorNotification } from "../Notification/Notification";

const EmployeeSignup = () => {
    const employeeSignupForm = useForm({
        initialValues: {
            employeeFirstName: '',
            employeeLastName: '',
            employeePassword: '',
            empProfilePhotoUrl: 'profileURL',
            employeeGender: '',
        },

        validate: {
            employeeFirstName: value => (value?.length < 2 ? 'First Name must have at least 2 letters' : null),
            employeeLastName: value => (value?.length < 2 ? 'Last Name must have at least 2 letters' : null),
        },
    });

    const formSubmit = values => {
        console.log(values)
        loadingNotification()
        axios.post(EMPLOYEE_BASE_URL+REGISTER_URL, values)
        .then(res => {
            console.log(res)
            successNotification(res.data.message)
        })
        .catch(err => {
            console.log(err)
            errorNotification(err.response.data || err.response.data.error || err.message)
        })
    }

    return (
        <div>
            <form onSubmit={employeeSignupForm.onSubmit(values => formSubmit(values))}>
                <Group mt="md" grow>
                    {/* <FileInput
                        placeholder="Pick file"
                        label="Profile Picture"
                        accept="image/png,image/jpeg"
                        radius="xl"
                        icon={<IconUpload size={14} />}
                        {...employeeSignupForm.getInputProps('empProfilePhotoUrl')}
                        withAsterisk
                    /> */}
                    <Select
                        transition="pop-top-left"
                        transitionDuration={80}
                        transitionTimingFunction="ease"
                        label="Gender"
                        placeholder="Select one"
                        data={[
                            { value: 'male', label: 'Male' },
                            { value: 'female', label: 'Female' },
                            { value: 'other', label: 'Other' },
                        ]}
                        {...employeeSignupForm.getInputProps('employeeGender')}
                        required
                    />
                </Group>
                <TextInput label="First Name" placeholder="Your First Name" {...employeeSignupForm.getInputProps('employeeFirstName')} required mt="md"/>
                <TextInput label="Last Name" placeholder="Your Last Name" {...employeeSignupForm.getInputProps('employeeLastName')} required mt="md"/>
                <PasswordRequirementInput label="Password" placeholder="Your password" formValue={{...employeeSignupForm.getInputProps('employeePassword')}} required={true} mt="md" />

                <Button type="submit" fullWidth mt='xl' className='mt-10'>Create employee account</Button>

                <Text size='xs' mt='md' ta='center' lh='.5'>
                    By signing up, you are creating a Projectify account, and you agree to Projectify {' '}
                    <Anchor component={Link} to={BASE_PATH} size="sm">Terms of Use</Anchor>
                    {' '} and {' '}
                    <Anchor component={Link} to={BASE_PATH} size="sm">Privacy Policy.</Anchor>
                </Text>
            </form>
        </div>
    )
}

export default EmployeeSignup