import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {useForm} from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import { useHistory } from "react-router"
import axios from "axios"
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Profile(){
    const params = useParams()
    const [url, setUrl] = useState([])

    useEffect(() => {
        fetch(`https://kenziehub.herokuapp.com/users/${params.id}`)
        .then(response => response.json())
        .then(data => setUrl([{name:data.name, courseModule:data.course_module, bio:data.bio, contact:data.contact, techs:data.techs}]))
        .catch(error => console.log(error))
    },[params.id])

    const schema = yup.object().shape({
        title: yup.string().required("Campo obrigatório!"),
        status: yup.string().required("Campo obrigatório!"),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (data) => {
        axios.post('https://kenziehub.herokuapp.com/users/techs', data)
        .then(() => toast.success("Tecnologia adicionada!"))
        .then(() => history.push(`${params.id}`))
        .catch(() => toast.error("Erro na adição da tecnologia."))
    }

    const history = useHistory()

 return(
     <div>
        {url.map((param) => (
            <div>
                <h1>Nome: {param.name}</h1>
                <p>Módulo do curso: {param.courseModule}</p>
                <p>Bio: {param.bio}</p>
                <p>Contato: {param.contact}</p>
                <ul>Tecnologias: {param.techs.map((tech, index) => (
                    <li key={index}>
                    <h4>{tech.title}</h4>
                    <p>{tech.status}</p>
                    </li>
                ))}</ul>
            </div>
        ))}
        <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Adicione novas tecnologias preenchendo o formulário abaixo: </h2>
            <input placeholder='Título' {...register("title")}/>
            <span>{errors.title?.message}</span>
            <input placeholder='Status' {...register("status")}/>
            <span>{errors.status?.message}</span>
            <button>ADICIONAR</button>
            <ToastContainer/>
        </form>
     </div>
 )
}

export default Profile