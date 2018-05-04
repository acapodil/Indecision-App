

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.HandleAddOne = this.HandleAddOne.bind(this);
        this.HandleMinusOne = this.HandleMinusOne.bind(this);
        this.Reset = this.Reset.bind(this);
        this.state ={
            count: props.count
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

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'));