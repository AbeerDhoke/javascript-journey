const user = {
    username: "Abeer",
    price: 123,

    welcomeMessage: function(){
    
    console.log(`${this.username}, Welcome To The Website`);
    }
}

    user.welcomeMessage()

    function one(){
        console.log(this);
        
    } 

    // one()

    const addTwo = (num1, num2) => {
        return num1 + num2;
    }
    const addThree = (num1, num2, num3) => 
         num1 + num2 + num3;
    

    console.log(addTwo(3, 4));
    console.log(addThree(6, 7, 8));
    