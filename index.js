const express = require("express")
const cors = require("cors");
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config({ path: __dirname + '/.env' });

const { SERVER_PORT } = require('./configs/config');
const db = require('./models')
const userRouter = require('./routes/userRouter');

const app = express();
const port = SERVER_PORT;

db.sequelize.sync();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get('/', (req, res) => {
    res.status(200).send({ message: 'ok' })
})
app.use("/user", userRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(port, () => {
    console.log(`Dhanvantari app listening on port ${port}. Go to http://localhost:${port}`)
})
