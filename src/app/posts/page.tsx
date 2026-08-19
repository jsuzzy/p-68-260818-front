'use client';

import { useState, useEffect } from "react";

interface Post {
    id: number;
    title: string;
}

export default function Posts() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/v1/posts")
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
                        posts.map((p) => <li key={p.id}>{p.title}</li>)
                    }
                </ul>
        }
        </>
    )
}