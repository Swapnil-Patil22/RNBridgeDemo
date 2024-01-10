//
//  NumberSumModule.m
//  BridgeDemo
//
//  Created by Neosoft on 10/01/24.
//

//#import <Foundation/Foundation.h>
#import "NumberSumModule.h"

@implementation NumberSumModule

// To export a module named NumberSumModule
RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(calculateSum:(double)num1 withNumber2:(double)num2 resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
//  double sum = num1 + num2 + 10;
//  resolve([NSNumber numberWithDouble:sum]);
  @try {
      // Perform your calculation here
      double sum = num1 + num2;
      
      // Resolve the promise with the result
      resolve([NSNumber numberWithDouble:sum]);
    } @catch (NSException *exception) {
      // If an exception occurs, reject the promise with an error code and message
      NSString *errorMessage = [NSString stringWithFormat:@"Error performing calculation: %@", exception.reason];
      NSError *error = [NSError errorWithDomain:@"CALCULATION_ERROR" code:-1 userInfo:@{NSLocalizedDescriptionKey: errorMessage}];
      reject(@"CALCULATION_ERROR", errorMessage, error);
    }
}

@end
