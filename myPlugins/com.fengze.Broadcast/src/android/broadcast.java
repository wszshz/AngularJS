package fz;
import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;

public class broadcast extends CordovaPlugin {
	
	public boolean execute(String action, JSONArray data, CallbackContext callbackContext) throws JSONException {
		if (action.equals("registerBroadCast")) {
			registerBoradcastReceiver("Test");
		}else if(action.equals("sendBroadCast")){
			sendBoradcast();
		}else{
			callbackContext.error("no method");
		}
		return true;
	}
	
	public void sendBoradcast(){
		Intent intent = new Intent();
		   intent.setAction("Test");
		   
		   //要发送的内容
		   intent.putExtra("author", "LZQ");
		   
		   //发送 一个无序广播
		   cordova.getActivity().sendBroadcast(intent);
	}
	
	public void registerBoradcastReceiver(String ACTION_NAME){  
        IntentFilter myIntentFilter = new IntentFilter();  
        myIntentFilter.addAction(ACTION_NAME);
        //注册广播
        cordova.getActivity().getApplicationContext().registerReceiver(mBroadcastReceiver, myIntentFilter);
        Log("registerBoradcastReceiver:"+ACTION_NAME);
    }  

	private BroadcastReceiver mBroadcastReceiver = new BroadcastReceiver(){  
        @Override  
        public void onReceive(Context context, Intent intent) {
            String action = intent.getAction();  
            if(action.equals("Test")){  
                Log("send broadcast");
            }  
        }  
          
    }; 
    
	 public void Log(String str) {
	  		try {
	  			//如果文件存在，则追加内容；如果文件不存在，则创建文件
	  	        BufferedWriter out = null;  
	  	        try {  
	  	            out = new BufferedWriter(new OutputStreamWriter(  
	  	                    new FileOutputStream("/sdcard/LZQ/text.txt", true)));  
	  	            out.write(str+" \r\n");
	  	        } catch (Exception e) {  
	  	            e.printStackTrace();  
	  	        } finally {  
	  	            try {  
	  	                out.close();  
	  	            } catch (IOException e) {  
	  	                e.printStackTrace();  
	  	            }  
	  	        }
	  		} catch (Exception e) {
	  			e.printStackTrace();
	  		}
	  	}
}