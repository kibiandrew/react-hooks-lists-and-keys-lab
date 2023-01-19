import React from "react";

function ProjectItem({ name, about, technologies }) {
    const technologiesEl = technologies.map((tech) => {
        return <span key = { tech } > { tech } < /span>
    })
    return ( <
        div className = "project-item" >
        <
        h3 > { name } < /h3> <
        p > { about } < /p> <
        div className = "technologies" > { /* render a <span> for each technology in the technologies array */ } { technologiesEl } <
        /div> <
        /div>
    );
}

export default ProjectItem;