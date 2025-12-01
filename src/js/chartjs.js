import Chart from "chart.js/auto";

let graphique = new Chart(document.querySelector(".charte"), {
  type: "doughnut",
  data: {
    labels: ["Rap", "Synchronisation dance", "Présence camera", "Endurance"],
    datasets: [
      {
        data: [15, 20, 35, 30],
        backgroundColor: [
          "#3E84BF",
          "#86238D",
          "rgba(85, 85, 239, 1)",
          "rgba(222, 222, 222, 1)",
        ],
        hoverOffset: 20,
        borderWidth: 0,
        borderRadius: 1,
        spacing: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      title: {
        display: true,
        text: "Les faiblesses de Ningning",
        padding: { top: 8, bottom: 12 },
      },
    },
  },
});
