#import "MyPlugin.h"
#import <Cordova/CDVPluginResult.h>

@implementation MyPlugin

- (void)test : (CDVInvokedUrlCommand *)command
{
    NSString * callbackId = command.callbackId;
    NSString * info =@"返回值";
    
    //返回正确信息
    CDVPluginResult * pluginResult =[CDVPluginResult resultWithStatus : CDVCommandStatus_OK messageAsString : info];
    
    //返回错误信息
    //NSMutableDictionary* dictionary = [NSMutableDictionary dictionaryWithCapacity:2];
    //[dictionary setValue:@"错误" forKey:@"code"];
    //[dictionary setValue:@"Unknown error" forKey:@"message"];
    //CDVPluginResult * pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsDictionary:dictionary];
    
    [self.commandDelegate sendPluginResult : pluginResult callbackId : callbackId];
}

@end