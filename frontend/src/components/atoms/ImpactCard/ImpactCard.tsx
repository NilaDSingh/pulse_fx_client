import './ImpactCard.css'

export default function ImpactCard(impact:any){
    console.log(impact.impact=='High'? 'high-impact' : 'normal-impact')
    return(
    <div className={impact.impact=='High'? 'high-impact' : 'normal-impact'}>{impact.impact} Impact</div>
)
}