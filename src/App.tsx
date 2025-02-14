function App() {
    return (
        <div className="flex h-screen w-screen">
            <aside className="w-lg bg-emerald-200 drop-shadow-md z-10 p-20">Left</aside>
            <main className="flex w-full bg-teal-200 p-20">Foobar</main>
            <aside className="w-lg bg-emerald-200 drop-shadow-md z-10 p-20">Right</aside>
        </div>
    );
}

export default App;
