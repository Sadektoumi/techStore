import Categorie from './Categorie';
import React,{useState} from 'react';

    function Sinscrire(){ 
        const[nom,setnom]=useState("");
        const[password,setpassword]=useState("");
        const[pseudo,setpseudo]=useState("");
        const[prenom,setprenom]=useState("");
        const[cin,setcin]=useState("");
        const[adresse,setadresse]=useState("");
        const[telephone,settelephone]=useState("");
        const[codePostal,setcodePostal]=useState("");
        const[sexe,setsexe]=useState("");
        const[email,setemail]=useState("");
       
       
        async function signUp(){

         let item={nom,prenom,password,email,pseudo,sexe,codePostal,cin,telephone,adresse}
        
         let result = await fetch("http://127.0.0.1:8000/api/register",
         {method:'POST',
         Headers:{
           "Content-type":"application/json",
           "Accept":"application/json"
         },
         body:JSON.stringify(item)
        
        });
        result =await result.json();
        console.warn("result",result)
       }


         return (<div> <Categorie /> <div className="col-sm-9 padding-right">:
             <div className="bill-to">
        <p>S'inscrire</p>
        <div className="form-one ">
          <form>
            <input type="text" placeholder="Email *" value={email} onChange={(e)=>setemail(e.target.value)} required />
            <input type="text" placeholder="S'identifier *" value={pseudo} onChange={(e)=>setpseudo(e.target.value)}required/>
            <input type="password" placeholder="mot de passe * " value={password} onChange={(e)=>setpassword(e.target.value)}required />
            <select value={sexe} onChange={(e)=>setsexe(e.target.value)} required>
              <option>Homme</option>
              <option>Femme</option>
            </select>
            <p></p>
            <input type="text" placeholder="Nom *" value={nom} onChange={(e)=>setnom(e.target.value)} required/>
            <input type="text" placeholder="Prenom *" value={prenom} onChange={(e)=>setprenom(e.target.value)} required/>
            <input type="text" placeholder="Telephone *" value={telephone} onChange={(e)=>settelephone(e.target.value)} required/>
            <input type="text" placeholder="Addresse *" value={adresse} onChange={(e)=>setadresse(e.target.value)} required/>
            <input type="text" placeholder="Code Postal *" value={codePostal} onChange={(e)=>setcodePostal(e.target.value)}required />
            <input type="text" placeholder="Cin *" value={cin} onChange={(e)=>setcin(e.target.value)} required/>
            <button className="btn btn-primary" onClick={signUp}>S'inscrire</button>
          </form>
        </div>
      </div> </div> </div> );
    }

 
export default Sinscrire;