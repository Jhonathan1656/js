import './Pagamento.css'
const Pagamento = () => {
    return(
    <div style={{position:'relative', top:'140px', right:'900px'}} className='fatura'>   
    <form>
    <a style={{position:'relative', top:'10px', left:'25px', fontSize:'20px', fontWeight:'bold'}}>Fatura #313233</a><a style={{color:'#404040',opacity:'0.5', fontSize:'20px',position:'relative', top:'10px', left:'50px'}}>(26/09/2024)</a>
    <br></br>
    <hr></hr>
    <a style={{fontSize:'20px',color:'#404040',opacity:'0.5',position:'relative', left:'25px', bottom:'7px' }}>Descrição</a><a style={{fontSize:'20px',color:'#404040',opacity:'0.5',position:'relative', left:'390px', bottom:'7px' }}>Valor</a>
    <hr style={{position:'relative', bottom:'15px'}}></hr>
    <a style={{position:'relative', bottom:'22px', left:'25px', fontSize:'20px', fontWeight:'bold'}}>Plano Gold Anual</a><a style={{fontWeight:'bold',fontSize:'20px',color:'#000000',position:'relative', left:'285px', bottom:'20px'}}>R$ 549,90</a>
    <hr style={{position:'relative', bottom:'30px'}}></hr>
    <a style={{fontSize:'20px',fontWeight:'bold',position:'relative', bottom:'35px', left:'25px' }}>Cupom de desconto:</a><input style={{backgroundColor:'transparent',borderColor:'rgb(113, 113, 113, 35%)',borderRadius:'5px',position:'relative', left:'160px',bottom:'35px',width:'180px', height:'30px'}} id='cupomDeDesconto' type='text' placeholder='Insira um código promocional'/> <input type='submit' name='Aplicar' value='Aplicar' style={{cursor:'pointer',backgroundColor:'transparent',borderColor:'rgb(113, 113, 113, 35%)',borderRadius:'5px',height:'30px', position:'relative', left:'158px', bottom:'35px'}}/>
    <hr style={{position:'relative', bottom:'45px'}}></hr>
    <a style={{fontSize:'20px',color:'#404040',opacity:'0.5',position:'relative', bottom:'45px', left:'25px'}}>Total a pagar</a><a style={{fontWeight:'bold',fontSize:'20px',color:'#0900B2',position:'relative', left:'335px', bottom:'40px'}}>R$ 549,90</a>
    <div style={{position:'relative', bottom:'420px', left:'700px'}} className='dadosDePagamento'> 
    <form>
    <a style={{position:'relative', top:'10px', left:'170px', fontSize:'20px', fontWeight:'bold'}}>Dados de Pagamento</a>   
    <label style={{position:'relative', right:'200px', top:'85px'}} htmlFor='CPFDoProprietárioDoCartao'>CPF do proprietário do cartão</label>
    <input style={{position:'relative', right:'-1px', top:'95px'}} id="CPF" type="number" />
    <label style={{position:'relative', right:'412px', top:'145px'}} htmlFor='numeroDoCartao'>Número do cartão</label>
    <input style={{position:'relative', right:'-1px', top:'125px'}} id="numeroDoCartao" type="number" />
    <label style={{position:'relative', right:'412px', top:'175px'}} htmlFor='nomeImpresso'>Nome impresso</label>
    <input style={{position:'relative', right:'0px', top:'155px'}} id="nomeImpressoNoCartao" type="text" />
    <label style={{position:'relative', right:'412px', top:'205px'}} htmlFor='CVV'>CVV</label>
    <input style={{position:'relative', right:'-1px', top:'185px', width:'200px', height:'53px'}} id="CVV" type="number" />
    <label style={{position:'relative', right:'-13px', top:'140px'}} htmlFor='dataDeValidade'>Data de validade</label>
    <input style={{position:'relative', right:'107px', top:'185px', width:'200px', height:'53px'}} id="dataDeValidade" type="number" />
    <input style={{position:'relative', left:'300px', width:'200px', height:'53px', backgroundColor:'#56AAFF', top:'200px', cursor:'pointer', fontWeight:'bold', fontSize:'20px'}} type='submit' name='Concluir' value='Concluir'></input>
   <input  style={{position:'relative', top:'198px', right:'200px', height:'20px', width:'20px', borderRadius:'100px', backgroundColor:'black'}} type='radio'/>
   <a style={{fontSize:'20px', fontWeight:'bold', position:'relative', top:'195px', right:'190px'}}>Plano Gold</a>
    </form>       
    </div> 
    </form>
    </div>  
   
    );
}
export default Pagamento;
