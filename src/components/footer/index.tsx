import React from "react";
import styles from "./index.module.scss";
import Col from "./col";

const Footer = ()=>{

    return(
        <footer className={styles.footer} >
            <div className={styles.footer_content} >
                <div className={styles.footer_row} >
                    <figure className={styles.footer_col} >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 307 100" fill="#f4f4f4" >
                            <path d="M0 86.8h41.9c19.6 0 31.3-8.3 31.3-24.5 0-10.2-6-16.2-15.1-19.2 7.2-3.4 12.1-9.4 12.1-19.2 0-12.5-7.9-21.5-27.2-21.5H0v84.4zm47.2-58.5c0 5.7-3.8 8.7-11.7 8.7H23V19.6h12.5c8.3 0 11.7 3 11.7 8.7zm2.6 32.5c0 6-3.8 8.7-12.1 8.7H22.6V51.7h15.1c8.3.4 12.1 3 12.1 9.1zM128.3 0h-18.9L73.6 100h18.5L128.3 0zm88.3 44.5c0-23.8-12.8-42.3-46-42.3h-35.5v84.5h35.5c32.8.1 46-18.4 46-42.2zm-24.1 0c0 16.6-9.4 22.6-22.3 22.6h-12.1V21.9h12.1c12.8 0 22.3 6 22.3 22.6zM224.2 46.4c0 22.6 18.5 41.1 41.1 41.1s41.1-18.5 41.1-41.1-18.5-41.1-41.1-41.1c-22.7 0-41.1 18.5-41.1 41.1zm7.9 0c0-18.9 14.7-34 33.2-34 18.5 0 33.2 15.1 33.2 34s-15.1 34-33.2 34c-18.5-.4-33.2-15.5-33.2-34zM246 66.8h12.8v-14h7.5l7.5 14h14l-9.4-16.6c4.2-1.9 7.5-6.8 7.5-12.1 0-9.4-6-14-16.6-14h-23.8v42.6h.5zm26.8-28.7c0 3.4-2.3 4.9-6.4 4.9h-7.9v-9h7.9c4.5.3 6.4 1.1 6.4 4.1z"></path>
                        </svg>
                    </figure>
                    <p className={styles.footer_col}>We collaborate with ambitious brands and people. Let's build.<br/>
                        {/* <!-- --> */}
                        <a href="mailto:biz@basicagency.com">biz@basicagency.com</a>
                    </p>
                </div>
                <div className={styles.footer_row} >
                    <div className={styles.footer_col} >
                        <h6>STAY IN THE KNOW</h6>
                        <form>
                            <input type="email" placeholder="Email Address" required />
                            <button type="submit"  >
                                <figure>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" fill="#fff">
                                        <path d="M.1 7.5h14v2H.1z"></path>
                                        <path d="m8.4 0 8.5 8.5-1.4 1.4L7 1.4 8.4 0z"></path>
                                        <path d="m7 15.6 8.5-8.5 1.4 1.4L8.4 17 7 15.6z"></path>
                                    </svg>
                                </figure>
                            </button>
                        </form>
                    </div>
                    <div className={styles.footer_links}>
                        <Col title="SOCIAL" links={["Instagram", "Twitter", "LinkedIn", "Facebook"]} />
                        <Col title="INITIATIVES" links={["Crafted", "Applied", "Brandbeats", "Moves", "B®/Good"]} />
                        <Col title="OFFICES" links={["San Diego - CA", "New York - NY", "Bay Area - CA", "St. Louis - MO", "Amsterdam - NL", "London - EN", "Berlin - GE", "Argentina - AR"]} />
                    </div>
                </div>
            </div>
            <div className={styles.footer_copyright} >
                <span>BASIC/DEPT®, Inc 10 - 23©</span>
                <span>Easy to understand, impossible to ignore.™</span>
                <span>Terms,Privacy Policy</span>
            </div>
        </footer>
    )
}
export default Footer;