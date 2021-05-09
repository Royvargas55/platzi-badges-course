import React from 'react'
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

// Components
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import Layout from './Layout';
import NotFound from '../pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route exact path="/404" component={NotFound}/>
                    <Redirect from="*" to="/404"></Redirect>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App
