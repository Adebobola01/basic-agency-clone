import React from "react";
import styles from "./index.module.scss";
import { TransparentBtn } from "../buttons";
import NewsItem from "./news-item";
import img from "../../assets/images/931c4de4f3cbbeb30a5b65677a174f2980e44805-720x900.webp"

const News = ()=> {


    return (
        <section className={styles.News} >
            <div className={styles.News_header} >
                <h2>featured  <br/> news</h2>
                <TransparentBtn text="view all" color="black" />
            </div>  
            <div className={styles.News_body}>
                <NewsItem text="breaking through the branding blahs" date="6.16.23" image={img} />
                <NewsItem text="breaking through the branding blahs" date="6.16.23" image={img} />
                <NewsItem text="breaking through the branding blahs" date="6.16.23" image={img} />
                <NewsItem text="breaking through the branding blahs" date="6.16.23" image={img} />
                <NewsItem text="breaking through the branding blahs" date="6.16.23" image={img} />
                <NewsItem text="breaking through the branding blahs" date="6.16.23" image={img} />
                <NewsItem text="breaking through the branding blahs" date="6.16.23" image={img} />

            </div>
        </section>
    )
};

export default News;