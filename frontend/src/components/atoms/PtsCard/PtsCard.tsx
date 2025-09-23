import './PtsCard.css'


export default function ImpactCard(impact:any){
    let className = ''
    
    if(impact.impact>15){
        className = 'high-boost'
    } else if(impact.impact>=10){
        className = 'medium-boost'
    } else if(impact.impact<10){
        className = 'minor-boost'
    }
    return(
    <div className={className}>+{impact.impact} pts boost</div>
)
}