
const projects = [
    {
        name: "Birdnet",
        type: "AI model",
        year: 2022,
        photo: "cura.png",
    },
    {
        name: "Cura",
        type: "Web application",
        year: 2021,
        photo: "cura.png",
    },
    {
        name: "Fight the Power",
        type: "Exhibit website",
        year: 2021,
        photo: "cura.png",
    },
    {
        name: "Ateneo SALT",
        type: "Redesign",
        year: 2020,
        photo: "cura.png",
    },
    {
        name: "Kixothermic",
        type: "E-commerce website",
        year: 2020,
        photo: "cura.png",
    },
    {
        name: "Hallyulator",
        type: "Web application",
        year: 2020,
        photo: "cura.png",
    },
].sort((a, b) => (a.year > b.year ? -1 : 1));

export default projects