import { useState } from "react";
import Footer from "../../components/Footer/footer";
import Menu from "../../components/Menu/menu";
import { Container, Section } from "./loginStyles";
import { useNavigate } from "react-router-dom";
import { api } from "../../service/api";


export default function TelaLogin() {
  const [turista, setTurista] = useState('')
  const [username, setUsername] = useState('')
  const [senha_hash, setSenha_hash] = useState('')

  const navigation = useNavigate()

  async function handleLogin() {
    if (turista === 'turista') {
      await api.post('/turista/login', {
        'username': username, 
        'senha_hash': senha_hash,
      }).then((response) => {
        localStorage.setItem('token', response.data.token)
        navigation('/telafiltro')
      }).catch((error) => {
        console.log(error.response.data.message)
      })
    }  else if (turista === 'guia'){

      await api
        .post("/guia/login", {
          username: username,
          senha_hash: senha_hash,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          navigation("/telafiltro");
        })
        .catch((error) => {
          console.log(error.response.data.message);
        });

    } else if (turista === 'empreendedor'){

      await api.post('/empreendedores/login', {
        'username': username, 
        'senha_hash': senha_hash,
      }).then((response) => {
        localStorage.setItem('token', response.data.token)
        navigation('/telafiltro')
      }).catch((error) => {
        console.log(error.response.data.message)
      })


      
    } else {
      return console.log('error')
    }
  }

  return (
    <>
      <Menu />
      <Section>
        <Container>
          <div className="textUm">
            <h2>Acesse sua conta</h2>
            <h6>Bem vindo ao GuiaTÚ</h6>
          </div>
          <div className="inputs">
            <input className="email" type="text" placeholder="Email" onChange={(e) => setUsername(e.target.value)} />
            <input className="senha" type="password" placeholder="Senha" onChange={(e) => setSenha_hash(e.target.value)} />
            <a href="" className="esqueciSenha">
              Esqueci minha senha
            </a>
          </div>

          <div className="linha">
              <hr />
              <h5>Selecione seu perfil</h5>
              <hr />
            </div>

          <div className="radios">

           <div className="radioTu" >
            <input type="radio" name="turista" id="" onChange={() => setTurista('turista') }/>
            <label htmlFor="">Turista</label>
           </div>
           
           <div className="radioGui">
            <input type="radio" name="turista" id="" onChange={() => setTurista('guia') }/>
            <label htmlFor="">Guia</label>
           </div>

           <div className="radioEmp">
            <input type="radio" name="turista" id="" onChange={() => setTurista('empreendedor') }/>
            <label htmlFor="">Empreendedor</label>
           </div>
          </div>

          
          <button className="buttonEntrar"  onClick={() =>handleLogin() }>Entrar</button>
 
          <section className="textDois">
           
            <div className="cadastrarAgora">
              <a href="" className="cadastrar">
                <h6>
                  Não possui conta? <span>Cadastre-se</span> agora!
                </h6>
              </a>
            </div>
            
          </section>
        </Container>
      </Section>
      <Footer />
    </>
  );
}
