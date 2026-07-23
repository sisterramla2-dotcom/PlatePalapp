
import React from 'react';import {View,Text,TouchableOpacity} from 'react-native';
export function SearchHistoryItem({name,onPress}:{name:string;onPress:()=>void}){
 const emojiMap:any={'Organic bananas':'🍌','Pomegranate':'🍎','Plum tomatoes':'🍅','Organic orange':'🍊'};
 return (<TouchableOpacity onPress={onPress} style={{alignItems:'center',width:72}}><View style={{width:64,height:64,borderRadius:32,backgroundColor:'#F5F5F5',alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:28}}>{emojiMap[name]||'🥗'}</Text></View><Text style={{fontSize:11,textAlign:'center',marginTop:6}} numberOfLines={2}>{name}</Text></TouchableOpacity>)
}
