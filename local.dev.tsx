import React, {FunctionComponent, useEffect, useState} from "react";
import ReactDom from "react-dom";
import {HashRouter as Router, Route, NavLink} from "react-router-dom";
import Icon from "./lib/icon/icon";
import "./local.dev.scss";
import Buttons from "./lib/button/button.examlpe";
import Dialogs from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/example";
import {Layout, Header, Content, Footer, Aside} from "./lib/layout/layout";
import IconDemo from "./lib/icon/icon.demo";

// import Logo from './imgs/yr_ui.png'
// import title from './imgs/title.jpg'
const Logo = require("./imgs/yr_ui.png");
const Title = require("./imgs/title.jpg");


interface componentNames {
    [key: string]: string
}

const firstTabs: string[] = ["入门", "组件"];
const names: componentNames = {
    icon: "svg图标",
    button: "按钮",
    dialog: "对话框",
    layout: "布局"
};
const RouterView: React.FunctionComponent = () => {
    const link: string = location.hash.replace("#/", "");
    const [tab, setTab] = useState(link);
    const [firTab, setFirTab] = useState("组件");
    const [firShow, setFirShow] = useState(true);
    useEffect(() => {
        tab !== link && setTab(link);
    });
    return (
        <Router>
            <Layout>
                <Aside>
                    {
                        firstTabs.map(
                            val => <ul key={val}>
                                <li>
                                    <header onClick={() => {
                                        setFirTab(val);
                                        setFirShow(!firShow);
                                    }}
                                            className={
                                                firTab === val ? "active" : ""
                                            }>
                                        <Icon name={firTab === val && firShow ? "up" : "down"}/>
                                        <span>{val}</span>
                                    </header>
                                </li>
                                {
                                    firTab === "组件" && val === "组件" && firShow &&
                                    Object.keys(names).map(
                                        key => <li key={key} onClick={() => setTab(key)}>
                                            <NavLink to={`/${key}`}
                                                     className={tab === key ? "active" : ""}>
                                                {names[key]}
                                            </NavLink>
                                        </li>
                                    )
                                }

                            </ul>
                        )
                    }
                </Aside>
                <Content>
                    <h3>{firTab}</h3>
                    <h4>{tab}</h4>
                    <Route path="/icon" component={IconDemo}/>
                    <Route path="/button" component={Buttons}/>
                    <Route path="/dialog" component={Dialogs}/>
                    <Route path="/layout" component={LayoutExample}/>
                </Content>
            </Layout>

        </Router>
    );
};
const App: FunctionComponent = () => {


    return <Layout className="page">
        <Header>
            <img src={Logo} alt="img"/>
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
                        <span>{"刘万永"}</span>
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