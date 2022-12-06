import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { EMPLOYEE_BASE_URL } from '../../api/url';
import axios from 'axios';
import { errorNotification, loadingNotification, successNotification } from '../../components';
import { Avatar, Text, Button, Paper, Center } from '@mantine/core';

const EmployeeDetailsPage = () => {
    const [employee, setEmployee] = useState({});
    const { eId } = useParams();

    useEffect(() => {
        loadingNotification()
        axios.get(`${EMPLOYEE_BASE_URL}/${eId}`)
        .then(res => {
            console.log(res.data.data);
            setEmployee(res.data.data)
            successNotification(res.data.message)
        })
        .catch(err => {
            console.log(err);
            errorNotification(err.response.data.message || err.message)
        })

    }, [])
    
    const { empProfilePhotoUrl, employeeContact, employeeCurrentProjects, employeeDoj, employeeEducations, employeeExperiences, employeeFirstName, employeeLastName, employeeGender, employeeProjectApplications, employeeSkills } = employee;
    return (
        <Center mt='xl' pt='xl'>
        <Paper
            radius="md"
            withBorder
            p="lg"
            sx={(theme) => ({
                backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.indigo[0],
            })}
        >
            <Avatar src={empProfilePhotoUrl} size={100} radius={100} mx="auto" variant="outline" color="violet">{`${employeeFirstName?.charAt(0).toUpperCase()}${employeeLastName?.charAt(0).toUpperCase()}`}</Avatar>
            <Text align="center" size="lg" weight={500} mt="md">
                {`${employeeFirstName} ${employeeLastName}`}
            </Text>
            <Text align="center" color="dimmed" size="sm">
                {employeeContact || 'Contact Number'}
            </Text>
            <Text align="center" color="dimmed" size="sm">
                {employeeSkills?.length || 'No Available Skills'}
            </Text>
            <Text align="center" color="dimmed" size="sm">
                {employeeDoj || ''}
            </Text>
            <Text align="center" color="dimmed" size="sm">
                {employeeCurrentProjects || ''}
            </Text>
            <Text align="center" color="dimmed" size="sm">
                {employeeEducations || ''}
            </Text>
            <Text align="center" color="dimmed" size="sm">
                {employeeExperiences || ''}
            </Text>
            <Text align="center" color="dimmed" size="sm">
                {employeeGender || ''}
            </Text>
            <Text align="center" color="dimmed" size="sm">
                {employeeProjectApplications || ''}
            </Text>

            {/* <Button component={Link} to={`${EMPLOYEE_LINK}/${eId}`} fullWidth mt="md" radius="xl">
                View Employee
            </Button> */}
        </Paper>
        </Center>
    )
}

export default EmployeeDetailsPage