import React from 'react'

export default (props) =>
    "O numero aleatorio é : " + Math.random() * (props.max - props.min) + props.min;
