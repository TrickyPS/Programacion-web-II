import React from "react";
export function FacebookComment(props) {
    const { link, title } = props;

    React.useEffect(() => {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
    },[]);

    return (
        <div className="facebookComment">
            <div className="title">{title}</div>

            <div
                className="fb-comments "
                data-href='http://localhost:3000/news'
                data-width="100%"
                data-numposts="5"
            ></div>
        </div>
    );
}