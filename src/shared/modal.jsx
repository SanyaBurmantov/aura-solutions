import React, {useCallback, useEffect, useState} from 'react';
import './modal.css'
import {useInput} from "../hooks/UseInput";
import {safePreventDefault} from "react-slick/lib/utils/innerSliderUtils";


export const Modal = () => {
    const styleForm = {
        border: "1px solid red",

        padding: "20px",

    }

    const [sendData, setSendData] = useState(false);
    const nameInputHooks = useInput('', {isEmpty: true, testName: true, minLength: 5})
    const postInputHooks = useInput('', {isEmpty: true, testName: true, minLength: 5})
    const commentInputHooks = useInput('')

    const [name, setName] = useState('');

    const [post, setPost] = useState('');

    const [comment, setComment] = useState('');

    useEffect(() => {

    })
    const onChangeName = (e) => {
        console.log(e)
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

     const onSendData = useCallback(() => {
        const token = "5621492401:AAEJ27Fka_ZcAydwa4LvXt4u2USCG0LxNs8";
        const chatIdBaha = "402433086";
        const chatIdSanya = "408745156";
        const data = {name, post, comment};
        let message = "Новая заявка %0AКлиент: " + name + "%0AПочта: " + post + "%0AКомментарий: " + comment;
        console.log(data);
        const URL_API_1 = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatIdSanya}&text=${message}&parse_mode=html`;
        let api = new XMLHttpRequest();
        api.open("GET", URL_API_1, true);
        api.send();

    }, [])

    let doForm = function(event){
        event.preventDefault();
        onSendData();
        setSendData(true)
    }

    return (
        <section className="sc-bZSRNg eDULaS">
            <div className="lightBg ">
                <div className="container flex flexSpaceNull">
                    <div className="lgXLZF">
                        <h1 className="font40 extraBold">Contact Us</h1>
                        <p className="font13">Fill out the form and we will contact with you in the near future.</p>
                        <p className="font13">You can also email us hi@aura-solutions.tech</p>
                    </div>
                    <form onSubmit={doForm} style={styleForm} className='radius8'>
                        {(nameInputHooks.isDirty && nameInputHooks.isEmpty) &&
                            <div style={{color: 'red'}}>Поле не может быть пустым</div>}
                        {(nameInputHooks.isDirty && nameInputHooks.minLengthError) &&
                            <div style={{color: 'red'}}>Поле должно содержать более 2 символов</div>}
                        {(nameInputHooks.isDirty && nameInputHooks.nameError) &&
                            <div style={{color: 'red'}}>Можно вводить только буквы</div>}
                        <input className=''
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
                        {(postInputHooks.isDirty && postInputHooks.nameError) &&
                            <div style={{color: 'red'}}>Можно вводить только буквы</div>}
                        <input className=''
                               type='text'
                               placeholder='Your email address'
                               value={postInputHooks.value}
                               onBlur={e => nameInputHooks.onBlur(e)}
                               onChange={onChangePost}
                        />
                        <input className=''
                               type='text'
                               placeholder='A comment'
                               value={commentInputHooks.value}
                               onBlur={e => commentInputHooks.onBlur(e)}
                               onChange={onChangeComment}
                        />
                        <button disabled={!postInputHooks.inputValid || !nameInputHooks.inputValid} className='sc-jrAFXE ggGZGd animate pointer radius8'
                                type="submit">Write me
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Modal;

