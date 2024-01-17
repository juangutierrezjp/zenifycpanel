import { FaFunnelDollar } from "react-icons/fa";
import { RiFileList3Line } from "react-icons/ri";
import { RiMailSendLine } from "react-icons/ri";
import React from 'react';
import { Link } from 'react-router-dom';
const ActionCard= ({text, url, icon,})=>{


const rendericon = ()=>{
    if (icon==="funnel"){
        return(
            <FaFunnelDollar style={{fontSize: '5em' }}/>
        )
    }
    if (icon==="lists"){
        return(
            <RiFileList3Line style={{fontSize: '5em' }}/>
        )
    }
    if (icon==="mail"){
        return(
            <RiMailSendLine  style={{fontSize: '5em' }}/>
        )
    }

}

    return(
            <Link to={url}>
        <button className="action-button">
        <div style={{width:"20vw"}}>
        {rendericon()}
        <p style={{fontWeight:"bold"}}>
            {text}
        </p>
      </div>
      </button>
            </Link>
    )
}

export default ActionCard