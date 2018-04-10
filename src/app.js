//React components

class IndecisionApp extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        )
    }
}



class Header extends React.Component{
    render(){
        return (
            <div>
             <h1>Indecision</h1>
             <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );      
    }
}


//Options component
class Options extends React.Component{
    render(){
        return(
            <div>
            <p>Option Component here</p>
             <Option />
            </div>
        );
    }
}

//Option ->Option component here 
class Option extends React.Component{
    render(){
        return(
            <div>
                <p>Option(s) component here.</p>
            </div>
        );
    }
}

//AddOption Component
class AddOption extends React.Component{
    render(){
        return(
            <div>
            <p>AddOption component here</p>
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));