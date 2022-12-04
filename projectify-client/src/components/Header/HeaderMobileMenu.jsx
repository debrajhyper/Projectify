import { Link } from "react-router-dom";
import { EMPLOYEE_LINK, CONTACT_US_LINK, LOGIN_LINK, SIGNUP_LINK, MANAGER_LINK } from '../../routes/route';
import HeaderMenuSub from "./HeaderMenuSub";
import { useDisclosure } from '@mantine/hooks';
import { createStyles, Drawer, ScrollArea, Divider, UnstyledButton, Center, Box, Collapse, Group, Button } from "@mantine/core";
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
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        }),
    },

    hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
}));

const HeaderMobileMenu = ({drawerOpened, closeDrawer}) => {
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const { classes, theme } = useStyles();

    return (
        <Drawer opened={drawerOpened} onClose={closeDrawer} className={classes.hiddenDesktop} title="Menu" size="100%" padding="md" zIndex={1000000}>
            <ScrollArea sx={{ height: 'calc(100vh - 60px)' }} mx="-md">
                
                <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />
                <UnstyledButton className={classes.link} onClick={toggleLinks}>
                    <Center inline>
                        <Box component="span" mr={5}>Projects</Box>
                        <IconChevronDown size={16} color={theme.fn.primaryColor()} />
                    </Center>
                </UnstyledButton>
                <Collapse in={linksOpened}><HeaderMenuSub /></Collapse>
                <Link to={EMPLOYEE_LINK} className={classes.link}>Employee</Link>
                <Link to={MANAGER_LINK} className={classes.link}>Manager</Link>
                {/* <Link to={EVENTS_LINK} className={classes.link}>Events</Link> */}
                <Link to={CONTACT_US_LINK} className={classes.link}>Contact Us</Link>
                <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'} />

                <Group position="center" grow pb="xl" px="md">
                    {/* <ThemeToggle/> */}
                    <Button component={Link} to={LOGIN_LINK} variant="outline">Log in</Button>
                    <Button component={Link} to={SIGNUP_LINK} variant='filled'>Sign up</Button>
                </Group>
            </ScrollArea>
        </Drawer>
    )
}

export default HeaderMobileMenu;