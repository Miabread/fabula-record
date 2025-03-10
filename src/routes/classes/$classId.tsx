import { createFileRoute, Navigate } from '@tanstack/react-router';
import { classes, defaultClass } from '../../data/classes';
import { B, Heading, P } from '../../components';

export const Route = createFileRoute('/classes/$classId')({
    component: Class,
});

function Class() {
    const { classId } = Route.useParams();

    if (!(classId in classes)) {
        return <Navigate to="/classes/$classId" params={{ classId: defaultClass }} />;
    }

    const classData = classes[classId as keyof typeof classes];

    return (
        <>
            <Heading color="eleri">{classData.name}</Heading>
            {classData.freeBenefits.increaseMP && <P>Permanently increase your maximum Mind Points by 5.</P>}
            {classData.freeBenefits.ritualism && (
                <P>
                    You may perform Rituals whose effects fall within the <B>Ritualism</B> discipline.
                </P>
            )}
            {classData.skills.map((skill) => (
                <>
                    <Heading color="eleri">
                        {skill.name} {skill.level > 1 && <>【✦{skill.level}】</>}
                    </Heading>
                    {skill.description}
                </>
            ))}
        </>
    );
}
