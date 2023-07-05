import { Body2 } from "@/app/text";
import * as S from "./style";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const BASEURL = process.env.NEXT_PUBLIC_SERVER;


const Application = ({place,date, meeting_time, current_head_count, head_count, status,is_applied}) => {
    const router = useSearchParams();
    const postId = router.get('id');

    const application = () => {
        const token  = localStorage.getItem('token');

        
        axios
        .request({
            url: `${BASEURL}/feeds/${postId}`,
            method: is_applied ? "delete" : "post",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then((res) => {
            if(is_applied) alert("신청이 취소되었습니다.")
            else alert("신청이 완료되었습니다.")
        })
        .catch(() => {
            alert('신청 실패');
        });
    }
    return (
        <S.Container>
            <S.FixedContainer>
                <S.InfoContainer>
                    <S.InfoEachContainer>
                        <p>장소</p>
                        <p>{place}</p>
                    </S.InfoEachContainer>
                    <S.InfoEachContainer>
                        <p>날짜</p>
                        <p>{date}</p>
                    </S.InfoEachContainer>
                    <S.InfoEachContainer>
                        <p>시간</p>
                        <p>{meeting_time}</p>
                    </S.InfoEachContainer>
                    <S.InfoEachContainer>
                        <p>인원</p>
                        <p>{current_head_count} / {head_count}명</p>
                    </S.InfoEachContainer>
                    
                </S.InfoContainer>
                {
                    status==="OPEN"?
                        <S.BookBtn onClick={()=>application()} >{
                            is_applied ? 
                            "신청 취소": "신청하기"
                        }</S.BookBtn>
                    :
                        <S.BookBtn disabled>신청마감</S.BookBtn>
                }
                {/* <S.UserListContainer>
                    <Body2>현재 신청자 목록</Body2>
                    <S.UserList>
                        <p>1. 홍길동</p>
                        <p>2. 홍길동</p>
                        <p>3. 홍길동</p>
                        <p>4. 홍길동</p>
                    </S.UserList>
                </S.UserListContainer> */}
            </S.FixedContainer>
        </S.Container>
    )
}

export default Application;