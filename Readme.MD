
- Date
```
const date = new Date();

// US English: MM/DD/YYYY
console.log(date.toLocaleDateString('en-US')); 

// British English: DD/MM/YYYY
console.log(date.toLocaleDateString('en-GB')); 

// Custom options
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
console.log(date.toLocaleDateString('en-US', options)); 
// Output: "Tuesday, March 3, 2026"
```

```
const formatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'full',
  timeStyle: 'short'
});

console.log(formatter.format(new Date()));
// Output: "Tuesday, March 3, 2026 at 5:04 PM"

```
- Originally created by Facebook, Open Graph (OG) is a set of rules that tells social media platforms and messaging apps (like WhatsApp, Slack, or LinkedIn) exactly how to display your website when someone shares your link.
```
<head>
  <title>My Awesome App</title>
  
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://www.myapp.com/" />
  <meta property="og:title" content="My Awesome App - Home" />
  <meta property="og:description" content="The best app for tracking your Redux counter in 2026." />
  <meta property="og:image" content="https://www.myapp.com/preview-image.png" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="My Awesome App" />
</head>
```