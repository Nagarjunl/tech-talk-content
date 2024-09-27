try {
    // nonExistentFunction();
    console.log("Try");

    throw new Error("Could not find");

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(console.log)
        .catch(console.error);

} catch (error) {
    console.log("error of try");
    console.error(error);
} finally {
    console.log("finally");
}


// try {
//     console.log(a);
// } catch (err) {
//     alert("The engine can't understand this code, it's invalid");
// }