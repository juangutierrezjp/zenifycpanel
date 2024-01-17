import Navbar from "./Navbar"
import React from 'react';
import { Link } from 'react-router-dom';
import ActionCard from "./ActionCard";
import { FaFunnelDollar } from "react-icons/fa";
const Homepanel= ()=>{


    return(
        <div className="home-container">
        <Navbar />
        <div className="content-container">
          <h1>Panel de Control</h1>
          <div className="action-buttons">
            <ActionCard text="EMBUDOS ACTIVOS" icon='funnel' url="/funnels"/>
            <ActionCard text="VER LISTAS DE CORREO" icon='lists' url="/lists"/>
            <ActionCard text="ENVIAR CORREO MASIVO" icon='mail' url="/sendmassive"/>
          </div>
        </div>
      </div>
    )
}

export default Homepanel