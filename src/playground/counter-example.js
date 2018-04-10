

let count = 0;

//arrow function
const addOne = () =>{
    count++;
    renderCounterApp();
};

const minusOne = () =>{
    //sub one from count.
    count--;
    //rerender
    renderCounterApp();
    console.log('Minus one');
};

const reset  = ()=>{
    //set count to 0 and re render
    count = 0;
    renderCounterApp();
    console.log('Reset');
};




const renderCounterApp = () => {

    const templateTwo = (
        <div>
            <h1>Count: {count} </h1>
            <button onClick={addOne}>+1</button>
            <button onClick = {minusOne}>-1</button>
            <button onClick = {reset}>reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot); //call  ReactDOM to render it
};

renderCounterApp();