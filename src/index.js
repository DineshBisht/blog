import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './store';

import App from './components/App';
import 'semantic-ui-css/semantic.min.css'
import Sidebar from './components/pages/Sidebar';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';

ReactDOM.render(
    <Provider store={Store}>
        <Header/>
        <section>
            <div className="container">
                <div className="row">
                    <Sidebar/>
                    <App/>
                </div>
            </div>
        </section>
        <Footer/>
    </Provider>
,document.querySelector("#root"));