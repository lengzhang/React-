import React from 'react'

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        // 获取参数
        console.log(this.props.match.params.id)

        return(
            <div>
                <p>Detail page</p>
            </div>
        )
    }
}

export default Detail