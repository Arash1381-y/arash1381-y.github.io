import CLang from "../assests/images/C-lang.png";
import simd from "../assests/images/simd.png";
import rope from "../assests/images/rope.png";
import gps from "../assests/images/gps.png";
import fsm from "../assests/images/fsm.png";
import realTime from "../assests/images/real-time.png";
import network from "../assests/images/network.png";

// Define your projects data
export const projects = [
  {
    title: "FSM Ninja: Finite State Machine Designer",
    description:
      "FSM Ninja is a user-friendly tool for creating and visualizing finite state machines. It enables you to add, connect, and modify states with an intuitive interface. Export your FSM in JSON, PNG, or LaTeX, and manage properties like state radius and font size. Perfect for students and developers.",
    image: fsm, // Replace with your actual project image URL
    tags: ["Web Development", "JavaScript", "UI/UX"],
    links: {
      github: "https://github.com/Arash1381-y/fsmNinja",
      webpage: "https://arash1381-y.github.io/fsmNinja/",
    },
  },

  {
    title: "Rope Movement Simulation",
    description:
      "This project simulates dynamic rope movement under physical conditions like tension, gravity, and collision, offering realistic rope behavior. It was implemented in Verilog and tested via Verilator on an FPGA board connected to a VGA.",
    image: rope, // Replace with an actual image or screenshot if available
    tags: ["Physics Simulation", "Verilog", "FPGA"],
    links: {
      github: "https://github.com/naser-kazemi/Rope-Movement-Simulation",
    },
  },
  {
    title: "SPMV-C: Sparse Matrix-Vector Multiplication in C",
    description:
      "High-performance implementation of sparse matrix-vector multiplication using various methods including single-threaded, multi-threaded, CSR format, and AVX vectorization. This project benchmarks different approaches for optimizing SpMV operations with OpenMP and AVX512 support.",
    image: simd, // Replace with an actual image or screenshot if available
    tags: ["Sparse Matrix Multiplication", "C", "AVX2", "OpenMP"],
    links: {
      github: "https://github.com/Arash1381-y/SPMV-C",
    },
  },
  {
    title: "Bayesian Networks and D-Separation",
    description:
      "A project that implements Bayesian networks for probabilistic reasoning and demonstrates D-Separation to infer conditional independence between variables. Useful for machine learning, AI, and decision analysis.",
    image:
      "https://github.com/Arash1381-y/d-separation/assets/79264867/2c7ea45d-4037-469e-92f0-00411ebb88f7", // Replace with an actual screenshot or other image as needed
    tags: ["Bayesian Networks", "D-Separation", "Probabilistic Modeling", "AI", "React", "JavaScript"],
    links: {
      github: "https://github.com/Arash1381-y/d-separation",
      webpage: "https://arash1381-y.github.io/d-separation",
    },
  },
  {
    title: "IoT-based Vehicle Tracking System",
    description:
      "An embedded system that tracks vehicle locations using a GPS module and transmits data to a cloud server via Raspberry Pi. The system features real-time location updates, a back-end service for data querying, and a front-end for displaying GPS data on a map.",
    image: gps, // Replace with an actual image or screenshot if available
    tags: [
      "Embedded Systems",
      "IoT",
      "GPS",
      "Raspberry Pi",
      "Vehicle Tracking",
      "Python",
      "JavaScript",
    ],
    links: {
      github: "https://github.com/Arash1381-y/embedded-GPS",
    },
  },

  {
    title: "C Minus Compiler",
    description:
      "A simple C-like compiler written in python. The compiler generates micro operations as an output.",
    image: CLang, // Replace with an actual image or screenshot if available
    tags: ["Compiler", "Python"],
    links: {
      github: "https://github.com/sina-imani/C-Minus-Compiler",
    },
  },

  {
    title: "Real-Time Systems Project: Spatial Multitasking",
    description:
      "This project explores scheduling algorithms for minimizing makespan in resource-constrained environments. It implements cooperative, best, and profile scheduling algorithms to optimize task distribution across multiple cores and analyzes performance in terms of makespan, energy consumption, and scheduling time.",
    image: realTime, // Replace with an actual image or screenshot if available
    tags: ["Real-Time Systems", "Scheduling", "Multitasking", "Python"],
    links: {
      github: "https://github.com/Arash1381-y/Spatial-Multitasking",
    },
  },

  {
    title: "Computer Network Archive",
    description:
      "This project implements core networking concepts, including UDP hole punching for NAT traversal and a custom DNS resolver. It covers real-time communication protocols and techniques for efficient data transmission in distributed systems, showcasing both theoretical and practical aspects of networking.",
    image: network, // Replace with an actual image or screenshot if available
    tags: ["Computer Networks", "Network Programming", "C", "Python"],
    links: {
      github: "https://github.com/Arash1381-y/computer-network-1402-1",
    },
  },

  // You can add more projects here
  // {
  //   title: 'Project 2',
  //   description: 'Description for Project 2.',
  //   image: 'https://via.placeholder.com/300x200',
  //   tags: ['Tag1', 'Tag2'],
  //   links: {
  //     github: 'https://github.com/user/project2',
  //     webpage: 'https://project2.com',
  //   },
  // },
];

// Define color mapping for tags
export const tagColors = {
  "Web Development": "#4caf50",
  "JavaScript": "#A8A315",
  "UI/UX": "#f44336",
  "Physics Simulation": "#9c27b0",
  "Verilog": "#00bcd4",
  "FPGA": "#3f51b5",
  "Sparse Matrix Multiplication": "#795548",
  "C": "#2196f3",
  "AVX2": "#ff9800",
  "OpenMP": "#8bc34a",
  "Compiler": "#673ab7",
  "Python": "#ffc107",
  "Embedded Systems": "#00acc1",
  "IoT": "#e91e63",
  "GPS": "#ff5722",
  "Raspberry Pi": "#009688",
  "Vehicle Tracking": "#607d8b",
  "Bayesian Networks": "#9e9e9e",
  "D-Separation": "#03a9f4",
  "Probabilistic Modeling": "#cddc39",
  "AI": "#f06292",
  "Real-Time Systems": "#8e24aa",
  "Scheduling": "#ff1744",
  "Multitasking": "#f57c00",
  "Network Programming": "#1976d2",
  "Computer Networks": "red",
  "React": "#505fd5"
};