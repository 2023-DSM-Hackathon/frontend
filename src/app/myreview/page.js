"use client"

import { TitleLarge } from "../text";
import { useState } from "react";
import Header from "../components/common/Header";
import * as S from "./style";
import Review from "../components/common/Review";

const MyReview = () => {
    const [post, setPost]= useState([]);
    
    return(
        <S.FlexBox>
            <Header/>
                <S.FlexBox2>
                <S.Container>
                    <TitleLarge>내가 작성한 후기글</TitleLarge>
                    <S.PostContainer>
                        {
                            post.map(d=>
                                <Review {...d}/>
                            )
                        }
                    </S.PostContainer>
                </S.Container>  
            </S.FlexBox2>
        </S.FlexBox>
    )
}

export default MyReview