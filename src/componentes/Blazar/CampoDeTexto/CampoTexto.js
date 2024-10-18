import './CampoTexto.css';

const CampoTexto = () => {
    return (
        <form>
        <div style={{position:'relative', right:'120px', top:'60px'}}className="tabela">
            <a style={{position:'relative', top:'2px', left:'40px'}}>Dados Pessoais</a>
            <a style={{position:'relative',top:'2px', left:'505px'}}>Endereço de cobrança</a>
            <label style={{position:'relative', top:'65px',  right:'250px'}} htmlFor="Nome completo">Nome completo</label>
            <input style={{position:'relative', top:'110px', right:'367px',height:'53px', width:'453px'}} id="nome" type="text"  />
            <label style={{position:'relative', top:'160px', right:'820px'}}htmlFor="CPF">CPF</label>
            <input style={{position:'relative', top:'205px', right:'850px',height:'53px', width:'200px'}} id="cpf" type="number"  />
            <label style={{position:'relative', top:'160px', right:'793px'}} htmlFor="dataDeNascimento">Data de nascimento</label>
            <input style={{position:'relative', top:'152px', right:'-207px',height:'53px', width:'200px'}} id="nascimento" type="text"  />
            <label style={{position:'relative', top:'205px', right:'247px'}} htmlFor="RG">RG</label>
            <input style={{position:'relative', top:'250px', right:'270px',height:'53px', width:'200px'}} id="registroGeral" type="number"  />
            <label style={{position:'relative', top:'205px', right:'215px'}} htmlFor="Orgão emissor">Órgão emissor</label>
            <input style={{position:'relative', top:'250px', right:'317px',height:'53px', width:'200px'}} id="orgao" type="text"  />
            <label style={{position:'relative', top:'310px', right:'792px'}} htmlFor="NomeDamãe">Nome da mãe</label>
            <input style={{position:'relative', top:'305px', right:'-30px',height:'53px', width:'453px'}} id="nomeDaMae" type="text"  />
            <label style={{position:'relative', top:'370px', right:'425px'}} htmlFor="Nacionalidade">Nacionalidade</label>
            <input style={{position:'relative', top:'425px', right:'527px',height:'53px', width:'200px'}} id="nacionalidade" type="text"  />
            <label style={{position:'relative', top:'370px', right:'481px'}} htmlFor="Naturalidade">Naturalidade</label>
            <input style={{position:'relative', top:'425px', right:'573px',height:'53px', width:'200px'}} id="naturalidade" type="text"  />
            <label style={{position:'relative', bottom:'50px', right:'450px'}} htmlFor="CEP">CEP</label>
            <input style={{position:'relative', bottom:'67px', left:'619px',height:'53px', width:'200px'}} id="cep" type="number"  />
            <label style={{position:'relative', bottom:'107px', left:'650px'}} htmlFor="pontoDeReferêcia">Ponto de referência</label>
            <input style={{position:'relative', bottom:'67px', left:'510px',height:'53px', width:'200px'}} id="pontoDeReferência" type="text"  />
            <label style={{position:'relative', bottom:'17px', left:'65px'}} htmlFor="Endereço">Endereço</label>
            <input style={{position:'relative', top:'30px',width:'300px', height:'53px'}} id="endereço" type="text"  />
            <label style={{position:'relative', bottom:'15px', left:'32px'}} htmlFor="Número">Número</label>
            <input style={{position:'relative', top:'30px', right:'30px' ,width:'100px', height:'53px'}} id="numeroDaCasa" type="number"  />
            <label style={{position:'relative', top:'27px', left:'620px'}} htmlFor="Complemento">Complemento</label>
            <input style={{position:'relative', top:'73px', left:'518px',height:'53px', width:'435px'}} id="complemento" type="text"  />
            <label style={{position:'relative', top:'140px', left:'76px'}} htmlFor="Cidade">Cidade</label>
            <input style={{position:'relative', top:'190px', left:'25px',height:'53px', width:'200px'}} id="cidade" type="text"  />
            <label style={{position:'relative', top:'140px', left:'55px'}} htmlFor="Estado">Estado</label>
            <input style={{position:'relative', top:'190px', left:'5px',height:'53px', width:'200px'}} id="estado" type="text"  />
            <br></br>
            <a style={{cursor:'pointer',position:'relative', top:'305px', left:'35px'}}>Testar ferramenta gratuitamente</a>
            <input type='submit' name='Avançar' value='Avançar' style={{fontWeight:'bold',fontSize:'17px',cursor:'pointer',position:'relative', top:'280px', left:'670px', width:'200px', height:'53px', backgroundColor:'#56AAFF',borderRadius:'10px', border:'none'}}></input>
            <td style={{position:'relative', bottom:'172px', left:'350px'}}>nascimento</td>
            <a style={{position:'relative', top:'140px', left:'640px'}}>Eu li e concordo com os</a>
            <a style={{cursor:'pointer', color:'blue',position:'relative', top:'140px', left:'640px'}}> termos e condições de uso.</a>
            <input style={{position:'relative', top:'142px', left:'235px'}} type='checkbox'/>
        </div>
        </form>
    );
}

export default CampoTexto;
