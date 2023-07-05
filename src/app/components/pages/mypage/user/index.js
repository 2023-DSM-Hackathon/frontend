import { BodyLarge2 } from "@/app/text";
import * as S from "./style";
import { Crown } from "../../../../../../public/assets/crown";
import { color } from "@/app/color";

export const User = () => {
    return (
        <S.Container>
            <S.UserInfoContainer>
                <S.UserImg src="assets/user.png"/>
                <div>
                    <BodyLarge2>홍길동</BodyLarge2>
                    <div>
                        <div>
                            <p>아이디 : </p>
                            <p>성별 : </p>
                            <p>생년월일 : </p>
                        </div> 
                        <div>
                            <p>ㅇㅁㄴㅇㅁㄴㅇ</p>
                            <p>여성</p>
                            <p>2033.04.23</p>
                        </div>
                    </div>
                </div>
            </S.UserInfoContainer>
            <S.UserInfoContainer>
                <S.CrownContainer>
                    <Crown fill="#EAD947" width="80px"/>
                    <p>줍깅 모집<br/>5 / 3</p>
                </S.CrownContainer>
                <S.CrownContainer>
                    <Crown fill="#EAD947" width="80px"/>
                    <p>줍깅 참여 횟수<br/>1231 / 10</p>
                </S.CrownContainer>
                <S.CrownContainer>
                    <Crown fill={color.grayBase} width="80px"/>
                    <p>후기글 작성<br/>2 / 5</p>
                </S.CrownContainer>
            </S.UserInfoContainer>
        </S.Container>
    )
}

export default User;