import oneplus from '../oneplus.jpg';

function Mobiles(props){

  return(
    <>
    <div class="card">
  <img class="card-img-top"  src={oneplus} alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">{props.name}</h5>
    <p class="card-text">{props.price}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
  )
}

export default Mobiles;
