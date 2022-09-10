import React, {useState, useEffect} from 'react';
import cx from "classnames";
import moment from "moment";
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';

import {useContext} from "../../store/context";
import {actions} from "../../store/reducers";
import random from "../../hooks/useRandom";
import Button from "../button";
import ChatScale from "../chat-scale";
import ChatQuestion from "../chat-question";
import ChatInput from "../chat-input";

import "react-datepicker/dist/react-datepicker.css";
import './index.scss';

const ChatTools = ({formData}) => {
    const {
        dispatch,
        chatQuestions,
        chatIndex,
    } = useContext();

    const [timePickerValue, setTimePickerValue] = useState(moment(new Date()).format("hh:mm"));
    const [datePickerValue, setDatePickerValue] = useState(new Date());
    const questions = []
    function clickCreateMessage(message) {
        if (message?.trim()) {
            createMessage(message?.trim());
            dispatch({type: actions.CHAT_INDEX});
        }
    }

    useEffect(() => {
        if (formData?.items[chatIndex]?.type === 'choiceQuestion') {
            dispatch({type: actions.CLEAR_QUESTIONS})
            dispatch({type: actions.ADD_QUESTIONS, payload: formData?.items[chatIndex]?.questions})
        }

        dispatch({type: actions.CHAT_TYPING, payload: true});

        setTimeout(async () => {
            if (formData?.items[chatIndex]?.type === 'simpleQuestion') {
                await createMessage(formData?.items[chatIndex]?.title, true, formData?.items[chatIndex]?.itemId);
                dispatch({type: actions.CHAT_INDEX});
                return;
            }

            dispatch({type: actions.CHAT_TYPING, payload: false});
        }, 1000)
    }, [chatIndex])

    function createMessage(message, is = false, itemId) {
        if (message?.trim()) {
            dispatch({type: actions.ADD_MESSAGE, payload: {
                    title: message?.trim(),
                    itemId: itemId ? itemId : random(),
                    editMessage: false,
                    read: true,
                    is: !!is,
                    date: new Date().toLocaleTimeString('en-GB', {
                        hour12: false,
                        hour: "numeric",
                        minute: "numeric"
                    }).toString(),
                }
            });
        }
    }

    // console.log(chatQuestions);
    //
    // useEffect(() => {
    // [chatQuestions?.find(question => question?.checked === true)?.value]
    //     questions.push(chatQuestions?.find(question => question?.checked === true)?.value)
    // }, [chatQuestions])

    return (
        <div className="chat-tools reverse">
            <div className="chat-tools-container">
                <div className="rows-wrapper">
                    {
                        formData?.items[chatIndex]?.type === 'choiceQuestion' &&
                        <ChatQuestion
                            onClickQuestionRadio={(message) => clickCreateMessage(message)}
                            onClickQuestionCheckbox={(question) => {
                                dispatch({type: actions.CHANGE_QUESTIONS, payload: question})
                            }}
                            choiceQuestionsType={formData?.items[chatIndex]?.questionsType.toLowerCase()}
                        />
                    }
                    {
                        formData?.items[chatIndex]?.type === 'textQuestion' ||
                        formData?.items[chatIndex]?.questions?.find((question) => question?.isOther) ?
                        <ChatInput onClick={(message) => clickCreateMessage(message)}/> : null
                    }
                    {
                        formData?.items[chatIndex]?.type === 'scaleQuestion' &&
                        <ChatScale
                            onClick={(message) => clickCreateMessage(message)}
                            scaleQuestion={formData?.items[chatIndex]?.options}
                        />
                    }
                    {
                        formData?.items[chatIndex]?.type === 'submitQuestion' &&
                        <Button
                            className={cx("btn-primary")}
                            onClick={() => clickCreateMessage('/Submit')}
                        >Submit</Button>
                    }
                    {
                        formData?.items[chatIndex]?.type === 'signQuestion' &&
                        <Button
                            className={cx("btn-primary")}
                            onClick={() => clickCreateMessage('/Signin')}
                        >Sign In</Button>
                    }
                    {
                        formData?.items[chatIndex]?.type === 'dateQuestion' &&
                        <div className="picker__wrapper">
                            <DatePicker
                                selected={datePickerValue}
                                onChange={(datePickerValue) => setDatePickerValue(datePickerValue)}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                            />
                            <button
                                className={'btn-primary'}
                                onClick={() => clickCreateMessage(moment(datePickerValue).format("DD/MM/YYYY"))}
                            >Select</button>
                        </div>
                    }
                    {
                        formData?.items[chatIndex]?.type === 'timeQuestion' &&
                        <div className="picker__wrapper">
                            <TimePicker
                                onChange={(timePickerValue) => setTimePickerValue(timePickerValue)}
                                value={timePickerValue}
                            />
                            <button
                                className={'btn-primary'}
                                onClick={() => clickCreateMessage(timePickerValue)}
                            >Select</button>
                        </div>
                    }
                </div>
            </div>
            {
                formData?.items[chatIndex]?.questionsType?.toLowerCase() === 'checkbox' &&
                <Button
                    className={cx("btn-primary", {"disabled": !chatQuestions.find(question => question.checked === true)})}
                    onClick={() => clickCreateMessage([chatQuestions.find(question => question.checked === true)?.value].join(', '))}
                    style={{
                        width: '-webkit-fill-available',
                        margin: '0 0.5rem',
                    }}
                >Select</Button>
            }
            {
                formData?.items[chatIndex]?.required ?
                <Button
                    className={cx("btn-primary skip")}
                    onClick={() => clickCreateMessage('/Skip')}
                >
                    Skip
                </Button> : null
            }
        </div>
    );
}

export default ChatTools;