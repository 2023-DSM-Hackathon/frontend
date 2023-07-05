import * as S from "./style";

const Input = ({
    title,
    placeholder,
    type = "text",
    name,
    value,
    onChange,
    width="100%",
    accept
  }) => {
    return(
        <S.Container width={width}>
            <S.Title>{title}</S.Title>
            <S.Input 
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                name={name}
                value={value}
                accept={accept}
            />
        </S.Container>
    )
}

export default Input;