### DAY FIVE NOTES
---
## KEY TOPICS
-  useEffect Hook
- ` useEffect(() => {
        console.log('render')
    },)` // useEffect runs at every event change in the app

- ` useEffect(() => {
        console.log('load time')
    }, [])`  // here, useEffect only run at loadtime

- useEffect is asynchronous
- i run "npx json-server -p 3500 -w data/db.json" in the terminal to create a mock REST API using a simple json  file as my database
👉 Why it’s useful:

Great for testing frontend applications when you don’t have a real backend yet.

It mimics a REST API without writing server-side code.