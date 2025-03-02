import React from 'react'
import databaseService from '../appwrite/appwriteconfig';
import {Link} from 'react-router-dom'
function PostCard({$id, title, featured_image}) {

  console.log(featured_image)
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={databaseService.getFilePreview(featured_image)} alt= {title} className='rounded-xl'/>
            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard