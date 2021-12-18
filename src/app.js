class IndecisionApp extends React.Component {
  render(){
    const title = 'IndecisionApp'
    const subtitle = 'Put your life in the hands of a computer.'
    const option = ['Thing One','Thing Two','Thing Four']
    return (
      <div>
      <Header title={title} subtitle={subtitle}/>
      <Action />
      <Options option={option}/> 
      <AddOption option={option}/>
    </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick(){
    alert('hi')
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What Should I do?</button>
      </div>
    );
  }
}



class Options extends React.Component {
  constructor(props){
    super(props)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
  }
  handleRemoveAll(){
     console.log('hi')
  }
  render(){
    return (
      <div>
      <button onClick={this.handleRemoveAll}>Remove All</button>
      <p>Options component Here</p>
      {this.props.option.map((option)=> <Option key={option} optionText={option}/>)}
      <Option />
      </div>
    )
  }
}

class Option extends React.Component {
  render(){
    return (
      <div>{this.props.optionText}</div>
    )
  }
}

class AddOption extends React.Component {
  handleSubmit(e){
    e.preventDefault()
    const option = e.target.elements.option.value;
    if(option.trim()){
      alert('ana tmam')
    }
  }
  render(){
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
      <input type="text" name="option"/>
      <button>Submit option</button>
      </form>
      </div>
    )
  }
}


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
