import React, { Component } from "react";
const path = require("path");

/** SLDS Components */
import { IconSettings, GlobalNavigationBar, GlobalNavigationBarRegion, GlobalNavigationBarLink, Button, AppLauncher, AppLauncherSection, AppLauncherTile } from "@salesforce/design-system-react";

/** CSS Dependencies */
import "./css/GlobalNavBar.css";

class GlobalNavBar extends Component {
    render() {
        return (
            <div className="GlobalNavBar">
                <IconSettings iconPath={path.resolve(__dirname, "icons")}>
                    <GlobalNavigationBar>
                        <GlobalNavigationBarRegion region="primary">
                            <AppLauncher
                                triggerName="App"
                                onSearch={() => {
                                    console.log("Search term:", event.target.value);
                                }}
                                modalHeaderButton={<Button label="App Exchange" />}
                            >
                                <AppLauncherSection title="Tile Section">
                                    <AppLauncherTile
                                        title="Performance Workflow Manager"
                                        iconText="PWM"
                                    />
                                </AppLauncherSection>
                            </AppLauncher>
                        </GlobalNavigationBarRegion>
                        <GlobalNavigationBarRegion region="secondary" navigation>
                            <GlobalNavigationBarLink
                                href="/lpp/jobs"
                                label="Tab 1"
                                id="jobs-link"
                            />
                            <GlobalNavigationBarLink
                                href="/lpp/runs"
                                label="Tab 2"
                                id="runs-link"
                            />
                        </GlobalNavigationBarRegion>
                    </GlobalNavigationBar>
                </IconSettings>
            </div>
        );
    }
}

export default GlobalNavBar;