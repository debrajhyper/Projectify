import { Link } from "react-router-dom";
import { BASE_PATH } from "../../routes/route";
import PasswordRequirementInput from "../Form/PasswordRequirementInput";
import { useForm } from '@mantine/form';
import { TextInput, Anchor, Button, Text, NumberInput } from "@mantine/core";
import axios from "axios";
import { MANAGER_BASE_URL } from "../../api/url";
import { loadingNotification, successNotification,errorNotification } from "../Notification/Notification";

const ManagerSignup = () => {
  const managerSignupForm = useForm({
    initialValues: {
      adminFirstName: '',
      adminLastName: '',
      adminPhoneNum: '',
      adminEmailId: '',
      adminPassword: '',
    },

    validate: {
      adminFirstName: value => (value?.length < 2 ? 'First Name must have at least 2 letters' : null),
      adminLastName: value => (value?.length < 2 ? 'Last Name must have at least 2 letters' : null),
      adminEmailId: value => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const formSubmit = values => {
    console.log(values)
    loadingNotification()
    axios.post(MANAGER_BASE_URL, values)
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
      <form onSubmit={managerSignupForm.onSubmit(values => formSubmit(values))}>
        <TextInput label="First Name" placeholder="Your First Name" {...managerSignupForm.getInputProps('adminFirstName')} required mt="md"/>
        <TextInput label="Last Name" placeholder="Your Last Name" {...managerSignupForm.getInputProps('adminLastName')} required mt="md"/>
        <NumberInput label="Phone Number" placeholder="Your Phone Number" min={0} {...managerSignupForm.getInputProps('adminPhoneNum')} hideControls required mt="md"/>
        <TextInput label="Email" placeholder="Your Email Id" {...managerSignupForm.getInputProps('adminEmailId')} required mt="md" />
        <PasswordRequirementInput label="Password" placeholder="Your password" formValue={{...managerSignupForm.getInputProps('adminPassword')}} required mt="md" />

        <Button type="submit" fullWidth mt='xl' className='mt-10'>Create manager account</Button>

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

export default ManagerSignup