import { createFileRoute } from '@tanstack/react-router';
import { classes } from '../../data/classes';
import { B, Heading, P, SourceTag } from '../../components';
import { Fragment } from 'react/jsx-runtime';
import { NavigateDefaultClass } from '.';

export const Route = createFileRoute('/classes/$classId')({
    component: Class,
});

function Class() {
    const { classId } = Route.useParams();

    if (!(classId in classes)) {
        return <NavigateDefaultClass />;
    }

    const classData = classes[classId as keyof typeof classes];

    return (
        <>
            <Heading color="eleri">
                {classData.name} <SourceTag source={classData.source} page={classData.page} />
            </Heading>

            {classData.freeBenefits.increaseHP && <P>Permanently increase your maximum Hit Points by 5.</P>}
            {classData.freeBenefits.increaseMP && <P>Permanently increase your maximum Mind Points by 5.</P>}
            {classData.freeBenefits.increaseIP && <P>Permanently increase your maximum Inventory Points by 2.</P>}
            {classData.freeBenefits.increaseHPorMP && (
                <P>
                    Permanently increase your maximum Hit Points <B>or</B> Mind Points by 5 (your choice).
                </P>
            )}

            {classData.freeBenefits.ritualism && (
                <P>
                    You may perform Rituals whose effects fall within the <B>Ritualism</B> discipline.
                </P>
            )}
            {classData.freeBenefits.projects && (
                <P>
                    You may initiate <B>Projects</B>.
                </P>
            )}

            {classData.freeBenefits.martialMelee && (
                <P>
                    Gain the ability to equip <B>martial melee weapons</B>.
                </P>
            )}
            {classData.freeBenefits.martialRanged && (
                <P>
                    Gain the ability to equip <B>martial ranged weapons</B>.
                </P>
            )}
            {classData.freeBenefits.martialArmor && (
                <P>
                    Gain the ability to equip <B>martial armor</B>.
                </P>
            )}
            {classData.freeBenefits.martialShields && (
                <P>
                    Gain the ability to equip <B>martial shields</B>.
                </P>
            )}

            {classData.skills.map((skill) => (
                <Fragment key={skill.name}>
                    <Heading color="eleri">
                        {skill.name} {skill.level > 1 && <>【✦{skill.level}】</>}
                    </Heading>
                    {skill.description}
                </Fragment>
            ))}
        </>
    );
}
