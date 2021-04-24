import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

function App() {
  return (
    <div className="App">
      <p>Go!</p>
    </div>
  );
}

export default withRouter(
    connect()(App)
);
