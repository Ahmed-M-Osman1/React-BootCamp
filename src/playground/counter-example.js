class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleRemoveOne = this.handleRemoveOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
    };
  }
  componentDidMount(){
    const json = localStorage.getItem('count')
    const countAsString = JSON.parse(json)
    const count = parseInt(countAsString)
    if(isNaN(count)){
      this.setState(()=> ({count: 0}))
    } else {
    this.setState(()=> ({count: count}))
  }
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState !== this.state.count){
      const json = JSON.stringify(this.state.count)
      localStorage.setItem('count', json)
    }
  }
  handleAddOne() {
    this.setState ((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  handleRemoveOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count:{this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleReset}>Reset</button>
        <button onClick={this.handleRemoveOne}>-1</button>
      </div>
    );
  }
}


ReactDOM.render(<Counter />, document.getElementById("app"));
// let count = 0
// const addBtn = () => {
//     count ++
//     renderCounterApp()
// }

// const removeBtn = () => {
//     count --
//     renderCounterApp()
// }

// const resetBtn = () => {
//     count = 0
//     renderCounterApp()
// }

// const renderCounterApp = () => {
//     const tampleteTwo = (
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={addBtn}>+1</button>
//             <button onClick={resetBtn}> Reset </button>
//             <button onClick={removeBtn}>-1</button>

//         </div>
//     )
//     ReactDOM.render(tampleteTwo, appRoot);
// }

// renderCounterApp()
