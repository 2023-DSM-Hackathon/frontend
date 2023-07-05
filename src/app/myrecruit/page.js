"use client"

import { TitleLarge } from "../text";
import { useState } from "react";
import Header from "../components/common/Header";
import * as S from "./style";
import RecruitmentLarge from "../components/common/RecruitmentLarge";

const MyRecruit = () => {
    const [post, setPost]= useState([]);
    
    return(
        <S.FlexBox>
            <Header/>
                <S.FlexBox2>
                <S.Container>
                    <TitleLarge>내가 모집한 줍깅</TitleLarge>
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

export default MyRecruit