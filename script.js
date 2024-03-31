                                    // Day 06 :OOPS TASK


// 1.https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties
// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

/* 
  a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio,
  and a String representing the rating as its arguments, and sets the respective class properties to these values. 
   
  b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
*/
class Movie{
    constructor(title,the_studio,rating="PG13"){
        this.title = title;
        this.the_studio = the_studio;
        this.rating = rating;
    }
    
    static getPG(movie_obj){
        return movie_obj.filter(movie=>movie.rating === "PG")
    }
    
}

  
    const movie_obj = [
        new Movie("The-casino Royale","Eon Productions","PG"),
        new Movie("James Bond","WB Productions","R-Rated"),
        new Movie("Element","Walt Disney","PG"),
        new Movie("Mad-Max","Paramount","R-Rated"),
        new Movie("Kungfu-Panda","Universal Production","PG")
    ]
 

    let arr4 = []
    arr4 = Movie.getPG(movie_obj)
    /*
    c) Write a method getPG, which takes an array of base type Movie as its argument, 
    and returns a new array of only those movies in the input array with a rating of "PG".
    You may assume the input array is full of Movie instances. The returned array need not be full.
    */
    arr4.forEach(element =>console.log(`MovieTitle : ${element.title},The-Studio : ${element.the_studio},Rating : ${element.rating}`));
    
    /* 
    d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
    the studio “Eon Productions”, and the rating “PG­13” 
    */
    const obj2 = new Movie("The-casino Royale","Eon Productions","PG13")
    console.log(`${obj2.title},${obj2.the_studio},${obj2.rating}`); 


// 2.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md


class Circle{
    constructor(radius,color){
        this.radius = radius;
        this.color = color;
    }
    set Radius(n){
        this.radius = n;  
    }
    get Radius(){
        return this.radius; 
    }
    set Color(n){
        this.color = n;  
    }
    get Color(){
        return this.color;
    }
    get toString(){
        return `Circle[Radius = ${this.radius},Color = ${this.color}]`
    }
    get Area(){
        return Math.PI*(Math.pow(this.radius,2));
    }
    get Circumference(){
        return 2*Math.PI*this.radius;
    }
}
    const obj4 = new Circle(5.0,"Red")

    console.log(obj4.radius,obj4.color);
    console.log(obj4.Color);
    console.log(obj4.Radius);
    console.log(obj4.toString);
    console.log(obj4.Area);
    console.log(obj4.Circumference);
    obj4.Radius=3.5
    console.log(obj4.Radius);
    obj4.Color="Yellow"
    console.log(obj4.Color);


//  3.Write a “person” class to hold all the details.

    class Person{
        constructor(name,age,gender,marital_status,education,email,mobile_no){
            this.name = name;
            this.age = age;
            this.gender = gender;
            this.marital_status = marital_status;
            this.education = education;
            this.email = email;
            this.mobile_no = mobile_no;
        }
    }
    
    const obj1 = new Person("Manoj",24,"Male","single","B.E Computer Science ","manomk2020@gmail.com",7443458722)
    
    console.log(obj1.name,obj1.age,obj1.gender,obj1.marital_status,obj1.education,obj1.email,obj1.mobile_no);

    
    // 4. write a class to calculate the Uber price
    
class Uber{
    constructor(kilometer,fare = 50){
        this.fare=fare;
        this.kilometer = kilometer
    }

    set Fare(rupees){
        this.fare = rupees; 
    }

    get Fare(){
        return this.fare;
    }
    set Kilometers(kmts){
        this.kilometer = kmts; 
    }

    get Kilometers(){
        return this.kilometer;
    }

    get Uber_price(){
        return this.fare * this.kilometer 
    }

}

let uber_obj = new Uber(3,50)
    console.log(uber_obj.Uber_price);
    uber_obj.kilometer=5;
    console.log(`Kilometers Traveled: ${uber_obj.kilometer}`);
    uber_obj.fare = 60;
    console.log(`Price of Fare/km is: ${uber_obj.Fare}`);
    console.log(`Price of Uber is: ${uber_obj.Uber_price}`);
