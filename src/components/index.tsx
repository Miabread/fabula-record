import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { Source } from '../data';
import { bgColors, hoverBgColors, borderColors } from './colors';

export const P: FC<PropsWithChildren> = ({ children }) => <p className="my-3">{children}</p>;

export const B: FC<PropsWithChildren> = ({ children }) => <b>{children}</b>;

export const SourceTag: FC<{ source: Source; page?: number }> = ({ source, page }) => (
    <span className={classNames('text-black rounded-full px-2 py-1 m-1', bgColors[source])}>
        {source} {page ? `${page}` : ''}
    </span>
);

export const Heading: FC<PropsWithChildren<{ color: keyof typeof borderColors }>> = ({ color, children }) => (
    <h1
        className={classNames(
            'text-xl border-l-2 border-b-2 p-2 rounded-bl-xl mt-6 first:mt-0 mb-3 flex gap-2 items-center',
            borderColors[color],
        )}
    >
        {children}
    </h1>
);

export const Button: FC<PropsWithChildren<{ color: keyof typeof borderColors }>> = ({ color, children }) => (
    <span
        className={classNames(
            'flex border-2 p-2 px-3 rounded-xl gap-2 items-center hover:text-black',
            borderColors[color],
            hoverBgColors[color],
        )}
    >
        {children}
    </span>
);

export const ButtonRow: FC<PropsWithChildren> = ({ children }) => (
    <div className="flex text-lg gap-5 ml-5">{children}</div>
);
