const message = 'modified';
const myElement = <div className="card" style={{color: 'red'}}>An element { 3 + 4 } {message}</div>;

ReactDOM.render(
  <div>{myElement}</div>,
  document.getElementById('root')
)