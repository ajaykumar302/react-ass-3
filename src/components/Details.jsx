import React,{useState} from "react";
import './Details.css'

function Form(){
    const [Details,setDetails] = useState({Name:'',Department:'',Rating:''});
    const [Data,setData] = useState([]);
    const [Info,setInfo] = useState(false);
    let enter = (e) =>{
      let name = e.target.name;
      let inputValue = e.target.value; 
      setDetails({...Details,[name]:[inputValue]});
    }
    const add = (e) => {
      e.preventDefault();
      setData([...Data,{...Details,id:Data.length}]);
       setDetails('');
       setInfo(true);
       
    }
    return (
        <>
           {Info ? null : <div className="container">
         <h1>EMPLOYEE FEEDBACK FORM</h1>
        <form onSubmit={add}>
          <label className='lab'>Name : </label>
          <input type="text" onChange={enter} name='Name' placeholder="Enter Name.." className='text'/><br /><br />
          <label  className='lab'>Department : </label>
          <input type="text" onChange={enter} name='Department' placeholder="Field" className='text'/><br /><br />
          <label  className='lab'>Rating : </label>
          <input type="number" onChange={enter} name='Rating' placeholder="Out of 5" maxLength={1} minLength={1} className='text' />
          <br />
          <br />
          <br />
          <br />
          <input  type="submit" value="Submit" className='button'/>
          </form>
       </div>}

         {(Info? <> 
            <h1>EMPLOYEE FEEDBACK DATA</h1>
         <div className="box">
        
          {Data.map((e)=>(
            <h3 className="showDetails" key={e.id}>
            Name : {e.Name} || Department : {e.Department } || Rating : {e.Rating}
            </h3>))}
          </div>
          <button className="button" onClick={()=>{setInfo(!Info)}}>Back</button></> : null )}
      
        </>
      
    )
  }
  export default Form;
  
  