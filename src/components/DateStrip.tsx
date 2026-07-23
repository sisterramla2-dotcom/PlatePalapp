
import React from 'react';import {ScrollView,TouchableOpacity,View,Text} from 'react-native';import {Colors} from '../theme/colors';
type Day={key:string;dayNum:string;weekDay:string;isSelected:boolean;bg:string};
export function DateStrip({days,onSelect}:{days:Day[];onSelect:(d:Day)=>void}){
 return (<ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:16,gap:8}}>
  {days.map(d=>(<TouchableOpacity key={d.key} onPress={()=>onSelect(d)} style={{width:44,height:64,borderRadius:22,backgroundColor:d.isSelected?Colors.brand:d.bg,alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:16,fontWeight:'800',color:d.isSelected?'#FFF':'#1B1B1B'}}>{d.dayNum}</Text><Text style={{fontSize:11,color:d.isSelected?'rgba(255,255,255,0.8)':'#8A8A8A'}}>{d.weekDay}</Text>{d.isSelected&&<View style={{marginTop:2,width:4,height:4,borderRadius:2,backgroundColor:'#FFF'}}/>}</TouchableOpacity>))}
 </ScrollView>)
}
