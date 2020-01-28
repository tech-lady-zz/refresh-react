function App() {
  
  const person = {
    name: 'Empath',
    slackHandle: 'empath',
    bio: 'looks small but mighty indeed'
  };
  
  return(
    <div>
      {Object.keys(person).map(key => (
        <p>{person[key]}</p>
      ))}
    </div>
    );
}
      
ReactDOM.render(
  <App />,
  document.getElementById('root')
)