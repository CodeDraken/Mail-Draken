import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Landing from './Landing'

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

export default (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route exact path='/surveys' component={Dashboard} />
    <Route exact path='/surveys/new' component={SurveyNew} />
  </Switch>
)
