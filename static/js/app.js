// Import Data
d3.json(`samples.json`).then((data) => {
  // Create Dropdown
  var dropdown = d3.select("#selDataset");

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
    var sampleData = d3.select("#sample-metadata");

    // Clear HTML
    sampleData.html("");

    // For Each
    Object.entries(meta).forEach(function ([key, value]) {
      // Append Value Into Paragraph Tag
      sampleData.append("p").text(`${key}:${value}`);
    });

  //   // Create X Values
  //   var xBar = samp.sample_values.slice(0, 10).reverse();

  //   // Create Y Values
  //   var yBar = samp.otu_ids
  //     .slice(0, 10)
  //     .reverse()
  //     .map((d) => "OTU " + d);

  //   // Create Text Values
  //   var textBar = samp.otu_labels.slice(0, 10).reverse();

  //   // Create Bar Chart Data
  //   var barData = {
  //     x: xBar,
  //     y: yBar,
  //     text: textBar,
  //     marker: {
  //       color: "rgba(78,42,132,1)",
  //     },
  //     type: "bar",
  //     orientation: "h",
  //   };
  //   // Create Bar Chart Layout
  //   var barLayout = {
  //     yaxis: {
  //       autorange: true,
  //       type: "category",
  //     },
  //     margin: {
  //       l: 100,
  //       r: 100,
  //       t: 0,
  //       b: 50,
  //     },
  //   };

  //   // Plot Bar Chart
  //   Plotly.newPlot("bar", [barData], barLayout, (responsive = true));

  //   // Create Bubble Chart Data
  //   var bubbleData = [
  //     {
  //       x: samp.otu_ids,
  //       y: samp.sample_values,
  //       mode: "markers",
  //       marker: {
  //         size: samp.sample_values,
  //         colorscale: "Earth",
  //         color: samp.otu_ids,
  //       },
  //       text: samp.otu_labels,
  //     },
  //   ];
  //   // Create Bubble Chart Layout
  //   var bubbleLayout = {
  //     xaxis: { title: "OTU ID" },
  //   };
  //   // Plot Bubble Chart
  //   Plotly.newPlot("bubble", bubbleData, bubbleLayout, (responsive = true));

  //   // Create Gauge Chart Data
  //   var gaugeData = [
  //     {
  //       value: parseFloat(meta.wfreq),
  //       title: "<b>Belly Button Washing Frequency</b> <br> Scrubs per Week",
  //       rotation: 90,
  //       type: "indicator",
  //       mode: "gauge+number",
  //       gauge: {
  //         axis: { range: [null, 9] },
  //         bar: { color: "black" },
  //         steps: [
  //           { range: [0, 1], color: "rgba(228,224,238,1)" },
  //           { range: [1, 2], color: "rgba(204,196,223,1)" },
  //           { range: [2, 3], color: "rgba(182,172,209,1)" },
  //           { range: [3, 4], color: "rgba(164,149,195,1)" },
  //           { range: [4, 5], color: "rgba(147,128,182,1)" },
  //           { range: [5, 6], color: "rgba(131,110,170,1)" },
  //           { range: [6, 7], color: "rgba(118,93,160,1)" },
  //           { range: [7, 8], color: "rgba(104,76,150,1)" },
  //           { range: [8, 9], color: "rgba(91,59,140,1)" },
  //         ],
  //       },
  //     },
  //   ];

  //   // Create Gauge Chart Layout
  //   var gaugeLayout = { width: 500, height: 400 };

  //   // Plot Gauge Chart
  //   Plotly.newPlot("gauge", gaugeData, gaugeLayout, (responsive = true));
  // }

  // //Function To Set Starting Page
  // function init() {
  //   // Get First Metadata
  //   var firstMetadata = data.metadata[0];

  //   // Get First Sample
  //   var firstSample = data.samples[0];

  //   // Set Starting Page
  //   updatePage(firstMetadata, firstSample);

  //   // Update Page on New Input
  //   d3.selectAll("#selDataset").on("change", function () {
  //     // Update Metadata
  //     var meta = data.metadata.find((d) => d.id == this.value);

  //     // Update Sample
  //     var samp = data.samples.find((d) => d.id == this.value);

  //     // Deploy Function
  //     updatePage(meta, samp);
  //   });
  // }
  // Deploy Functon
  init();
});
