import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import { formatearDinero, calcularTotal } from "./helpers";


function App() {

    const [amount, setAmount] = useState(10000);
    const [month, setMonth] = useState(6);
    const [total, setTotal] = useState(0);
    const [pay, setPay] = useState(0);

    useEffect(() => {
        const resultTotal = calcularTotal(amount, month);
        setTotal(resultTotal);
    }, [amount, month])

    useEffect(() => {
        setPay(total/month)
    }, [total])

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

            <p className="text-center my-10 text-5xl font-extrabold text-teal-600">
                {formatearDinero(amount)} <span className="text-gray-500">USD</span>
            </p>

            <h2 className="text-2xl font-extrabold text-gray-500 text-center">
                Elige un <span className="text-teal-600">Plazo</span> a Pagar
            </h2>

            <select 
                className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold outline-none text-gray-500"
                value={month}
                onChange={e => setMonth(+e.target.value)}
            >
                <option value="6">6 Meses</option>
                <option value="12">12 Meses</option>
                <option value="24">24 Meses</option>
            </select>

            <div className="my-5 space-y-3 bg-gray-100 p-5">
                <h2 className="text-2xl font-extrabold text-gray-500 text-center">
                    Resumen <span className="text-teal-600">de pagos</span>
                </h2>

                <p className="text-xl text-gray-500 text-center font-bold">{month} Meses</p>
                <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(total)} Total a Pagar</p>
                <p className="text-xl text-gray-500 text-center font-bold">{formatearDinero(pay)} Mensuales</p>

            </div>

        </div>
    )
}

export default App
