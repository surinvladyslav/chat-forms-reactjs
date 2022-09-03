import React from 'react';

import {useParams} from "react-router-dom";

import './index.scss';

const SharePage = () => {
    const { id } = useParams()

    return (
        <div
            style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: "100%",
                display: "flex",
                justifyContent: "center"
            }}
        >
            <a
                href={`${process.env.REACT_APP_URL}/forms/${id}`}
                target="_blank"
                rel="noreferrer"
                style={{
                    marginRight: "2rem"
                }}
            >open your chatbot</a>
            <button>get your chatbot link</button>
        </div>
    );
}

export default SharePage;