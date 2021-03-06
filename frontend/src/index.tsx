import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Firebase, {FirebaseContext} from './firebase';
import * as serviceWorker from './serviceWorker';


fetch('/__/firebase/init.json').then(async response => {
  const config = await response.json();

  ReactDOM.render(
    <React.StrictMode>
      <FirebaseContext.Provider value={new Firebase(config)}>
        <App/>
      </FirebaseContext.Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
