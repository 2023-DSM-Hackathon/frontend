"use client"

import { TitleLarge } from "../text";
import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import * as S from "./style";
import RecruitmentLarge from "../components/common/RecruitmentLarge";
import axios from "axios";

const BASEURL = process.env.NEXT_PUBLIC_SERVER;

const MyRecruit = () => {
    const [post, setPost]= useState([]);

    useEffect(()=>{
        const token = localStorage.getItem('token');

        axios
        .request({
            url: `${BASEURL}/users`,
            method: 'get',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then((res) => {
            const data = res.data
            setPost(data.feeds);
        })
        .catch(() => {
            alert('내 글 불러오기 실패');
        });
    },[])

    return(
        <S.FlexBox>
            <Header/>
                <S.FlexBox2>
                <S.Container>
                    <TitleLarge>내가 모집한 줍깅</TitleLarge>
                    <S.PostContainer>
                        {
                            post.map((d,i)=>
                                <RecruitmentLarge key={i} {...d}/>
                            )
                        }
                    </S.PostContainer>
                </S.Container>  
            </S.FlexBox2>
        </S.FlexBox>
    )
}

export default MyRecruit