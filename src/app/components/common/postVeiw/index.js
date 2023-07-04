import { TitleLarge } from "@/app/text";
import * as S from "./style";

const PostVeiw = ({title, name, content,img}) => {
    return (
        <S.Container>
            <S.TitleContainer>
                <TitleLarge>{title}</TitleLarge>
                <S.Name>{name}</S.Name>
            </S.TitleContainer>
            <S.TextContainer>
                {img && <S.ContentImg src={img}/>}
                <S.TexArea>{content}</S.TexArea>
            </S.TextContainer>
        </S.Container>
    )
}

export default PostVeiw;