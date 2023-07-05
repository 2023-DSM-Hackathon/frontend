"use client"

import { useSearchParams } from "next/navigation";
import * as S from "./style";
import PostVeiw from "../components/common/postVeiw";
import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Comment from "../components/pages/review/comment";
import axios from "axios";

const BASEURL = process.env.NEXT_PUBLIC_SERVER;


const Review = () => {
    const router = useSearchParams();
    const postId = router.get('id');

    const [post, setPost] = useState({
        "id": 1,
        "image_url": "",
        "title": "",
        "content": "",
        "nickname": "",
        "comments": []
    });

    useEffect(()=>{
        const token  = localStorage.getItem('token');

        axios
        .request({
            url: `${BASEURL}/reviews/${postId}`,
            method: 'get',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then((res) => {
            setPost(res.data)
        })
        .catch(() => {
            alert('게시글 불러오기 실패');
        });

    },[]);

    return(
        <S.FlexBox>
            <Header/>
            <S.FlexBox2>
                <S.Container>
                    <PostVeiw title={post.title} nickname={post.nickname} content={post.content} img={post.image_url}/>
                    <Comment comments={post.comments}/>
                </S.Container>
            </S.FlexBox2>
        </S.FlexBox>
    )
}

export default Review;