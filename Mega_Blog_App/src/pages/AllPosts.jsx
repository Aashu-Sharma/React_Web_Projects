import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
// import databaseService from '../appwrite/appwriteconfig';
import { PostCard, Container } from '../components/index'

function AllPosts() {
    // const [posts, setPosts] = useState([]);
    // useEffect(() => {
    //     databaseService.getPosts([])
    //         .then((posts) => {
    //             if (posts) {
    //                 console.log(posts)
    //                 setPosts(posts.documents);
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //         })
    // }, [])

    const posts = useSelector((state) => state.post.posts);
    console.log(posts); 
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id}>
                            <PostCard {...post} className='p-2 w-1/4' />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts