import { Link } from 'react-router-dom';
import { BASE_PATH, EMPLOYEE_LINK, CONTACT_US_LINK, PROJECTS_LINK, LOGIN_LINK, SIGNUP_LINK, MANAGER_LINK } from '../../routes/route';
import NSElogo from '../../icon/NSE_Logo.svg';
import HeaderMenuDropdown from './HeaderMenuDropdown';
import HeaderMobileMenu from './HeaderMobileMenu';
import { useDisclosure } from '@mantine/hooks';
import { Image, createStyles, Header, HoverCard, Group, Button, Center, Box, Burger } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons';
// import ThemeToggle from './ThemeToggles';

const useStyles = createStyles(theme => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 500,
        fontSize: theme.fontSizes.sm,

        [theme.fn.smallerThan('sm')]: {
            height: 42,
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },

        ...theme.fn.hover({
            // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            color: theme.colors.violet[5]
        }),
    },

    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
}));

export default function HeaderMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const { classes, theme } = useStyles();

    return (
        <Box>

            <Header height={60} px="md" className='lg:px-10'>
                <Group position="apart" sx={{ height: '100%' }}>
                    <div style={{ width: 180 }}>
                        <Link to={BASE_PATH}>
                            <Image src={NSElogo} className='h-auto mx-auto' width={100} alt="logo" withPlaceholder />
                        </Link>
                    </div>

                    <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                        <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                            <HoverCard.Target>
                                <Link to={PROJECTS_LINK} className={classes.link}>
                                    <Center inline>
                                        <Box component="span" mr={5}>Projects</Box>
                                        <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                                    </Center>
                                </Link>
                            </HoverCard.Target>
                            <HeaderMenuDropdown />
                        </HoverCard>
                        <Link to={EMPLOYEE_LINK} className={classes.link}>Employee</Link>
                        <Link to={MANAGER_LINK} className={classes.link}>Manager</Link>
                        {/* <Link to={EVENTS_LINK} className={classes.link}>Events</Link> */}
                        <Link to={CONTACT_US_LINK} className={classes.link}>Contact Us</Link>
                    </Group>

                    <Group className={`${classes.hiddenMobile}`}>
                        {/* <ThemeToggle/> */}
                        <Button component={Link} to={LOGIN_LINK} variant="outline">Log in</Button>
                        <Button component={Link} to={SIGNUP_LINK} variant='filled'>Sign up</Button>
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop} />
                </Group>
            </Header>

            <HeaderMobileMenu drawerOpened={drawerOpened} closeDrawer={closeDrawer}/>
        </Box>
    );
}