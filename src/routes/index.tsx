import { createFileRoute, Link } from '@tanstack/react-router';
import {
    IconBallpen,
    IconBriefcase2,
    IconChartPie,
    IconComet,
    IconFileSearch,
    IconLibrary,
    IconMoon,
    IconSparkles,
    IconSun,
    IconSwords,
    IconUser,
} from '@tabler/icons-react';
import { Heading, ButtonRow, Button } from '../components';

export const Route = createFileRoute('/')({
    component: Index,
});

function Index() {
    return (
        <div className="bg-section w-full my-10 mx-30 rounded-lg p-10">
            <Heading color="eleri">
                <IconMoon /> Eleri's Guide of Distant Travels
            </Heading>
            <ButtonRow>
                <Link to="/classes">
                    <Button color="eleri">
                        <IconBriefcase2 /> Classes
                    </Button>{' '}
                </Link>
                <Button color="eleri">
                    <IconSparkles /> Heroic Skills
                </Button>
            </ButtonRow>

            <Heading color="zatari">
                <IconSun /> Zatari's Laws of Love and War
            </Heading>
            <ButtonRow>
                <Button color="zatari">
                    <IconSwords /> Equipment
                </Button>
                <Button color="zatari">
                    <IconUser /> NPC Skills
                </Button>
            </ButtonRow>

            <Heading color="fuji">
                <IconComet /> Fuji's Account of Twisted Fates
            </Heading>
            <ButtonRow>
                <Button color="fuji">
                    <IconBallpen /> Quirks
                </Button>
                <Button color="fuji">
                    <IconChartPie /> Zero Powers
                </Button>
            </ButtonRow>

            <Heading color="maria">
                <IconLibrary /> Maria's Bundle of Research Notes
            </Heading>
            <ButtonRow>
                <Button color="maria">
                    <IconFileSearch /> Glossary
                </Button>
            </ButtonRow>
        </div>
    );
}
