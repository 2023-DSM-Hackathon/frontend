import { TitleLarge } from "@/app/text";
import * as S from "./style";

const PostVeiw = ({title, nickname, content, img}) => {
    return (
        <S.Container>
            <S.TitleContainer>
                <TitleLarge>{title}</TitleLarge>
                <S.Name>{nickname}</S.Name>
            </S.TitleContainer>
            <S.TextContainer>
                {img && <S.ContentImg src={img}/>}
                <S.TexArea>{content}</S.TexArea>
            </S.TextContainer>
        </S.Container>
    )
}

export default PostVeiw;