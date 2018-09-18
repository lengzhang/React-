import React from 'react'
import { render } from 'react-dom'

import './static/less/style.less'
import img from './static/img/react.jpg'

class Hello extends React.Component {
    render() {
        return(
            <div>
                <p>Hello React</p>
                <img src={img}/>
            </div>
        )
    }
}

render(
    <Hello/>,
    document.getElementById('root')
)

