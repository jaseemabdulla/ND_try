const g = require('./mod1')
g();

const fs = require("fs");

(async () => {
    const dateFormatModule = await import("dateformat");
    const dateFormat = dateFormatModule.default;

    fs.readdir("./myfiles", (_, files) => {
        files.forEach((file) => {
            if (/-01-/.test(file)) {  // Matches files with '-01-' in the name
                const aa = file.substring(0, file.indexOf('.'));
                const date = new Date(aa); // Convert aa to a Date object

                if (!isNaN(date)) {  // Check if date conversion was successful
                    console.log(file, dateFormat(date, "dddd, mmmm dS, yyyy"));
                } else {
                    console.log(`Invalid date in filename: ${file}`);
                }
            }
        });
    });
})();