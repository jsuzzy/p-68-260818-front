'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { PostDto } from "@/type/post";
import { fetchApi } from "@/lib/client";


export default function Posts() {
    const [posts, setPosts] = useState<PostDto[]>([]);

    useEffect(() => {
        fetchApi(`/api/v1/posts`)
            .then(setPosts);
    }, []);

    return (
        <>
            {
                posts.length === 0
                    ? <div>로딩중..</div>
                    : <ul>
                        {
                            posts.map((post) => (
                                <Link key={post.id} href={`/posts/${post.id}`} >
                                    <li>{post.id} : {post.title}</li>
                                </Link>
                            ))}
                    </ul >
            }
        </>
    )
}