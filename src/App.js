import React from 'react';
import './App.css';
import NavBar from "./component/NavBar";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import EditDeleteBookDetailsContainer from "./component/EditDeleteBookDetailsContainer";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AddBooksContainer from "./component/AddBooksContainer";
import HomeContainer from "./component/HomeContainer";
import LoginContainer from "./component/LoginContainer";
import RegisterContainer from "./component/RegisterContainer";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Router>
                {/*<Route path="/" exact component={AddBooksContainer}/>*/}
                <Route path="/home" exact
                       component={() => localStorage.getItem('isLogged') === "true" ? <HomeContainer/> :
                           <LoginContainer/>}/>
                <Route path="/" exact component={LoginContainer}/>
                <Route path="/register" exact component={RegisterContainer}/>

                <Route path="/books/add" exact component={AddBooksContainer}/>
                <Route path="/books/edit" exact component={EditDeleteBookDetailsContainer}/>
            </Router>
        </div>
    );
}

export default App;
