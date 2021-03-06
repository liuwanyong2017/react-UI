import React, {FunctionComponent, useEffect, useState} from "react";
import ReactDom from "react-dom";
import {HashRouter as Router, Route, NavLink} from "react-router-dom";
import Icon from "./lib/icon/icon";
import "./local.dev.scss";
import LayoutExample from "./lib/layout/example";
import {Layout, Header, Content, Footer, Aside} from "./lib/layout/layout";
import IconDemo from "./lib/icon/icon.demo";
import ButtonDemo from "./lib/button/button.demo";
import FormDemo from "./lib/form/form.medo";
import InputDemo from "./lib/input/input.demo";
import DialogDemo from "./lib/dialog/dialog.demo";
import FileInputDemo from "./lib/input/fileinput.demo";
import ScrollBarDemo from "./lib/scroll/scrollbar.demo";
import GridDemo from "./lib/grid/grid.demo";
import ToastDemo from "./lib/toast/toast.demo";
import TabsDemo from "./lib/tabs/tabs.demo";
import PopoverDemo from "./lib/popover/popover.demo";
import CascaderDemo from "./lib/cascader/cascader.demo";
import SlidesDemo from "./lib/slides/slidesDemo";
import UseState from "./lib/principle/useState.demo";
import UseReducer from "./lib/principle/useReducer.demo";
import UseContext from "./lib/principle/useContext.demo";
import UseEffectDemo from "./lib/principle/useEffect.demo";
import UseMemoDemo from "./lib/principle/useMemo.demo";
import UseRefDemo from "./lib/principle/useRef.demo";
import ForwardRefDemo from "./lib/principle/forwardRef.demo";
import MyHookDemo from "./lib/principle/myHook.demo";
import StaleClosureDemo from "./lib/principle/stale-closure.demo";
import NavDemo from "./lib/nav/nav.demo";


// import logo from './imgs/logo.png'
// import Title from './imgs/title.jpg'
const logo = require("./imgs/logo.png");
const Title = require("./imgs/title.jpg");


interface componentNames {
    [key: string]: string
}

const tabs: string[] = [
    "入门",
    "组件"
];
const names: componentNames = {
    icon: "svg图标",
    button: "按钮",
    input: "输入框",
    toast: "烤面包",
    tabs: "导航",
    popover: "泡泡框",
    dialog: "对话框",
    grid: "栅栏",
    layout: "布局",
    form: "表单",
    upload: "上传",
    scrollbar: "滚动条",
    cascader: "层级选择",
    slides: "无缝轮播",
    nav: "导航条"
};
const names1: string[] = [
    "useState", "useReducer", "useContext", "useEffect", "useMemo", "useRef",
    "forwardRef", "myHooks", "stale-closure"
];
const dictionary = {
    "入门": names1,
    "组件": names
};
const RouterView: React.FunctionComponent = () => {
    const link: string = location.hash.replace("#/", "");
    const [tab, setTab] = useState(link);
    const [subTab, setSubTab] = useState("组件");
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        tab !== link && setTab(link);
    });
    return (
        <Router>
            <Layout>
                <Aside>
                    {
                        tabs.map(
                            val => <ul key={val}>
                                <li>
                                    <header onClick={() => {
                                        setSubTab(val);
                                        setVisible(!visible);
                                    }}
                                            className={
                                                subTab === val ? "active" : ""
                                            }>
                                        <Icon name={subTab === val && visible ? "up" : "down"}/>
                                        <span>{val}</span>
                                    </header>
                                </li>
                                {
                                    subTab === "组件" && visible && val === "组件" &&
                                    Object.keys(dictionary[subTab]).map(
                                        key => <li key={key} onClick={() => setTab(key)}>
                                            <NavLink to={`/${key}`}
                                                     className={tab === key ? "active" : ""}>
                                                {names[key]}
                                            </NavLink>
                                        </li>
                                    )
                                }
                                {
                                    subTab === "入门" && val === "入门" && visible &&
                                    dictionary[subTab].map(
                                        key => <li key={key} onClick={() => setTab(key)}>
                                            <NavLink to={`/${key}`}
                                                     className={tab === key ? "active" : ""}>
                                                {key}
                                            </NavLink>
                                        </li>
                                    )
                                }
                            </ul>
                        )
                    }
                </Aside>
                <Content>
                    <h3>{subTab}</h3>
                    <h4>{tab}</h4>
                    {
                        subTab === "组件" ?
                            <>
                                <Route path="/icon" component={IconDemo}/>
                                <Route path="/button" component={ButtonDemo}/>
                                <Route path="/dialog" component={DialogDemo}/>
                                <Route path="/layout" component={LayoutExample}/>
                                <Route path="/form" component={FormDemo}/>
                                <Route path="/input" component={InputDemo}/>
                                <Route path="/upload" component={FileInputDemo}/>
                                <Route path="/scrollbar" component={ScrollBarDemo}/>
                                <Route path="/grid" component={GridDemo}/>
                                <Route path="/toast" component={ToastDemo}/>
                                <Route path="/tabs" component={TabsDemo}/>
                                <Route path="/popover" component={PopoverDemo}/>
                                <Route path="/cascader" component={CascaderDemo}/>
                                <Route path="/slides" component={SlidesDemo}/>
                                <Route path='/nav' component={NavDemo}/>
                            </> :
                            <>
                                <Route path="/useState" component={UseState}/>
                                <Route path="/useReducer" component={UseReducer}/>
                                <Route path="/useContext" component={UseContext}/>
                                <Route path="/useEffect" component={UseEffectDemo}/>
                                <Route path="/useMemo" component={UseMemoDemo}/>
                                <Route path="/useRef" component={UseRefDemo}/>
                                <Route path="/forwardRef" component={ForwardRefDemo}/>
                                <Route path="/myHooks" component={MyHookDemo}/>
                                <Route path="/stale-closure" component={StaleClosureDemo}/>

                            </>
                    }
                </Content>
            </Layout>

        </Router>
    );
};
const App: FunctionComponent = () => {


    return <Layout className="page">
        <Header>
            <img src={logo} alt="img"/>
            <img src={Title} alt="img"/>
        </Header>
        <RouterView/>
        <Footer>
            <Layout>
                <Aside>
                    <a href="https://github.com/liuwanyong2017/rUI-test">
                        <Icon name="github"/>
                    </a>
                </Aside>
                <Content>
                    <h4>
                        <span> {"yongr-ui"}</span>
                        <Icon name="copyright"/>
                        <span>{"流着万条永远的河"}</span>
                    </h4>
                    <a href="mailto:2674706698@qq.com">
                        <Icon name="email"/>
                        <span>{"2674706698@qq.com"}</span>
                    </a>
                    <p>
                        <Icon name="phone"/>
                        <span>{"17620338522"}</span>
                    </p>
                </Content>
                <Aside>
                    <a href="http://www.zhihu.com/people/liu-zhao-wan-tiao-yong-yuan-de-he?utm_source=qq&utm_medium=social&utm_oi=884709808798846976">
                        <Icon name="zhihu"/>
                    </a>
                </Aside>
            </Layout>


        </Footer>
    </Layout>;
};
//本地开发的页面所用，不涉及上传包，测试
ReactDom.render(<App/>
    , document.getElementById("app"));