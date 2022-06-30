import * as React from 'react';

import './index.scss';
import Button from "../button";
import Scrollable from "../scrollable";

const ChatAnswers = () => {
    return (
        <div className="chat-answers">
            <Scrollable>
                <div className="chat-answers-inner">
                    <div className="answer">
                        Так, маю одну дитину
                    </div>
                    <div className="answer">
                        Так, маю двох дітей
                    </div>
                    <div className="answer">
                        Так, маю трьох дітей
                    </div>
                    <div className="answer">
                        Так, маю більше 3-х дітей
                    </div>
                    <div className="answer">
                        Наразі я вагітна
                    </div>
                    <div className="answer">
                        Ні, не маю дітей
                    </div>
                </div>
            </Scrollable>
        </div>
    );
}

export default ChatAnswers;