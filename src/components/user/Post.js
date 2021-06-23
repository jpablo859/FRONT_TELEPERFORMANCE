import React from 'react'

export const Post = ({values: { id, title, body}}) => {
    return (
        <tr>
            <td>{ id }</td>
            <td>{ title }</td>
            <td>{ body }</td>
        </tr>
    )
}
