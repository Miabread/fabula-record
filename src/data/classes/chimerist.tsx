import { Class } from '..';
import { B, P } from '../../components';

export const chimerist: Class = {
    source: 'Core',
    page: 182,
    name: 'Chimerist',
    freeBenefits: {
        increaseMP: true,
        ritualism: true,
    },
    skills: [
        {
            name: 'Consume',
            level: 5,
            description: (
                <P>
                    After you deal damage to one or more creatures with a spell, if you have an <B>arcane</B>,{' '}
                    <B>dagger</B> or <B>flail</B> weapon equipped, you recover<B>【SL × 2】</B>Mind Points.
                </P>
            ),
        },
        {
            name: 'Feral Speech',
            level: 1,
            description: (
                <P>
                    You can communicate with creatures of the <B>beast</B>, <B>monster</B> and <B>plant</B> Species.
                </P>
            ),
        },
        {
            name: 'Pathogenesis',
            level: 1,
            description: (
                <P>
                    When you deal damage to one or more creatures with one of your Chimerist spells, each of those
                    creatures that share their <B>Species</B> with the creature you originally learned that spell from
                    suffers <B>poisoned</B>.
                </P>
            ),
        },
        {
            name: 'Ritual Chimerism',
            level: 1,
            description: (
                <>
                    <P>
                        You may perform Rituals whose effects fall within the <B>Chimerism</B> discipline.
                    </P>
                    <P>
                        When you acquire this Skill, choose<B>【INS + WLP】</B>or<B>【MIG + WLP】</B>. From now on, your
                        Chimerism Rituals will use the chosen Attributes for the Magic Check.
                    </P>
                </>
            ),
        },
        {
            name: 'Spell Mimic',
            level: 10,
            description: (
                <>
                    <P>
                        When you see a creature belonging to the <B>beast</B>, <B>monster</B> or <B>plant</B> Species
                        cast a spell, you may immediately choose to learn that spell as a Chimerist spell of your own:
                        if you do, record the <B>Species</B> of the creature you learned it from.
                    </P>
                    <P>
                        When you first acquire this Skill, choose<B>【INS + WLP】</B>or<B>【MIG + WLP】</B>. From now
                        on, your offensive Chimerist spells will use the chosen Attributes for the Magic Check,
                        regardless of the Attributes used by the creature you learned the spell from.
                    </P>
                    <P>
                        You may have <B>up to【SL + 2】different Chimerist spells</B> memorized this way. If you want to
                        memorize a new Chimerist spell but are already at your limit, you must forget one of your old
                        spells and replace it with the new spell.
                    </P>
                </>
            ),
        },
    ],
};
