import { useState } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero } from "./helpers";


function App() {

    const [amount, setAmount] = useState(10000);

    const MIN = 0;
    const MAX = 20000;
    const STEP = 100;

    function handleChange(e){
        setAmount(+e.target.value);
    }

    function handleClickDecrease() {
        const value = amount - STEP;
        
        if (value < MIN) {
            alert('Cantidad no valida');
            return;
        }
        
        setAmount(value);
    }

    function handleClickIncrease() {
        const value = amount + STEP;
        
        if (value > MAX) {
            alert('Cantidad no valida');
            return;
        }
        
        setAmount(value);
    }

    return (
        <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
            <Header/>

        <div className="flex justify-between my-6">
            <Button operator='-' fn={handleClickDecrease} />
            <Button operator='+' fn={handleClickIncrease} />
        </div>


            <input  
                className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
                type="range"
                onChange={handleChange}
                min={MIN}
                max={MAX}
                step={STEP}
                value={amount}
            />

            <p className="text-center my-10 text-5xl font-extrabold text-teal-600">{ formatearDinero(amount)} <span className="text-gray-500">USD</span></p>



        </div>
    )
}

export default App
