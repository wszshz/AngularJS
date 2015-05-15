package com.fengze;

import android.app.Activity;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import android.net.Uri;
import android.util.Log;

/**
 * js调用java方法 
 * 必须继承CordovaPlugin   
 * 我使用的   cordova  3.3.0版本
 * @author chale  haomou.net
*/
public class MyConsole extends CordovaPlugin {
    public String message="";
	/**
	 * 注意 构造方法不能为
	 * MyConsole(){}
	 * 可以不写或者 定义为如下
	 */
	public MyConsole() {
	}
	CallbackContext callbackContext;
	@Override
	public boolean execute(String action, JSONArray args,
			CallbackContext callbackContext) throws JSONException {
		this.callbackContext = callbackContext;
		if (action.equals("log")) {
			// 获取args的第一个参数
			message = args.getString(0);
			Log.i("myConsole", message);
			return true;
		}
		if (action.equals("err")) {
			// 获取args的第一个参数
			message = args.getString(0);
			Log.d("myConsole", message);
			return true;
		}
		return false;
	}
}