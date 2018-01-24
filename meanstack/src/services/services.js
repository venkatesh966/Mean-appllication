var mongoose = require('mongoose');
var studentSchema = new mongoose.Schema({
    name: String,
    
    department : String
    
})

var Student = module.exports = mongoose.model('Student', studentSchema);

module.exports.getStudents = function(callback){
    Student.find(callback);
}
module.exports.addStudent = function(newStudent, callback){
    Student.create(newStudent, callback);
}
module.exports.updateStudent = function(id, newStudent, callback){
    Student.findByIdAndUpdate(id, newStudent, callback);
}
module.exports.deleteStudent = function(id, callback){
    Student.findByIdAndRemove(id, callback);
}
module.exports.getStudent = function(id, callback){
    Student.findById(id, callback);
}