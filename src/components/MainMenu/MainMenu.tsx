import {
  mediumScreen,
  smallScreen
} from "../../globalStyles/scss/variables.scss";
import "./scss/index.scss";

import { useSignOut, useUserDetails } from "@sdk/react";

import { Trans } from "@lingui/react";
import * as React from "react";
import Media from "react-media";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";

import {
  MenuDropdown,
  Offline,
  Online,
  OverlayContext,
  OverlayTheme,
  OverlayType
} from "..";
import { maybe } from "../../core/utils";
import {
  accountUrl,
  addressBookUrl,
  baseUrl,
  orderHistoryUrl,
  paymentOptionsUrl,
} from "../../routes";
import { CartContext } from "../CartProvider/context";
import NavDropdown from "./NavDropdown";
import { TypedMainMenuQuery } from "./queries";

import cartImg from "../../images/cart.svg";
import hamburgerHoverImg from "../../images/hamburger-hover.svg";
import hamburgerImg from "../../images/hamburger.svg";
import logoImg from "../../images/logo.svg";
import searchImg from "../../images/search.svg";
import userImg from "../../images/user.svg";
import { MainMenu_shop_navigation_main_items } from "./types/MainMenu";

const MainMenu: React.FC = () => {
  const { data: user } = useUserDetails();
  const [signOut] = useSignOut();
  const staticPages: MainMenu_shop_navigation_main_items[] = [
    // {
    //   __typename: "MenuItem",
    //   category: null,
    //   children: [],
    //   collection: null,
    //   id: "1",
    //   name: "MUEBLES",
    //   page: null,
    //   parent: null,
    //   url: "/muebles",
    // },
    // {
    //   __typename: "MenuItem",
    //   category: null,
    //   children: [],
    //   collection: null,
    //   id: "2",
    //   name: "COLECCIONES",
    //   page: null,
    //   parent: null,
    //   url: collectionUrl,
    // },
    // {
    //   __typename: "MenuItem",
    //   category: null,
    //   children: [],
    //   collection: null,
    //   id: "3",
    //   name: "TIENDA",
    //   page: null,
    //   parent: null,
    //   url: shopUrl,
    // },

  ];
  return (
    <OverlayContext.Consumer>
      {overlayContext => (
        <nav className="main-menu" id="header">
          <div className="main-menu__left">
            <Link to={baseUrl}>
              <ReactSVG path={logoImg} />
            </Link>

          </div>

          <div className="main-menu__center">

          </div>

          <div className="main-menu__right">
            <ul>
              <TypedMainMenuQuery renderOnError displayLoader={false}>
                {({ data }) => {
                  const items = maybe(() => data.shop.navigation.main.items, []);

                  return (
                    <>
                      <Media
                        query={{ maxWidth: mediumScreen }}
                        render={() => (
                          <li
                            className="main-menu__hamburger"
                            onClick={() =>
                              overlayContext.show(
                                OverlayType.sideNav,
                                OverlayTheme.left,
                                { data: items }
                              )
                            }
                          >
                            <ReactSVG
                              path={hamburgerImg}
                              className={"main-menu__hamburger--icon"}
                            />
                            <ReactSVG
                              path={hamburgerHoverImg}
                              className={"main-menu__hamburger--hover"}
                            />
                          </li>
                        )}
                      />
                      <Media
                        query={{ minWidth: mediumScreen }}
                        render={() =>
                          items.map(item => (
                            <li className="main-menu__item" key={item.id}>
                              <NavDropdown overlay={overlayContext} {...item} />
                            </li>
                          ))
                        }
                      />
                    </>
                  );
                }}
              </TypedMainMenuQuery>
              <Media
                query={{ minWidth: mediumScreen }}
                render={() =>
                  staticPages.map(item => (
                    <li className="main-menu__item" key={item.id}>
                      <NavDropdown overlay={overlayContext} {...item} />
                    </li>
                  ))
                }
              />
              <Online>
                <Media
                  query={{ minWidth: smallScreen }}
                  render={() => (
                    <>
                      {user ? (
                        <MenuDropdown
                          head={
                            <li className="main-menu__icon main-menu__user--active">
                              <ReactSVG path={userImg} />
                            </li>
                          }
                          content={
                            <ul className="main-menu__dropdown">
                              <li>
                                <Link to={accountUrl}>
                                  <Trans id="My Account" />
                                </Link>
                              </li>
                              <li>
                                <Link to={orderHistoryUrl}>
                                  <Trans id="Order history" />
                                </Link>
                              </li>
                              <li>
                                <Link to={addressBookUrl}>
                                  <Trans id="Address book" />
                                </Link>
                              </li>
                              <li>
                                <Link to={paymentOptionsUrl}>
                                  Payment options
                                </Link>
                              </li>
                              <li onClick={signOut} data-testid="logout-link">
                                Log Out
                              </li>
                            </ul>
                          }
                        />
                      ) : (
                          <li
                            data-testid="login-btn"
                            className="main-menu__icon"
                            onClick={() =>
                              overlayContext.show(
                                OverlayType.login,
                                OverlayTheme.right
                              )
                            }
                          >
                            <ReactSVG path={userImg} />
                          </li>
                        )}
                    </>
                  )}
                />
                <CartContext.Consumer>
                  {cart => (
                    <li
                      className="main-menu__icon main-menu__cart"
                      onClick={() => {
                        overlayContext.show(
                          OverlayType.cart,
                          OverlayTheme.right
                        );
                      }}
                    >
                      <ReactSVG path={cartImg} />
                      {cart.getQuantity() > 0 ? (
                        <span className="main-menu__cart__quantity">
                          {cart.getQuantity()}
                        </span>
                      ) : null}
                    </li>
                  )}
                </CartContext.Consumer>
              </Online>
              <Offline>
                <li className="main-menu__offline">
                  <Media
                    query={{ minWidth: mediumScreen }}
                    render={() => <span>Offline</span>}
                  />
                </li>
              </Offline>
              <li
                className="main-menu__search"
                onClick={() =>
                  overlayContext.show(OverlayType.search, OverlayTheme.right)
                }
              >
                <Media
                  query={{ minWidth: mediumScreen }}
                  render={() => <span>Search</span>}
                />
                <ReactSVG path={searchImg} />
              </li>
            </ul>
          </div>
        </nav>
      )}
    </OverlayContext.Consumer>
  );
};

export default MainMenu;
