import * as S from "./style";

const Input = ({
    title,
    placeholder,
    type = "text",
    name,
    value,
    onChange,
  }) => {
    return(
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.Input 
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                name={name}
                value={value}
            />
        </S.Container>
    )
}

export default Input;