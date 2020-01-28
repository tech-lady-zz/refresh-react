function App() {
  const people = [ 
    { id: 1, name: 'Empath' },
    { id: 2, name: 'Nelson' }
   ];

  return(
    <div>{people.map(person => (
      <p key={person.id}>I am {person.name}         </p>))}</div>
  );
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)