
const appRoot = document.getElementById('app')

const showState = {
    showState: false
}

const BTNFunction = () => {
    showState.showState = !showState.showState
    renderFunction()
}


const renderFunction = () =>{
    const vDOM = (<div>
        <h1>Visible Toggle</h1>
        <button onClick={BTNFunction}>{showState.showState? 'Hide detail':'Show  detail'}</button>
        <p>{showState.showState? 'There Is a lot of detail Here':false}</p>
        </div>)
    ReactDOM.render(vDOM,appRoot)
}

renderFunction()