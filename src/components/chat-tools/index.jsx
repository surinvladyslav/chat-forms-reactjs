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
        chatMessages,
        chatIndex,
        chatSentences
    } = useContext();

    const [timePickerValue, setTimePickerValue] = useState(moment(new Date()).format("hh:mm"));
    const [datePickerValue, setDatePickerValue] = useState(new Date());
    const questions = [];

    async function clickCreateMessage(message) {
        if (message?.trim()) {
            await createMessage(message?.trim());
            await createMessage(formData?.items[chatIndex+1]?.title, true, formData?.items[chatIndex+1]?.itemId);
            await dispatch({type: actions.CHAT_INDEX});
            // await createMessage(formData?.items[chatIndex+1]?.description, true);
        }
    }

    useEffect(() => {
        formData?.items[chatIndex]?.questionItem?.question?.choiceQuestion?.options?.find(question => {
            if (question.checked === true) {
                console.log(question);
                questions.push(question.value);
            }
        });
    }, [formData?.items[chatIndex]?.questionItem?.question?.choiceQuestion?.options]);

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

    return (
        <div className={cx("chat-tools reverse")}>
            <div className="chat-tools-container">
                <div className="rows-wrapper">
                    <ChatQuestion
                        onClick={(message) => clickCreateMessage(message)}
                        choiceQuestion={formData?.items[chatIndex]?.questionItem?.question?.choiceQuestion}
                    />
                    {
                        formData?.items[chatIndex]?.questionItem?.question?.textQuestion
                        // ||
                        // chatQuestions?.find((question) => question?.isOther)?.isOther
                        &&
                        <ChatInput onClick={(message) => clickCreateMessage(message)}/>
                    }
                    <ChatScale
                        onClick={(message) => clickCreateMessage(message)}
                        scaleQuestion={formData?.items[chatIndex]?.questionItem?.question?.scaleQuestion}
                    />
                    {/*{*/}
                    {/*    !formData?.items[chatIndex] &&*/}
                    {/*    <Button*/}
                    {/*        className={cx("btn-primary")}*/}
                    {/*        // onClick={() => clickCreateMessage('/Submit')}*/}
                    {/*    >Submit</Button>*/}
                    {/*}*/}
                    {
                        chatMessages.length === chatSentences.length &&
                        <Button
                            className={cx("btn-primary")}
                            onClick={() => clickCreateMessage('/Signin')}
                        >Sign In</Button>
                    }
                    {
                        formData?.items[chatIndex]?.questionItem?.question?.dateQuestion &&
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
                        formData?.items[chatIndex]?.questionItem?.question?.timeQuestion &&
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
                formData?.items[chatIndex]?.questionItem?.question?.choiceQuestion?.type?.toLowerCase() === 'checkbox' &&
                <Button
                    className={cx("btn-primary", {"disabled": !formData?.items[chatIndex]?.questionItem?.question?.choiceQuestion?.options?.find(question => question.checked === true)})}
                    onClick={() => clickCreateMessage(questions.join(', '))}
                    style={{
                        width: 'initial',
                        margin: '0rem 0.5rem'
                    }}
                >Select</Button>
            }
            {
                // formData?.items[chatIndex]?.questionItem?.question?.required &&
                <Button
                    className={cx("btn-primary skip")}
                    onClick={() => clickCreateMessage('/Skip')}
                >
                    Skip
                </Button>
            }
        </div>
    );
}

export default ChatTools;