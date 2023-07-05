"use client"
import { useState } from "react";
import * as S from "./style";
import Header from "./components/common/Header";
import { ReviewIcon } from "../../public/assets/reviewIcon";
import { useRouter, useSearchParams } from "next/navigation";
import { color } from "./color";
import RecruitmentLarge from "./components/common/RecruitmentLarge";
import { Recruitment } from "../../public/assets/recruitment";
import Review from "./components/common/Review";

const Main = () => {
  const param = useSearchParams();
  const type = param.get('type');
  const router = useRouter();

  const [post, setPost] = useState([]);

    return(
        <S.FlexBox>
            <Header/>
                <S.FlexBox2>
                <S.Container>
                  <S.SelectContainer>
                    {
                    type === "re" ?
                      <>
                        <S.SelectButton color={color.grayBase} onClick={()=>router.push('/')}>
                          <Recruitment fill={color.grayBase}/>
                          <p>모집</p>
                        </S.SelectButton>
                        <S.SelectButton onClick={()=>router.push('/?type=re')}>
                          <ReviewIcon/>
                          <p>후기</p>
                        </S.SelectButton>
                      </>
                    :
                      <>
                        <S.SelectButton onClick={()=>router.push('/')}>
                          <Recruitment fill="black"/>
                          <p>모집</p>
                        </S.SelectButton>
                        <S.SelectButton color={color.grayBase} onClick={()=>router.push('/?type=re')}>
                          <ReviewIcon fill={color.grayBase}/>
                          <p>후기</p>
                        </S.SelectButton>
                      </>
                    }
                  </S.SelectContainer>
                    {/* {
                      post.map(d=>{
                        return(
                          <>
                            {type === "re"?
                            <S.ReviewContainer>
                              <Review {...d}/>
                            </S.ReviewContainer>
                            :
                            <S.PostContainer>
                              <RecruitmentLarge {...d}/>
                            </S.PostContainer>
                          }
                          </>
                        )
                      })
                    } */}

                    {
                      type === "re"?
                        <S.ReviewContainer>
                          {post.map(d=>
                              <Review {...d}/>
                          )}
                        </S.ReviewContainer>
                        :
                        <S.PostContainer>
                          {post.map(d=>
                            <RecruitmentLarge {...d}/>
                          )}
                        </S.PostContainer>
                    }
                </S.Container>  
            </S.FlexBox2>
        </S.FlexBox>
    )
}

export default Main;