// Notify with a message and then close plugin
export function notifyAndClose(message: string) {

    // console.clear();

    figma.notify(message);
    figma.closePlugin();

}

// Log the error to the console and close plugin
export function handleError(message: string, error: any) {

    // Print error to console and then close plugin
    console.log('> Error:', error.message);
    console.log('-------------------')
    console.log(error.stack);
    
    console.log('-------------------')
    notifyAndClose(message);

}