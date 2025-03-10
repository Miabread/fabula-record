import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import { Heading } from '../../components';
import { IconBriefcase } from '@tabler/icons-react';
import { classes } from '../../data/classes';

export const Route = createFileRoute('/classes')({
    component: Classes,
});

function Classes() {
    return (
        <>
            <aside className="bg-section w-2xl mr-auto m-10 rounded-lg p-10 inset-shadow-xl">
                <Heading color="eleri">
                    <IconBriefcase /> Classes
                </Heading>
                <nav className="flex flex-col">
                    {Object.entries(classes).map(([classId, classData]) => (
                        <Link to="/classes/$classId" params={{ classId }}>
                            {classData.name}
                        </Link>
                    ))}
                </nav>
            </aside>
            <div className="bg-section w-full my-10 mx-30 rounded-lg p-10 overflow-y-auto inset-shadow-xl">
                <Outlet />
            </div>
        </>
    );
}
