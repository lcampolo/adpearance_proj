import React from 'react';
import ReactDOM from 'react-dom';
import MainContent from '../views/mainContent'

function App() {
    return (
        <MainContent />
    );
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
