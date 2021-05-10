import React from 'react'
import { BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

// Components
import BadgeNew from '../pages/BadgeNewContainer';
import BadgeEdit from '../pages/BadgeEditContainer';
import BadgeDetails from '../pages/BadgeDetailsContainer';
import Badges from '../pages/BadgesContainer';
import Layout from './Layout';
import NotFound from '../pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges}/>
                    <Route exact path="/badges/new" component={BadgeNew}/>
                    <Route exact path="/badges/:badgeId" component={BadgeDetails}/>
                    <Route exact path="/badges/:badgeId/edit" component={BadgeEdit}/>
                    <Route exact path="/404" component={NotFound}/>
                    <Redirect from="*" to="/404"></Redirect>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}

export default App
