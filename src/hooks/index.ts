import { useChildMatches } from '@tanstack/react-router';

const mainColors = {
    '/classes': 'eleri',
} as const;

export const useMainColor = () =>
    useChildMatches({
        select: (matches) => {
            for (const match of matches) {
                if (match.routeId in mainColors) {
                    return mainColors[match.routeId as keyof typeof mainColors];
                }
            }
        },
    }) ?? 'default';
