// function App(){
//   return(
//     <div>Hello</div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )


class App extends React.Component {
  state = {
    message: 'This is React class'
  }

  updateMessage = () => {
    this.setState({ message: 'The state is..'});
  }
  
  render() {
    return(
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.updateMessage}>
          Update Message
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)