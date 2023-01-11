import axios from "axios";
import { useEffect, useState } from "react"
// import { EMPLOYEE_BASE_URL } from "../../api/url";
import { errorNotification, loadingNotification, successNotification } from "../../components";
import { Container, Grid, Divider, Checkbox, Select, SimpleGrid, Text, Skeleton, useMantineTheme, Flex, Image, Center } from '@mantine/core';
import { EmployeeCard } from "../../components";

const EmployeePage = () => {
  const [employee, seEmployee] = useState([]);

  // useEffect(() => {
  //   loadingNotification()
  //   axios.get(`${EMPLOYEE_BASE_URL}/`)
  //   .then(res => {
  //     console.log(res.data.data)
  //     seEmployee(res.data.data)
  //     successNotification(res.data.message)
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     errorNotification(err.message)
  //   })

  // }, [])
  
  return (
    <Center>
    <Container size="lg" my="lg" mx='lg' py='lg' px='lg'>
      <Grid gutter="md" grow>
        <Grid.Col>
          <Flex justify='space-between'>
            <Text fz={20} fw={700} color="dimmed">Results {employee?.length || 0}</Text>
          </Flex>
          <SimpleGrid cols={4} spacing="xl" py={30}>
            {
              employee.map(emp => {
                const { employeeId, employeeFirstName, employeeLastName, employeeSkills, employeeDoj, employeeContact, empProfilePhotoUrl } = emp;
                return <EmployeeCard 
                          key={employeeId} 
                          eId={employeeId}
                          fName={employeeFirstName} 
                          lName={employeeLastName} 
                          skills={employeeSkills}
                          doj={employeeDoj}
                          contactNo={employeeContact}
                          profilePic={empProfilePhotoUrl}
                        />
              })
            }
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Container>
  </Center>
  )
}

export default EmployeePage