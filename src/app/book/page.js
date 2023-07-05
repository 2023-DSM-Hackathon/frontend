"use client"

import { TitleLarge } from "../text";
import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import * as S from "./style";
import RecruitmentLarge from "../components/common/RecruitmentLarge";
import axios from "axios";

const MyBook = () => {
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
            setPost(data.applies);
        })
        .catch(() => {
            alert('내 정보 불러오기 실패');
        });
    },[])
    
    return(
        <S.FlexBox>
            <Header/>
                <S.FlexBox2>
                <S.Container>
                    <TitleLarge>참가 신청한 줍깅</TitleLarge>
                    <S.PostContainer>
                        {
                            post.map(d=>
                                <RecruitmentLarge {...d}/>
                            )
                        }
                    </S.PostContainer>
                </S.Container>  
            </S.FlexBox2>
        </S.FlexBox>
    )
}

export default MyBook;