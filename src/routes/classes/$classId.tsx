import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/classes/$classId')({
    component: Class,
});

function Class() {
    return <div>Hello "/classes/$class"!</div>;
}
