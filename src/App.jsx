import React, { useState, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

// Importation dynamique (lazy loading)


const Hello = React.lazy(() => import('./Components/Hello'));
const Form = React.lazy(() => import('./Components/Form'));
const ComponentClass = React.lazy(() => import('./Components/ComponentClass'));
const ComponentFonct = React.lazy(() => import('./Components/ComponentFonct'));
const ComponentEffect = React.lazy(() => import('./Components/ComponentEffect'));
const ComponentTimer = React.lazy(() => import('./Components/ComponentTimer'));
const ColorBox = React.lazy(() => import('./Components/ColorBox'));
const Counter = React.lazy(() => import('./Components/Counter'));
const ListManager = React.lazy(() => import('./Components/ListManager'));
const NoteManager = React.lazy(() => import('./Components/NoteManager'));
const TodoList = React.lazy(() => import('./Components/TodoList'));
const Events = React.lazy(() => import('./Components/Events'));
const Home = React.lazy(() => import('./Components/Home'));
const NotFound = React.lazy(() => import('./Components/NotFound')); 
const NavigationBar  =React.lazy(()=>import ('./Components/NavigationBar'))
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <>
        {/* Navigation */}
        <nav>
       {/* <Link to="/home">Home</Link> */}
           {/* <Link to="/hello">Hello</Link> */}
           {/* <Link to="/form">Form</Link>
           <Link to="/component-class">Component Class</Link>
            <Link to="/component-fonct">Component Function</Link>
            <Link to="/component-effect">Component Effect</Link>
           <Link to="/component-timer">Component Timer</Link>
            <Link to="/color-box">Color Box</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/list-manager">List Manager</Link>
           <Link to="/note-manager">Note Manager</Link>
            <Link to="/todo-list">Todo List</Link> */}
            <Link to="/events">Events</Link>
                    </nav>

        {/* Suspense pour gérer le lazy loading des composants */}
        <Suspense fallback={<div>Loading ...</div>}>
        <NavigationBar/>
          <Routes>
          <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/hello" element={<Hello />} />
            <Route path="/form" element={<Form />} />
            <Route path="/component-class" element={<ComponentClass />} />
            <Route path="/component-fonct" element={<ComponentFonct />} />
            <Route path="/component-effect" element={<ComponentEffect />} />
            <Route path="/component-timer" element={<ComponentTimer />} />
            <Route path="/color-box" element={<ColorBox />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/list-manager" element={<ListManager />} />
            <Route path="/note-manager" element={<NoteManager />} />
            <Route path="/todo-list" element={<TodoList />} />
            <Route path="/events" element={<Events />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </Suspense>

        {/* Partie commentée */}
        {/* 
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>

        <Hello/>
        <h1>Atelier 0</h1>
        <Form labelle="FirstName : " type="text" namee="FirstName" name="Firstname"/>
        <Form labelle="LastName : "/>

        <div className="App">
          <ComponentClass />
        </div>
        <div className="App">
          <ComponentFonct />
        </div>
        <div className="App">
          <ComponentEffect />
        </div>
        <div className="App">
          <ComponentTimer />
        </div>

        <h1>Exercice 1</h1>
        <div className="App">
          <Counter />
        </div>

        <h1>Exercice 2</h1>
        <div className="App">
          <ListManager />
        </div>

        <h1>Exercice 3</h1>
        <div className="App">
          <ColorBox />
        </div>

        <h1>Exercice 4</h1>
        <div className="App">
          <NoteManager />
        </div>

        <h1>Exercice 5</h1>
        <div className="App">
          <TodoList />
        </div>

        <h1>Atelier Composant Fonctionnels</h1>
        <div className="App">
          <h1 className="text-center my-4">Event Management System</h1>
          <Events/>
        </div>
        */}
      </>
    </Router>
  );
}

export default App;
