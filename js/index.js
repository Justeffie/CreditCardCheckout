var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var ProductInformation = function (_React$Component) {_inherits(ProductInformation, _React$Component);function ProductInformation() {_classCallCheck(this, ProductInformation);return _possibleConstructorReturn(this, (ProductInformation.__proto__ || Object.getPrototypeOf(ProductInformation)).apply(this, arguments));}_createClass(ProductInformation, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { className: "producto" },
          React.createElement("img", { src: this.props.src, alt: this.props.name }),
          React.createElement("h4", { className: "name" }, this.props.name),
          React.createElement("p", { className: "price" }, this.props.price)));


    } }]);return ProductInformation;}(React.Component);var


Form = function (_React$Component2) {_inherits(Form, _React$Component2);function Form() {_classCallCheck(this, Form);return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));}_createClass(Form, [{ key: "render", value: function render()
    {
      var meses = ["Mes", "01", "02", "03", "04", "05", "06", "07", "08", "09", 10, 11, 12];
      var anios = ["Año", 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
      return (
        React.createElement("form", null,
          React.createElement("label", null, "N\xFAmero de tarjeta:",
            React.createElement("br", null),
            React.createElement("input", {
              type: "number",
              placeholder: "1111 2222 3333 4444",
              name: "tarjeta" })),

          React.createElement("br", null),
          React.createElement("label", null, " Fecha de vencimiento:",
            React.createElement("br", null),
            React.createElement("select", null,
              meses.map(function (mes, index) {
                return React.createElement("option", { value: mes, key: index }, mes);
              })),

            React.createElement("select", null,
              anios.map(function (a, index) {
                return React.createElement("option", { value: a, key: index }, a);
              }))),


          React.createElement("br", null),
          React.createElement("label", null, "C\xF3digo de seguridad:",
            React.createElement("br", null),
            React.createElement("input", {
              type: "password",
              name: "password",
              maxLength: "4" })),

          React.createElement("br", null),
          React.createElement("button", { className: "comprar", onClick: this.props.onClick }, "Comprar")));


    } }]);return Form;}(React.Component);var


CreditCardInformation = function (_React$Component3) {_inherits(CreditCardInformation, _React$Component3);function CreditCardInformation() {_classCallCheck(this, CreditCardInformation);return _possibleConstructorReturn(this, (CreditCardInformation.__proto__ || Object.getPrototypeOf(CreditCardInformation)).apply(this, arguments));}_createClass(CreditCardInformation, [{ key: "render", value: function render()
    {
      return (
        React.createElement("div", { className: "creditcard" },
          React.createElement(Form, { onClick: this.props.onClick })));


    } }]);return CreditCardInformation;}(React.Component);var


App = function (_React$Component4) {_inherits(App, _React$Component4);
  function App(props) {_classCallCheck(this, App);var _this4 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this,
    props));
    _this4.handleClick = _this4.handleClick.bind(_this4);return _this4;
  }_createClass(App, [{ key: "handleClick", value: function handleClick(
    e) {
      e.preventDefault();
    } }, { key: "render", value: function render()
    {
      return (
        React.createElement("div", { className: "container" },
          React.createElement(ProductInformation, {
            name: "Addidas Running Gear",
            src: "https://brand.campaign.adidas.com/Images/CLP%20IS%20Energy%20Foreground%20Desktop_tcm66-143411.png?locale=en_US&device=mobile&version=6",
            price: "$3456" }),
          React.createElement(CreditCardInformation, { onClick: this.handleClick })));


    } }]);return App;}(React.Component);


ReactDOM.render(React.createElement(App, null), document.getElementById('root'));