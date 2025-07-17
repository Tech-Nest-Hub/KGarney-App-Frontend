import '@/app/global.css';
import DarkMode from "@/components/DarkMode";
import FlatCards from "@/components/FlatCards";
import { SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Index() {
  return (
   <SafeAreaView>
    <ScrollView>

    <View>

    <Text style={{fontSize: 20, fontWeight: 'bold', justifyContent: 'center', alignItems: 'center', flex: 1, alignSelf: 'center', flexDirection: 'row'}}>Hello KTA Haru!</Text>
    <DarkMode/>
    <FlatCards/>
    </View>
    <View className='flex-1 justify-center items-center'>
      <Text className='text-2xl font-bold'>Welcome to KTA Haru</Text>
      <Text className='text-lg font-extrabold'>This is a sample app using Expo and Nativewind</Text>
    </View>
    </ScrollView>
   </SafeAreaView>
  );
}
