import { Link } from "react-router-dom";
import { BASE_PATH } from "../../routes/route";
import PasswordRequirementInput from "../Form/PasswordRequirementInput";
import { useForm } from '@mantine/form';
import { TextInput, Anchor, Button, Text } from "@mantine/core";

const ManagerSignup = () => {
  const managerSignupForm = useForm({
    initialValues: {
        email: '',
        termsOfService: false,
    },

    validate: {
        email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
});

  return (
    <div>
      <TextInput label="Full Name" placeholder="you" required />
      <TextInput label="Email" placeholder="you@nseit.com" required mt="md" />
      <PasswordRequirementInput label="Password" placeholder="Your password" required={true} mt="md" />

      <Button fullWidth mt='xl' className='mt-10'>Create manager account</Button>

      <Text size='xs' mt='md' ta='center' lh='.5'>
          By signing up, you are creating a Projectify account, and you agree to Projectify {' '}
          <Anchor component={Link} to={BASE_PATH} size="sm">Terms of Use</Anchor>
          {' '} and {' '}
          <Anchor component={Link} to={BASE_PATH} size="sm">Privacy Policy.</Anchor>
      </Text>
    </div>
  )
}

export default ManagerSignup