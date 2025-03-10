import { createFileRoute, Link } from '@tanstack/react-router';
import { IconBriefcase2, IconComet, IconMoon, IconSun } from '@tabler/icons-react';
import { Heading, ButtonRow, Button } from '../components';

export const Route = createFileRoute('/')({
    component: Index,
});

function Index() {
    return (
        <div className="bg-section w-full my-10 mx-30 rounded-lg p-10 inset-shadow-xl">
            <Heading color="eleri">
                <IconMoon /> Eleri's Stories of Far Travels
            </Heading>
            <ButtonRow>
                <Link to="/classes">
                    <Button color="eleri">
                        <IconBriefcase2 /> Classes
                    </Button>
                </Link>
            </ButtonRow>

            <Heading color="zatari">
                <IconSun /> Zatari's Laws of Love and War
            </Heading>

            <Heading color="fuji">
                <IconComet /> Fuji's Account of Twisted Fates
            </Heading>
        </div>
    );
}
