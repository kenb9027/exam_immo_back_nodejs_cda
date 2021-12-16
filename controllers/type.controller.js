const Type = require('../models').Type;

exports.list_type = (req, res, next) =>{
  Type.findAll({})
  .then( data => {
    res.status(200).json(data);
  })
  .catch(err => console.log(err))
}

exports.add_type = (req, res, next) => {
    Type.create(req.body)
    .then( data => {
      res.status(201).json({
        message: 'type created',
        data: data
      })
    })
    .catch(err => console.log(err))
  }
  
  exports.delete_type = (req,res, next) => {
    Type.destroy({
      where:{
        id: req.params.id
      }
    })
    .then((data) => {
      if(data == 0){
        res.status(200).json({message: 'No data to delete'});
      }
      res.status(204).end();
    })
    .catch(err => console.log(err))
  }
  
  exports.edit_type = (req, res, next) => {
    Type.update(req.body,{
      where:{
        id: req.params.id
      }
    })
    .then( () => {
      res.status(200).json({
        message: 'type edited'
      })
    })
    .catch(err => console.log(err))
  }
  
  exports.detail_type = (req, res, next) => {
    Type.findByPk(req.params.id)
    .then( data => {
      res.status(200).json({
        message: 'type detail',
        data: data
      })
    })
    .catch(err => console.log(err))
  }