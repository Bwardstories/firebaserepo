import React from "react";

const GithubLink = props => {
  const { githubUrl } = props;
  return (
    <div>
      Click <a href={githubUrl}>Here</a> for the github repository{" "}
    </div>
  );
};

export default GithubLink;
