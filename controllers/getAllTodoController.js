const Todo = require("../todoModel");

const getAllTodos  = async (req, res)=> {

  try{
    const todos = await Todo.find({});
    res.json(todos);
  }
  catch(err){
    console.log(err);
    res.sendStatus(500);
}
};

module.exports = getAllTodos;