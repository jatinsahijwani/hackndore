const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 4500;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://hackndore:Jatin12345@cluster0.upoujm2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const complaintSchema = new mongoose.Schema({
    category : String,
    name : String,
    phone: String,
    geo: String,
    address: String,
    problem: String,
    remark: String
});

const Complaint = mongoose.model('Complaint',complaintSchema);

app.post('/api/newComplaint', async(req,res) => {
    const name = req.body.name;
    const category = req.body.category;
    const phone = req.body.phone;
    const geo = req.body.geo;
    const address = req.body.address;
    const problem = req.body.problem;
    const remark = req.body.remark;
    const json = {name,category,phone,geo,address,problem,remark};
    const newComplaint = new Complaint(json);
    await newComplaint.save();
    return res.json({
        message : "Saved successfully",
        category : category
    });
});

app.post('/api/getAllComplaints', async(req,res) => {
    const data = await Complaint.find({});
    return res.json(data);
});

app.post('/api/getComplaintsByCategory', async(req,res) => {
    const category = req.body.category;
    const data = await Complaint.find({category: category});
    return res.json(data);
});

app.post('/get-media',async(req,res) => {
    
})

app.listen(port,() => {
    console.log("Listening at port number : " + port);
})