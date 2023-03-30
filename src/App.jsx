import {useState} from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import './Styles/App.css'
import Home from './Routes/Home'
import Contact from './Routes/Contact'
import About from './Routes/About'
import Book from "./Routes/Book.jsx";
import BookList from "./Routes/BookList.jsx";

function App() {

    return (<div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">Book</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Contact</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/book" element={<BookList/>}/>
                <Route path="/book/:id" element={<Book/>}/>
                <Route path="/book/:new" element={<Book/>}/>

                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    )
}

export default App
