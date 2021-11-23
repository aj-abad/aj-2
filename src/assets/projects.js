import curaTxt from "raw-loader!../assets/txt/projects/cura.txt"
const cura = curaTxt.split("\n").filter(e => e.length > 2)
import fightTxt from "raw-loader!../assets/txt/projects/fightthepower.txt"
const fight = fightTxt.split("\n").filter(e => e.length > 2)
import saltTxt from "raw-loader!../assets/txt/projects/ateneosalt.txt"
const salt = saltTxt.split("\n").filter(e => e.length > 2)
import kixoTxt from "raw-loader!../assets/txt/projects/kixothermic.txt"
const kixo = kixoTxt.split("\n").filter(e => e.length > 2)
import hallyuTxt from "raw-loader!../assets/txt/projects/hallyulator.txt"
const hallyu = hallyuTxt.split("\n").filter(e => e.length > 2)

const projects = [
    {
        category: "2021",
        projects: [
            {
                name: "Cura",
                photo: "cura.png",
                words: ["CURA"],
                content: {
                    description: cura[0],
                    goal: cura[1],
                    solution: cura[2],
                    techs: ["Vue.js", "Vuetify", "ASP.NET"]
                },
                links: {
                    site: "https://cura-demo.netlify.app",
                    repo: null,
                    repoReason: "Private",
                    caseStudy: null,
                    caseStudyReason: "Coming Soon",
                }
            },
            {
                name: "Fight the Power",

                photo: "fightthepower.png",
                words: ["FIGHT THE", "POWER"],
                content: {
                    description: fight[0],
                    goal: fight[1],
                    solution: fight[2]
                },
                links: {
                    site: "https://fightthepower.netlify.app",
                    repo: null,
                    caseStudy: null,
                    caseStudyReason: "Coming Soon",
                    repoReason: "Coming Soon"
                }
            },
        ]
    }
    , {
        category: "2020",
        projects: [
            {
                name: "Ateneo SALT",
                photo: "salt.png",
                words: ["ATENEO", "SALT"],
                content: {
                    description: salt[0],
                    goal: salt[1],
                    solution: salt[2]
                },
                links: {
                    site: "https://ateneosaltprototype.netlify.app",
                    repo: null,
                    caseStudy: null,
                    caseStudyReason: "Coming Soon",
                    repoReason: "Coming Soon"
                }
            },
            {
                name: "Kixothermic",

                photo: "kixothermic.png",
                words: ["KIXO-", "THERMIC"],
                content: {
                    description: kixo[0],
                    goal: kixo[1],
                    solution: kixo[2]
                },
                links: {
                    site: "https://kixothermic.netlify.app",
                    repo: null,
                    caseStudy: null,
                    caseStudyReason: "Coming Soon",
                    repoReason: "Private"
                }
            },
            {
                name: "Hallyulator",

                photo: "hallyulator.png",
                words: ["HALLYU-", "LATOR"],
                content: {
                    description: hallyu[0],
                    goal: hallyu[1],
                    solution: hallyu[2]
                },
                links: {
                    site: "https://hallyulator.netlify.app",
                    repo: null,
                    caseStudy: null,
                    caseStudyReason: "Not Available",
                    repoReason: "Coming Soon"
                }
            },
        ]
    }
]

export default projects