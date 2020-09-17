import React, {HTMLAttributes, RefObject, useContext, useEffect, useRef} from "react";
import {Context, Item} from "./nav";
import classes, {scopeClassName} from "../../helpers/classes";
import NavItem from "./nav-item";

interface Props extends HTMLAttributes<HTMLDivElement> {
    data: Item,
    level: number,
}

const sc = scopeClassName("yr-nav-sub");

interface Props1 {
    active: () => string,
    sub: Item[],
    level: number
}

const NavPopover = ({active, sub, level}: Props1,
                    ref: RefObject<HTMLDivElement>) => {
    return <div className={classes(sc("popover"), active())} ref={ref}>
        {
            sub.map(
                item => item.sub ?
                    <SubNav data={item} key={item.name} level={level + 1}/> :
                    <NavItem key={item.name} data={item} level={level + 1}/>
            )
        }
    </div>;
};
const Popover = React.forwardRef(NavPopover);
const SubNav = ({
                    className, level, children,
                    data, ...rest
                }: Props) => {
    const {sub, name, slotFn} = data;
    const {store, setStore} = useContext(Context);
    const ref = useRef(document.body as HTMLDivElement);
    const set = () => {
        const arr = store.slice(0, level);
        arr.push(name);
        setStore(arr);
    };
    const active = () =>
        store[level] === name ? "active" : "";
    const fadeIn = (dom: HTMLDivElement, height: number) => {
        dom.animate(
            [
                {height: 0, overflow: "hidden"},
                {height: height + "px", overflow: "hidden"}
            ], {
                duration: 300
            }
        );
        dom.style.display = "block";  //为了后面的fadeout动画！
    };
    const fadeOut = (dom: HTMLDivElement, height: number) => {
        dom.animate(
            [
                {opacity: 1, height: height + "px", overflow: "hidden"},
                {opacity: 0, height: 0, overflow: "hidden"}
            ], {
                duration: 500
            }
        );
        dom.style.display = "none";
    };
    useEffect(
        () => {

        }, []
    );
    useEffect(
        () => {
            const {height} = ref.current.getBoundingClientRect();
            active() ? fadeIn(ref.current, height) : fadeOut(ref.current, height);
        }, [active()]
    );
    return <div {...rest}
                className={classes(className, sc())}
    >
        <div className={classes(sc("text"), active())} onClick={set}>
            {
                slotFn ? slotFn() :
                    name
            }
        </div>
        {
            sub && <Popover level={level}
                            ref={ref}
                            active={active} sub={sub}/>
        }
    </div>;
};

export default SubNav;