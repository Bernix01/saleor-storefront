import * as React from "react";

import { NavLink } from "..";
import { TypedSecondaryMenuQuery } from "./queries";

import "./scss/index.scss";
import { SecondaryMenu_shop_navigation_secondary_items } from "./types/SecondaryMenu";

class Nav extends React.PureComponent {
  staticPages: SecondaryMenu_shop_navigation_secondary_items[] = [
    // {
    //   __typename: "MenuItem",
    //   category: null,
    //   children: [],
    //   collection: null,
    //   id: "1qwer",
    //   name: "ACERCA DE",
    //   page: null,
    //   url: aboutUrl,
    // },
    // {
    //   __typename: "MenuItem",
    //   category: null,
    //   children: [],
    //   collection: null,
    //   id: "2qwer",
    //   name: "CONTACTO",
    //   page: null,
    //   url: contactUrl,
    // },
  ];
  render() {
    return (
      <footer className="footer-nav">
        <div className="container">
          <TypedSecondaryMenuQuery>
            {({ data }) => {
              return data.shop.navigation.secondary.items.map(item => (
                <div className="footer-nav__section" key={item.id}>
                  <h4 className="footer-nav__section-header">
                    <NavLink item={item} />
                  </h4>
                  <div className="footer-nav__section-content">
                    {item.children.map(subItem => (
                      <p key={subItem.id}><NavLink item={subItem} /></p>
                    ))}
                  </div>
                </div>
              ));
            }}
          </TypedSecondaryMenuQuery>
          {
            this.staticPages.map(item => (
              <div className="footer-nav__section" key={item.id}>
                <h4 className="footer-nav__section-header">
                  <NavLink item={item} />
                </h4>
                <div className="footer-nav__section-content">
                  {item.children.map(subItem => (
                    <p key={subItem.id}><NavLink item={subItem} /></p>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      </footer>
    );
  }
}

export default Nav;
