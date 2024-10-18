import './Solicitacao.css'
const Solicitacao = () => {
return(
  <div className='container'>
<a style={{fontSize:'20px', fontWeight:'bold', alignItems:'center', whiteSpace:'nowrap', position:'relative', top:'30px', left:'200px'}}>A sua solicitação foi concluída!<br></br></a>
<a style={{position:'relative', top:'60px',right:'150px' ,fontSize:'20px', fontWeight:'bold', alignItems:'center', whiteSpace:'nowrap'}}>Você receberá um email com o link de teste.</a>
<div id='loader'>

</div>
  </div>

 );
}
export default Solicitacao;