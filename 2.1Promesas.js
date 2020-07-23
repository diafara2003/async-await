function requestHandler(req, res) {

    User.findbyId(req.userId)
        .then((user) => {
            return task.findbyId(user.taskId);

        })
        .then((task) => {
            task.completed = true;
            return task.save()
        })
        .then(() => {
            res.send("task completed");
        })
        .catch((errores) => {
            return res.send(errores);

        });
}