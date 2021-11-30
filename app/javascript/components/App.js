import React from "react"
import PropTypes from "prop-types"
import { Provider } from "react-redux"
import store from "../configureStore"

import Greeting from "./Greeting"
class App extends React.Component {
  render () {
    return (
      // <React.Fragment>
      //   Greeting: {this.props.greeting}
      // </React.Fragment>
    <React.StrictMode>
      <Provider store={store}>
      <div>
        <Greeting />
      </div>
      </Provider>
    </React.StrictMode>

    );
  }
}

App.propTypes = {
  greeting: PropTypes.string
};
export default App
