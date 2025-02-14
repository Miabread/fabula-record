export type Source = 'core' | 'high' | 'techno' | 'nature' | 'gmkit' | 'bonus';

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
}

export interface Skill {
    name: string;
    level: number;
    description: string[];
}
