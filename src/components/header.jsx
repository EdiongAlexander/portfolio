import React from "react";
import Typical from "react-typical";
import { useState } from "react";
import Switch from 'react-switch'

const Header = () => {

    const [checked, setChecked] = useState(false);

    const setTheme = () => {
        let dataThemeAttribute = "data-theme";
        let body = document.body;
        let newTheme = body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
        body.setAttribute(dataThemeAttribute, newTheme);
    }

    const handleSwitch = () => {
        setChecked(checked === true ? false : true)
        setTheme()
    }

    const Typo = React.memo(() => {
        return (
            <Typical className='typic'
                loop={50}
                steps={[
                    'front-end developer',
                    3000,
                    'WordPress developer',
                    2000]} />
        )
    })

    return (
        <header>
            <div className="elem">
                <img src="laptop.png" alt="laptop" />
                <p className="name"><i>Ediong Alexander</i></p>
                <p className="font-rale">
                    <Typo />
                </p>
                <Switch
                    checked={checked}
                    onChange={handleSwitch}
                    offColor="#baaa80"
                    onColor="#353535"
                    width={90}
                    height={40}
                    uncheckedIcon={
                        <span
                            className="iconify"
                            data-icon="twemoji:owl"
                            data-inline="false"
                            style={{
                                display: "block",
                                height: "100%",
                                fontSize: 25,
                                textAlign: "end",
                                marginLeft: "20px",
                                color: "#353239",
                            }}
                        ></span>
                    }
                    checkedIcon={
                        <span
                            className="iconify"
                            data-icon="noto-v1:sun-with-face"
                            data-inline="false"
                            style={{
                                display: "block",
                                height: "100%",
                                fontSize: 25,
                                textAlign: "end",
                                marginLeft: "10px",
                                color: "#353239",
                            }}
                        ></span>
                    }
                    className="react-switch mx-auto"
                    id='icon-switch' />
            </div>
            <div className="flags" style={{ display: 'none' }}>
                <img src="ng-flag.svg" alt="ng-flag" />
                <img src="uk-flag.svg" alt="uk-flag" />
            </div>
        </header>
    )
}

export default Header;