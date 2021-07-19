import react, { Component } from "react";
import './index.css';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge"
import image from './curtain_home.jpg';
import secondimage from './curtain.jpg';
import thirdimage from './curtain_two.jpg';
import fourthimage from './curtain_three.jpg'
import fifthimage from './curtain_four.jpg';
export default class Counter extends Component {
    state = {
        toggle: false
    }
    Toggle = () => {
        this.setState({ toggle: !this.state.toggle })
    }
    render() {
        return (
            <>
                <div class="shop-toolbar">
                    <div class="product-page-navbar">
                        <a href="#">LOGO</a>
                        <span style={{ paddingRight: '200px' }}></span>
                        <span style={{ paddingRight: '300px' }}></span>
                        <input
                            class="Searchbar"
                            type="text"
                            id="header-search"
                            placeholder="Search..."
                            name="s"
                        />
                        <Badge class="cart" >
                            <ShoppingCartIcon />
                        </Badge>
                        <a><span style={{ paddingRight: '100px' }}></span> My Account</a>
                        <a><span style={{ paddingRight: '20px' }}></span> Cart</a>
                        <a> <span style={{ paddingRight: '20px' }}></span> WishList</a>
                        <a> <span style={{ paddingRight: '20px' }}></span> Checkout </a>
                        <span style={{ paddingRight: '70px' }}></span>
                        <a class="signin" href="/signin"> Sign in</a>
                    </div>
                </div>
                <div class="shop-banner-area">
                    <div class="banner-item img hover_effect">

                        <img class="img-full" src={image} alt="Shop Banner" />

                    </div>
                </div >
                <div class="shop-toolbar">
                    <div class="product-page_content">
                        <span style={{ paddingRight: '700px' }}></span>
                        <p>Showing 1-4 of 10 results</p>
                        <span style={{ paddingRight: '500px' }}></span>
                        <label class="select-label">Short By:</label>
                        <select class="nice-select">
                            <option value="1">Default Sorting</option>
                            <option value="2">Name, A to Z</option>
                            <option value="3">Name, Z to A</option>
                            <option value="4">Price low to high</option>
                            <option value="5">Price high to low</option>
                            <option value="6">Rating (Highest)</option>
                            <option value="7">Rating (Lowest)</option>
                        </select>
                    </div>
                </div>
                <div data-section-type="collection-template">
                    <div class="product-collection products-grid row">
                        <div class="grid-item displayboxshow col6 col-md-4 col-lg-3">
                            <div class="inner-product-itemfabric product-item">
                                <div class="inner-top">
                                    <div class="product-top">
                                        <div class="product-image image-swap">
                                            <a class="product-grid-image">
                                                <a href="https://htmldemo.hasthemes.com/umino/umino/single-product.html">
                                                    <img class="images-one lazyautosizes lazyloaded" alt="blue print" src={secondimage} width="200" height="200" style={{ paddingLeft: '100px', paddingRight: '100px' }} />
                                                </a>
                                                <span class="image-two">
                                                    <a href="https://htmldemo.hasthemes.com/umino/umino/single-product.html">
                                                        <img class="images-one lazyautosizes lazyloaded" alt="blue print" src={thirdimage} width="200" height="200" style={{ paddingLeft: '100px', paddingRight: '100px' }} />
                                                    </a>
                                                </span>
                                                <span class="image-two">
                                                    <a href="https://htmldemo.hasthemes.com/umino/umino/single-product.html">
                                                        <img class="images-one lazyautosizes lazyloaded" alt="blue print" src={fourthimage} width="200" height="200" style={{ paddingLeft: '100px', paddingRight: '100px' }} />
                                                    </a>
                                                </span>
                                                <span class="image-two">
                                                    <a href="https://htmldemo.hasthemes.com/umino/umino/single-product.html">
                                                        <img class="images-one lazyautosizes lazyloaded" alt="blue print" src={fifthimage} width="200" height="200" style={{ paddingLeft: '100px', paddingRight: '100px' }} />
                                                    </a>
                                                </span>
                                                <h6 class="product-name">
                                                    Home Sizzler
                                                    <span style={{ paddingLeft: '300px' }}>
                                                        HuzzCode
                                                    </span>
                                                    <span style={{ paddingLeft: '300px' }}>
                                                        Home Sizzler
                                                    </span>
                                                    <span style={{ paddingLeft: '300px' }}>
                                                        Home Sizzler
                                                    </span>
                                                </h6>
                                                <a class="product-name">
                                                    <strong class="new-price">
                                                        $75.00
                                                    </strong>
                                                    <span class="old-price" >
                                                        $85.00
                                                    </span>
                                                    <strong class="new-price" style={{ paddingLeft: '300px' }}>
                                                        $75.00
                                                    </strong>
                                                    <span class="old-price">
                                                        $85.00
                                                    </span>
                                                    <strong class="new-price" style={{ paddingLeft: '300px' }}>
                                                        $75.00
                                                    </strong>
                                                    <span class="old-price">
                                                        $85.00
                                                    </span>
                                                    <strong class="new-price" style={{ paddingLeft: '300px' }}>
                                                        $75.00
                                                    </strong>
                                                    <span class="old-price">
                                                        $85.00
                                                    </span>
                                                </a>

                                            </a>
                                        </div>

                                        <div class="product-image image-swap">
                                            <a class="product-grid-image">
                                                <a href="https://htmldemo.hasthemes.com/umino/umino/single-product.html">
                                                    <img class="images-one lazyautosizes lazyloaded" alt="blue print" src={secondimage} width="200" height="200" style={{ paddingLeft: '100px', paddingRight: '100px', paddingTop: '30px' }} />
                                                </a>
                                                <span class="image-two">
                                                    <a href="https://htmldemo.hasthemes.com/umino/umino/single-product.html">
                                                        <img class="images-one lazyautosizes lazyloaded" alt="blue print" src={thirdimage} width="200" height="200" style={{ paddingLeft: '100px', paddingRight: '100px' }} />
                                                    </a>
                                                </span>
                                                <span class="image-two">
                                                    <a href="https://htmldemo.hasthemes.com/umino/umino/single-product.html">
                                                        <img class="images-one lazyautosizes lazyloaded" alt="blue print" src={fourthimage} width="200" height="200" style={{ paddingLeft: '100px', paddingRight: '100px' }} />
                                                    </a>
                                                </span>
                                                <span class="image-two">
                                                    <a href="https://htmldemo.hasthemes.com/umino/umino/single-product.html">
                                                        <img class="images-one lazyautosizes lazyloaded" alt="blue print" src={fifthimage} width="200" height="200" style={{ paddingLeft: '100px', paddingRight: '100px' }} />
                                                    </a>
                                                </span>
                                                <h6 class="product-name">
                                                    Home Sizzler
                                                    <span style={{ paddingLeft: '300px' }}>
                                                        Home Sizzler
                                                    </span>
                                                    <span style={{ paddingLeft: '300px' }}>
                                                        Home Sizzler
                                                    </span>
                                                    <span style={{ paddingLeft: '300px' }}>
                                                        Home Sizzler
                                                    </span>
                                                </h6>
                                                <a class="product-name">
                                                    <strong class="new-price">
                                                        $75.00
                                                    </strong>
                                                    <span class="old-price" >
                                                        $85.00
                                                    </span>
                                                    <strong class="new-price" style={{ paddingLeft: '300px' }}>
                                                        $75.00
                                                    </strong>
                                                    <span class="old-price">
                                                        $85.00
                                                    </span>
                                                    <strong class="new-price" style={{ paddingLeft: '300px' }}>
                                                        $75.00
                                                    </strong>
                                                    <span class="old-price">
                                                        $85.00
                                                    </span>
                                                    <strong class="new-price" style={{ paddingLeft: '300px' }}>
                                                        $75.00
                                                    </strong>
                                                    <span class="old-price">
                                                        $85.00
                                                    </span>
                                                </a>

                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-middle_area">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-4 order-1 order-lg-1">
                                <div class="footer-widgets footer-contact_info">
                                    <p>
                                        <h4><span style={{ paddingLeft: '100px' }}>Contact Us</span></h4>
                                    </p>
                                    <p>
                                        <span style={{ paddingLeft: '100px' }}> Address </span>
                                    </p>
                                    <p>
                                        <span style={{ paddingLeft: '100px' }}>Email:</span>
                                        <a href="mailto://info@yourdomain.com">info@yourdomain.com
                                        </a>
                                    </p>
                                    <p>
                                        <span style={{ paddingLeft: '100px' }}>Phone:</span>
                                        <a href="tel://+123456789">+123456789</a>
                                    </p>
                                    <p>
                                        <span style={{ paddingLeft: '100px' }}>Fax:</span>
                                        <a href="javascript:void(0)">+123456789</a>
                                    </p>
                                    <p>
                                        <span style={{ paddingLeft: '100px' }}>Mon-Sat 9:00pm - 5:00pm. Sun: Closed</span>
                                    </p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 order-1 order-lg-1">
                                <div class="footer-widgets footer-contact_info">
                                    <p>
                                        <h4><span style={{ paddingLeft: '100px' }}>Information</span></h4>
                                    </p>
                                    <p>
                                        <span style={{ paddingLeft: '100px' }}> Contact </span>
                                    </p>
                                    <p>
                                        <span style={{ paddingLeft: '100px' }}>About Us</span>
                                    </p>
                                    <p>
                                        <span style={{ paddingLeft: '100px' }}>Privacy Policy</span>
                                    </p>
                                    <p>
                                        <span style={{ paddingLeft: '100px' }}>Customer Service</span>
                                    </p>
                                    <p>
                                        <span style={{ paddingLeft: '100px' }}>FAQ</span>
                                    </p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 order-1 order-lg-1">
                                <div class="footer-widgets footer-contact_info">
                                    <p>
                                        <h4><span style={{ paddingLeft: '100px' }}>My Account</span></h4>
                                    </p>
                                    <p>
                                        <span style={{ paddingLeft: '100px' }}> Cart </span>
                                    </p>
                                    <p>
                                        <span style={{ paddingLeft: '100px' }}>Wish list</span>
                                    </p>
                                    <p>
                                        <span style={{ paddingLeft: '100px' }}>Checkout</span>
                                    </p>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-4 order-1 order-lg-1">
                                <div class="footer-widgets footer-contact_info">
                                    <p>
                                        <h4><span style={{ paddingLeft: '400px' }}>LOGO</span></h4>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}