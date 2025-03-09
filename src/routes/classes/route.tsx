import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Heading } from '../../components';
import { IconBriefcase } from '@tabler/icons-react';

export const Route = createFileRoute('/classes')({
    component: Classes,
});

function Classes() {
    return (
        <>
            <aside className="bg-section w-2xl mr-auto m-10 rounded-lg p-10">
                <Heading color="eleri">
                    <IconBriefcase /> Classes
                </Heading>
            </aside>
            <div className="bg-section w-full my-10 mx-30 rounded-lg p-10">
                <Outlet />
            </div>
        </>
    );
}
