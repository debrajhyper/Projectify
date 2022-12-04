import { Link } from 'react-router-dom';
import { PROJECTS_LINK } from '../../routes/route';
import HeaderMenuSub from './HeaderMenuSub';
import { createStyles, Group, Text, HoverCard, Anchor, Divider, SimpleGrid, Button } from '@mantine/core';

const useStyles = createStyles(theme => ({
    dropdownFooter: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0],
        margin: -theme.spacing.md,
        marginTop: theme.spacing.sm,
        padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
        paddingBottom: theme.spacing.xl,
        borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]}`,
    },
}));

const HeaderMenuDropdown = () => {
    const { classes, theme } = useStyles();

    return (
        <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
            <Group position="apart" px="md">
                <Text weight={500}>Top Projects Catagories</Text>
                <Anchor component={Link} to={PROJECTS_LINK} size="xs">View all</Anchor>
            </Group>
            <Divider my="sm" mx="-md" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}/>
            <SimpleGrid cols={2} spacing={0}>
                <HeaderMenuSub />
            </SimpleGrid>
            <div className={classes.dropdownFooter}>
                <Group position="apart">
                    <div>
                        <Text weight={500} size="sm">Get started</Text>
                        <Text size="xs" color="dimmed">Their food sources have decreased, and their numbers</Text>
                    </div>
                    <Button variant="outline">Get started</Button>
                </Group>
            </div>
        </HoverCard.Dropdown>
    )
}

export default HeaderMenuDropdown