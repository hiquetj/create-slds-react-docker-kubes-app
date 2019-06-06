import React, { Component } from "react";
const path = require("path");

/** SLDS Components */
import { IconSettings, GlobalHeader, GlobalHeaderButton, GlobalHeaderDropdown, GlobalHeaderProfile, GlobalHeaderSearch }from "@salesforce/design-system-react";

/** CSS Dependencies */
import "./css/GlobalHeader.css";


class Header extends Component {
    render() {
        return (
            <div className="Header">
                <IconSettings iconPath={path.resolve(__dirname, "icons")}>
                    <GlobalHeader
                        logoSrc={path.resolve(__dirname, "images/logo.svg")}
                        onSkipToContent={() => {
                            console.log(">>> Skip to Content Clicked");
                        }}
                        onSkipToNav={() => {
                            console.log(">>> Skip to Nav Clicked");
                        }}
                    >
                        <GlobalHeaderSearch
                            placeholder="Search Salesforce"
                            onSelect={() => {
                                console.log(">>> onSelect");
                            }}
                            options={[{ label: "Email" }, { label: "Mobile" }]}
                        />
                        <GlobalHeaderButton
                            className="slds-m-right--small"
                            iconVariant={null}
                            label="Feedback"
                            onClick={() => {
                                console.log(">>> onClick");
                            }}
                            variant="neutral"
                        />
                        <GlobalHeaderDropdown
                            iconCategory="utility"
                            iconName="add"
                            onSelect={() => {
                                console.log(">>> onSelect");
                            }}
                            options={[{ label: "New Note" }, { label: "Log a Call" }]}
                        />
                        <GlobalHeaderButton
                            iconName="question"
                            iconCategory="utility"
                            onClick={() => {
                            }}
                        />
                        <GlobalHeaderButton
                            iconName="settings"
                            iconCategory="utility"
                            onClick={() => {
                                console.log(">>> onClick");
                            }}
                        />
                        <GlobalHeaderProfile
                            avatar={path.resolve(__dirname, "images/avatar2.jpg")}
                            onClick={() => {
                                console.log(">>> onClick");
                            }}
                            onSelect={() => {
                                console.log(">>> onSelect");
                            }}
                            options={[{ label: "Profile Menu" }]}
                        />
                    </GlobalHeader>
                </IconSettings>
            </div>
        );
    }
}

export default Header;
