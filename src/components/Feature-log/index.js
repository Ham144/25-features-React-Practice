import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useContext } from "react";
import { Menuitems } from "../../lib/data";
import Accordion from "../../pages/Accordion";
import RandomColor from "../../pages/RandomColor";
import TicTacToe from "../tic-tac-toe";
import TreeViewMenu from "../tree-view-menu";
import { FlagsContext } from "./Context";
export default function ShowFlags() {
    const { enabledFlags, loading } = useContext(FlagsContext);
    const componentsToRender = [
        {
            key: "showTreeViewMenu",
            component: (_jsx("div", { className: "fixed  h-screen top-0 right-0 z-20 dark", children: _jsx(TreeViewMenu, { menus: Menuitems }) })),
        },
        {
            key: "showRandomGenerator",
            component: _jsx(RandomColor, {}),
        },
        {
            key: "showTicTacToe",
            component: _jsx(TicTacToe, {}),
        },
        {
            key: "showAccordion",
            component: _jsx(Accordion, {}),
        },
    ];
    if (loading) {
        return (_jsx("div", { children: _jsx("h1", { children: "Loading.." }) }));
    }
    const checkEnabledFlags = (getKeyComponent) => {
        if (enabledFlags[getKeyComponent])
            return true;
        else
            false;
    };
    return (_jsxs("div", { className: "flex flex-col justify-center items-center dark border border-gray-300 rounded-r-md p-2", children: [_jsx("h1", { className: "text-4xl", children: "Feature Flags toggling from show flags data global" }), componentsToRender.map((componentItem) => (_jsx("div", { children: checkEnabledFlags(componentItem.key) ? (componentItem.component) : (_jsxs("div", { children: [componentItem.key, " is false so its being hidden"] })) })))] }));
}
