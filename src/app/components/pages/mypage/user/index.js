import { BodyLarge2 } from "@/app/text";
import * as S from "./style";
import { Crown } from "../../../../../../public/assets/crown";
import { color } from "@/app/color";

export const User = ({id, nickname, birth_date, account_id, sex, acachievements, len}) => {
    const suc = [3, 10,5]
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
                            <p>{sex === "FEMALE" ? "남성":"여성"}</p>
                            <p>{birth_date}</p>
                        </div>
                    </div>
                </div>
            </S.UserInfoContainer>
            <S.UserInfoContainer>
                {
                    acachievements.map((d,i)=>
                        <S.CrownContainer key={i}>
                            <Crown fill={len[i] >=suc[i] ? "#EAD947": color.grayBase} width="80px"/>
                            <p>{d.content.split(" ")[0]+" "+d.content.split(" ")[1]} <br/> {len[i]} / {suc[i]}</p>
                        </S.CrownContainer>
                    )
                }
            </S.UserInfoContainer>
        </S.Container>
    )
}

export default User;