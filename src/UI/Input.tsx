import React, { useState } from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// ANTD
import { Form, Input } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
// styled
import styled from 'styled-components'

interface IProps {
    label?: string
    name?: string
    type?: string
    required?: boolean
    style?: React.CSSProperties
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const CustomInput: React.FC<IProps> = ({label, name, type, required, style, onChange}) => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    // состояние видимости пароля
    const [passwordVisible, setPasswordVisible] = useState(false);

    // показываем / скрываем пароль
    const changePassVisible = () => {
        setPasswordVisible((prevState) => !prevState)
    }

    return (

        <InputStyle 
            style={style}
            className={colorTheme}
            label={<p className={colorTheme}>{label}</p>} 
            name={name}
            rules={[{ required: window.innerWidth > 450 ? required : false, message: `Поле не может быть пустым!` }]}
        > 
            {
                type === 'password' 
                ? (
                    <PassWrapper>
                        <Input
                            type={!passwordVisible ? type : 'text'} 
                            name={name} 
                            onChange={onChange} 
                            className={colorTheme}
                            style={{border: '1px solid'}}
                        />                                                   
                        <Eye onClick={changePassVisible}>
                            {passwordVisible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>}
                        </Eye>
                    </PassWrapper>
                )
                : (
                    <Input
                        type={type} 
                        name={name} 
                        onChange={onChange} 
                        className={colorTheme}
                        style={{border: '1px solid'}}
                    />
                )
            }
        </InputStyle>

    )
}

const InputStyle = styled(Form.Item)`
    .ant-form-item-row {
        display: flex;
        justify-content: space-between;
    }
    .ant-form-item-control {
        max-width: 80%;
    }

    @media (max-width: 450px) {
        .ant-form-item-row {
            flex-direction: column;
            align-items: flex-start;
        }

        .ant-form-item-control {
            max-width: inherit;
            width: 100%;
            margin: 0 0 20px 0;
        }
    }
`

const PassWrapper = styled.div`
    display: flex;
    align-items: center;
`

const Eye = styled.div`
    padding: 0 5px;
`

export default CustomInput