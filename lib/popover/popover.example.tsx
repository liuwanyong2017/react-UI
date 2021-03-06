import * as React from "react";
import PopoverTrigger from "./popover";
import Icon from "../icon/icon";
import Button from "../button/button";
import "./popover.example.scss";
import {useState} from "react";
import OutputView from "../../helpers/outputView";

const PopoverExample: React.FunctionComponent = () => {
    const triggerClick = (visible: boolean) => {
        console.log(visible);
        setVisible(visible);
    };
    const [clickCallback, setVisible] = useState(false);
    const [count, setCount] = useState(0);

    return (
        <div className="yr-popover-example" style={{overflow: "hidden"}}>
            <h4>{"click触发"}</h4>
            <OutputView style={{width: "100%"}}
                        data={{
                            buttonCallback: count, clickCallback: clickCallback ? "可见喽！" : "不可见喽！"
                        }}/>
            <PopoverTrigger
                closeEvent={"click"}
                clickCallback={triggerClick}
                position={"top"}
                content={
                    <div>
                        <h4>
                            {"what a u 弄啥嘞？？"} <Icon name={"guilian"}/>
                        </h4>
                        <p>{"添加关闭所需的class，即可关闭"}</p>
                        <Button message={"ok"}
                                className={"yr-popover-close-cli-true"}
                        />
                    </div>
                }
            >
                <Button icon={"women"}/>
            </PopoverTrigger>
            <PopoverTrigger
                closeEvent={"click"}
                clickCallback={triggerClick}
                style={{margin: "1em"}}
                position={"left"}
                content={
                    <div>
                        <h4>
                            {"what a u 弄啥嘞？？"} <Icon name={"guilian1"}/>
                        </h4>
                        <p>{"不添加关闭所需的class"}</p>
                        <Button message={"ok1"}/>
                    </div>
                }
            >
                <Button icon={"key"}/>
            </PopoverTrigger>
            <PopoverTrigger
                closeEvent={"click"}
                clickCallback={triggerClick}
                style={{margin: "1em"}}
                position={"bottom"}
                content={
                    <div>
                        <h4>
                            {"what a u 弄啥嘞？？"} <Icon name={"guilian2"}/>
                        </h4>
                        <p>{"添加关闭所需的class，即可关闭"}</p>
                        <Button message={"ok"}
                                className={"yr-popover-close-cli-true"}
                        />
                    </div>
                }
            >
                <Button icon={"user"}/>
            </PopoverTrigger>
            <PopoverTrigger
                closeEvent={"click"}
                clickCallback={triggerClick}
                style={{margin: "1em"}}
                position={"right"}
                content={
                    <div>
                        <h4>
                            {"what a u 弄啥嘞？？"} <Icon name={"guilian3"}/>
                        </h4>
                        <p style={{color: "red"}}>{"添加关闭所需的class，即可关闭,有点击事件！"}</p>
                        <Button message={"ok"}
                                className={"yr-popover-close-cli-true"}
                                onClick={() => setCount(count + 1)}
                        />
                    </div>
                }
            >
                <Button icon={"前车轮"}/>
            </PopoverTrigger>
            <PopoverTrigger
                closeEvent={"click"}
                clickCallback={triggerClick}
                style={{margin: "1em"}}
                position={"right"}
                content={
                    <div>
                        <h4>
                            {"what a u 弄啥嘞？？"} <Icon name={"guilian2"}/>
                        </h4>
                        <p style={{color: "red"}}>{"没添加关闭所需的class，有点击事件"}</p>
                        <Button message={"ok"}
                                className={"yr-popover-close-cli-true"}
                                onClick={() => setCount(count + 1)}
                        />
                    </div>
                }
            >
                <Button icon={"man"}/>
            </PopoverTrigger>
        </div>

    );
};

export default PopoverExample;