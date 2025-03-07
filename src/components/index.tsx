import { FC, PropsWithChildren } from 'react';
import classNames from 'classnames';
import { Source } from '../data';

export const P: FC<PropsWithChildren> = ({ children }) => <p className="py-1">{children}</p>;

export const B: FC<PropsWithChildren> = ({ children }) => <b>{children}</b>;

const sourceColors: Record<Source, string> = {
    Core: 'bg-green-300',
    High: 'bg-red-300',
    Techno: 'bg-blue-300',
    Natural: 'bg-yellow-300',
    Gmkit: 'bg-orange-300',
    Bonus: 'bg-purple-300',
};

export const SourceTag: FC<{ source: Source; page?: number; className?: string }> = ({ source, page, className }) => (
    <span className={classNames('text-black rounded-full px-2 py-1 m-1', sourceColors[source], className)}>
        {source} {page ? `p.${page}` : ''}
    </span>
);
