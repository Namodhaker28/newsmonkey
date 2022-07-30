import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route  path="/"
              element={<News
                key="general"
                pageSize={9}
                country={"in"}
                category={"general"}
              />}
            />
            <Route  path="/sports"
              element={<News
                key="sports"
                pageSize={9}
                country={"in"}
                category={"sports"}
              />}
            />
            <Route exact path="/Business"
              element={<News
                key="Business"
                pageSize={9}
                country={"in"}
                category={"Business"}
              />}
            />
            <Route exact path="/Tech"
              element={<News
                key="Tech"
                pageSize={9}
                country={"in"}
                category={"technology"}
              />}
            />
            <Route exact path="/Entertainment"
              element={<News
                key="Entertainment"
                pageSize={9}
                country={"in"}
                category={"Entertainment"}
              />}
            />
            <Route exact path="/Science"
              element={<News
                key="Science"
                pageSize={9}
                country={"in"}
                category={"Science"}
              />}
            />
            <Route exact path="/health"
              element={<News
                key="health"
                pageSize={9}
                country={"in"}
                category={"health"}
              />}
            />
          </Routes>
                </BrowserRouter>
      </div>
        
    );
  }
}
