//apply now form
export const applyNow=userDetails=>{
  console.log(userDetails)
  var requestOptions = {
    method: 'POST',
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
  },
    body: JSON.stringify(userDetails),
    redirect: 'follow'
  };
  
  return fetch("https://edunomics.herokuapp.com/api/core/careerApplicant", requestOptions)
    .then(response =>console.log(response.json()))
    .then(result => {return result})
    .catch(error => {return error})
}



//update resume 
export const updateResume=(profile)=>{
  console.log(profile)
  const userId='5ed369bd296a7f283050dc1e'

  var requestOptions = {
    method: 'PUT',
    headers:{
      Accept:"application/json",
      "Content-Type":"application/json"
  },
    body:JSON.stringify(profile),
  };

  return fetch(`https://edunomics.in/api/resume/${userId}`, requestOptions)
  .then(response => response.json())
  .then(result => {return result})
  .catch(error => {return error});
}