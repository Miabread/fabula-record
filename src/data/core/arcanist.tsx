import { Class } from '..';
import { B, P } from '../../components';

export const coreArcanist: Class = {
    source: 'Core',
    page: 116,
    name: 'Arcanist',
    freeBenefits: {
        increaseMP: true,
    },
    skills: [
        {
            name: 'Arcane Circle',
            level: 4,
            description: (
                <P>
                    After you willingly <B>dismiss</B> an Arcanum on your turn during a conflict (see next page), if
                    that Arcanum had not been <B>summoned</B> during this same turn and you have an <B>arcane</B> weapon
                    equipped, you may immediately perform the <B>Spell</B> action for free. The spell you cast this way
                    must have a <B>total Mind Point cost of 【SL × 5】or lower</B> (you must still pay the spell's MP
                    cost).
                </P>
            ),
        },
        {
            name: 'Arcane Regeneration',
            level: 2,
            description: (
                <P>
                    When you summon an Arcanum, you immediately recover <B>【SL × 5】</B> Hit Points.
                </P>
            ),
        },
        {
            name: 'Bind and Summon',
            level: 1,
            description: (
                <>
                    <P>
                        You may <B>bind</B> Arcana to your soul and <B>summon</B> them later. The Game Master will tell
                        you the details of each binding process when you first encounter the Arcanum in question.
                    </P>
                    <P>
                        You may use an action and spend 40 Mind Points to <B>summon</B> an Arcanum you have bound: the
                        details of this process are explained on the next page.
                    </P>
                    <P>
                        If you take this Skill at character creation, you begin play with one Arcanum of your choice
                        already bound to you, chosen from the list on the next pages. Other than that, you may only
                        obtain new Arcana through exploration and story progression.
                    </P>
                </>
            ),
        },
        {
            name: 'Emergency Arcanum',
            level: 6,
            description: (
                <P>
                    As long as you are in <B>Crisis</B>, the cost for summoning your Arcana is reduced by
                    <B>【SL × 5】</B> Mind Points.
                </P>
            ),
        },
        {
            name: 'Ritual Arcanism',
            level: 1,
            description: (
                <>
                    <P>
                        You may perform Rituals of the Arcanism discipline, as long as their effects fall within the
                        domains of one or more Arcana you have bound (see next pages).
                    </P>
                    <P>
                        Arcanism Rituals use <B>【WLP + WLP】</B> for the Magic Check.
                    </P>
                </>
            ),
        },
    ],
};
