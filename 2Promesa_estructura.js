function API_User() {
    return "do it";

}

let get_user = new Promise((resolve, eject) => {
    setTimeout(() => {
        var _result = API_User();

        if (_result == "do it") resolve(_result);
        else eject("no hay usuarios");
    }, 2000);
});




get_user.then((r) => {
        console.log("finished" + r);
    })
    .catch(error => {
        console.log(error)
    })