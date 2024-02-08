import { notifyAndClose } from "./general";

// Run plugin
export function runPlugin() {

    // Get selection
    const selection = figma.currentPage.selection;

    // Check if there is anything selected
    if (selection) {

        // Set up
        let locked:     number = 0;
        let unlocked:   number = 0;

        // Loop thru selection
        selection.forEach((i: any) => {

            // Check the node's lock status
            if (i.locked === true) {

                // Unlock the node
                unlocked = unlocked + 1;
                i.locked = false;

            }

            else {

                // Lock the node
                locked = locked + 1;
                i.locked = true;

            }
            

        });

        // Close
        notifyAndClose(`${locked} items have been locked / ${unlocked} items have been unlocked`);

    }

    else { notifyAndClose('How can you manage a lock for nothing?') };

}