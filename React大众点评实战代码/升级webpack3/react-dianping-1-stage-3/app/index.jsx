import React from 'react'
import { render } from 'react-dom'

import './static/less/font.css'
import './static/less/style.less'
import img from './static/img/react.jpg'

class Hello extends React.Component {
    render() {
        return(
            <div>
                <p>Hello React</p>
                <img src={img}/>
                <p><i className="icon-star"></i></p>
            </div>
        )
    }
}

render(
    <Hello/>,
    document.getElementById('root')
)

