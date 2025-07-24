// List all sub-folders of the current folder
(async () => {
    const currentFolder = dv.current().file.folder;
    const currentDepth = currentFolder.split('/').length;

    const subFolderPages = dv.pages().filter((p) => {
        const fileDepth = p.file.folder.split('/').length;
        return currentDepth === fileDepth - 1;
    });

    const uniqueNames = [
        ...new Set(subFolderPages.map((p) => p.file.folder.split('/').pop())),
    ];

    dv.list(uniqueNames);
})();
