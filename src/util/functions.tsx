import notifee, { AuthorizationStatus } from "@notifee/react-native";

export async function requestUserPermission(){
    const settings = await notifee.requestPermission();
    if(settings.authorizationStatus === AuthorizationStatus.DENIED){
        console.log("notification permission status: 0");
    } else if (settings.authorizationStatus === AuthorizationStatus.AUTHORIZED){
        console.log("notification permission status: 1");
    } else if (settings.authorizationStatus === AuthorizationStatus.PROVISIONAL){
        console.log("notification permission status: 2");
    }
    
}