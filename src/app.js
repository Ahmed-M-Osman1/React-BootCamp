console.log("App.js is running!");

// JSX - JavaScript XML

const app = {
    title: "Indecision App",
    subtitle: 'Put ',
    option: ['one','two']
}

const templateThree = (
    <div>
    {app.subtitle ? <p>{app.subtitle}</p>: false}
    {app.option.length>0 ? <div><p>Here are your option :</p><ol>{app.option.map((option)=> <li key={option}>{option}</li>)}</ol></div> : false}
    </div>
    )

const template = (
  <div>
    <h1> Indecision App V 1.0</h1>
    <p>this is paragraph</p>
    <ol>
    <li>Item One</li>
    <li>Item Two</li>
    </ol>
  </div>
);

const user = {
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

const tampleteTwo = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

var appRoot = document.getElementById("app");

ReactDOM.render(tampleteTwo, appRoot);
