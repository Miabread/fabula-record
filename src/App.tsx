import classNames from 'classnames';
import { SourceTag } from './components';
import { coreArcanist } from './data/core/arcanist';

function App() {
    const Class = coreArcanist;
    return (
        <div className="flex h-screen w-screen text-white">
            <aside className="w-lg bg-slate-900 drop-shadow-md z-10 p-20">
                <SourceTag source="Core" />
                <SourceTag source="High" />
                <SourceTag source="Techno" />
                <SourceTag source="Natural" />
                <SourceTag source="Gmkit" />
                <SourceTag source="Bonus" />
            </aside>

            <main className="w-full bg-slate-800 p-10 overflow-y-auto">
                <div className="bg-slate-600 m-5 p-5 rounded-xl flex">
                    <h1 className="text-4xl font-bold ">{Class.name}</h1>
                    <SourceTag source={Class.source} page={Class.page} className="ml-auto" />
                </div>

                <div className="bg-slate-600 m-5 p-5 rounded-xl">
                    <div className="flex">
                        <h2 className="text-2xl font-bold">Skills</h2>
                        <SourceTag source={Class.source} page={Class.page + 1} className="ml-auto" />
                    </div>
                </div>

                {Class.skills.map((skill) => (
                    <div className="bg-slate-600 m-5 p-5 rounded-xl">
                        <h3 className="text-xl font-bold flex pb-2">
                            {skill.name}
                            <span className={classNames('ml-auto', { 'text-gray-400': skill.level == 1 })}>
                                【✦{skill.level}】
                            </span>
                        </h3>
                        {skill.description}
                    </div>
                ))}
            </main>

            <aside className="w-lg bg-slate-900 drop-shadow-md z-10 p-20">Right</aside>
        </div>
    );
}

export default App;
