import Evento from "../../core/Carta";
import Entrada from "./entrada";
import { useState } from "react";
import { stringParaEntradaDeData } from "../../utils/converters";
import Botao from "./botao";

interface FormularioProps {
    evento: Evento
    eventoMudou?: (evento: Evento) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {
    const id = props.evento?.id
    const [nome, setNome] = useState(props.evento?.nome)
    const [data, setData] = useState(props.evento?.data)
    const [tipo, setTipo] = useState(props.evento?.tipo)
    const [custo, setCusto] = useState(props.evento?.custo)

    return (
        <div>
            {id ? (<Entrada texto="id" valor={id} somenteLeitura></Entrada>) : false}
            <Entrada texto="Nome" valor={nome} onChange={setNome}></Entrada>
            <Entrada texto="Data" tipo="date" valor={stringParaEntradaDeData(data)} onChange={setData}></Entrada>
            <Entrada texto="Tipo" valor={tipo} onChange={setTipo}></Entrada>
            <Entrada texto="Custo" valor={custo} onChange={setCusto}></Entrada>
            <div className="flex justify-end mt-5">
                <Botao className="mr-3" cor="bg-gradient-to-r from-blue-500 to-blue-700"
                    onClick={() => props.eventoMudou?.(new Evento(
                        id, nome, data, tipo, custo))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao cor="bg-gradient-to-r from-gray-500 to-gray-700"
                    onClick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}