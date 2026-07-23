
import AsyncStorage from '@react-native-async-storage/async-storage';
export type MealType='BREAKFAST'|'LUNCH'|'DINNER'|'SNACK';
export type FoodEntry={id:string; name:string; photoUri?:string; base64?:string; mealType:MealType; dateKey:string; weightGrams:number; calories:number; proteinG:number; carbsG:number; fatsG:number; sugarG:number; cholesterolMg:number; fiberG:number; vitamins:string[]; loggedAt:number};
export type UserGoal={name:string; goalType:'LOSE'|'GAIN'|'MAINTAIN'; startWeight:number; targetWeight:number; targetDate:number; activityLevel:'LOW'|'MODERATE'|'HIGH'; calorieBudget:number; proteinBudget:number; carbsBudget:number; fatsBudget:number; waterBudget:number};
export async function saveGoal(g:UserGoal){await AsyncStorage.setItem('userGoal',JSON.stringify(g)); await AsyncStorage.setItem('hasOnboarded','true'); if(g.name) await AsyncStorage.setItem('userName',g.name);}
export async function getGoal():Promise<UserGoal|null>{const s=await AsyncStorage.getItem('userGoal'); return s?JSON.parse(s):null;}
export async function getUserName(){return (await AsyncStorage.getItem('userName'))||'Jess';}
export async function hasOnboarded(){return (await AsyncStorage.getItem('hasOnboarded'))==='true';}
export async function saveFood(e:FoodEntry){const list=await getFoods(); list.push(e); await AsyncStorage.setItem('foods',JSON.stringify(list)); await addToHistory(e.name);}
export async function getFoods():Promise<FoodEntry[]>{const s=await AsyncStorage.getItem('foods'); return s?JSON.parse(s):[];}
export async function getFoodsByDate(dateKey:string){return (await getFoods()).filter(f=>f.dateKey===dateKey);}
export async function deleteFood(id:string){const list=await getFoods(); await AsyncStorage.setItem('foods',JSON.stringify(list.filter(f=>f.id!==id)));}
export async function clearAll(){await AsyncStorage.clear();}
export async function getHistory():Promise<string[]>{const s=await AsyncStorage.getItem('searchHistory'); return s?JSON.parse(s):['Organic bananas','Pomegranate','Plum tomatoes','Organic orange'];}
export async function addToHistory(name:string){let h=await getHistory(); h=[name,...h.filter(x=>x!==name)].slice(0,8); await AsyncStorage.setItem('searchHistory',JSON.stringify(h));}
