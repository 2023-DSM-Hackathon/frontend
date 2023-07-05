"use client"
import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import PostVeiw from "../components/common/postVeiw";
import * as S from "./style";

import { useSearchParams } from "next/navigation"
import Application from "../components/pages/recruitment/application";
import axios from "axios";

const BASEURL = process.env.NEXT_PUBLIC_SERVER;

const Recruitment = () => {
    const router = useSearchParams();
    const postId = router.get('id');
    const [post, setPost] = useState();

    useEffect(()=>{
        const token = localStorage.getItem('token');

        axios
        .request({
            url: `${BASEURL}/feeds/${postId}`,
            method: 'get',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then((res) => {
            setPost(res.data);
        })
        .catch(() => {
            alert('불러오기 실패');
        });
    })

    return(
        <S.FlexBox>
            <Header/>
                <S.FlexBox2>
                <S.Container>
                    <PostVeiw {...post}/>
                    <Application {...post}/>
                </S.Container>  
            </S.FlexBox2>
        </S.FlexBox>
    )
}

export default Recruitment