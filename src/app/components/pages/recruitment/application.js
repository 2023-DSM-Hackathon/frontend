import { Body2 } from "@/app/text";
import * as S from "./style";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const BASEURL = process.env.NEXT_PUBLIC_SERVER;


const Application = () => {
    const router = useSearchParams();
    const postId = router.get('id');

    const application = () => {
        const token  = localStorage.getItem('token');

        axios
        .request({
            url: `${BASEURL}/feeds/${postId}`,
            method: 'post',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        .then((res) => {
            alert("신청이 완료되었습니다.")
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
                        <p>대전광역시 바보구 하은동 가나다라 20-3</p>
                    </S.InfoEachContainer>
                    <S.InfoEachContainer>
                        <p>날짜</p>
                        <p>2022년 02월 32일</p>
                    </S.InfoEachContainer>
                    <S.InfoEachContainer>
                        <p>시간</p>
                        <p>14시 20분</p>
                    </S.InfoEachContainer>
                    <S.InfoEachContainer>
                        <p>인원</p>
                        <p>2 / 3명</p>
                    </S.InfoEachContainer>
                    
                </S.InfoContainer>
                <S.BookBtn onClick={()=>application()}>신청하기</S.BookBtn>
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