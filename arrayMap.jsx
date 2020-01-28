function App() {
  const people = [ 
    {name: 'Empath'},
    {name: 'Nelson'}
   ];

  return(
    <div>{people.map(person => (<p>I am {person.name}</p>))}</div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)