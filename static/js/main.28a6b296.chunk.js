(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__1Zmp2",BreadTop:"BurgerIngredient_BreadTop__2Fq8V",Seeds1:"BurgerIngredient_Seeds1__20ae5",Seeds2:"BurgerIngredient_Seeds2__3lvZH",Meat:"BurgerIngredient_Meat__3xlnc",Cheese:"BurgerIngredient_Cheese__3G5TL",Salad:"BurgerIngredient_Salad__1vVcF",Bacon:"BurgerIngredient_Bacon__2Pelv"}},,,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__1EcCv",Open:"SideDrawer_Open__10ceN",Close:"SideDrawer_Close__2hO5e",Logo:"SideDrawer_Logo__1b1JG"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__1BHOa",Label:"BuildControl_Label__1EDho",Less:"BuildControl_Less__1kR4D",More:"BuildControl_More__n6t4v"}},function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__2MZXm",Logo:"Toolbar_Logo__13Hgw",DesktopOnly:"Toolbar_DesktopOnly__22vEv"}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__387s2",active:"NavigationItem_active__3VwLn"}},function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__2PTIA",OrderButton:"BuildControls_OrderButton__3FTbP",enable:"BuildControls_enable__3ZcKl"}},function(e,t,n){e.exports={Button:"Button_Button__1Cf55",Success:"Button_Success__3wGkQ",Danger:"Button_Danger__1CBBk"}},,function(e,t,n){e.exports={Content:"Layout_Content__2RNYm"}},function(e,t,n){e.exports={Logo:"Logo_Logo__2eiIS"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__16ZTi"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__g4mi2"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3FDol"}},function(e,t,n){e.exports={Burger:"Burger_Burger__AmNcg"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1hhhR"}},,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n.n(a),c=n(15),i=n.n(c),o=(n(29),n(3)),l=n(4),d=n(6),u=n(5),j=n(16),b=n.n(j),h=function(e){return e.children},p=n(9),g=n.n(p),O=n.p+"static/media/burger-logo.ec69c7f6.png",_=n(17),x=n.n(_),v=function(e){return Object(r.jsx)("div",{className:x.a.Logo,style:{height:e.height},children:Object(r.jsx)("img",{src:O,alt:"MyBurger"})})},m=n(12),f=n.n(m),B=function(e){return Object(r.jsx)("li",{className:f.a.NavigationItem,children:Object(r.jsx)("a",{href:e.link,className:e.active?f.a.active:null,children:e.children})})},C=n(18),k=n.n(C),w=function(e){return Object(r.jsxs)("ul",{className:k.a.NavigationItems,children:[Object(r.jsx)(B,{link:"/",active:!0,children:"Burger Builder"}),Object(r.jsx)(B,{link:"/",children:"Checkout"})]})},N=n(19),y=n.n(N),S=function(e){return Object(r.jsxs)("div",{className:y.a.DrawerToggle,onClick:e.clicked,children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})},D=function(e){return Object(r.jsxs)("header",{className:g.a.Toolbar,children:[Object(r.jsx)(S,{clicked:e.toggle}),Object(r.jsx)("div",{className:g.a.Logo,children:Object(r.jsx)(v,{})}),Object(r.jsx)("nav",{className:g.a.DesktopOnly,children:Object(r.jsx)(w,{})})]})},T=n(7),I=n.n(T),L=n(20),P=n.n(L),H=function(e){return e.show?Object(r.jsx)("div",{className:P.a.Backdrop,onClick:e.clicked}):null},M=function(e){var t=[I.a.SideDrawer,I.a.Close];return e.open&&(t=[I.a.SideDrawer,I.a.Open]),Object(r.jsxs)(h,{children:[Object(r.jsx)(H,{show:e.open,clicked:e.closed}),Object(r.jsxs)("div",{className:t.join(" "),children:[Object(r.jsx)("div",{className:I.a.Logo,children:Object(r.jsx)(v,{})}),Object(r.jsx)("nav",{children:Object(r.jsx)(w,{})})]})]})},F=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={showSideDrawer:!1},e.sideDrawerClosedHandler=function(){e.setState({showSideDrawer:!1})},e.sideDrawerToggleHandler=function(){e.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsxs)(h,{children:[Object(r.jsx)(D,{toggle:this.sideDrawerToggleHandler}),Object(r.jsx)(M,{open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),Object(r.jsx)("main",{className:b.a.Content,children:this.props.children})]})}}]),n}(a.Component),A=n(10),E=n(23),R=n(21),Z=n.n(R),Y=n(2),G=n.n(Y),J=function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(r.jsx)("div",{className:G.a.BreadBottom});break;case"bread-top":t=Object(r.jsxs)("div",{className:G.a.BreadTop,children:[Object(r.jsx)("div",{className:G.a.Seeds1}),Object(r.jsx)("div",{className:G.a.Seeds2})]});break;case"meat":t=Object(r.jsx)("div",{className:G.a.Meat});break;case"cheese":t=Object(r.jsx)("div",{className:G.a.Cheese});break;case"bacon":t=Object(r.jsx)("div",{className:G.a.Bacon});break;case"salad":t=Object(r.jsx)("div",{className:G.a.Salad});break;default:t=null}return t},V=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(E.a)(Array(e.ingredients[t])).map((function(e,n){return Object(r.jsx)(J,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(r.jsx)("p",{children:"Please start adding ingredients"})),Object(r.jsxs)("div",{className:Z.a.Burger,children:[Object(r.jsx)(J,{type:"bread-top"}),t,Object(r.jsx)(J,{type:"bread-bottom"})]})},U=n(13),$=n.n(U),q=n(8),z=n.n(q),K=function(e){return Object(r.jsxs)("div",{className:z.a.BuildControl,children:[Object(r.jsx)("div",{className:z.a.Label,children:e.label}),Object(r.jsx)("button",{className:z.a.More,onClick:e.added,children:"More"}),Object(r.jsx)("button",{className:z.a.Less,onClick:e.removed,disabled:e.disabled,children:"Less"})]})},Q=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Chesse",type:"cheese"},{label:"Meat",type:"meat"}],W=function(e){return Object(r.jsxs)("div",{className:$.a.BuildControls,children:[Object(r.jsxs)("p",{children:["Current Price: ",Object(r.jsxs)("strong",{children:["$",e.price.toFixed(2)]})]}),Q.map((function(t){return Object(r.jsx)(K,{label:t.label,type:t.type,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]},t.label)})),Object(r.jsx)("button",{className:$.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered,children:"ORDER NOW"})]})},X=n(22),ee=n.n(X),te=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show}},{key:"render",value:function(){return Object(r.jsxs)(h,{children:[Object(r.jsx)(H,{show:this.props.show,clicked:this.props.modalClosed}),Object(r.jsx)("div",{className:ee.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"},children:this.props.children})]})}}]),n}(a.Component),ne=n(14),re=n.n(ne),ae=function(e){return Object(r.jsx)("button",{className:[re.a.Button,re.a[e.btnType]].join(" "),onClick:e.clicked,children:e.children})},se=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{style:{textTransform:"capitalize"},children:t}),": ",e.ingredients[t]]},t)}));return Object(r.jsxs)(h,{children:[Object(r.jsx)("h3",{children:"Your Order"}),Object(r.jsx)("p",{children:"A delicious burger with the folloinw ignredients:"}),Object(r.jsx)("ul",{children:t}),Object(r.jsx)("p",{children:Object(r.jsxs)("strong",{children:["Total Price: $",e.totalPrice.toFixed(2)," "]})}),Object(r.jsx)("p",{children:"Continue to Checkout?"}),Object(r.jsx)(ae,{btnType:"Danger",clicked:e.purchaseCancelled,children:"CANCEL"}),Object(r.jsx)(ae,{btnType:"Success",clicked:e.purchaseContinued,children:"CONTINUE"})]})},ce={salad:.5,cheese:1,meat:5,bacon:4},ie=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:4,purchasable:!1,purchasing:!1},e.addIngredientHandler=function(t){var n=e.state.ingredients[t]+1,r=Object(A.a)({},e.state.ingredients);r[t]=n;var a=e.state.totalPrice+ce[t];e.setState({ingredients:r,totalPrice:a}),e.updatePurchaseState(r)},e.removeIngredientHandler=function(t){var n=e.state.ingredients[t];if(n>0){var r=n-1,a=Object(A.a)({},e.state.ingredients);a[t]=r;var s=e.state.totalPrice-ce[t];e.setState({ingredients:a,totalPrice:s}),e.updatePurchaseState(a)}},e.purchasingHandler=function(){e.setState({purchasing:!0})},e.purchaseCancelHandler=function(){e.setState({purchasing:!1})},e.purchaseContinuedHandler=function(){alert("Success")},e}return Object(l.a)(n,[{key:"updatePurchaseState",value:function(e){var t=Object.keys(e).reduce((function(t,n){return t+e[n]}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(A.a)({},this.state.ingredients);for(var t in e)e[t]=this.state.ingredients[t]<=0;return Object(r.jsxs)(h,{children:[Object(r.jsx)(te,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler,children:Object(r.jsx)(se,{ingredients:this.state.ingredients,totalPrice:this.state.totalPrice,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinuedHandler})}),Object(r.jsx)(V,{ingredients:this.state.ingredients}),Object(r.jsx)(W,{price:this.state.totalPrice,ingredientAdded:this.addIngredientHandler,ingredientRemoved:this.removeIngredientHandler,disabled:e,purchasable:this.state.purchasable,ordered:this.purchasingHandler})]})}}]),n}(a.Component);var oe=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(F,{children:Object(r.jsx)(ie,{})})})},le=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))};i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(oe,{})}),document.getElementById("root")),le()}],[[30,1,2]]]);
//# sourceMappingURL=main.28a6b296.chunk.js.map