import React, { useEffect , useState} from 'react';
import Categorie from './Categorie';
import swal from 'sweetalert2';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function List (){
  
  const history = useHistory();
  const [message,setCart] = useState([]);



     useEffect(() => {
    let isMounted = true

    const token = localStorage.getItem('token');
   
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + `${token}`
    }
    
    axios.get("http://127.0.0.1:8000/api/interventionList", {
        headers: headers
      })
    .then(res => {
        console.log('heydata',res.data)
        setCart(res.data.message)
     
    
    }).catch(err => {
      console.log(err)
    })

    return() => {isMounted =false
    };

  },[history]);

  function deleteOperation(id){
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + `${token}`
    }
    axios.delete("http://127.0.0.1:8000/api/interventiondelete/"+id, {
      headers: headers
    })
  .then(res => {
      console.log(res.data.message)
      swal.fire({
        title: 'Are you sure??',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'yes',
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          swal.fire('deleted', '', 'error')
          window.location.reload(false);
        } else if (result.isDenied) {
          swal.fire('youu kept it ', '', 'success')
        }
      })
   
  
  }).catch(err => {
    console.log(err)
  })
   
  }















  // const test =()=> {
  //   const token = localStorage.getItem('token');
  //   const headers = {
  //     'Content-Type': 'application/json',
  //     'Authorization': 'Bearer ' + `${token}`
  //   }
    
  //   axios.get("http://127.0.0.1:8000/api/interventionList", {
  //       headers: headers
  //     })
  //   .then(res => {
  //     console.log(res)
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // }






   
        return (<div> <Categorie /><div className="col-sm-9 padding-right"> <div>
            <div>
        <div className="review-payment">
          <h2>interventions</h2>
        </div>
        <div className="">
          <table className="table table-bordered">
            <thead>
              <tr className="">
                <td className="image"><h4>Le nom de pc </h4></td>
               
                <td className="price"><h4>prix</h4></td>
                <td className="total"><h4>etat</h4></td>
                <td className="total"><h4>operation</h4></td>
                
              </tr>
            </thead>
            <tbody>
            {message?.map((item) => (
              <tr>
                <td className="car_image">
                  <p>{item.name}</p>
                 
                </td>
                <td className="cart_price">
                  <p>{item.prix}</p>
                </td>
                <td className="cart_total">
                  <p className="cart_total_price">{item.etat}</p>
                </td>
                <td>
                <button className="btn btn-primary" onClick={()=>deleteOperation(item.id)}  >Delete</button>
              </td>
              </tr>
             
                
                ))}
            </tbody>
           
          </table>
           
        </div>
      </div>
        </div> </div></div>);
   
}
 
export default List;