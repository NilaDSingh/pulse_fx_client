import './Activity.css'
import FilterSearch from '../../molecules/Filter&Search/Filter&Search'
import ActivityCard from '../../molecules/ActivityCard/ActivityCard'
import ImpactMeasured from '../../atoms/ImpactMeasured/ImpactMeasured'

export default function Activity(){

    return(
    <div className='activity-container'>
        <div className='page-title'>Change Log and Audit Trail</div>
        <div className='page-subtitle'>Complete history of all changes made across your digital footprint</div>
        <div className='filter-search'><FilterSearch></FilterSearch></div>
        <div className='activity-card'><ActivityCard></ActivityCard></div>
    </div>
)
}