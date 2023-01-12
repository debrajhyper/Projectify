import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BASE_PATH, CONTACT_US_PATH, EMPLOYEE_PATH, MANAGER_PATH, LOGIN_PATH, PROJECTS_PATH, SIGNUP_PATH, DASHBOARD_PATH, NO_MATCH_PATH, FORGOT_PASSWORD_PATH, SIGNUP_LINK, LOGIN_LINK, EMPLOYEE_DETAILS_PATH, UNAUTHORIZED_PATH, ADMIN_DASHBOARD_PATH, MANAGER_DASHBOARD_PATH, EMPLOYEE_DASHBOARD_PATH, ADD_MANAGER_LINK, ADD_EMPLOYEE_LINK, ADD_SKILL_PATH, ADD_EMPLOYEE_PATH, ADD_MANAGER_PATH } from '../routes/route';
import './App.css';
import { Footer, HeaderMenu } from '../components';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { UnauthorizedPage, Layout, RequireAuthPage, NoMatchFoundPage, HomePage, ProjectsPage, ManagerPage, EmployeePage, ContactUsPage, LoginPage, SignupPage, ForgotPasswordPage, DashboardPage, AdminDashboardPage, ManagerDashboardPage, EmployeeDashboardPage, AddManagerPage, AddEmployeePage, AddSkillPage } from '../pages';
import { NotificationsProvider } from '@mantine/notifications';
import EmployeeDetailsPage from '../pages/public/EmployeeDetailsPage';
// import UnauthorizedPage from '../pages/UnauthorizedPage';

const queryClient = new QueryClient();

const ROLES = [
  { authority: 'ADMIN' },
  { authority: 'MANAGER' },
  { authority: 'EMPLOYEE' }
]

function App() {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = value => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  const location = useLocation();
  const [isLoggedIn, setisLoggedIn] = useState();

  return (
    <QueryClientProvider client={queryClient}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider withCSSVariables withGlobalStyles withNormalizeCSS
          theme={{
            colorScheme,
            dir: 'ltr',
            cursorType: 'pointer',
            // fontFamily: 'Roboto', 
            primaryColor: 'violet',
            activeStyles: {
              transform: 'scale(0.95)'
            },
            components: {
              Button: {
                styles: {
                  root: {

                  }
                }
              }
            }
          }}>
          <NotificationsProvider position="bottom-center" autoClose={2000} zIndex={2077}>
            <div className="App">
              <HeaderMenu isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />
              <Routes>
                <Route path={BASE_PATH} element={<Layout />}>
                  <Route path={BASE_PATH} element={<HomePage />} />
                  <Route path={PROJECTS_PATH} element={<ProjectsPage />} />
                  <Route path={MANAGER_PATH} element={<ManagerPage />} />
                  <Route path={EMPLOYEE_PATH} element={<EmployeePage />} />
                  <Route path={EMPLOYEE_DETAILS_PATH} element={<EmployeeDetailsPage />} />
                  <Route path={CONTACT_US_PATH} element={<ContactUsPage />} />
                  <Route path={LOGIN_PATH} element={<LoginPage setisLoggedIn={setisLoggedIn} />} />
                  <Route path={SIGNUP_PATH} element={<SignupPage />} />
                  <Route path={FORGOT_PASSWORD_PATH} element={<ForgotPasswordPage />} />
                  <Route path={UNAUTHORIZED_PATH} element={<UnauthorizedPage/>}/>

                  <Route element={<RequireAuthPage allowedRoles={[ROLES[0].authority]} />}>
                    <Route path={ADMIN_DASHBOARD_PATH} element={<AdminDashboardPage/>} />
                    <Route path={ADD_MANAGER_PATH} element={<AddManagerPage/> }/>
                    <Route path={ADD_EMPLOYEE_PATH} element={<AddEmployeePage/>}/>
                    <Route path={ADD_SKILL_PATH} element={<AddSkillPage/>}/>
                  </Route>

                  <Route element={<RequireAuthPage allowedRoles={[ROLES[1].authority]} />}>
                    <Route path={MANAGER_DASHBOARD_PATH} element={<ManagerDashboardPage/>} />
                  </Route>

                  <Route element={<RequireAuthPage allowedRoles={[ROLES[2].authority]} />}>
                    <Route path={EMPLOYEE_DASHBOARD_PATH} element={<EmployeeDashboardPage/>} />
                  </Route>

                  <Route path={NO_MATCH_PATH} element={<NoMatchFoundPage />} />
                </Route>
              </Routes>
              {
                !location.pathname.includes(SIGNUP_LINK) && !location.pathname.includes(LOGIN_LINK) ? <Footer /> : null
              }
            </div>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;
