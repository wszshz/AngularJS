package com.fengze;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import java.io.*;

public class MyPlugin extends CordovaPlugin {
	@Override
	public boolean execute(String action, JSONArray data,
			CallbackContext callbackContext) throws JSONException {
		String str="";
		JSONObject obj = data.getJSONObject(0);
		if (action.equals("test")) {
			str = obj.optString("id");
			JSONObject result=new JSONObject();
			if(str!="1"){
				result.put("success",true);
				result.put("msg",str);
				callbackContext.success(result);
			}else{
				callbackContext.error("error");
			}
		}
		return true;
	}
	
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