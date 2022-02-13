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
  }
  //Function To Set Starting Page
  function init() {
    // Get First Metadata
    var firstMetadata = data.metadata[0];

    // Get First Sample
    var firstSample = data.samples[0];

    // Set Starting Page
    updatePage(firstMetadata, firstSample);

    // Update Page on New Input
    d3.selectAll("#selDataset").on("change", function () {
      // Update Metadata
      var meta = data.metadata.find((d) => d.id == this.value);

      // Update Sample
      var samp = data.samples.find((d) => d.id == this.value);

      // Deploy Function
      updatePage(meta, samp);
    });
  }
  // Deploy Functon
  init();
};
