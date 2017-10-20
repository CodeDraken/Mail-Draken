import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Landing from './Landing'
import Dashboard from './Dashboard'
import SurveyNew from './surveys/SurveyNew'

export default (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route exact path='/surveys' component={Dashboard} />
    <Route exact path='/surveys/new' component={SurveyNew} />
  </Switch>
)
