function App() {
  const people = [ 
    { name: 'Empath',
      books: [
        { name: 'Redeeming Love', genre: 'Romance'},
        { name: 'Winning Attitude', genre: 'Motivational'}
      ]
    },
    { name: 'Nelson',
      books: [
        {name: 'Eat that Frog', genre: 'Business'},
        {name: 'php for teens', genre: 'Programming'}
      ]
    }
   ];

  return(
    <div>{people.map((person, index) => (
      <div key={index}>
        <h2>{person.name}'s books</h2>
          { /* loop over the books */ }
          <div>
            {person.books.map((book, i) => (
            <p key={i}>
              {book.type} named {book.name}
            </p>
            ))}
          </div>
      </div>
      ))};
    </div>
   )    
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)