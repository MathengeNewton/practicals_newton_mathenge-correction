
module.exports = (sequelize, Sequelize) => { 

  const ClassStreams = sequelize.define("streams", {
        name: {
            type: Sequelize.STRING,
            required:true
        }     
    })   

  return ClassStreams;
}