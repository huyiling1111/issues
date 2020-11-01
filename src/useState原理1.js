import React from "react"
import ReactDOM from "react-dom"
const rootElement = document.getElementById("root")
let _state;
const myUseState = initialValue => {
    console.log("myUseState run")
    _state = _state === undefined ? initialValue : _state
    const setState = newValue => {
        _state = newValue
        render()
    }
    return [_state, setState]
}

const render = () => {
    ReactDOM.render(<App />, rootElement)
}


function App() {
    const [n, setN] = myUseState(0)
    return (
        <div className="App">
            <p>{n}</p>
            <p>
                <button onClick={() => setN(n + 1)} >+1</button>
            </p>
        </div>
    )
}

ReactDOM.render(<App />, rootElement)