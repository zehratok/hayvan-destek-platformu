import * as Icons from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    title: "Ana Sayfa",
    path: "/",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaHome />,
  },
  {
    id: 2,
    title: "Barınak İlanları",
    path: "/barinaklar",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaNewspaper />,
  },
  {
    id: 3,
    title: "Veterinere Danış",
    path: "/veterinere-danis",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaUserNurse />,
  },
  {
    id: 4,
    title: "Sosyal Pati",
    path: "/sosyal-pati",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaPaw />,
  }
];