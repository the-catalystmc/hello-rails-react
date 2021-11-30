import React from "react"
import { connect, useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const Greeting = () => {
  const data = useSelector((state) => state.messagesReducer);

  return(
    <div>
      {data.message}
    </div>
  )
}

// const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';

// function getMessages() {
//   return {
//     type: GET_THINGS_REQUEST
//   };
// };
// class Greeting extends React.Component {
//   render () {
//     return (
//       <React.Fragment>
//         Greeting: {this.props.greeting}
//       </React.Fragment>
//     );
//   }
// }

// const structuredSelector = createStructuredSelector({
//   messages: state => state.messages,
// });

// const mapDispatchToProps = { getThings };

// export default connect(structuredSelector, mapDispatchToProps)(Greeting);

export default Greeting;