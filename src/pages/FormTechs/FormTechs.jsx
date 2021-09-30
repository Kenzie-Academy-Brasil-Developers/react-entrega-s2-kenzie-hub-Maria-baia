const FormTechs = ({handleSubmit, onSubmitFunction, register, errors}) => {
    return(
        <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2>Adicione novas tecnologias preenchendo o formulário abaixo: </h2>
            <input placeholder='Título' {...register("title")}/>
            <span>{errors.title?.message}</span>
            <input placeholder='Status' {...register("status")}/>
            <span>{errors.status?.message}</span>
            <button>ADICIONAR</button>
        </form>
    )
}

export default FormTechs