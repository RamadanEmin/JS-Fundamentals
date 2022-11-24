function browserHistory(object, stringArray) {
    function openTab(obj, command, site) {
        obj['Open Tabs'].push(site);
        obj['Browser Logs'].push(command + ` ` + site);
    }
    function closeTab(obj, command, site) {
        if (obj['Open Tabs'].includes(site)) {
            let index = obj['Open Tabs'].indexOf(site);
            let result = obj['Open Tabs'].splice(index, 1);
            obj['Recently Closed'].push(result);
            obj['Browser Logs'].push(command + ` ` + site);
        }
    }
    function deleteObject(obj) {
        obj['Open Tabs'] = [];
        obj['Recently Closed'] = [];
        obj['Browser Logs'] = [];
    }

    for (const command of stringArray) {
        let data = command.split(` `);
        let currentCommand = data[0];
        let site = data.slice(1).join(` `);
        if (currentCommand === `Open`) {
            openTab(object, currentCommand, site);
        } else if (currentCommand === `Close`) {
            closeTab(object, currentCommand, site);
        } else if (command === `Clear History and Cache`) {
            deleteObject(object);
        }
    }
    console.log(`${object['Browser Name']}`);
    console.log(`Open Tabs: ${object['Open Tabs'].join(`, `)}`);
    console.log(`Recently Closed: ${object['Recently Closed'].join(`, `)}`);
    console.log(`Browser Logs: ${object['Browser Logs'].join(`, `)}`);
}
browserHistory(
    { "Browser Name": "Mozilla Firefox", "Open Tabs": ["YouTube"], "Recently Closed": ["Gmail", "Dropbox"], "Browser Logs": ["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"] },
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
);
