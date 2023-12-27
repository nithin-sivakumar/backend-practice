const app = require("./app");
const { exec } = require("child_process");
require("dotenv").config();
const indexRouter = require("./src/routes/index.route");

const PORT = process.env.PORT || 5001 || 5002;

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

app.use("/", indexRouter);

// app.use("/", (req, res) => {
//   res.send(`Hey`);
// });

app.listen(PORT, () => {
  const SERVER_URL = `http://127.0.0.1:${PORT}`;
  // console.log(`    🟢 Server started successfully`)
  // console.log(`    🌐 Server is running on port ${PORT}`);
  console.log(`    🌐 Server Address: http://127.0.0.1:${PORT}`);

  exec(`start ${SERVER_URL}`);
});
