'use client';

import { useParams } from "next/navigation";
import { useEffect, useState } from "react"
import { PostDto } from "@/type/post";

export default function Detail() {

    const {id} = useParams(); //구조분해할당으로 객체에서 id 바로 가져옴

    const [post, setPost] = useState<PostDto | null>(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/posts/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setPost(data);
            })
    }, []);



    if (post === null) {
        return <div>로딩중...</div>
    }

    return (

        <div>
            <h1>상세 페이지</h1>
            <div>번호 : {post.id}</div>
            <div>제목 : {post.title}</div>
            <div>내용 : {post.content}</div>
        </div>

    )
}