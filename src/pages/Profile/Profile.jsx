import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import {useForm} from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import { useHistory } from "react-router"
import axios from "axios"
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import FormTechs from "../FormTechs/FormTechs"

function Profile(){
    const params = useParams()
    const [data, setData] = useState()
    const [token, setToken] = useState(() => {
        const localToken = localStorage.getItem("token") || "";
        return JSON.parse(localToken);
    })

    useEffect(() => {
        axios.get("https://kenziehub.herokuapp.com/profile",{
            headers: {Authorization: `Bearer ${token}`},
        })
        .then(response => setData(response.data))
        .catch((err) => console.log(err))
    })

    const schema = yup.object().shape({
        title: yup.string().required("Campo obrigatório!"),
        status: yup.string().required("Campo obrigatório!"),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmitFunction = (newTech) => {
        axios.post('https://kenziehub.herokuapp.com/users/techs', newTech,{
            headers: {Authorization: `Bearer ${token}`},
        })
        .then(() => toast.success("Tecnologia adicionada!"))
        .catch(() => toast.error("Erro na adição da tecnologia."))
    }

    const history = useHistory()

    const deleteTech = (id) => {
        axios.delete(`https://kenziehub.herokuapp.com/users/techs/${id}`,{
            headers: {Authorization: `Bearer ${token}`},
        })
        .then(() => toast.success("Tecnologia deletada!"))
        .catch(() => toast.error("Erro."))
    }

 return(
     <div>
            <div>
                <h1 className="name">Nome: {data?.name}</h1>
                <div className="caract">
                    <h2>Módulo do curso: {data?.course_module}</h2>
                    <h2>Bio: {data?.bio}</h2>
                    <h2>Contato: {data?.contact}</h2>
                    <h2>Tecnologias:</h2>
                    <ul>{data?.techs.map((tech) => (
                        <li key={tech.id}>
                        <h4>{tech.title}</h4>
                        <p>{tech.status}</p>
                        <button onClick={() => deleteTech(tech.id)}>Deletar</button>
                        </li>
                    ))}</ul>
                </div>
            </div>
            <FormTechs handleSubmit={handleSubmit} onSubmitFunction={onSubmitFunction} 
            register={register} errors={errors}/>
            <ToastContainer/>
     </div>
 )
}

export default Profile