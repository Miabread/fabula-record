import { IconLibrary, IconPin } from '@tabler/icons-react';
import { createRootRoute, Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
    component: () => (
        <div className="text-white bg-section h-screen flex flex-col">
            <div className="w-screen h-15 flex items-center mx-10">
                <h1 className="text-xl flex gap-2 items-center">
                    <IconLibrary /> Maria's Compendium of Fabulous Records
                </h1>
            </div>
            <div className="flex h-full bg-main rounded-t-xl">
                <div className="bg-section w-full my-10 mx-30 rounded-lg p-10">
                    <Outlet />
                </div>
                <aside className="bg-section w-2xl ml-auto m-10 rounded-lg p-10">
                    <h1 className="text-xl border-l-2 border-b-2 border-white p-2 rounded-bl-xl mb-10 flex gap-2 items-center">
                        <IconPin /> Quick Access
                    </h1>
                </aside>
            </div>
        </div>
    ),
});
