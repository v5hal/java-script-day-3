// for loop

var array= [
    {
      "id": "1",
      "name": "Lura Senger",
      "email": "Xander_Collier@yahoo.com"
    },
    {
      "id": "2",
      "name": "Wilburn Weber",
      "email": "Bennett_Kreiger11@yahoo.com"
    },
    {
      "id": "3",
      "name": "Tyrique Hahn",
      "email": "Juston.Altenwerth@yahoo.com"
    },
    {
      "id": "4",
      "name": "Lenny Bailey",
      "email": "Guiseppe_Hegmann@yahoo.com"
    },
    {
      "id": "5",
      "name": "Vladimir Keeling",
      "email": "Louisa_Walsh18@hotmail.com"
    },
    {
      "id": "6",
      "name": "Kellie Crona",
      "email": "Chandler_Abernathy@yahoo.com"
    },
    {
      "id": "7",
      "name": "Carolina White",
      "email": "Royal50@hotmail.com"
    },
    {
      "id": "8",
      "name": "Alfredo Conn",
      "email": "Clarabelle34@hotmail.com"
    },
    {
      "id": "9",
      "name": "Stan Shanahan",
      "email": "Lamar.McClure@hotmail.com"
    },
    {
      "id": "10",
      "name": "Marvin Fay",
      "email": "Osbaldo58@hotmail.com"
    } ];
  

    // for loop syntax
    // supose if u want only the index
    for(var i=0; i<array.length; i++)
    {console.log(i);
               }

    //  supose if u want all detail in array.
    for(var i=0; i<array.length; i++){console.log(i,array[i]);}

    // supose if want only name in array.
    for(var i=0; i<array.length; i++){console.log(i,array[i].name);}

    // supose if u want name and email in single line.
    for(var i=0; i<array.length; i++){console.log(i,array[i].name,array[i].email);}


   // supporse if u want to print 5 details out of 100 means go for loop
  
    for(var i=0; i<=4; i++)
    {
     console.log(i, array[i])
    }




    // forin loop syntax
    // supose if u want only the index
    for(var i in array){
      console.log(i);
  
    }
  
    // in this above code we get answer only 0 and 1 its the index value but if u need the details in o and 1 indes means add a code like this
  
  for(var i in array){
      console.log(i,array[i]);
  
    }
  
    // now we get tha detils in 0 and 1 index 
    // suppose if u need a particular detail in index means add extra code 
  
  for(var i in array){
      console.log(i,array [i].name,array[i].name);
  
    }
  
    // suppose there are 3 particular values but u need only 2 diffrent values means what code u will write
  
    for(var i in array){
      console.log(i,array [i].name,array[i].email);
  
    }
  
  
 

