import React from 'react'

const Post = (props) => {
//    const onClickHandler = (id) => {
//     console.log(id);
//     }
  return (
    <div className="Content" onClick={props.selectedPost}>
            <h1> {props.title}</h1>
            <div className="Field">
                {props.author}
            </div>
        </div>
  )
}

export default Post