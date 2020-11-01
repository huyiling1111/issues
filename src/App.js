import React from "react"
import ReactDOM from "react-dom"
const rootElement = document.getElementById("root")
let _state = [];
let index = 0
const myUseState = initialValue => {
    const currentIndex = index
    console.log(`currentIndex2:${currentIndex}`)

    _state[currentIndex] = _state[currentIndex] === undefined ? initialValue : _state[currentIndex]
    const setState = newValue => {
        console.log(`currentIndex1:${currentIndex}`)
        _state[currentIndex] = newValue
        console.log(_state)
        render()
    }
    index += 1
    console.log(`index:${index}`)
    console.log(`_state:${_state}`)
    console.log('--------')
    return [_state[currentIndex], setState]
}

const render = () => {
    index = 0
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
            <p>{m}</p>
            <p>
                <button onClick={() => setM(m + 1)} >+1</button>
            </p>
        </div>
    )
}

export default App