var get = require("lodash/get");
var set = require("lodash/set");
var cloneDeep = require("lodash/cloneDeep");

const fieldData = {
    allTableFields: [{
        dictionarySysId: '929394d887d11110945187b6dabb353f',
        active: true,
        default_value: '',
        display: false,
        label: 'Field1',
        mandatory: false,
        max_length: '',
        name: 'field1',
        reference: '',
        reference_display: '',
        reference_qual: '',
        type: 'string',
    }, ],
};

/* sequence of actions for undo/redo
var operations = [
  ["update", "allTableFields[0].label", "Field1", "Field1 - Edit1"],
  ["update", "allTableFields[0].label", "Field1 - Edit1", "Field1 - Edit2"],
  ["update", "allTableFields[0].label", "Field1 - Edit2", "Field1 - Edit3"]
]
*/

class FieldEditor {
    constructor(data) {
        this.data = data;
        this.undoHistory = [];
        this.redoHistory = [];
    }
    execute(command) {
        this.data = command.execute(this.data);
        this.undoHistory.push(command);
        this.redoHistory = [];
    }
    undo() {
        const command = this.undoHistory.pop();
        if (command) {
            this.data = command.undo(this.data);
            this.redoHistory.push(command);
        }
    }
    redo() {
        const command = this.redoHistory.pop();
        if (command) {
            this.data = command.execute(this.data);
            this.undoHistory.push(command);
        }
    }
    getFields() {
        return this.data;
    }
}

class UpdateCommand {
    constructor(path, value) {
        this.path = path;
        this.value = value;
    }

    execute(data) {
        this.oldValue = get(data, this.path);
        const dataCopy = cloneDeep(data);
        set(dataCopy, this.path, this.value);
        return dataCopy;
    }
    undo(data) {
        const dataCopy = cloneDeep(data);
        set(dataCopy, this.path, this.oldValue);
        return dataCopy;
    }
}

class CreateCommand {
    constructor(path, value) {
        this.path = path;
        this.value = value;
    }

    execute(data) {
        const pathValue = get(data, this.path);
        if (!Array.isArray(pathValue))
            return;
        
		this.index = pathValue.length;
		const dataCopy = cloneDeep(data);
		set(dataCopy, `${this.path}[${this.index}]`, this.value);
        return dataCopy;
    }
    undo(data) {
		const dataCopy = cloneDeep(data);
		const pathValue = get(dataCopy, this.path);
        if (!Array.isArray(pathValue))
            return;

		pathValue.splice(this.index, 1);
        return dataCopy;
    }
}

class DeleteCommand {
    constructor(path, value) {
        this.path = path;
        this.value = value;
    }

    execute(data) {
        this.oldValue = get(data, this.path);
        if (this.oldValue === undefined)
            return;
        
		const dataCopy = cloneDeep(data);
		pathValue.splice(this.index, 1);
        return dataCopy;
    }
    undo(data) {
		const dataCopy = cloneDeep(data);
		const pathValue = get(dataCopy, this.path);
        if (!Array.isArray(pathValue))
            return;

		pathValue.splice(this.index, 1);
        return dataCopy;
    }
}

const fieldEditor = new FieldEditor(fieldData);
console.log(fieldEditor.getFields().allTableFields);
fieldEditor.execute(new UpdateCommand("allTableFields[0].label", "Field1 - Edit1"));
fieldEditor.execute(new CreateCommand("allTableFields", {
    dictionarySysId: '008394d887d11110945187b6dabb3123',
    active: true,
    default_value: '',
    display: false,
    label: 'Field2',
    mandatory: false,
    max_length: '',
    name: 'field2',
    reference: '',
    reference_display: '',
    reference_qual: '',
    type: 'string',
}));
fieldEditor.execute(new UpdateCommand("allTableFields[0].label", "Field1 - Edit2"));
fieldEditor.execute(new UpdateCommand("allTableFields[1].label", "Field2 - Edit1"));
fieldEditor.execute(new DeleteCommand("allTableFields[2]", null));
console.log(fieldEditor.getFields().allTableFields);

fieldEditor.undo();
fieldEditor.undo();
fieldEditor.redo();
console.log(fieldEditor.getFields().allTableFields);