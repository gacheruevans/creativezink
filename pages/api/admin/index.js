// endpoint that creates a supplier.
const fs = require('fs')
//const Records = require('../../../data/list.json')
//import { Records } from '../../../data/list.json'

export default function handler(req, res){ 
  if(req.method === "GET"){
    //Fetch data list
    res.status(200).json(Records)
  } else if(req.method === "POST"){
    //Process Post request   
    const newRecord = {
      id: Date.now(),
      name:req.body.name,
      address: req.body.address,
      logo: req.body.logo,
    }
    //Records.push(newRecord)
    //fs.appendFile("./data/list.json", `,`+ JSON.stringify(newRecord))
    fs.appendFile ("./data/list.json", JSON.stringify(newRecord), function(err) {
      if (err) throw err;
      console.log('complete');
      }
  );
    res.status(201).json(newRecord)
  }
}