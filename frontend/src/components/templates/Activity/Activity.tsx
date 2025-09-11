import './Activity.css'
import ImpactMeasured from '../../atoms/ImpactMeasured/ImpactMeasured'
import FilterSearch from '../../molecules/Filter&Search/Filter&Search'
import ActivityCard from '../../atoms/ActivityCard/ActivityCard'
export default function Activity(){

    return(
    <div className='activity-container'>
        <div className='filter-search'><FilterSearch></FilterSearch></div>
        <div className='activity-card'><ActivityCard></ActivityCard></div>
    </div>
)
}