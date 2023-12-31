"use client"

import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import User from "../components/pages/mypage/user";
import * as S from "./style";
import Post from "../components/pages/mypage/post";
import axios from "axios";

const BASEURL = process.env.NEXT_PUBLIC_SERVER;


const Mypage = () =>{
    const [user, setUser] = useState();
    const [acachievements,setAchievements] =useState([]);
    const [feeds, setFeeds] = useState([]);
    const [applies, setApplies] = useState([]);
    const [reviews, setReviews] = useState([]);

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
            console.log(res.data)
            const data = res.data
            setUser(data.user_profile);
            setAchievements(data.achievements);
            setFeeds(data.feeds);
            setApplies(data.applies);
            setReviews(data.reviews);
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
                    <User {...user} acachievements={acachievements} len={[feeds.length, applies.length, reviews.length]}/>
                    <Post type={1} posts={feeds.slice(0,4)} title="내가 모집한 줍깅" link="/myrecruit"  />
                    <Post type={1} posts={applies.slice(0,3)} title="참가 신청한 줍깅" link="/book"  />
                    <Post type={2} posts={reviews.slice(0,3)} title="내가 작성한 후기글" link="/myreview"  />
                </S.Container>  
            </S.FlexBox2>
        </S.FlexBox>
    )
}

export default Mypage;