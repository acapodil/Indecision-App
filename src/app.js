
//React components
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           options: ['Thing 1', 'Thing 2', 'Thing 3','Tihng 4'] 
        };
        //bind eventhandler
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
    }

    handlePick(){
        
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleDeleteOptions(){
        this.setState(()=>{
            return{
                options: []
            }
        });
    }

    render(){
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computer';
        
        return(
            <div>
                <Header title = {title} subtitle = {subTitle}/>
                <Action
                 hasOptions = {this.state.options.length > 0} 
                 handlePick = {this.handlePick}
                 />
                <Options 
                 options = {this.state.options}
                 handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption />
            </div>
        )
    }
}


class Header extends React.Component{
    render(){  
        return (
            <div>
             <h1>{this.props.title}</h1>
             <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button
                 onClick = {this.props.handlePick}
                 disabled = {!this.props.hasOptions }
                >
                What should I do?
                </button>
            </div>
        );      
    }
}


//Options component
class Options extends React.Component{
 
    render(){
        return(
            <div>
            <button onClick = {this.props.handleDeleteOptions}>Remove All</button>
            {
                this.props.options.map((option)=> <Option key={option} optionText={option}/>)
            }
             
            </div>
        );
    }
}

//Option ->Option component here 
class Option extends React.Component{
    render(){
        return(
            <div>
               Option: {this.props.optionText }
            </div>
        );
    }
}

//AddOption 
class AddOption extends React.Component{
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim(); //reference what the user enterd in the form
        
        if(option){ alert(`${option} was entered!`);}

    }
    render(){
        return(
            <div>
            
            <form onSubmit = {this.handleAddOption}>
                <input type = 'text' name = 'option' />
                <button>Add Option</button>
            </form>

            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));