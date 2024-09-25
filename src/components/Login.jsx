import "../styles/Login.css"
import ImagemDemonstrativa from '../assets/img/undraw_medicine_b-1-ol.svg'

const Login = () => {
    return (
        <div className="container">

            <div className="form-image">
                <img src={ImagemDemonstrativa} alt="" />
            </div>

        <div className="form">
            <form action="#" method="get">
                <div className="form-header">
                    <h1>Tela de Login Administrativa</h1>
                    
                    <div className="login-button">
                        <button><a href="#">Voltar para a home</a></button>
                    </div>
           
                </div>

                <div className="input-group">
                    <div className="input-box">
                        <label htmlFor="">CPF</label>
                        <input type="text" id="cpf" name="cpf" placeholder="xxx.xxx.xxx-xx" required />
                    </div>

                    <div className="input-box">
                        <label htmlFor="">Email</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu email" required />
                    </div>

                    <div className="input-box">
                        <label htmlFor="">Senha</label>
                        <input type="password" id="password" name="password" placeholder="Digite sua senha" required />
                    </div>

                    <div className="input-box">
                        <label htmlFor="">Confirme sua senha</label>
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Digite sua senha" required />
                    </div>
                </div>

                <div className="continue-button">
                    <button><a href="#">Continuar</a></button>
                </div>
            </form>
        </div>

        </div>
    )
}

export default Login;