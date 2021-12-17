console.log("App.js is running!");

// JSX - JavaScript XML

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

var tampleteTwo = (
    <div>
        <h1>Ahmed Mamdouh Ahemd</h1>
        <p>Age: 28</p>
        <p> Location: Cairo</p>
    </div>
)

var appRoot = document.getElementById("app");

ReactDOM.render(tampleteTwo, appRoot);
