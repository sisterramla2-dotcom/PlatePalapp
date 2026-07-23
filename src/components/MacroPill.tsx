
import React from 'react';import {View,Text} from 'react-native';import {Colors} from '../theme/colors';
export function MacroPill({label,consumed,budget,fill,bg,icon}:{label:string;consumed:number;budget:number;fill:string;bg:string;icon:string}){
 const frac=Math.min(1,consumed/Math.max(1,budget));
 return (<View style={{gap:6}}><View style={{flexDirection:'row',alignItems:'center'}}><View style={{width:28,height:28,borderRadius:14,backgroundColor:bg,alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:12}}>{icon}</Text></View><Text style={{marginLeft:8,fontSize:13,fontWeight:'600'}}>{label}</Text><View style={{flex:1}}/><Text style={{fontSize:12,color:Colors.textSecondary}}>{Math.round(consumed)}/{Math.round(budget)} g</Text></View><View style={{height:10,borderRadius:10,backgroundColor:bg}}><View style={{width:`${frac*100}%` as any,height:10,borderRadius:10,backgroundColor:fill}}/></View></View>)
}
