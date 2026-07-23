
import React from 'react';import {View,Text,TouchableOpacity} from 'react-native';import {Colors} from '../theme/colors';
export function PastelCard({title,subtitle,bg,emoji,onPress,selected}:{title:string;subtitle?:string;bg:string;emoji:string;onPress:()=>void;selected?:boolean}){
 return (<TouchableOpacity onPress={onPress} style={{height:72,backgroundColor:bg,borderRadius:20,flexDirection:'row',alignItems:'center',paddingHorizontal:16,borderWidth:selected?2:0,borderColor:selected?Colors.brand:'transparent'}}>
  <View style={{width:48,height:48,borderRadius:24,backgroundColor:'#FFFFFF90',alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:24}}>{emoji}</Text></View>
  <View style={{marginLeft:12,flex:1}}><Text style={{fontWeight:'800',fontSize:14,color:Colors.textPrimary}}>{title}</Text>{subtitle&&<Text style={{fontSize:12,color:Colors.textSecondary}}>{subtitle}</Text>}</View>
  <View style={{width:28,height:28,borderRadius:14,backgroundColor:'#FFF',alignItems:'center',justifyContent:'center'}}><Text style={{fontWeight:'800'}}>→</Text></View>
 </TouchableOpacity>)
}
