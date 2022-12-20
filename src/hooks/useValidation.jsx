import {useEffect, useState} from "react";

export const useValidation = (value, validations) => {

    const [isEmpty, setEmpty] = useState(true)
    const [minLengthError, setMinLengthError] = useState(false)
    const [isPhone, setPhone] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [PostError, setPostError] = useState(false)
    const [inputValid, setInputValid] = useState(false)


    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'testName':
                    const reg = /[^a-zа-яё\s]/gi;
                    reg.test(String(value).toLowerCase()) ? setNameError(true) : setNameError(false)
                    break;
                case 'testPost':
                    const reg1 = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
                    reg1.test(String(value).toLowerCase()) ? setPostError(true) : setPostError(false)
                    break;
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || minLengthError || isPhone || nameError || PostError) {
            setInputValid(false)
        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, isPhone, nameError, PostError])

    return {
        isEmpty,
        minLengthError,
        isPhone,
        inputValid,
        nameError,
        PostError
    }
}

