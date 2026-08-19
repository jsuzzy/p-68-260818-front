'use client';

import { fetchApi } from "@/lib/client";

export default function Write() {

    const onSubmitHandle = (e: any)=>{
        e.preventDefault(); //기본 기능 막음 -> 제출 버튼 눌러도 전송 안 됨

        const form = e.target;

        const titleValue = form.title.value;
        const contentValue = form.content.value;

        if(titleValue.length === 0){
            alert("제목을 입력해 주세요.");
            form.title.focus();
            return;
        }

        if(contentValue.length === 0){
            alert("내용을 입력해 주세요.")
            form.content.focus();
            return;
        }

        

    }

    return (
        <div>
            <h1>글 작성 페이지</h1>
            <form
                onSubmit={onSubmitHandle}
                className="flex flex-col gap-4">
                <input
                    className="p-2 border-2 rounded"
                    type="text"
                    name="title"
                    placeholder="제목을 입력해 주세요." />
                <textarea
                    className="p-2 border-2 rounded"
                    name="content"
                    placeholder="내용을 입력해 주세요."></textarea>
                <input className="p-2 border-2 rounded" type="submit" value="등록" />
            </form>
        </div>
    );
}