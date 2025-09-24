import { useState } from 'react';
import React from 'react';

import './AutomationApprovals.css'
import AutomationApprovalCard from '../../atoms/AutomationApprovalCard/AutomationApprovalCard'

// replace below with fetch to get data
import {automationList, agentMenu, statusMenu} from '../../../services/MockData'

export default function AutomationApprovals(){
    const [data, setdata] = React.useState(automationList);

    return(
        <div className='approvals-container'>
            <div className='approvals-title'>All Pending Approvals({data.pending_approvals})</div>
            {
                data?.automations.map((automation:any)=>{
                    return(
                    <AutomationApprovalCard data={automation}/>
                )})
            }
        </div>
    )
}