import { Class } from '..';

export const coreArcanist: Class = {
    source: 'core',
    page: 117,
    name: 'arcanist',
    freeBenefits: {
        increaseMP: true,
    },
    skills: [
        {
            name: 'Arcane Circle',
            level: 4,
            description: [
                `After you willingly dismiss an Arcanum on your turn during a conflict (see next page), if
that Arcanum had not been summoned during this same turn and you have an arcane
weapon equipped, you may immediately perform the Spell action for free. The spell
you cast this way must have a total Mind Point cost of 【SL × 5】or lower (you must
still pay the spell's MP cost).`,
            ],
        },
    ],
};
