require("dotenv").config();
require("./config/database");
const app = require("./app");

app.listen(process.env.PORT, () => {
   console.log(
      `SERVER IS RUNNING AT http://localhost:${process.env.PORT} IN ${process.env.NODE_ENV} MODE`
   );
});
