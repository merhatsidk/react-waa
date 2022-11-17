import React from 'react'

const PostDetails = (props) => {
  //console.log(props)
  return (
    <div>
        <h1> Hello  {props.postDetail[0].title }</h1>
    </div>
  )
}

export default PostDetails