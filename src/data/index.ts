export type Source = 'Core' | 'High' | 'Techno' | 'Natural' | 'Gmkit' | 'Bonus';

export interface Class {
    source: Source;
    page: number;
    name: string;
    freeBenefits: FreeBenefits;
    skills: Skill[];
}

export interface FreeBenefits {
    increaseHP?: boolean;
    increaseMP?: boolean;
    increaseIP?: boolean;
    increaseHPorMP?: boolean;

    ritualism?: boolean;
    projects?: boolean;

    martialMelee?: boolean;
    martialRanged?: boolean;
    martialArmor?: boolean;
    martialShields?: boolean;
}

export interface Skill {
    name: string;
    level: number;
    description: JSX.Element;
}
