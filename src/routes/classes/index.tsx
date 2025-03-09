import { createFileRoute, Navigate } from '@tanstack/react-router';
import { defaultClass } from '../../data/classes';

export const Route = createFileRoute('/classes/')({
    component: Index,
});

function Index() {
    return <Navigate to="/classes/$classId" params={{ classId: defaultClass }} />;
}
