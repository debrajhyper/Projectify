import { Center, Container, createStyles, Text } from '@mantine/core';

const useStyles = createStyles(theme => ({
    root: {
        display: 'flex',
        backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
        padding: theme.spacing.md * 1.5,
        borderRadius: theme.radius.md,
        position: 'absolute',

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    title: {
        color: theme.white,
        textTransform: 'uppercase',
        fontWeight: 600,
        fontSize: theme.fontSizes.sm,
    },

    count: {
        color: theme.white,
        fontSize: 32,
        lineHeight: 1,
        fontWeight: 800,
        marginBottom: theme.spacing.md,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },

    description: {
        color: theme.colors[theme.primaryColor][0],
        fontSize: theme.fontSizes.sm,
        marginTop: 5,
    },

    stat: {
        flex: 1,
        textAlign: 'left',

        '& + &': {
            paddingLeft: theme.spacing.md,
            marginLeft: theme.spacing.md,
            borderLeft: `1px solid ${theme.colors[theme.primaryColor][3]}`,

            [theme.fn.smallerThan('sm')]: {
                paddingLeft: 0,
                marginLeft: 0,
                borderLeft: 0,
                paddingTop: theme.spacing.xl,
                marginTop: theme.spacing.xl,
                borderTop: `1px solid ${theme.colors[theme.primaryColor][3]}`,
            },
        },
    },
}));

const data = [
    {
        title: "Active Projects",
        stats: "100+",
        description: "24% more than in the same month last year, 33% more that two years ago"
    },
    {
        title: "Employee",
        stats: "2,175+",
        description: "13% less compared to last month, new user engagement up by 6%"
    },
    {
        title: "HR",
        stats: "199+",
        description: "1994 orders were completed this month, 97% satisfaction rate"
    }
]

export default function GroupStats() {
    const { classes } = useStyles();

    const stats = data.map(stat => (
        <div key={stat.title} className={classes.stat}>
            <Text className={classes.count}>{stat.stats}</Text>
            <Text className={classes.title}>{stat.title}</Text>
            <Text className={classes.description}>{stat.description}</Text>
        </div>
    ));

    return (
        <Container className='md:mx-auto mx-5 px-0 md:mt-5 mt-56 relative z-10'>
            <Center>
                <div className={classes.root}>{stats}</div>
            </Center>
        </Container>
    );
}