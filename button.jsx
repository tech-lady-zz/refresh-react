function App(){
  const message = "I am creating a React component";
  function handleClick() {
    alert('I am clicked');
  }
  return(
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Click me</button>
      {/* <button onClick={() => alert('hello')}>Click me</button> */}
    </div>
  );
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);