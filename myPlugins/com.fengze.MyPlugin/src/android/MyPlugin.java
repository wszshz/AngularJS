package com.fengze;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class MyPlugin extends CordovaPlugin {
	private static Context mContext;

	@Override
	public void initialize(CordovaInterface cordova, CordovaWebView webView) {
		super.initialize(cordova, webView);
		mContext = this.cordova.getActivity().getApplicationContext();
	}

	@Override
	public boolean execute(String action, JSONArray data,
			CallbackContext callbackContext) throws JSONException {
		String str="";
		JSONObject obj = data.getJSONObject(0);
		if (action.equals("test")) {
			str = obj.getString("id");
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
}