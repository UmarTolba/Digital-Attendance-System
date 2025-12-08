let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let studentsSchema = require('../models/students');

// CREATE student
router.route('/create-student').post((req, res, next) => {
    studentsSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        }
        res.json(data);
    });
});

// READ students
router.route('/').get((req, res, next) => {
    studentsSchema.find((error, data) => {
        if (error) {
            return next(error);
        }
        res.json(data);
    });
}); 

// UPDATE student
router.route('/update-student/:id').put((req, res, next) => {
  studentSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Student updated successfully !')
      }
    },
  )
})

// Delete Student
router.route('/delete-student/:id').delete((req, res, next) => {
  studentsSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})