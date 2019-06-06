import React, { Component } from "react";
const path = require("path");

/** SLDS Components */
import { IconSettings, PageHeader } from "@salesforce/design-system-react";

/** CSS Dependencies */
import "./css/Home.css";

class Runs extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Home">
                <div className="PageRecord">
                    <IconSettings iconPath={path.resolve(__dirname, "icons")}>
                        <PageHeader
                            iconAssistiveText="User"
                            iconCategory="standard"
                            iconName="knowledge"
                            label="Home"
                            title="Home"
                            variant="recordHome"
                        />
                    </IconSettings>
                </div>
            </div>
        );
    }
}

export default Runs;