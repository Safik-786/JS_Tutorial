let input= [
    {
        id:1,
        name:"safik",
        role:"user"
    },
    {
        id:2,
        name:"rahul",
        role:"admin"
    },
    {
        id:3,
        name:"gudu",
        role:"user"
    },
]

let output= {}
for (let i = 0; i < input.length; i++) {
    let role= input[i].role
    if (!output[role]) {
        output[role]= []
    }
    output[role].push(input[i])
    
}

console.log(output)