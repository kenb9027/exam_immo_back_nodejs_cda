const Avantage = require('../models').Avantage;

exports.list_avantage = (req, res, next) =>{
  Avantage.findAll({})
  .then( data => {
    res.status(200).json(data);
  })
  .catch(err => console.log(err))
}

exports.add_avantage = (req, res, next) => {
    Avantage.create(req.body)
    .then( data => {
      res.status(201).json({
        message: 'avantage created',
        data: data
      })
    })
    .catch(err => console.log(err))
  }
  
  exports.delete_avantage = (req,res, next) => {
    Avantage.destroy({
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
  
  exports.edit_avantage = (req, res, next) => {
    Avantage.update(req.body,{
      where:{
        id: req.params.id
      }
    })
    .then( () => {
      res.status(200).json({
        message: 'avantage edited'
      })
    })
    .catch(err => console.log(err))
  }
  
  exports.detail_avantage = (req, res, next) => {
    Avantage.findByPk(req.params.id)
    .then( data => {
      res.status(200).json({
        message: 'avantage detail',
        data: data
      })
    })
    .catch(err => console.log(err))
  }