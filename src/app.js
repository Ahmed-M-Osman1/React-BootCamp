console.log("App.js is running!");

// JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: 'Put ',
    option: ['one','two']
}

var template = (
  <div>
    <h1> Indecision App V 1.0</h1>
    <p>this is paragraph</p>
    <ol>
    <li>Item One</li>
    <li>Item Two</li>
    </ol>
  </div>
);
var user = {
    name : 'Ahmed',
    age: 28,
    location : 'Cairo'
}

function getLocation(location){
    if(location){
        return <p>Location: {location}</p>
    } else {
        return 'Unknown'
    }
}

var tampleteTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

var appRoot = document.getElementById("app");

ReactDOM.render(tampleteTwo, appRoot);