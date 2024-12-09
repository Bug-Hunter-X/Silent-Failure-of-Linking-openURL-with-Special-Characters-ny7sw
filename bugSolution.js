This solution adds proper error handling and URL encoding to prevent silent failures when using `Linking.openURL`.

```javascript
import * as Linking from 'expo-linking';

export default function App() {
  const handlePress = async () => {
    const url = encodeURI('https://example.com/page?param=special+characters'); //Proper Encoding
    try {
      const success = await Linking.openURL(url);
      if (success) {
        console.log('URL opened successfully');
      } else {
        console.error('Failed to open URL');
        // Add user-friendly error handling here (alert, etc.)
      }
    } catch (error) {
      console.error('Error opening URL:', error);
      // Add more robust error handling here.
    }
  };

  return (
    <Button title="Open URL" onPress={handlePress} />
  );
}
```