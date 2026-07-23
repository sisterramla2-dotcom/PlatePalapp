
export const todayKey=()=>new Date().toISOString().slice(0,10);
export function calculateBudget(startW:number,targetW:number,days:number,activity:'LOW'|'MODERATE'|'HIGH'){
 const diff=targetW-startW; const totalDelta=diff*7700; const dailyDelta=days>0?totalDelta/days:0;
 const base=activity==='LOW'?2000:activity==='HIGH'?2600:2300;
 return Math.round(Math.min(4000,Math.max(1200,base+dailyDelta)));
}
export function macroBudgets(cal:number, goal:'LOSE'|'GAIN'|'MAINTAIN'){
 const pRatio=goal==='LOSE'?0.30:0.25; const fRatio=0.25; const cRatio=1-pRatio-fRatio;
 return {p:cal*pRatio/4,c:cal*cRatio/4,f:cal*fRatio/9};
}
