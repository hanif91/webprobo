import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Profile",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Tentang Kami",
        path: "/tentang",
        newTab: false,
      },
      {
        id: 22,
        title: "Struktur Organisasi",
        path: "/",
        newTab: false,
      }
    ]
  },
  {
    id: 33,
    title: "Pelayanan",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Pasang Baru",
        path: "/tentang",
        newTab: false,
      },
      {
        id: 32,
        title: "Pengaduan Pelanggan",
        path: "/",
        newTab: false,
      },
      {
        id: 33,
        title: "Pengaduan Non Pelanggan",
        path: "/",
        newTab: false,
      },
      {
        id: 34,
        title: "Cek Tagihan",
        path: "/",
        newTab: false,
      },
      {
        id: 35,
        title: "Bacameter Mandiri",
        path: "/",
        newTab: false,
      }
    ]
  },
  {
    id: 4,
    title: "Berita",
    path: "/",
    newTab: false,
  },
  {
    id: 5,
    title: "Dokumen Publik",
    path: "/public-doc",
    newTab: false,
  },
  {
    id: 6,
    title: "Kontak Kami",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
