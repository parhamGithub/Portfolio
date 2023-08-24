import { useState, useEffect } from "react";

import { devSkills } from "../../constants/skills";
import { Skill } from "./";

const Skills = () => {
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [javascript, setJavascript] = useState(0);
    const [reactJs, setReactJs] = useState(0);
    const [python, setPython] = useState(0);
    const [git, setGit] = useState(0);

    const { htmlSkill, cssSkill, jsSkill, reactSkill, pythonSkill, gitSkill } = devSkills;

    const devSkillsList = [htmlSkill, cssSkill, jsSkill, reactSkill, pythonSkill, gitSkill];
    const skillsList = [html, css, javascript, reactJs, python, git];
    const skillsProfessionalityNumberList = [80, 75, 60, 75, 65, 57]
    const setSkillsList = [setHtml, setCss, setJavascript, setReactJs, setPython, setGit];

    useEffect(() => {
        const timer = setInterval(() => {
            setSkillsList.map((skill, index) => {
                skill((oldProgress) => {
                    const diff = Math.random() * 10;
                    return Math.min(oldProgress + diff, skillsProfessionalityNumberList[index]);
                });
            })
        }, 200)

        return () => {
            clearInterval(timer);
        }
    }, [])

    return (
        <>
            {
                devSkillsList.map((skill, index) => (
                    <Skill
                        key={index}
                        name={skill.name}
                        icon={skill.icon}
                        color={skill.color}
                        value={Math.round(skillsList[index])}
                    />
                ))
            }
        </>
    )
};

export default Skills;