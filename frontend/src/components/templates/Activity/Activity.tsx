import { useState } from 'react';
import React from 'react';
import FilterSearch from '../../molecules/Filter&Search/Filter&Search'
import ActivityCard from '../../molecules/ActivityCard/ActivityCard'
import ImpactMeasured from '../../atoms/ImpactMeasured/ImpactMeasured'
import './Activity.css'

import {activityData} from '../../../services/MockData'

export default function Activity(){
    
    const [agent, setAgent] = React.useState('All Agents');
    const [asset, setAsset] = React.useState('All Assets');
    const [textfield, setTextField] = React.useState('');
    const [data, setactivityData] = React.useState(activityData);

    const selectAgent = (a:string) => {
        setAgent(a);
  };

    const selectAsset = (a:string) => {
        setAsset(a);
  };

    const textfieldInput= (a:string) => {
        setTextField(a);
  };

    // use state to send query request or filter function to update data, update state of data, pass prop to activity card

    return(
    <div className='activity-container'>
        <div className='page-title'>Change Log and Audit Trail</div>
        <div className='page-subtitle'>Complete history of all changes made across your digital footprint</div>
        <div id='filter' className='filter-search'><FilterSearch filterAsset={selectAsset} filterAgent={selectAgent} filterText={textfieldInput}></FilterSearch></div>
        <div className='activity-card'><ActivityCard data={data}></ActivityCard></div>
    </div>
)
}