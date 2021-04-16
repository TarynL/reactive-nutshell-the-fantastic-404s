import React from "react"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./nav/NavBar"
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { Footer } from "./nav/footer"
import "./Nutshell.css"

export const Nutshell = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("nutshell_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
              <Footer />
            </>
          )
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
)
