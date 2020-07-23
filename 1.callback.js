function requestHandler(req, res) {

    User.FindById(req.userId, function (error, user) {

        if (error) {
            res.send(error);
        } else {
            task.FindById(user.taskId, function (error, task) {
                task.completed = true;
                task.save(function (error) {
                    if (error) {
                        return res.send(error);
                    } else {
                        res.send("task completed");
                    }
                })
            })
        }
    })
}