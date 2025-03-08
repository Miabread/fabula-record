import { createFileRoute } from '@tanstack/react-router';
import {
    IconBallpen,
    IconBriefcase2,
    IconChartPie,
    IconMoon,
    IconSparkles,
    IconStar,
    IconSun,
    IconSwords,
    IconUser,
} from '@tabler/icons-react';

export const Route = createFileRoute('/')({
    component: Index,
});

function Index() {
    return (
        <>
            <h1 className="text-xl border-l-2 border-b-2 border-green-300 p-2 rounded-bl-xl mb-10 flex gap-2 items-center">
                <IconMoon /> Eleri's Guide of Distant Travels
            </h1>
            <div className="flex text-lg gap-5 ml-5">
                <a className="flex border-2 border-green-300 p-2 px-3 rounded-xl gap-2 items-center">
                    <IconBriefcase2 /> Classes
                </a>
                <a className="flex border-2 border-green-300 p-2 px-3 rounded-xl gap-2 items-center">
                    <IconSparkles /> Heroic Skills
                </a>
            </div>

            <h1 className="text-xl border-l-2 border-b-2 border-red-300 p-2 rounded-bl-xl mt-15 mb-10 flex gap-2 items-center">
                <IconStar /> Fuji's Account of Twisted Fates
            </h1>
            <div className="flex text-lg gap-5 ml-5">
                <a className="flex border-2 border-red-300 p-2 px-3 rounded-xl gap-2 items-center">
                    <IconBallpen /> Quirks
                </a>
                <a className="flex border-2 border-red-300 p-2 px-3 rounded-xl gap-2 items-center">
                    <IconChartPie /> Zero Powers
                </a>
            </div>

            <h1 className="text-xl border-l-2 border-b-2 border-purple-300 p-2 rounded-bl-xl mt-15 mb-10 flex gap-2 items-center">
                <IconSun /> Zatari's Laws of Love and War
            </h1>
            <div className="flex text-lg gap-5 ml-5">
                <a className="flex border-2 border-purple-300 p-2 px-3 rounded-xl gap-2 items-center">
                    <IconSwords /> Equipment
                </a>
                <a className="flex border-2 border-purple-300 p-2 px-3 rounded-xl gap-2 items-center">
                    <IconUser /> NPC Skills
                </a>
            </div>
        </>
    );
}

export default Index;
