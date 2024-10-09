// Our Dependecies
import express from 'express'
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors());

// Let us run the server. So its running
app.listen(3002, () => {
    console.log('Server is running on port 3002');
});

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Melmin77',
    database: 'orphan',
})



// service login et register
app.post('/register', (req, res) => {
    const sql = "INSERT INTO users (username, email, password) VALUES (?)"
    console.log(req.body)
    const values = [
        req.body.username,
        req.body.email,
        req.body.password,
    ]
    db.query(sql, [values], (err,result) =>{
        if(err) return res.json(err);
        return res.json(result);
    })
})


app.post('/login', (req, res) => {
    const sentloginUserName = req.body.LoginUserName
    const sentLoginPassword = req.body.LoginPassword

    const SQL = 'SELECT * FROM users WHERE username = ? && password = ?'
    const Values = [sentloginUserName, sentLoginPassword]

        db.query(SQL, Values, (err, results) => {
            if(err) {
                res.send({error: err})
            }
            if(results.length >= 0) {
                res.send(results)
            }
            else{
                res.send({message: `Credentials Don't match!`})
            }
        })
})


// module ressource
app.post("/create", (req, res) => {
    const sql = "INSERT INTO ressource (LIBRESS, TYPRESS, QTITERESS) VALUES (?)"
    console.log(req.body)
    const values = [
        req.body.LIBRESS,
        req.body.TYPRESS,
        req.body.QTITERESS,
    ]
    db.query(sql, [values], (err,result) =>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.get("/read/:id", (req, res) => {

    const sql = "SELECT id, LIBRESS, TYPRESS FROM ressource WHERE id = ?";
    const id = req.params.id;

    db.query(sql,[id], (err,result) =>{
        if (err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.get("/ressource", (req, res) => {

    const sql = "SELECT id, LIBRESS, TYPRESS, QTITERESS FROM ressource";
    db.query(sql, (err,result) =>{
        if (err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.put("/update/:id", (req, res) => {
    const sql = "UPDATE ressource SET LIBRESS = ?, TYPRESS = ?, QTITERESS = ? WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [req.body.LIBRESS, req.body.TYPRESS, req.body.QTITERESS, id], (err,result) =>{
        if (err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.delete("/delete/:id", (req, res) => {
    const sql = "DELETE FROM ressource WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) =>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

// module enfant
app.get("/enfant", (req, res) => {

    const sql = "SELECT IDENF, NOMPRENENF, DATENAISSENF, DATEENTREE, FamEnf FROM enfant";
    db.query(sql, (err,result) =>{
        if (err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.post("/createdeux", (req, res) => {
    const sql = "INSERT INTO enfant (NOMPRENENF, DATENAISSENF, DATEENTREE, FamEnf) VALUES (?)"
    console.log(req.body)
    const values = [
        req.body.NOMPRENENF,
        req.body.DATENAISSENF,
        req.body.DATEENTREE,
        req.body.FamEnf,
    ]
    db.query(sql, [values], (err,result) =>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.put("/updatedeux/:id", (req, res) => {
    const sql = "UPDATE enfant SET NOMPRENENF = ?, DATENAISSENF = ?, DATEENTREE = ?, FamEnf = ? WHERE IDENF = ?";
    const id = req.params.id;
    db.query(sql, [req.body.NOMPRENENF, req.body.DATENAISSENF, req.body.DATEENTREE, req.body.FamEnf, id], (err,result) =>{
        if (err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.delete("/deletedeux/:id", (req, res) => {
    const sql = "DELETE FROM enfant WHERE IDENF = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) =>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.get("/infoparcours/:id", (req, res) => {

    const sql = "SELECT ANNEE, NIVEAU, ETABLISSEMENT FROM parcours, enfant WHERE enfant.IDENF = parcours.IDENF";
    const id = req.params.id;

    db.query(sql,[id], (err,result) =>{
        if (err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.get("/infoante/:id", (req, res) => {

    const sql = "SELECT DESCANT FROM antecedentmedical, enfant WHERE enfant.IDENF = antecedentmedical.IDENF";
    const id = req.params.id;

    db.query(sql,[id], (err,result) =>{
        if (err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})


// module employe
app.get("/personnel", (req, res) => {

    const sql = "SELECT IDPERS, NOMPRENPERS, FNCPERS FROM personnel";
    db.query(sql, (err,result) =>{
        if (err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.post("/createtrois", (req, res) => {
    const sql = "INSERT INTO personnel (NOMPRENPERS, FNCPERS) VALUES (?)"
    console.log(req.body)
    const values = [
        req.body.NOMPRENPERS,
        req.body.FNCPERS,
    ]
    db.query(sql, [values], (err,result) =>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.put("/updatetrois/:id", (req, res) => {
    const sql = "UPDATE personnel SET NOMPRENPERS = ?, FNCPERS = ? WHERE IDPERS = ?";
    const id = req.params.id;
    db.query(sql, [req.body.NOMPRENPERS, req.body.FNCPERS, id], (err,result) =>{
        if (err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.delete("/deletetrois/:id", (req, res) => {
    const sql = "DELETE FROM personnel WHERE IDPERS = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) =>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

// module parcours
app.get("/parcours", (req, res) => {

    const sql = "SELECT IDPARC, ANNEE, NIVEAU, ETABLISSEMENT FROM parcours";
    db.query(sql, (err,result) =>{
        if (err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.post("/createquatre", (req, res) => {
    const sql = "INSERT INTO parcours (ANNEE, NIVEAU, ETABLISSEMENT) VALUES (?)"
    console.log(req.body)
    const values = [
        req.body.IDENF,
        req.body.ANNEE,
        req.body.NIVEAU,
        req.body.ETABLISSEMENT,
    ]
    db.query(sql, [values], (err,result) =>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.delete("/deletequatre/:id", (req, res) => {
    const sql = "DELETE FROM parcours WHERE IDPARC = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) =>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

// module antecedentmedical
app.get("/antecedentmedical", (req, res) => {

    const sql = "SELECT IDANT, DESCANT FROM antecedentmedical";
    db.query(sql, (err,result) =>{
        if (err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.post("/createcinq", (req, res) => {
    const sql = "INSERT INTO antecedentmedical (DESCANT) VALUES (?)"
    console.log(req.body)
    const values = [
        req.body.DESCANT,
    ]
    db.query(sql, [values], (err,result) =>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.delete("/deletecinq/:id", (req, res) => {
    const sql = "DELETE FROM antecedentmedical WHERE IDANT = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) =>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

// module don
app.get("/don", (req, res) => {

    const sql = "SELECT IDDON, DONATEUR, DATEDON FROM don";
    db.query(sql, (err,result) =>{
        if (err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.post("/createsix", (req, res) => {
    const sql = "INSERT INTO don (IDDON, DONATEUR, DATEDON) VALUES (?)"
    console.log(req.body)
    const values = [
        req.body.IDDON,
        req.body.DONATEUR,
        req.body.DATEDON,
    ]
    db.query(sql, [values], (err,result) =>{
        if(err) return res.json(err);
        return res.json(result);
    })
})
app.delete("/deletesix/:id", (req, res) => {
    const sql = "DELETE FROM don WHERE IDDON = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) =>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

// module stock
app.get("/magasin", (req, res) => {

    const sql = "SELECT LIBMAG, TYPMAG, QTEMAG FROM magasin";
    db.query(sql, (err,result) =>{
        if (err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.post("/createsept", (req, res) => {
    const sql = "INSERT INTO magasin (IDMAG, LIBMAG, TYPMAG, QTEMAG) VALUES (?)"
    console.log(req.body)
    const values = [
        req.body.IDMAG,
        req.body.LIBMAG,
        req.body.TYPMAG,
        req.body.QTEMAG,
    ]
    db.query(sql, [values], (err,result) =>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.delete("/deletesept/:id", (req, res) => {
    const sql = "DELETE FROM magasin WHERE IDMAG = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) =>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

// module allocation
app.get("/allocation", (req, res) => {

    const sql = "SELECT * FROM allocation";
    db.query(sql, (err,result) =>{
        if (err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

app.post("/createhuit", (req, res) => {
    const sql = "INSERT INTO allocation (IDALLO, IDENF, OBJET, DATEALLO) VALUES (?)"
    console.log(req.body)
    const values = [
        req.body.IDALLO,
        req.body.IDENF,
        req.body.OBJET, 
        req.body.DATEALLO,
    ]
    db.query(sql, [values], (err,result) =>{
        if(err) return res.json(err);
        return res.json(result);
    })
})

app.delete("/deletehuit/:id", (req, res) => {
    const sql = "DELETE FROM allocation WHERE IDALLO = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, result) =>{
        if(err) return res.json({Message: "Error inside server"});
        return res.json(result);
    })
})

