import React, {cloneElement, Children} from 'react'

export default (props) => {
    return (
        <div>
            {
                Children.map(props.children, (el) => {
                    return cloneElement(el, props)
                })
            }
        </div>
    )
}