// List all folder notes in the current folder
(async () => {
    const pages = dv.pages();
    const currentFolder = dv.current().file.folder;

    const matchingNotes = pages.filter((p) => {
        // Only consider notes in subfolders of currentFolder
        if (!p.file.folder.startsWith(currentFolder + '/')) return false;

        // Get the direct subfolder name (last part of the folder path)
        const subfolderName = p.file.folder.split('/').pop();

        return p.file.name === subfolderName;
    });

    dv.paragraph(`Folder notes in folder ${currentFolder}: `);
    dv.table(
        ['Name', 'Path'],
        matchingNotes.map((p) => [dv.fileLink(p.file.path), p.file.folder])
    );
})();
