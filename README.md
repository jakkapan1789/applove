# Project Overview

Hi there! 👋 Welcome to my project, developed with the primary goal of learning and enhancing my skills. I didn't set any specific expectations for this project other than personal growth and skill improvement.

### Here is example useage applove, for confirm dialog
```javascript

import applove from 'applove'

applove.confirm({ 
    title: "Are you sure?", 
    confirmButtonLabel: "Yes", 
    cancelButtonLabel: "No", 
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
```javascript
applove.success({ 
    title: "Operation successful", 
    ExitButtonLabel: "Close" 
});

applove.error({ 
    title: "Error occurred", 
    ExitButtonLabel: "Close" 
});

applove.warning({ 
    title: "Warning", 
    ExitButtonLabel: "Ok" 
});

applove.info({ 
    title: "Information", 
    ExitButtonLabel: "Ok" 
});


```
