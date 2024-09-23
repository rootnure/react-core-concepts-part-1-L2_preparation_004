import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleReduce = () => {
        setCount(count - 1);
    }

    const handleReset = () => {
        const isConfirmed = confirm("Do you want to rest the counter?");
        // console.log(isConfirmed);
        isConfirmed && setCount(0);
    }

    return (
        <div style={{ border: '2px solid yellow', padding: '10px' }}>
            <h3>Counter: {count}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}