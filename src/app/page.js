"use client"
import { useState } from "react";
import * as S from "./style";
import Header from "./components/common/Header";
import { Review } from "../../public/assets/review";
import { useRouter, useSearchParams } from "next/navigation";
import { color } from "./color";
import RecruitmentLarge from "./components/common/RecruitmentLarge";
import { Recruitment } from "../../public/assets/recruitment";
import PostVeiw from "./components/common/postVeiw";

const Main = () => {
  const param = useSearchParams();
  const type = param.get('type');
  const router = useRouter();

  const [post, setPost] = useState([{
    "id": 1,
		"nickname": "닉네임",
		"title": "제목",
		"content": "내용",
		"image_url": "이미지 url",
		"comment_count": 3
  }]);

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
                          <Review/>
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
                          <Review fill={color.grayBase}/>
                          <p>후기</p>
                        </S.SelectButton>
                      </>
                    }
                  </S.SelectContainer>
                  <S.PostContainer>
                    {
                      post.map(d=>{
                        return(
                          <>
                            {type === "re"?
                            <Review {...d}/>
                            :
                            <RecruitmentLarge {...d}/>
                          }
                          </>
                        )
                      })
                    }
                  </S.PostContainer>
                </S.Container>  
            </S.FlexBox2>
        </S.FlexBox>
    )
}

export default Main;