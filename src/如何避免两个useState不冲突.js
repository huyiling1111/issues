import React from "react"
import ReactDOM from "react-dom"
const rootElement = document.getElementById("root")
let _state = [];
let index = 0
const myUseState = initialValue => {
    const currentIndex = index
    console.log("myUseState run")
    _state[currentIndex] = _state[currentIndex] === undefined ? initialValue : _state[currentIndex]
    const setState = newValue => {
        _state[currentIndex] = newValue
        render()
    }
    index += 1
    return [_state, setState]
}

const render = () => {
    ReactDOM.render(<App />, rootElement)
}


function App() {
    const [n, setN] = myUseState(0)
    const [m, setM] = myUseState(0)
    return (
        <div className="App">
            <p>{n}</p>
            <p>
                <button onClick={() => setN(n + 1)} >+1</button>
            </p>
            <p>
                <button onClick={() => setM(m + 1)} >+1</button>
            </p>
        </div>
    )
}

ReactDOM.render(<App />, rootElement)