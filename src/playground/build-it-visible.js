

let detailsShown = false;

const showDetails = ()=>{
    console.log('show details clicked!');
    detailsShown = !detailsShown;
    render();
};


const render = ()=>{
    
    const template =  (
        <div>
            <h1> Visibility Toggle </h1>
            <p>
             {detailsShown ? 'here are some details': false}
            </p>
            <button onClick = {showDetails}>
                {detailsShown ? 'Hide Details' : 'Show details'  }
            </button>
            
        </div>
    );

    ReactDOM.render(template, appRoot);
};



const appRoot = document.getElementById('app'); //reference place in the DOM where it will go
render();