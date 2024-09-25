import "../styles/Login.jsx"

const Login = () => {
    return (
        <div>
            <h1>TESTE DA RAPAZIADA</h1>
            <form className="forms">
                <label>Nome:</label>
                <input type="text" placeholder="Digite seu nome..." />

                <label>Email:</label>
                <input type="text" placeholder="Digite seu email..." />

                <label>Senha:</label>
                <input type="password" placeholder="Digite sua senha..." />

                <label>Confirmar Senha:</label>
                <input type="password" placeholder="Confirme sua senha..." />
            </form>
        </div>
    )
}

export default Login;