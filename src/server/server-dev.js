import path from "path";
import express from "express";
var router = express.Router();
import webpack from "webpack";
import historyApiFallback   from "connect-history-api-fallback";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import config from "../../webpack.dev.config.js";

const PORT = 8184;

const app = express(),
    compiler = webpack(config);

app.use('/api/lpp',router);

app.use(historyApiFallback({
    verbose: false
}));

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`);
    console.log("Press Ctrl+C to quit.");
});