require("dotenv").config();
require("./config/database");
const app = require("./app");

app.get("/", (req, res, next) => {
   res.send("<h1>Welcome to our Server MBA Burger Wala</h1>");
});

app.listen(process.env.PORT, () => {
   console.log(
      `SERVER IS RUNNING AT http://localhost:${process.env.PORT} IN ${process.env.NODE_ENV} MODE`
   );
});
