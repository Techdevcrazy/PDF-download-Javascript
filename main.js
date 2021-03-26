function startPdfDownload(name = 'file.pdf', type = 'application/octetstream') {
  // Online file link
  const url = "set your file url";

  // Create XMLHTTP Request.
  var req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.responseType = "blob";
  req.onload = function () {
    const blob = new Blob([req.response], { type: type });

    const { URL: { createObjectURL, revokeObjectURL }, setTimeout } = window
    link = createObjectURL(blob);

    // Create download anchor
    const a = document.createElement("a");
    a.setAttribute("download", name);
    a.setAttribute("href", link);
    document.body.appendChild(a);
    a.click();

    setTimeout(() => { revokeObjectURL(url) }, 100)
    document.body.removeChild(a);
  };
  req.send();
}

// Start file download
startPdfDownload('welcome.pdf');
