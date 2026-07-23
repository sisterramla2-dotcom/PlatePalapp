
import React,{useEffect,useState} from 'react';import {View,Text,TextInput,ScrollView,TouchableOpacity} from 'react-native';import {Colors} from '../theme/colors';import {SearchHistoryItem} from '../components/SearchHistoryItem';import {ProductCard} from '../components/ProductCard';import {getHistory} from '../storage/storage';
export function SearchScreen({route,navigation}:any){
 const [query,setQuery]=useState(route?.params?.query||''); const [history,setHistory]=useState<string[]>([]);
 useEffect(()=>{(async()=>setHistory(await getHistory()))()},[]);
 return (<View style={{flex:1,backgroundColor:'#FFF',paddingTop:56}}><View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:16,gap:8}}><TouchableOpacity onPress={()=>navigation.goBack()}><Text style={{fontSize:20}}>←</Text></TouchableOpacity><View style={{flex:1,flexDirection:'row',alignItems:'center',borderWidth:1,borderColor:'#0E8F6E',borderRadius:24,paddingHorizontal:12,height:44}}><TextInput value={query} onChangeText={setQuery} placeholder="Search here..." style={{flex:1}}/><Text>📷</Text><Text style={{marginLeft:8}}>🔍</Text></View></View>
 <ScrollView contentContainerStyle={{padding:16,gap:16}}>
  <View><Text style={{fontWeight:'800',marginBottom:8}}>Search history</Text><ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{gap:8}}>{history.map(h=><SearchHistoryItem key={h} name={h} onPress={()=>setQuery(h)}/>)}</ScrollView></View>
  <View><Text style={{fontWeight:'800',marginBottom:8}}>You might like</Text><View style={{gap:10}}><ProductCard name="Raspberries 170g" price="$2.99" unit="($17.59/kg)" rating={4.9} reviews={367}/><ProductCard name="Blackberries 150g" price="$2.49" unit="($16.60/kg)" rating={4.8} reviews={245}/></View></View>
 </ScrollView></View>)
}
