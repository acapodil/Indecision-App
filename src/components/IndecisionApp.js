import React from 'react';

import AddOption from './AddOption.js';
import Options from './Options'
import Action from './Action.js';
import Header from './Header.js';

class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           options: []
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

export default IndecisionApp;