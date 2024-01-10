import { Component } from 'react';
import './App.css';

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

  render() {
    console.log('render');
    return (
    <div className="App">
      <input className='search-box' type='search' placeholder='search students' onChange={(event) => {
        console.log(event.target.value)
        const searchString = event.target.value.toLocaleLowerCase()
        const filteredStudents = this.state.students.filter((student) => {
            return student.name.toLocaleLowerCase().includes(searchString);
        });

         this.setState(() => {
          return { students: filteredStudents};
        })
      }}/>
      {this.state.students.map( (student) => {
        return <div key={student.id}><h1>{student.name} - {student.house}</h1></div>
      })
      }
    </div>
  );
  }
}

export default App;