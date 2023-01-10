import { Avatar, Flex, Card, Image, Text, Group, Badge, createStyles, Center, Button, ActionIcon } from '@mantine/core';
import { IconCurrencyRupee , IconComponents , IconBuildingArch , IconMapPin , IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons';
import img from '../../image/project/1.png';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.indigo[0],
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}));

const mockdata = [
  { label: '40 Employee', icon: IconUsers },
  { label: 'Think & corporation ltd.', icon: IconBuildingArch  },
  { label: 'Block Chain', icon: IconComponents  },
  { label: '20,000', icon: IconCurrencyRupee  },
];

export default function ProjectCard() {
  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size={18} className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <Card withBorder radius="md" className={`${classes.card} text-left`}>
      <Group>
        <div className='flex flex-row justify-between items-center w-full'>
          <Avatar src={img} />
          <Text fz='small' c="dimmed" className='created-date'>7 July 2020</Text>
        </div>
      </Group>
      <Group position="apart" mt="md">
        <div>
          <Text size='xl' weight={700} className='project-title'>UDX Delevery</Text>
          <Flex justify='start' align="center">
            <ActionIcon size='xs'><IconMapPin /></ActionIcon>
            <Text size="xs" color="dimmed">London,UK</Text>
          </Flex>
        </div>
        <Badge variant="outline">20 applied</Badge>
      </Group>

      <Card.Section className={classes.section} mt="md">
        <Text size="sm" color="dimmed" className={classes.label}>
          Basic Information
        </Text>

        <Group spacing={10} mb={-8}>
          {features}
        </Group>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Group grow>
          <Button radius="xl" style={{ flex: 1 }}>
            Apply now
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}