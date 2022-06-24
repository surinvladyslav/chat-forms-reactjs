import * as React from 'react';

import './index.scss';
import Date from "../date";
import Scrollable from "../scrollable";

const Content = () => {
    return (
        <Scrollable>
            <div className="bubbles-inner">
                <section className="bubbles-date-group">
                    <Date/>
                    sdfsad
                    {/*// <app-message*/}
                    {/*//         *ngFor="let form of forms.items; index as i;"*/}
                    {/*//     [isRead]="true"*/}
                    {/*//     [isTail]="true"*/}
                    {/*//     [isEdited]="false"*/}
                    {/*//     [is]="false"*/}
                    {/*//     [text]="form.title"*/}
                    {/*//     ></app-message>*/}
                </section>
            </div>
        </Scrollable>
    );
}

export default Content;