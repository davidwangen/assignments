
function sum(x, y){
    if(typeof x ==="number" && typeof y ==="number"){
        return x + y
    }else {
        throw new Error ("hey im not a number")
        
    }
}

console.log(sum(2,3))

try {
    console.log(sum("1", "2"))

}

catch(err){
    console.log(err)
}

var user = {username: "sam", password: "123abc"}

function login(username , password){
    if(username === user.username && password ===user.password){
        return "login successful!"
    }else{
        throw new Error ("incorrect username or password")
    }
}

try {
    console.log(login("sam" , "123abc"))
    
}


catch(err){
    console.log(err)
}

try {
    console.log(login("samule" , "123abc"))
}

catch(err){
    console.log(err)
}
