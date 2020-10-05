import axios from 'axios'
export const loginApi = async (creds) => { 

    axios.post('http://10.1.15.91:3000/api/auth/signin', creds)
    .then( resp => {  
      //  console.log(resp.data.user)  
       return resp.data.user.json; 
    })
    .catch( err => {
      console.log(err);
      return err; 
    })


    
  
              


};



