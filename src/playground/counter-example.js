

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.HandleAddOne = this.HandleAddOne.bind(this);
        this.HandleMinusOne = this.HandleMinusOne.bind(this);
        this.Reset = this.Reset.bind(this);
        this.state ={
            count: 0
        };
    }
    HandleAddOne (){

        //updatestate with this.setState
        this.setState((prevState)=>{
            return{
                count: prevState.count + 1
            };
        });
    };
    
    HandleMinusOne(){
       //call this.setState
       this.setState((prevState)=>{
        return{
            //decrement count by one
            count: prevState.count -1
        };
       });
    };
    
    Reset(){
        this.setState(()=>{
            return{
                count: 0
            };
        });

    
        // this.setState({
        //     count: 0
        // });

        // this.setState({
        //     count: this.state.count + 1
        // });
    };

    render(){
        return(
            <div>
            
            <h1>Count: {this.state.count}</h1>
            <button onClick = {this.HandleAddOne}>+1</button>
            <button onClick = {this.HandleMinusOne}>-1</button>
            <button onClick = {this.Reset}>Reset</button>     
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;

// //arrow function
// const addOne = () =>{
//     count++;
//     renderCounterApp();
// };

// const minusOne = () =>{
//     //sub one from count.
//     count--;
//     //rerender
//     renderCounterApp();
//     console.log('Minus one');
// };

// const reset  = ()=>{
//     //set count to 0 and re render
//     count = 0;
//     renderCounterApp();
//     console.log('Reset');
// };




// const renderCounterApp = () => {

//     const templateTwo = (
//         <div>
//             <h1>Count: {count} </h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick = {minusOne}>-1</button>
//             <button onClick = {reset}>reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot); //call  ReactDOM to render it
// };

// renderCounterApp();