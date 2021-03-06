import * as React from "react";
import CodeView from "../../helpers/code_view";
import FileInputExample1 from "./fileinput.example1";
import FileInputExample from "./fileinput.example";
import FileInputExample2 from "./fileinput.example2";
import FileInputExample3 from "./fileinput.example3";
import FileInputExample4 from "./fileinput.example4";
import FileInputExample5 from "./fileinput.example5";
import FileInputExample6 from "./fileinput.example6";


const FileInputDemo: React.FunctionComponent = () =>
    <div className="inputDemo">
        <h4>{"如何查看拿到的图片信息?点击upload！"}</h4>
        <CodeView path="input/fileinput.example.tsx">
            <FileInputExample/>
        </CodeView>
        <CodeView path="input/fileinput.example1.tsx">
            <FileInputExample1/>
        </CodeView>
        <CodeView path="input/fileinput.example2.tsx">
            <FileInputExample2/>
        </CodeView>
        <CodeView path="input/fileinput.example3.tsx">
            <FileInputExample3/>
        </CodeView>
        <CodeView path="input/fileinput.example4.tsx">
            <FileInputExample4/>
        </CodeView>
        <CodeView path="input/fileinput.example5.tsx">
            <FileInputExample5/>
        </CodeView>
        <CodeView path="input/fileinput.example6.tsx">
            <FileInputExample6/>
        </CodeView>
    </div>;

export default FileInputDemo;