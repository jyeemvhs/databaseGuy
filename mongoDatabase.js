

var express = require("express");
var mongoose = require("mongoose");
var StudentModel = require("./models/Student");
const Student = require('./Student');

let myDatabase = function() {
}



myDatabase.prototype.postStudent = function(student,res) {
  let obj = {ident:student.ident,name:student.name};
  StudentModel.create(obj,function(error,info) {
      if (error) {
          return res.json({retVal:false});
      }
      return res.json({retVal:true});
  });
}

myDatabase.prototype.getStudent = function(ident,res) {

  StudentModel.find({ident:ident},function(error,info) {
      if (error) {
          return res.json({retVal:null});
      }
      else if (info == null) {
          return res.json({retVal:null});
      }

      if (info.length == 1)	
        return res.json({ retVal: new Student(ident,info[0].name) });
      else
          return res.json({retVal:null});
   });
}



module.exports = myDatabase;