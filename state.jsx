// state
function App(){
  const [message, setMessage] = React.useState('I am learning React');
  // methods
   function handleClick(){
     setMessage('I am learning React state');
   }
   // views
   return(
     <div>
       <h1>{message}</h1>
       <button onClick={handleClick}>Click me</button>
     </div>
   );
 }
 
 // component(s) rendering
 ReactDOM.render(
     <App />,
   document.getElementById('root')
 );