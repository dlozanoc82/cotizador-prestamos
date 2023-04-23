import { useState } from "react"
import Header from "./components/Header"

function App() {

    const [amount, setAmount] = useState(10000);

    const MIN = 0;
    const MAX = 20000;
    const STEP = 100;

    function handleChange(e){
        setAmount(+e.target.value);
    }

    return (
        <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
            <Header/>

            <input  
                className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
                type="range"
                onChange={handleChange}
                min={MIN}
                max={MAX}
                step={STEP}
                value={amount}
            />

            <p className="text-center my-10 text-5xl font-extrabold text-teal-600">{amount} <span className="text-gray-500">USD</span></p>

            

        </div>
    )
}

export default App
