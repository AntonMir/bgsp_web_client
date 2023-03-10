import React, { useCallback, useEffect } from 'react'
// styled
import styled from 'styled-components'
// react-router-dom
import { useNavigate } from 'react-router-dom'
// UI
import Text from 'UI/Text'
// antd
import { CloseOutlined } from '@ant-design/icons'


const PrivacyPolicy: React.FC = () => {

    const navigate = useNavigate()

    // при переходе на страницу, сразу пролистываем ее к началу
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])        

    // вернуться обратно
    const hiddenPrivacyPolicy = useCallback(() => {
        navigate(-1)
    }, [navigate])


    return (
        <Text 
            style={{
                position: 'absolute', 
                top: 0, 
                zIndex: '9999'
            }}
            text={
                <PrivacyPolicyStyled>
                    <h1>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h1>
                    <p>Политика в отношении обработки персональных данных (далее – Политика) разработана в целях обеспечения реализации требований законодательства РФ в области обработки персональных данных субъектов персональных данных.</p>
                    
                    <p>1. ОПРЕДЕЛЕНИЕ ТЕРМИНОВ</p>
                    <p>1.1 Администрация Cайта – уполномоченные сотрудники на управления сайтом, которые организуют и (или) осуществляет обработку персональных данных, а также определяет цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.</p>
                    <p>1.2. Персональные данные – любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).</p>
                    <p>1.3. Обработка персональных данных - любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.</p>
                    <p>1.4. Конфиденциальность персональных данных - обязательное для соблюдения Обществом или иным получившим доступ к персональным данным лицом требование не допускать их распространения без согласия субъекта персональных данных или наличия иного законного основания.</p>
                    <p>1.5. Пользователь сайта (далее - Пользователь) – лицо, имеющее доступ к Сайту, посредством сети Интернет.</p>
                    
                    <p>2. ОБЩИЕ ПОЛОЖЕНИЯ</p>
                    <p>2.1. Использование Пользователем сайта bgsp.ru (далее - Сайт) означает согласие с настоящей Политикой конфиденциальности и условиями обработки персональных данных Пользователя.</p>
                    <p>2.2. В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить использование Сайта.</p>
                    <p>2.3. Политика в отношении обработки персональных данных определяет порядок сбора, хранения, передачи и иных видов обработки персональных данных, а также сведения о реализуемых требованиях к защите персональных данных.</p>
                    <p>2.4. Политика является общедоступным документом, устанавливающим основы деятельности Общества при обработке персональных данных.</p>
                    <p>2.5. Политика разработана в соответствии с действующим законодательством РФ.</p>

                    <p>3. ОСНОВНЫЕ УСЛОВИЯ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ</p>
                    <p>3.1. Обработка и обеспечение безопасности персональных данных осуществляется Администрацией сайта в соответствии с требованиями:</p> 
                    <ul>
                        <li>Федерального закона № 152-ФЗ «О персональных данных»;</li>
                        <li>иных нормативных актов, определяющих случаи и особенности обработки персональных данных;</li> 
                        <li>настоящей Политики конфиденциальности. </li>
                    </ul>
                            
                    <p>4. ПРАВА СУБЪЕКТА ПЕРСОНАЛЬНЫХ ДАННЫХ</p>
                    <p>4.1. Субъект персональных имеет право на получение информации об обработке его персональных данных Обществом.</p>
                    <p>4.2. Субъект персональных данных вправе требовать от Общества уточнения обрабатываемых Обществом персональных данных субъекта персональных данных, их блокирования или уничтожения в случае, если персональные данные являются неполными, устаревшими, неточными, а также принимать предусмотренные законом меры по защите своих прав.</p>
                    <p>4.3. Для реализации своих прав и защиты законных интересов, субъект персональных данных имеет право обратиться к Обществу. Общество рассматривает обращения и жалобы со стороны субъектов персональных данных, принимает все необходимые меры для немедленного устранения любых нарушений прав субъектов персональных данных и урегулирования спорных и конфликтных ситуаций в досудебном порядке.</p>
                    
                    <p>5. ПРАВА АДМИНИСТРАЦИИ САЙТА</p>
                    <p>5.1. Администрация Сайта как Оператор персональных данных вправе:</p>
                    <ul>
                        <li>отстаивать свои интересы в суде;</li>
                        <li>предоставлять персональные данные субъектов третьим лицам, если это предусмотрено действующим законодательством (налоговые, правоохранительные органы и др.);</li>
                        <li>отказывать в предоставлении персональных данных в случаях предусмотренных законодательством;</li>
                        <li>использовать персональные данные субъекта без его согласия, в случаях предусмотренных законодательством.</li>
                    </ul>
                    
                    <p>6. МЕРЫ  ЗАЩИТЫ ПЕРСОНАЛЬНЫХ ДАННЫХ</p>
                    <p>6.1. Общество при обработке персональных данных принимает все необходимые меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных в соответствии с требованиями действующего законодательства, в том числе, законодательства о персональных данных.</p>
                    
                    <p>7. ЗАКЛЮЧИТЕЛЬНЫЕ ПОЛОЖЕНИЯ</p>
                    <p>7.1. Настоящая Политика подлежит изменению, дополнению в случае появления новых законодательных актов и специальных нормативных документов по обработке и защите персональных данных.</p>
                    <p>7.2. Новая Политика конфиденциальности вступает в силу с момента ее размещения на Сайте, если иное не предусмотрено новой редакцией Политики конфиденциальности.</p>
                    <p>7.3. Контроль исполнения требований настоящей Политики осуществляется ответственным сотрудником за обеспечение безопасности персональных данных.</p>
                    <CloseBtn onClick={hiddenPrivacyPolicy}>
                        <CloseOutlined/>
                    </CloseBtn>
                </PrivacyPolicyStyled>
            } 
        />
    )
}

const PrivacyPolicyStyled = styled.div`
    border: 5px #000 solid;
    font-family: 'Open Sans', sans-serif;
    padding: 1em;
    overflow: hidden;

    > h1 {
        font-size: 20px;

        @media (max-width: 450px) {
            margin-top: 30px;
        }
        @media (max-width: 408px) {
            margin-top: 5px;
        }
    }

    > * {
        font-weight: 300;
        font-size: 14px;
    }
`

const CloseBtn = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    background-color: red;
    padding: 10px 15px;
    box-shadow: 0px 0px 5px #000;

    :active {
        box-shadow: 0px 0px 2px #000;
    }
`

export default PrivacyPolicy