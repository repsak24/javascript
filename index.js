        // just trying things out

        hour = 19;

        if (hour >=6 && hour < 12)
                console.log("Good morning");  
        else if (hour >=12 && hour < 18)
                console.log("Good evening");
        else
                console.log("Good night");

        for (let i=0; i<5; i++){
        if (i%2!==0){
                        console.log(i)
        }
        }
//factory function --> use camel notation
        function createCircle(radius) {
                return {
                        // this is equivalent to radius:radius. Works only inside function
                        radius,
                        // this is equivalent to draw: function() {}
                        draw() {
                                console.log(draw);
                        }
                        
                }
        }
        const circle1 = createCircle(1);
        console.log(circle1);

        const person = {
                firstName: "Kasper",
                lastName: "Brakenhoff",
                get fullName(){ // a getter function inside a const
                        return `${person.firstName} ${person.lastName}`
                },
                set fullName(value){
                        const parts = value.split(' ');
                        this.firstName = parts[0];
                        this.lastName = parts[1];
                }
        };
        person.fullName = "Henk Dikbil2"
        console.log(person.fullName); 