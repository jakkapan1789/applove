# Project Overview

Hi there! 👋 Welcome to my project, developed with the primary goal of learning and enhancing my skills. I didn't set any specific expectations for this project other than personal growth and skill improvement.


### Available Scripts

In the project directory, you can run to install:

````javascript
npm i applove
````
### Here is example useage applove, for confirm dialog

#### Screenshots

![Local Image](https://github.com/jakkapan1789/applove/blob/main/example-confirm.png)
```javascript

import applove from 'applove'

applove.confirm({ 
    title: "Please confirm", 
    confirmButtonLabel: "Confirm", 
    cancelButtonLabel: "Cancel", 
    type: "question" 
}).then(response => {
    if (response.result) {
        // User clicked "Yes"
        console.log("Confirmed");
    } else {
        // User clicked "No" or closed the dialog
        console.log("Canceled");
    }
});

```

### Here is example useage applove, for alert success, error or something like that.
#### Screenshots
![Local Image](https://github.com/jakkapan1789/applove/blob/main/example-success.png)
```javascript
applove.success({ 
    title: "Operation successful", 
    exitButtonLabel: "Close" 
});

applove.error({ 
    title: "Error occurred", 
    exitButtonLabel: "Close" 
});

applove.warning({ 
    title: "Warning", 
    exitButtonLabel: "Close" 
});

applove.info({ 
    title: "Information", 
    exitButtonLabel: "Close" 
});


```
