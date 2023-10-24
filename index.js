// Add your code here

function submitData(name, email){
    fetch('http://localhost:3000/users', {
        method: "POST",
        headers:{
            "content-type": "application/json",
            "Accept" : "application/json",
        }, 
        body: JSON.stringify({
            name : name,
            email : email,
        }),
    })
        .then(res => (res.json()))
        .then(users => console.log(users))
        .catch((error) => {
            alert("Bad things! Ragnarők!");
            console.log(error.message);
        })
        
}

submitData("Steve", "steve@steve.com")