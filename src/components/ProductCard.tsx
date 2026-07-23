
import React from 'react';import {View,Text} from 'react-native';import {Colors} from '../theme/colors';
export function ProductCard({name,price,unit,rating,reviews}:{name:string;price:string;unit:string;rating:number;reviews:number}){
 return (<View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#FFF',borderRadius:16,padding:12}}><View style={{width:56,height:56,borderRadius:28,backgroundColor:Colors.pastelMint,alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:20}}>🍓</Text></View><View style={{marginLeft:12,flex:1}}><Text style={{fontWeight:'700'}}>{name}</Text><Text style={{fontWeight:'800'}}>{price} <Text style={{fontWeight:'400',color:Colors.textSecondary}}>{unit}</Text></Text><Text style={{fontSize:12,color:'#F6A623'}}>★★★★★ {reviews}</Text></View></View>)
}
