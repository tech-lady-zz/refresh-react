function App() {
  const person = {
    name: 'Empath',
    slackHandle: 'empath'
  };
  const isActive = true;
  return(
    <div>I am {person.name} and my slack handle     is {person.slackHandle} and { isActive && <div>I am active</div> }</div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)