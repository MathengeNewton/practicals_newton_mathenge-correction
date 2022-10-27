const db = require("../database/index");
const Students = db.Students;
const Streams = db.ClassStreams


class MainController {   

    async CreateStudent(req, res){    

        try {
            const student = await Students.create({
                name: req.body.name,
                stream: req.body.stream
            })
            const savedStudent = await student.save();
            
            res.status(200).json(savedStudent); 
        } catch (error) {
            console.log(error); 
        }

    }

    async CreateStream(req, res){    

        try {
            const stream = await Streams.create({
                name: req.body.name
            });
            const savedStream = await stream.save();            
            res.status(200).json(savedStream); 
        } catch (error) {
            console.log(error); 
        }

    }

    async ReadStudents(req,res) {
        try {
            const students = await Students.findAll();
            res.status(200).json(students);
        } catch (error) {
            console.log(error);
        }
    }

    async ReadStudent(req,res) {
        try {
            const student = await Students.findByPk(req.params.id);
            res.status(200).json(student);
        } catch (error) {
            console.log(error);
        }
    }

    async ReadStreams(req,res) {
        try {
            const streams = await Streams.findAll();
            res.status(200).json(streams);
        } catch (error) {
            console.log(error);
        }
    }

    async ReadStream(req,res) {
        try {
            const stream = await Streams.findByPk(req.params.id);
            res.status(200).json(stream);
        } catch (error) {
            console.log(error);
        }
    }
    async ReadStreamStudents(req,res) {
        try {
            const stream = await Students.findAll({
                where:{
                    stream:req.params.id
                }
            });
            res.status(200).json(stream);
        } catch (error) {
            console.log(error);
        }
    }

    async UpdateStudent(req,res) {
        try {
            const stream = await Students.update(req.body ,{
                where:{
                    id:req.params.id
                }
            });
            res.status(200).json(stream);
        } catch (error) {
            console.log(error);
        }
    }

    async deleteStudent(req,res) {
        try {
            const stream = await Students.destroy({
                where:{
                    id:req.params.id
                }
            });
            res.status(200).json(stream);
        } catch (error) {
            console.log(error);
        }
    }
    

}

module.exports = new MainController();

