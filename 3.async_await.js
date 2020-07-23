async function requestHandler(res, req) {


    try {
        const user = await User.FindById(req.userId);
        let task = await task.FindById(user.taskId);

        task.complete = true;

        await task.save();

        return res.send("task completed");

    } catch (error) {
        res.send(error);
    }

}