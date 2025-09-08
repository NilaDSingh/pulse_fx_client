import './ImpactCard.css'


export default function ImpactCard(impact:any){
    let className = ''
    
    if(impact.impact>15){
        className = 'high-impact'
    } else if(impact.impact>=10){
        className = 'normal-impact'
    } else if(impact.impact<10){
        className = 'category'
    }
    return(
    <div className={className}>+{impact.impact} pts boost</div>
)
}