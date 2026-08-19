'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { PostDto } from "@/type/post";


export default function Posts() {
    const [posts, setPosts] = useState<PostDto[]>([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/posts`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPosts(data);
            });
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