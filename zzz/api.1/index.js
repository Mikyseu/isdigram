const fs = require("fs");

console.log("start");

try {
  fs.readFile("./users.json", "utf8", (error, userJson) => {
    if (error) {
      console.error(error);

      return;
    }

    const users = JSON.parse(userJson);

    const user = {
      name: "Yoda",
      birthdate: "1882-03-03",
      email: "Yoda@gmail.com",
      username: "Yoda",
      password: "123qwe123",
      status: "offline",
      id: "q6ydgi8cels",
    };

    users.push(user);

    const usersJson2 = JSON.stringify(users);

    fs.writeFile("./users.json", usersJson2, (error) => {
      if (error) {
        console.error(error);

        return;
      }
      console.log("end");
    });
  });
} catch (error) {
  console.error(error);
}

console.log("continue...");
