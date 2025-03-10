import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import { Heading, SourceTag } from '../../components';
import { IconBriefcase } from '@tabler/icons-react';
import { classes } from '../../data/classes';

export const Route = createFileRoute('/classes')({
    component: Classes,
});

function Classes() {
    return (
        <>
            <aside className="bg-section w-4xl mr-auto m-10 rounded-lg p-10 inset-shadow-xl">
                <Heading color="eleri">
                    <IconBriefcase /> Classes
                </Heading>
                <nav className="flex flex-col">
                    {Object.entries(classes).map(([classId, classData]) => (
                        <Link to="/classes/$classId" params={{ classId }}>
                            {classData.name} <SourceTag source={classData.source} page={classData.page} />
                        </Link>
                    ))}
                </nav>
            </aside>
            <div className="bg-section w-full m-10 rounded-lg p-10 overflow-y-auto inset-shadow-xl">
                <Outlet />
            </div>
        </>
    );
}
