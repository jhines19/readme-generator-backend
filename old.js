// TODO: Create a function to write README file
//was right above init function in index.js
const writeToFile = (fileName, data) => {
    fs.writeFile("README.md", generateMarkdown, (err) =>
    err ? console.log(err): console.log("Successfully create README.md!")
    );
}

//Notes

//description for later
    // Developers who want professional grade readme's but either don't have the time or don't know what professional re
    // adme's consist of can use this to generate a readme for their projects through ans
    // wering a few prompts using node js.