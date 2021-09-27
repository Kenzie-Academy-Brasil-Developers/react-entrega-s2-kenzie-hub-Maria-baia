import {useForm} from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import { useHistory } from "react-router"
import axios from "axios"
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Registration(){
    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatório!"),
        email: yup.string().required("Campo obrigatório!").email("E-mail inválido."),
        password: yup.string().required("Campo obrigatório!").matches(".{6,}", "mínimo 6 caracteres"),
        bio: yup.string().required("Campo obrigatório!"),
        contact: yup.string().required("Campo obrigatório!"),
        course_module: yup.string("").required("Campo obrigatório!"),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data) => {
        axios.post('https://kenziehub.herokuapp.com/users', data)
        .then(() => toast.success("Usuário criado!"))
        .then(() => history.push("/login"))
        .catch(() => toast.error("Erro na criação de usuário."))
    }

    const history = useHistory()

    return(
        <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h1>CADASTRO</h1>
            <input placeholder='Nome' {...register("name")}/>
            <span>{errors.name?.message}</span>
            <input placeholder='E-mail' {...register("email")}/>
            <span>{errors.email?.message}</span>
            <input type="password" placeholder='Senha' {...register("password")}/>
            <span>{errors.password?.message}</span>
            <input placeholder='Bio' {...register("bio")}/>
            <span>{errors.bio?.message}</span>
            <input placeholder='Contato' {...register("contact")}/>
            <span>{errors.contact?.message}</span>
            <input placeholder='Módulo do curso' {...register("course_module")}/>
            <span>{errors.course_module?.message}</span>
            <button>CADASTRAR</button>
            <ToastContainer/>
        </form>
    )
}

export default Registration