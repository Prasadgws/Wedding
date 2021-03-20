class CommonServices {
    constructor(props) {
     this.state = {
        apiUrl:"https://localhost:44389/"
     }   
    }
    submitData_By_Post =(data,callBack_Fun,servicesName)=>{
       debugger
        fetch(this.state.apiUrl+servicesName,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{
              "Content-Type":"application/json"
            }
          })
          .then(res => res.json())
          .then(
            (result) => {
              console.log("Response==============",result)
              callBack_Fun(result);
            },
            (error) => {
              console.log("Error======================",error);
            }
          )
    }
    Get_Data_ =(callBack_Fun,servicesName)=>{
       
        fetch(this.state.apiUrl+`/`+servicesName,{
            method:"GET",
            headers:{
              "Content-Type":"application/json"
            }
          })
          .then(res => res.json())
          .then(
            (result) => {
              console.log("Response==============",result)
              callBack_Fun(result);
            },
            (error) => {
              console.log("Error======================",error);
            }
          )
    }


}
export default CommonServices;