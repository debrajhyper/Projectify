import { Avatar, Text, Button, Paper } from '@mantine/core';
import { Link } from 'react-router-dom';
import { EMPLOYEE_LINK } from '../../routes/route';
const EmployeeCard = ({fName, eId, lName, skills, ContactNo, profilePic}) => {
    return (
        <Paper
            radius="md"
            withBorder
            p="lg"
            sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.indigo[0],
            })}
        >
            <Avatar src={profilePic} size={100} radius={100} mx="auto" variant="outline" color="violet">{`${fName.charAt(0).toUpperCase()}${lName.charAt(0).toUpperCase()}`}</Avatar>
            <Text align="center" size="lg" weight={500} mt="md">
                {`${fName} ${lName}`}
            </Text>
            <Text align="center" color="dimmed" size="sm">
                {ContactNo || 'Contact Number'}
            </Text>
            <Text align="center" color="dimmed" size="sm">
                {skills?.length || 'No Available Skills'}
            </Text>

            <Button component={Link} to={`${EMPLOYEE_LINK}/${eId}`} fullWidth mt="md" radius="xl">
                View Employee
            </Button>
        </Paper>
    )
}

export default EmployeeCard