import notifee from "@notifee/react-native";

export async function requestUserPermission(){
    await notifee.requestPermission();
    console.log('status: 1');
    
}