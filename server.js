const express = require("express");
const app = express();
const { MongoClient} = require("mongodb");

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT;
let db;

let connectionString = process.env.connectionString;

app.use(express.json());
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
	res.render('pages/index');
});

app.post("/add",function (req, res) {
	db.collection("user").insertOne(req.body, function (err, info) {
		res.redirect("/contact");
	});
});

app.get('/contact', function (req, res) {
	db.collection("user").find().toArray(function (err, items) {
		res.render('pages/contact', {
			users: items,
		});
	});
});


app.put("/update/:id", function (req, res) {
	db.collection("user").findOneAndUpdate(
	  { _id: new ObjectId(req.params.id) },
	  {
		$set: {
		  fullname: req.body.fullname,
		  address: req.body.address,
		  ph_number: req.body.ph_number,
		},
	  },
	  
	  function () {
		
		res.send("Success updated!");
	  }
	);
  });
  
  app.delete("/delete/:id",function (req, res) {
	db.collection("user").deleteOne(
	  { _id: new ObjectId(req.params.id) },
	  function () {
		res.redirect("/contact");
		res.send("Successfully deleted!");
	  }
	);
  });
  

MongoClient.connect(connectionString,{ useNewUrlParser: true },
	(error, client) => {
		if (error) {
			return console.log("Connection failed for some reason");
		}
		console.log("Connection established - All well");
		db = client.db("crud");
		app.listen(PORT, function () {
			console.log("Server is running on Port: " + PORT);
		});
	},
);
