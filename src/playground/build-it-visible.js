console.log('hi')
class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleShowState = this.handleShowState.bind(this)
    this.test = this.test.bind(this)
    this.state = {
        visibility: false,
    };
  }
  handleShowState(){
    this.setState((prevState) => {
        return {
            visibility: !prevState.visibility
        };
      });
    }


    test(){
        console.log('test')
    }
  render() {
    return(
        <div>
        <h1>Visible Toggle</h1>
        <button onClick={this.handleShowState} >{this.state.visibility ? 'Hide details':'Show details'}</button>
        {this.state.visibility && <p>There is a lot of details here</p>}
        </div>
        );
  }
}

const appRoot = document.getElementById('app')
ReactDOM.render(<VisibilityToggle />,appRoot)

// const appRoot = document.getElementById('app')

// const showState = {
//     showState: false
// }

// const BTNFunction = () => {
//     showState.showState = !showState.showState
//     renderFunction()
// }

// const renderFunction = () =>{
//     const vDOM = (<div>
//         <h1>Visible Toggle</h1>
//         <button onClick={BTNFunction}>{showState.showState? 'Hide detail':'Show  detail'}</button>
//         {showState.showState && <p>There Is a lot of detail Here</p>}
//         <div></div>
//         </div>)
//     ReactDOM.render(vDOM,appRoot)
// }

// renderFunction()
