import { IconLibrary, IconPin } from '@tabler/icons-react';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { Heading } from '../components';
import { useMainColor } from '../hooks';
// import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
    component: Root,
});

function Root() {
    const mainColor = useMainColor();
    return (
        <div className="text-white bg-section min-h-screen w-screen flex flex-col">
            <div className="w-full h-15 flex items-center px-10">
                <Link to="/">
                    <h1 className="text-xl flex gap-2 items-center">
                        <IconLibrary /> Maria's Compendium of Fabulous Records
                    </h1>
                </Link>
            </div>
            <div className="grow flex bg-main rounded-xl shadow-xl">
                <Outlet />
                <aside className="bg-section w-4xl ml-auto m-10 rounded-lg p-10 inset-shadow-xl">
                    <Heading color={mainColor}>
                        <IconPin />
                        Quick Access
                    </Heading>
                </aside>
            </div>
            <div className="w-full h-15 flex items-center px-10">Footer</div>
        </div>
    );
}
