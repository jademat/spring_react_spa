import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./pages/layout/Header";
import Nav from "./pages/layout/Nav";
import Footer from "./pages/layout/Footer";
import Main from "./pages/Main";
import Join from "./pages/Join";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Myinfo from "./pages/Myinfo";
import BoardList from "./pages/BoardList";
import GalleryList from "./pages/GalleryList";
import BoardWrite from "./pages/BoardWrite.jsx";
import BoardView from "./pages/BoardView.jsx";

import './styles/App.css'



function App() {

    return (
        <Router>
            <Header/>
            <Nav/>
            <Routes>
                <Route path = "/" element={ <Main/> } />
                <Route path = "/member/join" element={ <Join/> } />
                <Route path = "/member/login" element={ <Login/> } />
                <Route path = "/member/logout" element={ <Logout/> } />
                <Route path = "/board/list/:cpg" element={ <BoardList/>} />
                <Route path = "/board/find/:ftype/:fkey/:cpg" element={ <BoardList/>} />
                <Route path = "/board/write" element={ <BoardWrite/>} />
                <Route path = "/board/view/:bno" element={ <BoardView/>} />
                <Route path = "/gallery/list" element={ <GalleryList/>} />
                <Route path = "/member/myinfo" element={ <Myinfo/> } />
                <Route path = "*" element={ <NotFound/> } />
            </Routes>
            <Footer/>
        </Router>
    )

}

export default App
