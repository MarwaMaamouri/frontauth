
// import axios from 'axios';

// const api = axios.create({
//     baseURL:`http://10.1.15.91:3000/all`
//     })
  
// api.get('/').then(res => {
//     console.log(res.data)
//     this.setState({roles: res.data})
//   })

const sheetUsers = [
    { key: 'user', text: 'User', value: 'user' },
    { key: 'admin', text: 'Admin', value: 'admin' },
    { key: 'pm', text: 'Pm', value: 'pm' },
  ];
  
  export default sheetUsers;
  



//   let roleOptions = [ roles.map(roles => 
//       {key=roles.id value=roles.name }
//       )
//     ]