const express = require('express')
const router = express.Router()

var contactList = [
    {id: 0, name: 'Ned', last: 'Stark', email: 'ned@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Winter is coming.'},
    {id: 1, name: 'Theon', last: 'Greyjoy', email: 'tgreyjoy@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Reluctant to pay iron price.'},
    {id: 2, name: 'Samwell', last: 'Tarly', email: 'starly@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Loyal brother of the watch.'},
    {id: 3, name: 'Jon', last: 'Snow', email: 'jsnow@castleblack.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Knows nothing.'},
    {id: 4, name: 'Arya', last: 'Stark', email: 'waterdancer@winterfell.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Has a list of names.'},
    {id: 5, name: 'Jora', last: 'Mormont', email: 'khaleesifan100@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Lost in the friend-zone.'},
    {id: 6, name: 'Tyrion', last: 'Lannister', email: 'tyrion@lannister.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Currently drunk.'},
    {id: 7, name: 'Stannis', last: 'Baratheon', email: 'onetrueking@dragonstone.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Nobody expects the Stannish inquisition.'},
    {id: 8, name: 'Hodor', last: 'Borno', email: 'hodor@hodor.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Hodor? Hodor... Hodor!'},
    {id: 9, name: 'Margaery', last: 'Tyrell', email: 'mtyrell@highgarden.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Keeper of kings.'},
    {id: 10, name: 'Brienne', last: 'Tarth', email: 'oathkeeper@gmail.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not cross her.'},
    {id: 11, name: 'Petyr', last: 'Baelish', email: 'petyr@baelishindustries.com', phone: '123-456-7890', url: 'www.google.com', notes: 'Do not trust anyone.'},
  ]

//เพิ่มข้อมูล
//Insert contactList
router.post('/contactList', (req,res)=>{
    let newContactList = req.body
    let flag = []

    if(newContactList.name != null && newContactList.last != null && newContactList.email != null){
        contactList.push(newContactList)
        newContactList.create = '2017-12-16'
        flag.push(newContactList)
    }
    else{
        if(newContactList.name == null){
            flag.push("Please enter your firstname!!!")
        }
        if(newContactList.last == null){
            flag.push("Please enter your lastname!!!")
        }
        if(newContactList.email == null){
            flag.push("Please enter your email!!!")
        }
    }        
    res.json(flag)
})

module.exports = router