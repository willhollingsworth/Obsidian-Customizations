// List all folder notes and their path
(async () => {
    const pages = dv.pages();
    const currentFolder = dv.current().file.folder;

    const matchingNotes = pages.filter((p) => {
        // Get the direct subfolder name (last part of the folder path)
        const subfolderName = p.file.folder.split('/').pop();

        return p.file.name === subfolderName;
    });

    dv.table(
        ['Name', 'Path'],
        matchingNotes.map((p) => [dv.fileLink(p.file.path), p.file.folder])
    );
})();
