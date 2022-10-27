
module.exports = (sequelize, Sequelize) => {
  const Students = sequelize.define("students", {
      name: {
        type: Sequelize.STRING,
        required:true
      },
      stream: {
        type: Sequelize.INTEGER,
        required:true
     }       
  })
 

  return Students;
}