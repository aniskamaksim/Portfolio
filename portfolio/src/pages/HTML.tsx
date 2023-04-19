import React, {FC} from 'react';
import s from "./Pages.module.css";
import plants from "../Assets/plants.png";
import onlineZoo from "../Assets/online_zoo.png";
import onlineZoo2 from "../Assets/online_zoo_2.png";
import travel_1 from "../Assets/travel_1.png";
import travel_2 from "../Assets/travel_2.png";
import momentum from "../Assets/momentum_1.png";
import todo_html from "../Assets/todo_html.png"
type HtmlType = {}
export const HTML: FC<HtmlType> = () => {
    const main = s.react_projects_main;
    const list = s.react_projects_list;
    const white = s.white_span;
    const titleDescription = s.title_description;
    const titleTitle = s.title_title;
    const descrDescr = s.description_description;
    const liDescr = s.li_description;
    const preview = s.react_projects_preview;
    return (
        <div className={main}>
            <div className={list}>
                <div className={titleDescription}>
                    <div className={titleTitle}>
                        <h2 className={white}>
                            <a href="https://aniskamaksim.github.io/Plants" target={"_blank"} rel={"noreferrer"}>Plants landing page</a>
                        </h2>
                        <div className={descrDescr}>
                    <span className={white}>
                       HTML - CSS - JavaScript <br/>
                        Simple and cute landing page, made according to figma layout, tested with pixelperfect <br/>
                        Implemented in this app:
                            <ul>
                            <li className={liDescr}>valid adaptive semantic layput;</li>
                            <li className={liDescr}>easy to maintain readable code;</li>
                            <li className={liDescr}>JavaScript to implement the functionality specified in the task;</li>
                                </ul>
                    </span><br/>
                            <a href="https://aniskamaksim.github.io/Plants"
                               target={"_blank"} rel={"noreferrer"}> https://aniskamaksim.github.io/Plants</a>
                        </div>
                    </div>
                </div>
                <div className={preview}>
                    <a href="https://aniskamaksim.github.io/Plants" target={"_blank"} rel={"noreferrer"}>
                        <img src={plants}
                             alt="plants landing page"
                             width={"200px"}
                             height={"200px"}
                        />
                    </a>
                </div>
            </div>
            <div className={list}>
                <div className={titleDescription}>
                    <div className={titleTitle}>
                        <h2 className={white}>
                            <a href="https://aniskamaksim.github.io/Plants" target={"_blank"} rel={"noreferrer"}>Online Zoo landing page</a>
                        </h2>
                        <div className={descrDescr}>
                    <span className={white}>
                       HTML - CSS - JavaScript <br/>
                        Landing page with additional Donate page and rather complex functionality. <br/>
                        Made strong according to figma layout, tested with pixelperfect <br/>
                        Implemented in this app:
                            <ul>
                            <li className={liDescr}>valid adaptive semantic layput;</li>
                            <li className={liDescr}>easy to maintain readable code;</li>
                            <li className={liDescr}>JavaScript to implement the functionality specified in the task;</li>
                                </ul>
                    </span><br/>
                            <a href="https://aniskamaksim.github.io/online-zoo/"
                               target={"_blank"} rel={"noreferrer"}> https://aniskamaksim.github.io/online-zoo/</a>
                        </div>
                    </div>
                </div>
                <div className={preview}>
                    <a href="https://aniskamaksim.github.io/online-zoo/" target={"_blank"} rel={"noreferrer"}>
                        <img src={onlineZoo}
                             alt="online Zoo landing page"
                             width={"200px"}
                             height={"200px"}
                        />
                    </a>
                    <a href="https://aniskamaksim.github.io/online-zoo/pages/donate/donate.html" target={"_blank"} rel={"noreferrer"}>
                        <img src={onlineZoo2}
                             alt="online Zoo landing page"
                             width={"200px"}
                             height={"200px"}
                        />
                    </a>
                </div>
            </div>
            <div className={list}>
                <div className={titleDescription}>
                    <div className={titleTitle}>
                        <h2 className={white}>
                            <a href="https://aniskamaksim.github.io/momentum_html/momentum/" target={"_blank"} rel={"noreferrer"}>Momentum</a>
                        </h2>
                        <div className={descrDescr}>
                    <span className={white}>
                       HTML - CSS - JavaScript - JQuery <br/>
                        Web application - the clone of google Chrome start tab. Made according to figma layout, tested with pixelperfect <br/>
                        Implemented in this app:
                            <ul>
                            <li className={liDescr}>valid adaptive semantic layput;</li>
                            <li className={liDescr}>easy to maintain readable code;</li>
                            <li className={liDescr}>JavaScript to implement the functionality specified in the task;</li>
                            <li className={liDescr}>Date and time. Personal greetings depending on time of day;</li>
                            <li className={liDescr}>local storage of name and location to show the weather;</li>
                            <li className={liDescr}>third party weather API;</li>
                            <li className={liDescr}>async function to get JSON file of random quotes;</li>
                            <li className={liDescr}>algorithm for automatic and manual switching of the background image depending on the time of year and time of day;</li>
                                </ul>
                    </span><br/>
                            <a href="https://aniskamaksim.github.io/momentum_html/momentum/"
                               target={"_blank"} rel={"noreferrer"}> https://aniskamaksim.github.io/momentum_html/momentum/</a>
                        </div>
                    </div>
                </div>
                <div className={preview}>
                    <a href="https://aniskamaksim.github.io/momentum_html/momentum/" target={"_blank"} rel={"noreferrer"}>
                        <img src={momentum}
                             alt="momentum web app"
                             width={"200px"}
                             height={"200px"}
                        />
                    </a>
                </div>
            </div>
            <div className={list}>
                <div className={titleDescription}>
                    <div className={titleTitle}>
                        <h2 className={white}>
                            <a href="https://aniskamaksim.github.io/Travel/travel/" target={"_blank"} rel={"noreferrer"}>Travel landing page</a>
                        </h2>
                        <div className={descrDescr}>
                    <span className={white}>
                       HTML - CSS - JavaScript - JQuery <br/>
                        Landing page, made according to figma layout, tested with pixelperfect <br/>
                        Implemented in this app:
                            <ul>
                            <li className={liDescr}>valid adaptive semantic layput;</li>
                            <li className={liDescr}>easy to maintain readable code;</li>
                            <li className={liDescr}>JavaScript to implement the functionality specified in the task;</li>
                            <li className={liDescr}>Burger menu in mobile version;</li>
                            <li className={liDescr}>pop up registration window;</li>
                            <li className={liDescr}>carousel pictures slider;</li>
                                </ul>
                    </span><br/>
                            <a href="https://aniskamaksim.github.io/Travel/travel/"
                               target={"_blank"} rel={"noreferrer"}> https://aniskamaksim.github.io/Travel/travel/</a>
                        </div>
                    </div>
                </div>
                <div className={preview}>
                    <a href="https://aniskamaksim.github.io/Travel/travel/" target={"_blank"} rel={"noreferrer"}>
                        <img src={travel_1}
                             alt="message counter"
                             width={"200px"}
                             height={"200px"}
                        />
                    </a>
                    <a href="https://aniskamaksim.github.io/Travel/travel/" target={"_blank"} rel={"noreferrer"}>
                        <img src={travel_2}
                             alt="message counter"
                             width={"200px"}
                             height={"200px"}
                        />
                    </a>
                </div>
            </div>
            <div className={list}>
                <div className={titleDescription}>
                    <div className={titleTitle}>
                        <h2 className={white}>
                            <a href="https://aniskamaksim.github.io/clean-code-s1e1/" target={"_blank"} rel={"noreferrer"}>Simple TodoList creator</a>
                        </h2>
                        <div className={descrDescr}>
                    <span className={white}>
                       HTML - CSS - JavaScript <br/>
                        Simple one page app, made according to figma layout, tested with pixelperfect <br/>
                        Implemented in this app:
                            <ul>
                            <li className={liDescr}>valid adaptive semantic layput;</li>
                            <li className={liDescr}>easy to maintain readable code;</li>
                            <li className={liDescr}>JavaScript to implement the functionality specified in the task;</li>
                                </ul>
                    </span><br/>
                            <a href="https://aniskamaksim.github.io/clean-code-s1e1/"
                               target={"_blank"} rel={"noreferrer"}> https://aniskamaksim.github.io/clean-code-s1e1/</a>
                        </div>
                    </div>
                </div>
                <div className={preview}>
                    <a href="https://aniskamaksim.github.io/clean-code-s1e1/" target={"_blank"} rel={"noreferrer"}>
                        <img src={todo_html}
                             alt="html todolist creator"
                             width={"200px"}
                             height={"200px"}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};