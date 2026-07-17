import { Code2, Server, Database, Wrench } from "lucide-react";

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "systems", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const STACK_LAYERS = [
  {
    key: "frontend",
    label: "FRONTEND",
    icon: Code2,
    items: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive",
    ],
  },
  {
    key: "backend",
    label: "BACKEND",
    icon: Server,
    items: [
      "Laravel",
      "PHP",
      "REST APIs",
      "Authentication",
    ],
  },
  {
    key: "database",
    label: "DATABASE",
    icon: Database,
    items: [
      "MySQL",
      "Database Design",
      "Eloquent ORM",
      "SQL",
    ],
  },
  {
    key: "tools",
    label: "TOOLS",
    icon: Wrench,
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "cPanel",
      "Hostinger",
    ],
  },
];

export const SYSTEMS = [
  {
    id: "sys-01",
    status: "2025 / 2026",
    name: "CRM Management System",
    desc: "Developed an enterprise CRM with user management, account management, financial transactions, dashboards, reporting, and role-based access control.",
    tags: ["Laravel", "React.js", "PHP", "MySQL"],
  },
  {
    id: "sys-02",
    status: "2025",
    name: "E-Wallet System",
    desc: "Built a secure digital wallet featuring wallet management, deposits, withdrawals, transaction history, and role-based authentication.",
    tags: ["Laravel", "Bootstrap", "PHP", "MySQL"],
  },
  {
    id: "sys-03",
    status: "2025",
    name: "Home Service Management System",
    desc: "Developed a home service booking platform with customer registration, worker and admin dashboards, booking management, PDF invoice generation, and review features.",
    tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "sys-04",
    status: "2025",
    name: "User Management System",
    desc: "Developed a user management system with authentication, role-based access, profile management, and CRUD operations using the Laravel framework.",
    tags: ["Laravel", "PHP", "MySQL", "Bootstrap", "HTML", "CSS"],
  },
  {
    id: "sys-05",
    status: "2025",
    name: "Invoice Management System",
    desc: "Designed and developed a responsive invoice management interface with invoice creation, item management, calculations, and JSON-based data handling.",
    tags: ["HTML", "CSS", "JavaScript", "JSON"],
  },
  {
    id: "sys-06",
    status: "2024",
    name: "E-Mart Grocery Store Website",
    desc: "Collaborated on a responsive e-commerce website with product listings, shopping cart, category filtering, and order summary functionality.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];