import { BodyLarge2 } from "@/app/text";
import * as S from "./style";
import { Crown } from "../../../../../../public/assets/crown";
import { color } from "@/app/color";

export const User = ({id, nickname, birth_date, account_id, gender, acachievements}) => {
    return (
        <S.Container>
            <S.UserInfoContainer>
                <S.UserImg src="assets/user.png"/>
                <div>
                    <BodyLarge2>{nickname}</BodyLarge2>
                    <div>
                        <div>
                            <p>아이디</p>
                            <p>성별</p>
                            <p>생년월일</p>
                        </div> 

                        <div>
                            <p>{account_id}</p>
                            <p>{gender}</p>
                            <p>{birth_date}</p>
                        </div>
                    </div>
                </div>
            </S.UserInfoContainer>
            <S.UserInfoContainer>
                {
                    acachievements.map(d=>
                        <S.CrownContainer>
                            <Crown fill={d.success? "#EAD947": color.grayBase} width="80px"/>
                            <p>{d.content}</p>
                        </S.CrownContainer>
                    )
                }
            </S.UserInfoContainer>
        </S.Container>
    )
}

export default User;