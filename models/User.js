const {Model,Datatype, DataTypes}=require('sequelize');
const sequelize=require('../config/connection');

class User extends Model {}

User.init(
    {
       // define an Id column
       id: {
           type:DataTypes.INTEGER,
           allowNull:false,
           primaryKey:true,
           autoIncrement:true
       }
    ,
    
       username: {
           type:DataTypes.STRING,
           allowNull:false
       },
    
      email:{

      },
    {
         // TABLE CONFIGURATION OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    // don't automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // make it so our model name stays lowercase in the database
    modelName: 'user'
    }

)
module.exports=User;