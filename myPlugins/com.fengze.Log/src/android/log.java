package fz;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import java.io.*;

public class log extends CordovaPlugin {
	@Override
	public boolean execute(String action, JSONArray data,
			CallbackContext callbackContext) throws JSONException {
		JSONObject obj = data.getJSONObject(0);
		if (action.equals("Log")) {
			String text=obj.optString("text");
			String path=obj.optString("path");
			if(path.isEmpty()){
				Log(text);
			}else{
				Log(text,path);
			}
			callbackContext.success("Log");
		}else{
			callbackContext.error("no method");
		}
		return true;
	}
	
	public void Log(String str) {
		try {
			//如果文件存在，则追加内容；如果文件不存在，则创建文件
	        BufferedWriter out = null;  
	        try {
	            out = new BufferedWriter(new OutputStreamWriter(  
	                    new FileOutputStream("/sdcard/text.txt", true)));  
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
	
	public void Log(String str,String path) {
		try {
			//如果文件存在，则追加内容；如果文件不存在，则创建文件
	        BufferedWriter out = null;  
	        try {
	            out = new BufferedWriter(new OutputStreamWriter(  
	                    new FileOutputStream(path, true)));  
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