// const express = require("express");
// const cors = require("cors");
// console.log("Starting Server...");
// const db = require("./db");

// const app = express();

// app.use(cors());

// app.use(express.json());

// const PORT = 5000;

// app.listen(PORT,()=>{

//     console.log("Server Running");
// }); 



//================================================================== 

const express = require("express");
const cors = require("cors");

console.log("Starting Server...");

const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Mini CRM API Running");
});

// Get All Leads
app.get("/api/leads", (req, res) => {

    const sql = "SELECT * FROM leads";

    db.query(sql, (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

});

// Add Lead
app.post("/api/leads", (req, res) => {

    const { name, email, source } = req.body;

    const sql =
        "INSERT INTO leads(name,email,source) VALUES(?,?,?)";

    db.query(sql, [name, email, source], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Lead Added Successfully"
        });

    });

});

const PORT = 5000;

app.listen(PORT, () => {

    console.log("Server Running");

});