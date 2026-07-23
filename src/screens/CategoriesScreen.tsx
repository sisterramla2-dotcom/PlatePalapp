
import React from 'react';import {View,Text,ScrollView} from 'react-native';import {Colors} from '../theme/colors';import {PastelCard} from '../components/PastelCard';
const cats=[{title:'Fresh fruits',sub:'32 items',bg:Colors.pastelYellow,emoji:'🍌'},{title:'Cruciferous vegetables',sub:'5 items',bg:Colors.pastelGreen,emoji:'🥦'},{title:'Juicy melons',sub:'7 items',bg:Colors.pastelPink,emoji:'🍉'},{title:'Root vegetables',sub:'10 items',bg:Colors.pastelLavender,emoji:'🧅'},{title:'Fresh salads',sub:'8 items',bg:Colors.pastelMint,emoji:'🥬'}];
export function CategoriesScreen({navigation}:any){
 return (<View style={{flex:1,backgroundColor:Colors.bg,paddingTop:56}}><Text style={{fontSize:22,fontWeight:'900',paddingHorizontal:16,marginBottom:12}}>Categories</Text><ScrollView contentContainerStyle={{padding:16,gap:12}}>{cats.map(c=><PastelCard key={c.title} title={c.title} subtitle={c.sub} bg={c.bg} emoji={c.emoji} onPress={()=>navigation.navigate('Search',{query:c.title})}/>)}</ScrollView></View>)
}
