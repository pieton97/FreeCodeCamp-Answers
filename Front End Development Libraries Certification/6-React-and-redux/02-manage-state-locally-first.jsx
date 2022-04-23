class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({input: event.target.value});
  }
  submitMessage() {
    this.setState(prevState => {
      return {
        input: "",
        messages: [...prevState.messages, this.state.input]
      }
    })
  }

  render() {
    const listEle = this.state.messages.map((curVal) => <li>{curVal}</li>);
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input 
          type="text"
          value={this.state.input} 
          onChange={this.handleChange} 
        />
        <button onClick={this.submitMessage}>Add message</button>
        <ul>{listEle}</ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};
