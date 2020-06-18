module.exports = function(app){
    const db = require("../models");

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });

    app.post("/api/workouts", (req, res)=> {
        db.Workout.create({req}).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findOneAndUpdate({_id: req.params.id},{$push: {exercises: req.body} }, { new: true}).then(dbWorkout => {
           let sumDuration = 0;
           dbWorkout.exercises.forEach(exercise => sumDuration+= exercise.duration)
            db.Workout.findOneAndUpdate({_id: req.params.id},{$set: {totalDuration:sumDuration} }, { new: true}).then(dbWorkout => {
            res.json(dbWorkout);
            })
          }).catch(err => {
            res.json(err);
          });
    });


}