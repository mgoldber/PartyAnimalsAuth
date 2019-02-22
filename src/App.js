import React, { Component } from "react";
import Header from "./components/Header.js";
import LoginForm from "./components/LoginForm.js";
import RegisterForm from "./components/RegisterForm.js";
import RegisterAction from "./components/RegisterAction.js";
import Token from "./components/Token.js";
import ApiDoc from "./components/ApiDoc.js";
import Footer from "./components/Footer.js";
import "./styles/styles.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usernameLogin: "",
      usernameRegister: "",
      passwordLogin: "",
      passwordRegister: ""
    };
  }

  onLoginSubmit = (username, password) => {
    this.setState({
      usernameLogin: username,
      passwordLogin: password
    });
  };

  onRegisterSubmit = (username, password) => {
    this.setState({
      usernameRegister: username,
      passwordRegister: password
    });
  };

  render() {
    return (
      <main>
        <Header />
        <section className="forms wrapper">
          <LoginForm onLoginSubmit={this.onLoginSubmit} />
          <RegisterForm onRegisterSubmit={this.onRegisterSubmit} />
          <RegisterAction
            usernameRegister={this.state.usernameRegister}
            passwordRegister={this.state.passwordRegister}
          />
        </section>
        <Token
          usernameLogin={this.state.usernameLogin}
          passwordLogin={this.state.passwordLogin}
        />
        <section className="apiDoc wrapper">
          <h3>Venue</h3>
          <ApiDoc
            requestType="GET"
            requestHeadline="Get All Venues"
            requestUrl="http://localhost:3005/v1/venue/"
          />
          <ApiDoc
            requestType="GET"
            requestHeadline="Get Venue By ID"
            requestUrl="http://localhost:3005/v1/venue/id"
          />
        </section>
        <section className="apiDoc wrapper">
          <h3>Animal</h3>
          <ApiDoc
            requestType="GET"
            requestHeadline="Get Animals for Specific Venue"
            requestUrl="http://localhost:3005/v1/venue/animals/id"
          />
        </section>
        <Footer />
      </main>
    );
  }
}

export default App;
