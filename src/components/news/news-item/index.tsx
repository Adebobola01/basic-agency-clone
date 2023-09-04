// import React from "react";
import styles from "./index.module.scss";

const NewsItem = (props: {image: any, text: string, date: string})=>{

    return (
        <div className={styles.newsItem} >
            <img src={props.image} alt="news image"/>
            <div className={styles.newsItem_body}  >
                <div className={styles.newsItem_body_texts} >
                    <h2>{props.text}</h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17"><path d="M.1 7.5h14v2H.1z"></path><path d="m8.4 0 8.5 8.5-1.4 1.4L7 1.4 8.4 0z"></path><path d="m7 15.6 8.5-8.5 1.4 1.4L8.4 17 7 15.6z"></path></svg>
                </div>
                <span>press {props.date}</span>
            </div>
        </div>
    )
}

export default NewsItem;