import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor(){
    super();

    this.state = {
      students: [], 
      searchField: ''
  };
  console.log('constructor');
  }

  componentDidMount() {
    console.log('component did mount');
    fetch('https://hp-api.onrender.com/api/characters/students') 
      .then((response) => response.json())
      .then(users => this.setState(
        () => { return {students: users} 
      },
      () => {
        console.log(this.state)
      }
      )) //this.setState({monsters: users}))
  }

  onSearchChange = (event) => {

    const searchField = event.target.value.toLocaleLowerCase()
    
    this.setState(()=> {
      return(
        {searchField}
      )}, () => {console.log("notghin")}
    )
      }
  render() {
    console.log('render');

    const {students, searchField, } = this.state;
    const {onSearchChange} = this;

    const filteredStudents = students.filter((student) => {
        return student.name.toLocaleLowerCase().includes(searchField);
    });

    return (

    <div className="App">
      <h1 className='app-title'>Harry Potter Dex</h1>
      
      <SearchBox
        className='students-search-box'
        onSearchHandler={onSearchChange}
        placeholder='search characters'/>

      <CardList students={filteredStudents}/>
    </div>
  );
  }
}

export default App;