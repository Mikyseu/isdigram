const fs = require("fs");

console.log("start");

try {
  fs.readFile("./users.json", "utf8", (error, userJson) => {
    if (error) {
      console.error(error);

      return;
    }

    console.log(userJson);

    console.log("end");
  });
} catch (error) {
  console.error(error);
}

console.log("continue...");