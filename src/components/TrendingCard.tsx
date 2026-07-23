
import React from 'react';import {View,Text} from 'react-native';
export function TrendingCard({title,subtitle}:{title:string;subtitle:string}){
 return (<View style={{width:140,backgroundColor:'#FFF',borderRadius:20,overflow:'hidden',elevation:2}}><View style={{height:80,backgroundColor:'#EDE7F6',alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:32}}>💪</Text></View><View style={{padding:10}}><Text style={{fontSize:12,fontWeight:'800'}}>{title}</Text><Text style={{fontSize:10,color:'#8A8A8A'}}>{subtitle}</Text></View></View>)
}
