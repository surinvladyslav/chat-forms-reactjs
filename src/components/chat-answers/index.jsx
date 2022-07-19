import React, {useEffect} from 'react';

import {useState} from "react";
import cx from "classnames";
import {useContext} from "../../store/context";
import random from "../../hooks/useRandom";
import {actions} from "../../store/reducers";

import './index.scss';
import Scrollable from "../scrollable";
import useOnceCall from "../../hooks/useOnceCall";

const ChatAnswers = () => {
    const { dispatch, chatPopupAnswers, chatIndex, formData, chatAnswers } = useContext();
    const [checked, setChecked] = useState(false)
    const [id, setId] = useState()

    function handleOutside() {
        setTimeout(() => {
            dispatch({type: actions.CHAT_POPUP_ANSWERS, payload: false})
        }, 200)
    }

    function clickAnswer(event) {
        console.log(event.currentTarget.getAttribute('data-answer-id'));
        console.log(event.target.checked);
        // setId(event.currentTarget.getAttribute('data-answer-id'))
        // chatAnswers.find((question) => {
        //     if(question.itemId === id) {
        //         question.checked = true
        //         console.log('hhhhhhhhh')
        //     }
        // })
    }

    useOnceCall(() => {
        if (formData) {
            formData.items[chatIndex].questionItem.question.choiceQuestion &&
            formData.items[chatIndex].questionItem.question.choiceQuestion.options.map((question, i) => {
                chatAnswers.push({
                    ...question,
                    itemId: random(),
                    checked: false,
                })
            })
        }
    })

    return (
        <div
            className={cx("btn-menu top-left", {"active": chatPopupAnswers})}
            onMouseLeave={handleOutside}
        >
            {/*{*/}
            {/*    chatAnswers.map((question, i) => (*/}
            {/*        <label*/}
            {/*            className="checkbox-field checkbox-ripple hover-effect rp"*/}
            {/*            // onClick={clickAnswer}*/}
            {/*            key={i}*/}
            {/*        >*/}
            {/*            <input*/}
            {/*                className="checkbox-field-input"*/}
            {/*                style={{opacity: 1}}*/}
            {/*                data-answer-id={question.itemId}*/}
            {/*                name={formData.items[chatIndex].questionItem.question.questionId}*/}
            {/*                type={formData.items[chatIndex].questionItem.question.choiceQuestion.type.toLowerCase()}*/}
            {/*                onClick={clickAnswer}*/}
            {/*            />*/}
            {/*            <div className={cx("checkbox-box",*/}
            {/*                {*/}
            {/*                    "radio": formData.items[chatIndex].questionItem.question.choiceQuestion.type.toLowerCase() === 'radio',*/}
            {/*                    "active": question.checked*/}
            {/*                }*/}
            {/*            )}>*/}
            {/*                <div className="checkbox-box-border"/>*/}
            {/*                <div className="checkbox-box-background"/>*/}
            {/*                {*/}
            {/*                    formData.items[chatIndex].questionItem.question.choiceQuestion.type.toLowerCase() === 'radio' ?*/}
            {/*                        <div className="checkbox-box-check radio"/> :*/}
            {/*                        <svg className="checkbox-box-check" xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">*/}
            {/*                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">*/}
            {/*                                <path d="M4090 4211 c-14 -5 -41 -16 -60 -25 -19 -10 -502 -484 -1073 -1054 l-1037 -1037 -398 397 c-272 271 -411 403 -442 419 -68 34 -177 38 -255 8 -51 -19 -77 -40 -181 -143 -144 -145 -167 -184 -168 -296 -2 -144 -39 -99 678 -819 436 -438 654 -649 681 -662 51 -24 119 -24 170 0 28 13 434 413 1321 1302 1430 1432 1320 1311 1318 1459 -1 112 -24 151 -168 296 -102 102 -130 124 -179 142 -59 22 -156 28 -207 13z" />*/}
            {/*                            </g>*/}
            {/*                        </svg>*/}
            {/*                }*/}
            {/*            </div>*/}
            {/*            <span className="checkbox-caption i18n">{question.value}</span>*/}
            {/*            { question.isOther && <span className="checkbox-caption i18n" style={{padding: 0}}>Other:</span>}*/}
            {/*        </label>*/}
            {/*    ))*/}
            {/*    // formData &&*/}
            {/*    // formData.items[chatIndex].questionItem.question.choiceQuestion ?*/}
            {/*    // formData.items[chatIndex].questionItem.question.choiceQuestion.options.map((question, i) => (*/}
            {/*    //     <label*/}
            {/*    //         className="checkbox-field checkbox-ripple hover-effect rp"*/}
            {/*    //         // data-answer-id={random()}*/}
            {/*    //         // onClick={clickAnswer}*/}
            {/*    //         key={i}*/}
            {/*    //     >*/}
            {/*    //         <input*/}
            {/*    //             className="checkbox-field-input"*/}
            {/*    //             type={formData.items[chatIndex].questionItem.question.choiceQuestion.type.toLowerCase()}*/}
            {/*    //             // onClick={(event) => setChecked(event.target.checked)}*/}
            {/*    //         />*/}
            {/*    //         <div className={cx("checkbox-box",*/}
            {/*    //             {*/}
            {/*    //                 "radio": formData.items[chatIndex].questionItem.question.choiceQuestion.type.toLowerCase() === 'radio',*/}
            {/*    //                 "active": checked*/}
            {/*    //             }*/}
            {/*    //         )}>*/}
            {/*    //              <div className="checkbox-box-border"/>*/}
            {/*    //              <div className="checkbox-box-background"/>*/}
            {/*    //             {*/}
            {/*    //                 formData.items[chatIndex].questionItem.question.choiceQuestion.type.toLowerCase() === 'radio' ?*/}
            {/*    //                 <div className="checkbox-box-check radio"/> :*/}
            {/*    //                 <svg className="checkbox-box-check" xmlns="http://www.w3.org/2000/svg" version="1.0" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">*/}
            {/*    //                     <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">*/}
            {/*    //                         <path d="M4090 4211 c-14 -5 -41 -16 -60 -25 -19 -10 -502 -484 -1073 -1054 l-1037 -1037 -398 397 c-272 271 -411 403 -442 419 -68 34 -177 38 -255 8 -51 -19 -77 -40 -181 -143 -144 -145 -167 -184 -168 -296 -2 -144 -39 -99 678 -819 436 -438 654 -649 681 -662 51 -24 119 -24 170 0 28 13 434 413 1321 1302 1430 1432 1320 1311 1318 1459 -1 112 -24 151 -168 296 -102 102 -130 124 -179 142 -59 22 -156 28 -207 13z" />*/}
            {/*    //                     </g>*/}
            {/*    //                 </svg>*/}
            {/*    //             }*/}
            {/*    //         </div>*/}
            {/*    //         <span className="checkbox-caption i18n">{question.value}</span>*/}
            {/*    //         { question.isOther && <span className="checkbox-caption i18n" style={{padding: 0}}>Other:</span>}*/}
            {/*    //     </label>*/}
            {/*    // )) :*/}
            {/*    // <p className="btn-menu-empty">There are no answers here, you need to write your own answer.</p>*/}
            {/*}*/}
        </div>
    );
}

export default ChatAnswers;