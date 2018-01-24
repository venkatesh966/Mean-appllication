var express = require('express');
var router = express.Router();
var Student = require('../services/services.js');
router.get('/', function(req, res){
    // Employee.getEmployees(function(err,students){
        Student.getStudents(function(err,students){
         if(err) throw err;
         res.json(students);
     });
 })
router.post('/', function(req, res){
    var newStudent = {
        name: req.body.name,
        
        department : req.body.department
        
    }
     Student.addStudent(newStudent,function(err,student){
         if(err) throw err;
         res.json(student);
     });
 })
 router.put('/:_id', function(req, res){
     var update = {
        name: req.body.name,
       
        department : req.body.department
        
    }
     Student.updateStudent(req.params._id , update, function(err,student){
         if(err) throw err;
         res.json(student);
     });
 })
 router.delete('/:_id', function(req, res){
     
     Student.deleteStudent(req.params._id ,  function(err,student){
         if(err) throw err;
         res.json(student);
     });
 })
 router.get('/:_id', function(req, res){
    
     Student.getStudent(req.params._id , function(err,student){
         if(err) throw err;
         res.json(student);
     });
 })
module.exports = router;