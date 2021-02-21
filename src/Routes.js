import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import * as pages from './pages'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={pages.HomePage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;