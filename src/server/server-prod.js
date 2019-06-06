import express from "express";
var router = express.Router();

const app = express(),
    DIST_DIR = __dirname;

app.use('/api/lpp',router);

app.use(express.static(DIST_DIR));

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);
    console.log("Press Ctrl+C to quit.");
});