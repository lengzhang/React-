import React from 'react'
import { render } from 'react-dom'

class Hello extends React.Component {
    render() {
        return(
            <div>Hello React 123</div>
        )
    }
}

render(
    <Hello/>,
    document.getElementById('root')
)

