import React, { useState } from 'react';

function Calculator() {

    const [state, setState] = useState("")

    const clickHandler = (e) => {
        setState(state.concat(e.target.value))
    }
    const calculate = () => {
        try{
            setState(eval(state).toString())
        }
        catch(error){
            setState("error")
        }
    }

    const clear = () => {
        setState(state.slice(0,-1))
    }

    const allClear = () => {
        setState("")
    }

    return (
        <div className='one'><br /><br />
            <input type="text" id="input" value={state}/><br />
            <br />
            <div className='container'>
                <button onClick={clickHandler} value ="1">1</button>
                <button onClick={clickHandler} value ="2">2</button>
                <button onClick={clickHandler} value ="3">3</button>
                <button onClick={clickHandler} value ="4">4</button>
                <button onClick={clickHandler} value ="5">5</button>
                <button onClick={clickHandler} value ="6">6</button>
                <button onClick={clickHandler} value ="7">7</button>
                <button onClick={clickHandler} value ="8">8</button>
                <button onClick={clickHandler} value ="9">9</button>
                <button onClick={clickHandler} value ="0">0</button>
                <button onClick={clickHandler} value ="+" id='color'>+</button>
                <button onClick={clickHandler} value ="-" id='color'>&ndash;</button>
                <button onClick={clickHandler} value ="*" id='color'>&times;</button>
                <button onClick={clickHandler} value ="/" id='color'>&divide;</button>
                <button onClick={calculate} value ="" className='euqal' id='color'>=</button>
                <button onClick={clear} value =""    id='ac'>C</button>
                <button onClick={allClear} value ="" id='ac'>AC</button>
            </div>
        </div>
    );
}

export default Calculator;