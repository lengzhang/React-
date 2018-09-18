import React from 'react'
import { HashRouter, Route, hasHistory } from 'react-router-dom' 


import City from '../container/City.jsx'
import Detail from '../container/Detail.jsx'
import Home from '../container/Home.jsx'
import Search from '../container/Search.jsx'

class RouteMap extends React.Component {
    render() {
        return (
            <HashRouter history={hasHistory}>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/city" component={City}/>
                    <Route path="/detail/:id" component={Detail}/>
                    <Route path="/search" component={Search}/>
                </div>
            </HashRouter>
        )
    }
}

export default RouteMap