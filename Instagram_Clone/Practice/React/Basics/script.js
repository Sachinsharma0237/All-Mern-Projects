let names = ["steve", "hulk", "tony", "natasha", "thor", "drStrange"]

function Hello(props){
    return <h1 className = "hey" id = "bigHello"> Hello from {props.name} </h1>
}
function BigHello(){
    return  <React.Fragment>
        {
            names.map(function(name){
                return <Hello name = {name}></Hello>
            })
        }
        </React.Fragment>
}
//what to render and where to render
ReactDOM.render( <BigHello/> , document.getElementById("root") );