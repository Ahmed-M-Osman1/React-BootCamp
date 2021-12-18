console.log("App.js is running!");

// JSX - JavaScript XML

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hand of computer.",
  option: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  option ? app.option.push(option) : false;
  app.counter += 1
  renderStuff();
  e.target.elements.option.value = "";
};

const removeAll =()=>{
    app.option = []
    renderStuff()
} 

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.option.length)
    const option = app.option[randomNum]
    console.log(randomNum)
}

const renderStuff = () => {
  const template = (
    <div>
      <h1> Indecision App V 1.0</h1>
      <h3>{app.subtitle}</h3>
      <p>
        {app.option.length > 0
          ? "Here is your options :"
          : "No options to display."}
      </p>
      <p>{app.option.length}</p>
      <button disabled ={app.option.length? false : true} onClick={onMakeDecision}> What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {app.option.map((option) => (
          <li key={option}>{option}</li>
        ))}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");

renderStuff();
