let dbUsers = [ 
    { 
        username: "aisyah", 
        password: "13579", 
        name: "aisyah", 
        email: "aisyah000326@gmail.com" 
    }, 
    { 
        username: "sarah", 
        password: "12345", 
        name: "sarah", 
        email: "sarah@gmail.com" 
    }, 
    { 
        username: "lee", 
        password: "98765", 
        name: "lee", 
        email: "lee@gmail.com" 
    } 
] 
 
function login (reqUsername,reqPassword){ 
   let matchUser = dbUsers.find(                            //find 
    user => user.username == reqUsername // x => console.log(x), => dia buat semua  
    )    
    if (!matchUser)return "User not found!" 
    if(matchUser.password == reqPassword){ 
        return matchUser 
    }else{ 
        return "Invalid password" 
    } 
 
    //for(let i=0: i <dbUsers.length: i++) 
    //console.log(dbUsers[i]) 
    // if (dbUsers[i].username == reqUsername) 
 
} 
 
function register(reqUsername,reqPassword,reqName,reqEmail){ 
    dbUsers.push({                                                  //push 
    username: reqUsername, 
    password: reqPassword, 
    name: reqName, 
    email: reqEmail 
    }) 
} 
 
//try to login 
console.log(login ("alifah","123")) //valid 
console.log(login("utem","password")) //user not found  
 
register("utem","password","fkekk","fkekk@m.com") 
 
console.log(login("utem","password"))