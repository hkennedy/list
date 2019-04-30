export class Tab {
    constructor(container, list) {
        //Create tab button with class tablinks
        let tab = document.createElement("button");
        tab.textContent = list;
        tab.className = "tablinks";

        //Create + assign even handler for when tab is clicked
        let click = function (_, val = list) {
            var i, tabcontent, tablinks;

            //Make all other tab content is invisible
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            //Mark all tabs innactive
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            //Mark clicked tab as active and make it's content visible
            document.getElementById(val).style.display = "block";
            this.className += " active";
        };
        tab.onclick = click;

        //Create the tab's content (a new list in an iframe)
        let content = document.createElement("iframe");
        content.className = "tabcontent";
        content.src = "./list.html";
        content.id = list;

        //Append the tab content to the page's body, add the tab
        //to the container of tabs.
        $("body").append(content);
        container.append(tab);

        //Jump to newly created tab (simulate click)
        tab.click();
    }
}