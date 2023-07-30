// const myName = "SHOUROV SIKDER"

const date= new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

function Card(props){
    const {stName,stBio}=props

return <div className='container'>

     <h1 className = "heading">WELCOME</h1>

     <div className='box'>
      <h3 className='name'>{stName}</h3> 
      <p className='biodata'>{stBio}</p>
      <p className='date'>{dateName + "/" + monthName + "/" + yearName}</p>
     </div>


</div>

}
export default Card;