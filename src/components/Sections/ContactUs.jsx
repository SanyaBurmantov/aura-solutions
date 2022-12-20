import React, {useCallback, useEffect, useState} from 'react';
import {safePreventDefault} from "react-slick/lib/utils/innerSliderUtils";
import styled from "styled-components";
import {useInput} from "../../hooks/UseInput";


export const ContactUs = () => {
    const styleForm = {

        textAlign: "center",
        padding: "20px",

    }
    const input = {
        width: "50%",
        padding: "8px",
        margin: "10px"

    }

    const inputComment = {
        width: "50%",
        padding: "8px",
        margin: "10px",
        height: "100px",
        textWrap: 'wrap'
    }
    const btn = {
        color: '#707070',
        border: '1px solid #707070',
        backgroundColor: 'transparent',
        width: '190px'
    }
    const btnActive = {
        border: '1px solid #7620ff',
        backgroundColor: '#7620ff',
        color: '#fff',
        width: '190px'
    }

    const formWasSend = {
        textAlign: "center",
        justifyContent: 'center',
    }



    const [sendData, setSendData] = useState(false);
    const nameInputHooks = useInput('', {isEmpty: true, testName: true, minLength: 3})
    const postInputHooks = useInput('', {isEmpty: true, testPost: true, minLength: 5})
    const commentInputHooks = useInput('')

    let [name, setName] = useState('')



    let [post, setPost] = useState('')

    let [comment, setComment] = useState('')

    let tgData = {};
    useEffect(() => {
        tgData = {name, post, comment}
    }, [tgData])


    const onChangeName = (e) => {
        setName(e.target.value);
        nameInputHooks.onChange(e)
    }
    const onChangePost = (e) => {
        setPost(e.target.value);
        postInputHooks.onChange(e);
    }
    const onChangeComment = (e) => {
        let comment = e.target.value;
        setComment(comment);
        commentInputHooks.onChange(e);
    }

     const onSendData = () => {

        const token = "5621492401:AAEJ27Fka_ZcAydwa4LvXt4u2USCG0LxNs8";
        const chatIdBaha = "402433086";
        const chatIdSanya = "408745156";

        let message = "Новая заявка %0AКлиент: " + tgData.name + "%0AПочта: " + tgData.post + "%0AКомментарий: " + tgData.comment;

        const URL_API_1 = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatIdBaha}&text=${message}&parse_mode=html`;
        let api = new XMLHttpRequest();
        api.open("GET", URL_API_1, true);
        api.send();

    }

    let doForm = function (event) {
        event.preventDefault();
        onSendData();
        setSendData(true)
    }

    return (
        <section id='contact' className="sc-bZSRNg eDULaS">
            <div className="lightBg ">
                {sendData ? (
                    <>
                        <FlexContainer style={formWasSend}>
                            <div className='lgXLZF' style={formWasSend}>
                                <h1 className="font40 extraBold">Thank you for choosing us!</h1>
                                <p className="font13 semiBold">Managers will contact you shortly</p>
                            </div>
                        </FlexContainer>
                    </>
                ) : (
                    <>
                        <FlexContainer className="container">
                        <div className="lgXLZF">
                            <h1 className="font40 extraBold">Contact Us</h1>
                            <p className="font13 semiBold">Fill out the form and we will contact with you in the near future.</p>
                            <p className="font13 semiBold">You can also email us hi@aura-solutions.tech</p>
                        </div>
                        <form onSubmit={doForm} style={styleForm} className='radius8'>
                            {(nameInputHooks.isDirty && nameInputHooks.isEmpty) &&
                                <div style={{color: 'red'}}>
                                    The field cannot be empty</div>}
                            {(nameInputHooks.isDirty && nameInputHooks.minLengthError) &&
                                <div style={{color: 'red'}}>
                                    The field must contain more than 2 characters</div>}
                            {(nameInputHooks.isDirty && nameInputHooks.nameError) &&
                                <div style={{color: 'red'}}>Only letters can be entered</div>}
                            <input className="radius8" style={input}
                                   type='text'
                                   placeholder='How to approach you'
                                   value={nameInputHooks.value}
                                   onBlur={e => nameInputHooks.onBlur(e)}
                                   onChange={onChangeName}
                            />
                            {(postInputHooks.isDirty && postInputHooks.isEmpty) &&
                                <div style={{color: 'red'}}>Поле не может быть пустым</div>}
                            {(postInputHooks.isDirty && postInputHooks.minLengthError) &&
                                <div style={{color: 'red'}}>Поле должно содержать более 2 символов</div>}

                            <input className="radius8" style={input}
                                   type='text'
                                   placeholder='Your email address'
                                   value={postInputHooks.value}
                                   onBlur={e => nameInputHooks.onBlur(e)}
                                   onChange={onChangePost}
                            />
                            <textarea className="radius8" style={inputComment}
                                   type='text'
                                   size="10"

                                   placeholder='A comment'
                                   value={commentInputHooks.value}
                                   onBlur={e => commentInputHooks.onBlur(e)}
                                   onChange={onChangeComment}
                            />
                            <div>
                                <Button disabled={!postInputHooks.inputValid || !nameInputHooks.inputValid}
                                        style={(!postInputHooks.inputValid || !nameInputHooks.inputValid)? btn : btnActive} type="submit">Write me
                                </Button>
                            </div>
                        </form>
                        </FlexContainer>
                    </>
                    )}
            </div>
        </section>
)
}

export default ContactUs;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width:100%;
  @media (max-width: 860px) {
    display: block;
    text-align: center;
  }
`;

const Button = styled.button`
    border: 1px solid rgb(118, 32, 255);
    background-color: rgb(118, 32, 255);
    width: 100%;
    padding: 15px;
    outline: none;
    color: rgb(255, 255, 255);
    border-radius: 1rem;
    cursor: pointer;
`