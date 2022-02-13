// Import Data
d3.json(`samples.json`).then((data) => {
  // Create Dropdown
  var dropdown = d3.select(`#selDataset`);

  // For Each
  data.names.forEach((entry) => {
    // Append Value Into Dropdown
    dropdown
      .append("option")
      .attr("value", entry)
      .text(entry)
      .property("value");
  });

  // Update Page on New Input
  function updatePage(meta, samp) {
    // Select Sample Metadata
    var sampleData = d3.select(`#sample-metadata`);

    // Clear HTML
    sampleData.html("");

  };
