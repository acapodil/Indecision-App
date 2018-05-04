
//stateless functional component


//React components
class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           options: props.options
        };
        //bind eventhandler
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    //lifecycle methods/////////////////////////  
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if(options){
                this.setState(()=>({options:  options}));
            }
    
            this.setState(()=>({options: options}));

        }catch(e){
            //if json data  invalid do nothing at all
        }
       
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){

            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);

            console.log('saving data!');
            
        }
        
    }

    componentWillUnmount(){
        console.log('component will unmount');
    }
    ////////////////////////////////////////////


    handleDeleteOption(optionToRemove){
        //this syntax implicitly returns an obj
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>{
                return optionToRemove !== option;
            })
        }))
    }


    handlePick(){
        
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleDeleteOptions(){

        this.setState(()=> ({
            options: []
        }));

    }

    handleAddOption(option){
        if(!option){
            return 'Enter valid value to add item'
        }else if(this.state.options.indexOf(option) > -1){
            return 'this option already exists!'
        }

      

        this.setState((prevState)=> ({
            options: prevState.options.concat(option)
        }));
        
    }

    render(){

        const subTitle = 'Put your life in the hands of a computer';

        return(
            <div>
                <Header subtitle = {subTitle}/>
                <Action
                 hasOptions = {this.state.options.length > 0} 
                 handlePick = {this.handlePick}
                 />
                <Options 
                 options = {this.state.options}
                 handleDeleteOptions={this.handleDeleteOptions}
                 handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption 
                handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

//stateless functional component
const Header = (props)=>{
    return (
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
       </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
};

//stateless functional component
const Action = (props)=>{
    return(
        <div>
        <div>
        <button
         onClick = {props.handlePick}
         disabled = {!props.hasOptions }
        >
        What should I do?
        </button>
    </div>
        </div>
    );
}

//stateless  functional component
const Options = (props)=>{
    return(
        <div>
        <button onClick = {props.handleDeleteOptions}>Remove All</button>
        {props.options.length === 0 && <p>Please add an option to get started</p>}
        {
            props.options.map((option)=> (
                <Option
                  key={option} 
                  optionText={option}
                  handleDeleteOption = {props.handleDeleteOption}
                  />
            ))
        }
        </div>
    );
};

const Option = (props)=>{
    return(
        <div>
               {props.optionText }
               <button 
               onClick = {(e)=>{
                props.handleDeleteOption(props.optionText);
               }}
               >
               remove
               </button>
            </div>
    );
};


//AddOption 
class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim(); //reference what the user enterd in the form
        const error = this.props.handleAddOption(option);

        this.setState(()=>({error }));

        if(!error){
            e.target.elements.option.value = '';
        }
    }
    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit = {this.handleAddOption}>
                <input type = 'text' name = 'option' />
                <button>Add Option</button>
            </form>

            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));