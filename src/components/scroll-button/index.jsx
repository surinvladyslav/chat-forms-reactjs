import React from "react";

import './index.scss';
import Button from "../button";

const ScrollButton = () =>{
    // const [visible, setVisible] = React.useState(true)
    //
    // const toggleVisible = () => {
    //     const scrolled = document.documentElement.scrollTop;
    //     if (scrolled > 0){
    //         setVisible(false)
    //     }
    //     else if (scrolled <= 0){
    //         setVisible(true)
    //     }
    // };
    //
    // console.log(visible);
    // console.log(document.documentElement.scrollTop);
    // console.log(document.documentElement.scrollHeight);
    // const scrollToBottom = () =>{
    //     window.scrollTo({
    //         top: document.documentElement.scrollHeight,
    //         behavior: 'smooth'
    //     });
    // };

    // window.addEventListener('scroll', toggleVisible);

    return (

        <button className="btn-circle"  >
        {/*//     <svg height="20" className="octicon octicon-arrow-right color-fg-muted" viewBox="0 0 16 16" version="1.1" width="20" aria-hidden="true">*/}
        {/*//         <path fillRule="evenodd" d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"></path>*/}
        {/*//     </svg>*/}
        // </button>
    );
}

export default ScrollButton;
