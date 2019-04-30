class DoneButton {
    constructor() {
        //Create the "done" button with a check mark
        this.done = document.createElement("span");
        this.done.className = "done_btn";
        this.done.append('✓');
    }

    getButton() {
        return this.done;
    }
}

class DeleteButton {
    constructor() {
        //Create the "delete" button with an x
        this.del = document.createElement("span");
        this.del.className = "del_btn";
        this.del.append('✕');
    }

    getButton() {
        return this.del;
    }
}

export class ListItem {
    constructor(item) {
        //Create new list item
        let li = document.createElement("li");

        //Create done and delete items and add them to the list item
        let done = (new DoneButton()).getButton();
        li.appendChild(done);

        let del = (new DeleteButton()).getButton();
        li.appendChild(del);

        //Create the text portion of the To-Do, and display the given text
        let text = document.createElement("span");
        text.append(item);
        li.append(text);

        //Prepend the list item to the front of the list
        $("#list").prepend(li);

        //Handle double clicking on a list item (mark done, or undo marking done)
        li.ondblclick = function () {
            let parent = this;
            if (this.childNodes[0].className === "done_btn") {
                parent.childNodes[2].className = "done";
                parent.childNodes[0].textContent = "⟲";
                parent.childNodes[0].onclick = click_undo;
                parent.childNodes[0].className = "undo_btn";
            } else {
                parent.childNodes[2].className = "";
                parent.childNodes[0].textContent = '✓';
                parent.childNodes[0].onclick = click_done;
                parent.childNodes[0].className = "done_btn";
            }
        }

        //Handle clicking the delete button
        del.onclick = function () {
            let parent = this.parentElement;
            parent.style.display = "none";
        };

        //Function for handling when done button is clicked
        let click_done = function () {
            let parent = this.parentElement;
            parent.childNodes[2].className = "done";
            parent.childNodes[0].textContent = "⟲";
            parent.childNodes[0].onclick = click_undo;
            parent.childNodes[0].className = "undo_btn";
        };

        //Function for handlingwhen undo button is clicked
        let click_undo = function () {
            let parent = this.parentElement;
            parent.childNodes[2].className = "";
            parent.childNodes[0].textContent = '✓';
            parent.childNodes[0].onclick = click_done;
            parent.childNodes[0].className = "done_btn";
        }

        done.onclick = click_done;
    }
}