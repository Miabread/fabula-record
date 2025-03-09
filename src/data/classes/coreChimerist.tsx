import { Class } from '..';
import { B, P } from '../../components';

export const coreChimerist: Class = {
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
                    After you deal damage to one or more creatures with a spell, if you have an <B>arcane</B>,
                    <B>dagger</B> or <B>flail</B> weapon equipped, you recover <B>【SL × 2】</B> Mind Points.
                </P>
            ),
        },
    ],
};
