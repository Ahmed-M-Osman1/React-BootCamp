let count = 0
const addBtn = () => {
    count ++
    renderCounterApp()
}

const removeBtn = () => {
    count --
    renderCounterApp()
}

const resetBtn = () => {
    count = 0
    renderCounterApp()
}

const renderCounterApp = () => {
    const tampleteTwo = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addBtn}>+1</button>
            <button onClick={resetBtn}> Reset </button>
            <button onClick={removeBtn}>-1</button>
            
        </div>
    )
    ReactDOM.render(tampleteTwo, appRoot);
}

renderCounterApp()