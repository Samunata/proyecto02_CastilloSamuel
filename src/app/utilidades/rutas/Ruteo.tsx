import { Route, Routes } from "react-router-dom";
import { Inicio } from "../../componentes/contenedor/Inicio";
import { ConciertoListar } from "../../componentes/conciertos/ConciertoListar";
import { ConciertoAdmin } from "../../componentes/conciertos/ConciertoAdmin";
import { ConciertoCrear } from "../../componentes/conciertos/ConciertoCrear";
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado";

export const Ruteo = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/camlis" element={<ConciertoListar />} />
            <Route path="/camadm" element={<ConciertoAdmin />} />
            <Route path="/camcre" element={<ConciertoCrear />} />
            <Route path="*" element={<NoEncontrado />} />
        </Routes>
    );
};
