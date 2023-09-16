let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer', salary: 1000 },
    { id: 2, name: 'jack', age: 20, profession: 'developer', salary: 1100 },
    { id: 3, name: 'karen', age: 19, profession: 'admin', salary: 900 },
  ];
  
 
  function PrintDeveloper(){
    arr.map((employee) =>{
      let sum=0;
      for(let i=0;i<arr.length;i++){
         sum+=arr[i].salary;
      }
      let avg=sum/arr.length;
      if(employee.profession=="developer" && employee.salary >= avg){
          console.log(employee);
      }
  });
  }
  function PrintHighEarningDevelopers() {
    //Write your code here , just console.log
   
  
  }
  
  
  // 2. Using a recursive function, add a new data object to the array until the user says 'no' via a prompt.
  function addData() {
    //Write your code here, just console.log
    const newData={id: 4, name: 'Raju', age: 25, profession: 'Engineer', salary: 1200};
    arr.push(newData);
    console.log(arr);
  }
  
  // 3. Remove the youngest and oldest person from the array.
  function removeYoungestAndOldest() {
    //Write your code here, just console.log
  }
  function removeAdmin(){
    for(let i=0;i<arr.length;i++){
      if(arr[i].profession=="admin"){
        arr.pop(arr[i]);
      }
    }
    console.log(arr);
  
  }
  
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArray=[
        { id: 4, name: "raj", age: "18", profession: "quality" },
        { id: 5, name: "kiran", age: "27", profession: "developer" },
        { id: 6, name: "karan", age: "19", profession: "data analyst" },
  
    ];
    const concatenateArray=arr.concat(newArray);
    console.log(concatenateArray);
  }
  
  function averageAge(){
    let sum=0;
      for(let i=0;i<arr.length;i++){
         sum+=arr[i].age;
      }
      let avg=sum/arr.length;
      console.log(avg);
  }
  function checkAgeAbove25(){
    for(let i=0;i<arr.length;i++){
      if(arr[i].age>25){
        console.log("validate");
      }
      else{
        console.log(" not validate");
      }
   }
  }
  
  function uniqueProfessions(){
    let desired_output = (arr) => {
      let unique_values = arr
          .map((item) => item.profession)
          .filter(
              (value, index, current_value) => current_value.indexOf(value) === index
          );
      return unique_values;
  };
   
  console.log(desired_output(arr));
  }
  
  function sortByAge(){
    arr.forEach((e) => {
      console.log(`${e.id} ${e.name} ${e.age} ${e.profession}`);
  });
  }
  
  function updateJohnsProfession(){
    arr[0].profession="manager";
    console.log(arr);
  }
  
  function getTotalProfessions(){
   
  
  }
  
  
  
  