# Silent Failure of Linking.openURL with Special Characters in Expo

This repository demonstrates a bug in Expo's `Linking.openURL` API where the function fails silently when attempting to open URLs containing special characters or improper encoding. This can lead to unexpected behavior and a poor user experience, especially in deep linking scenarios.

## Bug Description

The `Linking.openURL` function doesn't provide any error handling or feedback when it fails to open a URL due to encoding issues.  This makes debugging difficult and can leave users confused.

## Reproduction Steps

1. Clone this repository.
2. Run the project using Expo Go or a similar Expo CLI method.
3. Observe that clicking the button attempts to open a URL with special characters. Note the absence of an error message or any indication of failure.

## Solution

The solution involves improved error handling and URL encoding before using `Linking.openURL`. This ensures that the application responds appropriately to potential errors and prevents unexpected behavior.