package com.fengze;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.pm.PackageManager.NameNotFoundException;
import android.content.pm.PackageManager;

public class ExtraInfo extends CordovaPlugin {
	@Override
        public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		try {	
			if (action.equals("getExtra")) {
				//不知为什么不写这2句，build的时候会报错 
				PackageManager packageManager = this.cordova.getActivity().getPackageManager();
				String re = packageManager.getPackageInfo(this.cordova.getActivity().getPackageName(), 0).versionName;
			
				callbackContext.success("success");
				return true;
			}
			return false;
		} catch (NameNotFoundException e) {
			callbackContext.success("error");
			return true;
		}
	}
}