import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import * as pages from './pages'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={pages.HomePage}/>
                <Route exact path="/about" component={pages.AboutUsPage}/>
                <Route exact path="/services" component={pages.ServicesPage}/>
                <Route exact path="/work" component={pages.WorkListPage}/>
                <Route exact path="/contact" component={pages.ContactPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;