const Tag = require('../models').Tag;

exports.list_tag = (req, res, next) =>{
  Tag.findAll({})
  .then( data => {
    res.status(200).json(data);
  })
  .catch(err => console.log(err))
}

exports.add_tag = (req, res, next) => {
    Tag.create(req.body)
    .then( data => {
      res.status(201).json({
        message: 'tag created',
        data: data
      })
    })
    .catch(err => console.log(err))
  }
  
  exports.delete_tag = (req,res, next) => {
    Tag.destroy({
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
  
  exports.edit_tag = (req, res, next) => {
    Tag.update(req.body,{
      where:{
        id: req.params.id
      }
    })
    .then( () => {
      res.status(200).json({
        message: 'tag edited'
      })
    })
    .catch(err => console.log(err))
  }
  
  exports.detail_tag = (req, res, next) => {
    Tag.findByPk(req.params.id)
    .then( data => {
      res.status(200).json({
        message: 'tag detail',
        data: data
      })
    })
    .catch(err => console.log(err))
  }