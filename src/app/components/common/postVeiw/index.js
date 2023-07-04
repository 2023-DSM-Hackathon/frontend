import { TitleLarge } from "@/app/text";
import * as S from "./style";

const PostVeiw = ({title, name, content}) => {
    return (
        <S.Container>
            <S.TitleContainer>
                <TitleLarge>{title}</TitleLarge>
                <S.Name>{name}</S.Name>
            </S.TitleContainer>
            <S.TextContainer>{content}</S.TextContainer>
        </S.Container>
    )
}

export default PostVeiw;