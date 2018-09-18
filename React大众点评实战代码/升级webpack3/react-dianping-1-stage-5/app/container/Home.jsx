import React from 'react'

import '../static/less/style.less'
import '../static/less/font.css'

import img from '../static/img/react.jpg'

class Home extends React.Component {
    render() {
        return(
            <div>
                <p>Home page</p>
                <img src={img}/>
                <p><i className="icon-search"></i></p>
            </div>
        )
    }
}

export default Home