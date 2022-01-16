import {link} from "react-router";

export const Home = (props) => {
    return (
        <ul className="Navigation">
            <li><link to={"/home"}>Home</link></li>
        </ul>
    );
};