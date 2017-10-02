import React from 'react'
import { Route, Switch } from 'react-router-dom'

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

export default (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route exact path='/surveys' component={Dashboard} />
    <Route exact path='/surveys/new' component={SurveyNew} />
  </Switch>
)
