// Import
import { handleError, notifyAndClose } from "./functions/general";
import { runPlugin } from "./functions/runPlugin";

// Run the plugin
try { runPlugin(); }

// Catch any errors, log in the console and close plugin
catch(error: any) { handleError('😢😢 Something went wrong', error) }