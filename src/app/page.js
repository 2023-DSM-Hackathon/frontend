"use client"
import { useEffect, useState } from "react";
import * as S from "./style";
import Header from "./components/common/Header";
import { ReviewIcon } from "../../public/assets/reviewIcon";
import { useRouter, useSearchParams } from "next/navigation";
import { color } from "./color";
import RecruitmentLarge from "./components/common/RecruitmentLarge";
import { Recruitment } from "../../public/assets/recruitment";
import Review from "./components/common/Review";
import axios from "axios";

const BASEURL = process.env.NEXT_PUBLIC_SERVER;


const Main = () => {
  const param = useSearchParams();
  const type = param.get('type');
  const router = useRouter();

  const [post, setPost] = useState([]);

  useEffect(()=>{
    if(!localStorage.getItem("token")) router.push('/login')
  },[])

  useEffect(()=>{
    const token = localStorage.getItem('token');

    if(type === "re"){
      axios
        .request({
            url: `${BASEURL}/reviews`,
            method: 'get',
            headers: {
              "Authorization": `Bearer ${token}`
            }
        })
        .then((res) => {
            setPost(res.data.reviews)
        })
        .catch(() => {
            alert('모집글 불러오기 실패');
        });
    }else{
      axios
      .request({
          url: `${BASEURL}/feeds`,
          method: 'get',
          headers: {
            "Authorization": `Bearer ${token}`
        }
      })
      .then((res) => {
          setPost(res.data.feeds)
      })
      .catch(() => {
          alert('모집글 불러오기 실패');
      });
    }
  },[type]);

    return(
        <S.FlexBox>
            <Header/>
                <S.FlexBox2>
                  <S.InfoContainer>
                    <S.BgImg>
                    </S.BgImg>
                    <S.TitleContainer>
                      <S.Title>
                        <p>같이 할 사람 모집!</p>
                        <S.LogoImg src="assets/AppLogo4.png"/>
                      </S.Title>
                      <S.SubTitleContainer>
                        <p>조깅</p>
                        <p>을 하면서 동시에</p>
                        <p>쓰레기</p>
                        <p>를 줍는 운동</p>
                      </S.SubTitleContainer>
                      <S.InfoBtn onClick={() => router.push('/info')}>더 알아보기</S.InfoBtn>
                    </S.TitleContainer>
                  </S.InfoContainer>
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
                    {
                      type === "re"?
                        <S.ReviewContainer>
                          {post.map((d,i)=>
                              <Review key={i} {...d}/>
                          )}
                        </S.ReviewContainer>
                        :
                        <S.PostContainer>
                          {post.map((d,i)=>
                            <RecruitmentLarge key={i} {...d}/>
                          )}
                        </S.PostContainer>
                    }
                </S.Container>  
            </S.FlexBox2>
        </S.FlexBox>
    )
}

export default Main;