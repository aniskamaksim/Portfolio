import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {Error404} from "../pages/Error404";
import {HTML} from "../pages/HTML";
import {ReactPage} from "../pages/ReactPage";
import {ReactRedux} from "../pages/ReactRedux";
import {JSTasks} from "../pages/JSTasks";
import {About} from "../pages/About";

export const PATH = {
    ABOUT: '/about_me',
    HTML_CSS_JS: '/html_css_js',
    REACT: '/react',
    REACT_REDUX: '/react_redux',
    JS_TASKS: '/js_tasks'
}
export const Pages = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Navigate to={PATH.ABOUT}/>}/>
                <Route path={PATH.ABOUT} element={<About />}/>
                <Route path={PATH.HTML_CSS_JS} element={<HTML />}/>
                <Route path={PATH.REACT} element={<ReactPage />}/>
                <Route path={PATH.REACT_REDUX} element={<ReactRedux />}/>
                <Route path={PATH.JS_TASKS} element={<JSTasks />}/>
                <Route path="/*" element={<Error404 />}/>
            </Routes>
        </div>
    );
};
