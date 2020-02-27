function footerNavigation() {
    return [{
      name: "Latest Posts",
      link: "/",
      external: false
    },
    {
      name: "Gridsome",
      link: "https://www.gridsome.org",
      external: true
    }
    ];
  }
  exports.footerNavigation = footerNavigation;

  
  function headerNavigation() {
    return [
      {
        name: "Home",
        link: "/",
        external: false
      },
      {
        name: "Dev",
        link: "/category/dev",
        external: false
      }
    ];
  }
  exports.headerNavigation = headerNavigation;
  