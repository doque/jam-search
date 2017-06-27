import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
const props = {
    trala: "React",
    items: [
        "Ricky",
        "Dimi",
        "Frieder",
        "Tiemo",
        "Karo",
        "Joni"
    ]
}

ReactDOM.render(<App { ...props }/>, document.getElementById('root'));
registerServiceWorker();
