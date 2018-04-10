
const app = {
    title: 'indecision app',
    subtitle: 'put your life in the hands of a computer',
    options: []
};


const onFormSubmit = (e) =>{
    e.preventDefault(); //e is the event Object. this  method prevents the full page  reload
    
    const option = e.target.elements.option.value; //references form element data(what  the  user entered)

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        //rerender the template
        render();
    }
};

const removeAll = ()=>{

    app.options = [];
    render();
};

const appRoot = document.getElementById('app'); //reference place in the DOM where it will go

const onMakeDesicion = ()=>{
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(randomNum);
};

const render = ()=>{

    const template = (
        <div> 
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are  your options: " + app.options : "No options." }</p>
            
            <button disabled = {app.options.length === 0} onClick = {onMakeDesicion}>What should I do?</button>

            <button onClick = {removeAll}>Remove All</button>

            <ol>
            {
                app.options.map((option) =>{
                    return <li key =  {option}>Option: {option}</li>;
                })
            }  
            </ol>

            <form onSubmit = {onFormSubmit}>
                <input type = 'text' name='option'/>
                <button>Add Option</button>
            </form>
        </div>
        );

    ReactDOM.render(template, appRoot);
};



render();