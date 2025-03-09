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
    ritualism?: boolean;
}

export interface Skill {
    name: string;
    level: number;
    description: JSX.Element;
}
