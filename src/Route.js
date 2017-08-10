import React from 'react'
import { Router, Route } from 'react-router'
import HomePage from './component/HomePage'
import CollectionPgae from './component/CollectionPgae'
import { hashHistory } from 'react-router'

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={HomePage}/>
                <Route path="/message" component={CollectionPgae}/>
            </Router>
        )
    }
}

export default RouterMap