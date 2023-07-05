import * as S from "./style"

const Review = ({title, content, name, img}) => {
    return(
        <S.Container>
            <div>
                <S.Title>{title}</S.Title>
                {img && <img src={img}/>}
                <S.Content line={img ? 3:7}>{content}</S.Content>
            </div>
            <S.NameContainer>
                <p>{name}</p>
            </S.NameContainer>
        </S.Container>
    )
}

export default Review