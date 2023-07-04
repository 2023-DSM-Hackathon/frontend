import { Body2 } from "@/app/text";
import * as S from "./style";

const Application = () => {
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
                <S.BookBtn>신청하기</S.BookBtn>
                <S.UserListContainer>
                    <Body2>현재 신청자 목록</Body2>
                    <S.UserList>
                        <p>1. 홍길동</p>
                        <p>2. 홍길동</p>
                        <p>3. 홍길동</p>
                        <p>4. 홍길동</p>
                    </S.UserList>
                </S.UserListContainer>
            </S.FixedContainer>
        </S.Container>
    )
}

export default Application;