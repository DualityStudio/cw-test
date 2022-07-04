import { useState } from 'react';

function App() {
    const [clicked, setClicked] = useState(false);

    return (
        <div className="h-screen flex justify-center items-center flex-col">
            <p>This is a basic test application</p>

            <button
                onClick={() => setClicked(true)}
                className={`${clicked ? 'bg-red-400' : 'bg-blue-400'} text-white rounded-md border border-transparent shadow-sm py-2 px-4 inline-flex justify-center items-center text-sm font-medium leading-5 transition duration-150 ease-in-out`}
            >
                {clicked ? `I've been clicked` : 'Click me test'}
            </button>
        </div>
    );
}

export default App;
