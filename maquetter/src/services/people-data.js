const getData = async () => {  
  fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5') 
  .then(function(response) { 
      return response.json(); 
    }) 
    }
    
export {
    getData
};    