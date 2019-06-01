import * as React from "react";
import InputExample from "./input.example";
import CodeView from "../../helpers/code_view";
import FileinputExample from "./fileinput.example";


const InputDemo: React.FunctionComponent = () =>
    <div className="inputDemo">
        <CodeView path="input/input.example.tsx">
            <InputExample/>
        </CodeView>
        <CodeView path="input/fileinput.example.tsx">
            <FileinputExample/>
        </CodeView>
    </div>;

export default InputDemo;