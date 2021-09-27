import {useForm} from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import { useState } from "react"
import { useHistory } from "react-router"
import axios from "axios"
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Login(){
    const schema = yup.object().shape({
        email: yup.string().required("Campo obrigatório!").email("E-mail inválido."),
        password: yup.string().required("Campo obrigatório!").matches(".{6,}", "mínimo 6 caracteres"),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const [token, setToken] = useState([])

    const onSubmitFunction = (userdata) => {
        axios.post('https://kenziehub.herokuapp.com/sessions', userdata)
        .then((response) => setData(response.data.user.id))
        .catch(() => toast.error("E-mail ou senha incorretos."))
    }

    const [data, setData] = useState([])
    const history = useHistory()

    if(data.length > 0){
        history.push(`${data}`)
    }

    return(
        <div>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
                <h1>LOGIN</h1>
                <input placeholder='E-mail' {...register("email")}/>
                <span>{errors.email?.message}</span>
                <input type="password" placeholder='Senha' {...register("password")}/>
                <span>{errors.password?.message}</span>
                <button>ENTRAR</button>
                <ToastContainer/>
            </form>
        </div>
    )
}

export default Login