
import * as SecureStore from 'expo-secure-store';
export type FoodAnalysis={foodName:string; estimatedWeightGrams:number; calories:number; proteinG:number; carbsG:number; fatsG:number; sugarG:number; cholesterolMg:number; fiberG:number; vitaminsSummary:string[]}
export async function getApiKey(){return await SecureStore.getItemAsync('openrouter_key')}
export async function setApiKey(k:string){await SecureStore.setItemAsync('openrouter_key',k)}
export async function analyzeImageBase64(b64:string):Promise<FoodAnalysis>{
 const key=await getApiKey(); if(!key) throw new Error('API key missing. Set in Settings.');
 const res=await fetch('https://openrouter.ai/api/v1/chat/completions',{method:'POST',headers:{'Authorization':`Bearer ${key}`,'Content-Type':'application/json','HTTP-Referer':'https://platepal.app','X-Title':'PlatePal'},body:JSON.stringify({model:'z-ai/glm-4.6v',messages:[{role:'system',content:'You are a precise nutrition vision model. Return STRICT JSON only with keys: foodName, estimatedWeightGrams, calories, proteinG, carbsG, fatsG, sugarG, cholesterolMg, fiberG, vitaminsSummary (array). No markdown.'},{role:'user',content:[{type:'text',text:'Analyze this food photo and return JSON.'},{type:'image_url',image_url:{url:`data:image/jpeg;base64,${b64}`}}]}],max_tokens:1200})});
 const json=await res.json(); const raw=json?.choices?.[0]?.message?.content||''; const cleaned=raw.replace(/```json|```/g,'').trim(); const s=cleaned.indexOf('{'); const e=cleaned.lastIndexOf('}'); if(s===-1||e===-1) throw new Error('Invalid JSON: '+cleaned); const obj=JSON.parse(cleaned.substring(s,e+1));
 return {foodName:obj.foodName||'Meal',estimatedWeightGrams:Number(obj.estimatedWeightGrams||240),calories:Number(obj.calories||350),proteinG:Number(obj.proteinG||20),carbsG:Number(obj.carbsG||30),fatsG:Number(obj.fatsG||15),sugarG:Number(obj.sugarG||5),cholesterolMg:Number(obj.cholesterolMg||10),fiberG:Number(obj.fiberG||3),vitaminsSummary:obj.vitaminsSummary||[]}
}
