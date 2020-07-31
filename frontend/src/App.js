import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import asyncComponent from './hoc/asyncComponent/asyncComponent'
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Logout from './containers/Auth/Logout/Logout'
import { connect } from 'react-redux';
import * as actions from './store/actions/index'
import classes from './App.css'

const asyncHomepage = asyncComponent(() => {
  return import('./components/Homepage/Homepage')
})
const asyncFullApartment = asyncComponent(() => {
  return import('./components/FullApartment/FullApartment')
})
const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth')
})
const asyncApartments = asyncComponent(() => {
  return import('./components/Apartments/Apartments')
})
const asyncCheckout = asyncComponent(() => {
  return import('./containers/Checkout/Checkout')
})
const asyncOrders = asyncComponent(() => {
  return import('./containers/Orders/Orders')
})
const asyncAddApartment = asyncComponent(() => {
  return import('./components/Apartments/AddApartment/AddApartment')
})

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup()
    this.props.onInitDarkMode()
  }

  render() {

    let routes = (
      <Switch>
        <Route path='/apartments' component={asyncApartments} />
        <Route path='/FullApartment' component={asyncFullApartment} />
        <Route path='/how-it-works' render={() => <div>This works well</div>} />
        <Route path='/help' render={() => <div>I can help</div>} />
        <Route path='/auth' component={asyncAuth} />
        <Route path='/' exact component={asyncHomepage} />
        <Redirect to="/" />
      </Switch>
    )
    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/apartments' component={asyncApartments} />
          <Route path='/addApartment' component={asyncAddApartment} />
          <Route path='/FullApartment' component={asyncFullApartment} />
          <Route path='/how-it-works' render={() => <div>This works well</div>} />
          <Route path='/help' render={() => <div>I can help</div>} />
          <Route path='/logout' component={Logout} />
          <Route path='/' exact component={asyncHomepage} />
          <Redirect to="/" />
        </Switch>
      )
    }
    return (
      <div className={this.props.darkMode ? classes.AppDark : classes.App}>
        <Layout>{routes}</Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    darkMode: state.darkMode.darkMode,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    onInitDarkMode: () => dispatch(actions.initDarkMode())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))