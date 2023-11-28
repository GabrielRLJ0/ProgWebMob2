import Titulo from "./titulo";

interface LayoutProps {
    titulo: string
    children: any
}

export default function Layout(props: LayoutProps) {
    return(
        <div className={`flex justify-center items-center h-screen flex-col p-4 bg-white text-gray-800 rounded-md`}>
            <Titulo>{ props.titulo }</Titulo>
            <div className="p-5">
                {props.children}
            </div>
        </div>
    )
}