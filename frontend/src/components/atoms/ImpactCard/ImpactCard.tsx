import './ImpactCard.css'

export default function ImpactCard(impact:any){
    console.log(impact.impact=='High'? 'high-impact' : 'normal-impact')
    let className = ''
    
    if(impact.impact=='High Impact'){
        className = 'high-impact'
    } else if(impact.impact=='Medium Impact' || impact.impact=='Low Impact'){
        className = 'normal-impact'
    } else {
        className = 'category'
    }
    return(
    <div className={className}>{impact.impact}</div>
)
}