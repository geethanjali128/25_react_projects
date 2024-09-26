<!-- drag and drop -->

Event.dataTransfer is a JavaScript object provided by the Drag and Drop API that manages the data being transferred during drag-and-drop operations. It allows you to store, manipulate, and retrieve information about the dragged data between drag start and drop events.

<!-- Key Features of event.dataTransfer: -->

Storing Data: You can store data using the setData(type, data) method. This data can later be accessed when the item is dropped.

<!-- js code -->

event.dataTransfer.setData('text/plain', 'some data');

Retrieving Data: The getData(type) method allows you to retrieve the data that was set during the drag operation, usually in the drop event.

<!-- js code -->

const data = event.dataTransfer.getData('text/plain');
Drag Effects:

effectAllowed: Specifies what operations are allowed during the drag, such as copy, move, or link.

<!-- js code -->

event.dataTransfer.effectAllowed = "move";
dropEffect: Controls what happens when the item is dropped (whether it's copied, moved, etc.).

<!-- js code -->

event.dataTransfer.dropEffect = "move";
File Dragging: It also supports dragging files from the file system into the browser, where you can access them through the event.dataTransfer.files property.

Example:
Drag Start: Set some data related to the dragged item.

<!-- js code -->

function onDragStart(event) {
event.dataTransfer.setData('id', event.target.id); // Store the item's ID
}
Drop: Retrieve the stored data when the item is dropped.

<!-- js code -->

function onDrop(event) {
const itemId = event.dataTransfer.getData('id'); // Get the stored ID
console.log(`Dropped item ID: ${itemId}`);
}
