function App() {
  
  const person = {
    name: 'Empath',
    slackHandle: 'empath',
    bio: 'looks small but mighty indeed'
  };
  
  return(
    <div>
      {Object.keys(person).map(key => (
        <p>
          <strong>{key.charAt(0).toUpperCase() + key.slice(1)}: </strong>
          {person[key]}
        </p>
      ))}
    </div>
    );
}
      
ReactDOM.render(
  <App />,
  document.getElementById('root')
)