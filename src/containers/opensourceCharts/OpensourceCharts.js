import React from "react";
import "chart.js/auto";
import { Fade } from "react-reveal";
import PullRequestChart from "../../components/pullRequestChart/PullRequestChart.js";
import IssueChart from "../../components/issueChart/IssueChart.js";
import "./OpensourceCharts.css";

const OpensourceCharts = (props) => {
  const theme = props.theme;
  return (
    <div>
      <div className="os-charts-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="os-charts-header" style={{ color: theme.text }}>
            Contributions
          </h1>
        </Fade>
      </div>
      <div className="os-charts-body-div">
        <PullRequestChart theme={theme} />
        <IssueChart theme={theme} />
      </div>
    </div>
  );
};

export default OpensourceCharts;
