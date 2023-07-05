import { useRouter } from "next/navigation"
import * as S from "./style"

const Review = ({title, content, nickname, image_url, id}) => {
    const router = useRouter();

    return(
        <S.Container onClick={()=> router.push(`/review?id=${id}`)}>
            <div>
                <S.Title>{title}</S.Title>
                {image_url && <img src={image_url}/>}
                <S.Content line={image_url ? 3:7}>{content}</S.Content>
            </div>
            <S.NameContainer>
                <p>{nickname}</p>
            </S.NameContainer>
        </S.Container>
    )
}

export default Review