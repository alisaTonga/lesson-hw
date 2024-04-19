function getDriveLicence(success, failure) {
    if(Math.random()>0.1){
    success("You've passed the test. Now you can get your diriving licence!")
    }
    else{
        failure("Unfortinately, you failed your exam. Try again ")
    }
}
function success(result) {
    console.log(`Success finished with result ${result}`);
}
function failure(error) {
    console.log(`Failure with result ${error}`);
}
getDriveLicence(success,failure)