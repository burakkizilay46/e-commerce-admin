const sidebarDatas = [
  {
    key: "home",
    path: "/home",
    title: "Ana Sayfa",
  },
  {
    title: "Ürünler",
    children: [
      {
        key: "products",

        title: "Ürünler",
        children: [
          {
            key: "products",
            path: "/products",
            title: "Ürünler",
          },
          {
            key: "comments",
            path: "/comments",
            title: "Yorumlar",
          },
          {
            key: "supplier",
            path: "/supplier",
            title: "Tedarikçi",
          },
          {
            key: "tags",
            path: "/tags",
            title: "Etiketler",
          },
        ],
      },
      {
        key: "subproducts",
        title: "Alt Ürünler",
        children: [
          {
            key: "subproducts",
            path: "/subproducts",
            title: "Alt Ürünler",
          },
          {
            key: "subproductgroups",
            path: "/subproductgroups",
            title: "Alt Ürün Grupları",
          },
        ],
      },
    ],
  },
  {
    key: "orders",
    path: "/orders",
    title: "Siparişler",
  },
  {
    key: "campaigns",
    path: "/campaigns",
    title: "Kampanyalar",
  },
  {
    key: "members",
    path: "/members",
    title: "Üyeler",
  },
  {
    key: "variants",
    path: "/variants",
    title: "Varyantlar",
  },
  {
    key: "categories",
    path: "/categories",
    title: "Kategoriler",
  },
  {
    key: "brands",
    path: "/brands",
    title: "Markalar",
  },
  {
    key: "settings",
    path: "/settings",
    title: "Ayarlar",
  },
];

export { sidebarDatas };
