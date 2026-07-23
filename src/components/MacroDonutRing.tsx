
import React from 'react';import {View,Text} from 'react-native';import Svg,{Circle} from 'react-native-svg';import {Colors} from '../theme/colors';
export function MacroDonutRing({calories,protein,carbs,fats,size=140,stroke=12}:{calories:number;protein:number;carbs:number;fats:number;size?:number;stroke?:number}){
 const total=Math.max(1,protein+carbs+fats); const r=(size-stroke)/2; const c=2*Math.PI*r;
 const pLen=c*(protein/total); const cLen=c*(carbs/total); const fLen=c-pLen-cLen;
 return (<View style={{width:size,height:size,alignItems:'center',justifyContent:'center'}}>
  <Svg width={size} height={size} style={{position:'absolute',transform:[{rotate:'-90deg'}]}}>
   <Circle cx={size/2} cy={size/2} r={r} stroke="#EEE" strokeWidth={stroke} fill="none"/>
   <Circle cx={size/2} cy={size/2} r={r} stroke={Colors.brand} strokeWidth={stroke} strokeDasharray={`${pLen} ${c}`} strokeLinecap="round" fill="none"/>
   <Circle cx={size/2} cy={size/2} r={r} stroke="#F6A623" strokeWidth={stroke} strokeDasharray={`${cLen} ${c}`} strokeDashoffset={-pLen} strokeLinecap="round" fill="none"/>
   <Circle cx={size/2} cy={size/2} r={r} stroke={Colors.fatsText} strokeWidth={stroke} strokeDasharray={`${fLen} ${c}`} strokeDashoffset={-(pLen+cLen)} strokeLinecap="round" fill="none"/>
  </Svg><View style={{alignItems:'center'}}><Text style={{fontSize:24,fontWeight:'900'}}>{calories}</Text><Text style={{fontSize:12,color:Colors.textSecondary}}>Kcal</Text></View></View>)
}
