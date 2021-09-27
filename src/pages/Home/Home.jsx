import {useHistory} from "react-router-dom"

function Home(){
    const history = useHistory()

    return(
        <div className="home">
            <h1>KenzieHub</h1>
            <div className="buttons">
                <button onClick={() => history.push("/cadastro")}>CADASTRE-SE</button>
                <button onClick={() => history.push("/login")}>FAÇA LOGIN</button>
            </div>
        </div>
    )
}

export default Home