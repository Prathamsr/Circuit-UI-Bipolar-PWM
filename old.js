
var NodeConstraints = ej.datavisualization.Diagram.NodeConstraints;
$("#dialog").ejDialog({
  title: "Check Connections says:",
  showOnInit: false,
  actionButtons: ["close", "maximize", "minimize"],
  enableAnimation: true,
  animation: {
    //animation settings while opening the dialog
    show: {
      effect: "pop-up",
      duration: 500,
    },
    //animation settings while closing the dialog
    hide: {
      effect: "fade",
      duration: 500,
    },
  },
  enableModal: true,
  height: 200,
  cssClass: "custom",
});
$("#insdialog").ejDialog({
  title: "Instructions",
  showOnInit: false,
  actionButtons: ["close", "maximize", "minimize"],
  enableAnimation: true,

  animation: {
    //animation settings while opening the dialog
    show: {
      effect: "pop-up",
      duration: 500,
    },
    //animation settings while closing the dialog
    hide: {
      effect: "fade",
      duration: 500,
    },
  },
  enableModal: true,
  height: 350,
  width: 900,
  cssClass: "custom",
});

$(function () {
  var i = document.getElementById("instructions");
  i.onclick = showAlert;
  function showAlert(event) {
    $("#insdialog").ejDialog("open");
  }
});

$(function () {
  //create button widget
  $("#graph").ejButton({
    click: "Graph",
  });

  //create dialog widget
  $("#graphdialog").ejDialog({
    showOnInit: false,
    enableModal: true,
    height: 1000,
    width: 1500,
    actionButtons: ["close", "maximize", "minimize"],
    cssClass: "custom",

    open: function (args) {
      var chartObj1 = $("#container1").ejChart("instance");
      chartObj1.redraw();
      var chartObj2 = $("#container2").ejChart("instance");
      chartObj2.redraw();
      var chartObj3 = $("#container3").ejChart("instance");
      chartObj3.redraw();
    },
  });

  $("#container1").ejChart({
    zooming: {
      enable: true,
    },
    enableCanvasRendering: true,
    //Initializing Primary X Axis
    primaryXAxis: {
      title: {
        text: "Time",
      },
    },

    //Initializing Primary Y Axis
    primaryYAxis: {
      title: {
        text: "VP1",
      },
    },

    //Initializing Common Properties for all the series
    commonSeriesOptions: {
      type: "spline",
      enableAnimation: true,
    },

    //Initializing Series
    series: x1,
    isResponsive: true,
    legend: {
      visible: true,
    },
    title: {
      text: "Input",
    },
  });
  $("#container2").ejChart({
    zooming: {
      enable: true,
      visible: true,
    },
    enableCanvasRendering: true,
    //Initializing Primary X Axis
    primaryXAxis: {
      title: {
        text: "Time",
      },
    },

    //Initializing Primary Y Axis
    primaryYAxis: {
      title: {
        text: "VP2",
      },
    },

    //Initializing Common Properties for all the series
    commonSeriesOptions: {
      type: "line",
      enableAnimation: true,
    },

    //Initializing Series
    series: x2,
    isResponsive: true,
    legend: {
      visible: true,
    },
    title: {
      text: "Output",
    },
  });
  $("#container3").ejChart({
    zooming: {
      enable: true,
      visible: true,
    },
    enableCanvasRendering: true,
    //Initializing Primary X Axis
    primaryXAxis: {
      title: {
        text: "Time",
      },
    },

    //Initializing Primary Y Axis
    primaryYAxis: {
      title: {
        text: "VP2",
      },
    },

    //Initializing Common Properties for all the series
    commonSeriesOptions: {
      type: "line",
      enableAnimation: true,
    },

    //Initializing Series
    series: x3,
    isResponsive: true,
    legend: {
      visible: true,
    },
    title: {
      text: "Output",
    },
  });
});

function Graph() {
  $("#graphdialog").ejDialog("open");
}
