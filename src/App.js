import React from 'react'
import { Route, Switch,BrowserRouter } from 'react-router-dom'
import Layout from './Hoc/Layout/Layout'
import Login from './Containers/Login/Login'
import RequestAccount from './Containers/RequestAccount/RequestAccount'
import Landing from './Containers/Landing/Landing'


const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/login" component={Login} />
                    <Route path="/requestAccount" component={RequestAccount} />
                </Switch>
                
            </Layout>    
            </BrowserRouter>
        </div>
    );
};


export default App
