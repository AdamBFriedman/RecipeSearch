(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},15:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),o=(a(15),a(6)),s=a.n(o),i=a(7),p=a(1),u=a(2),m=a(4),d=a(3),h=a(5),f=(a(19),[{recipe_id:35382,image_url:"http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",title:"Jalapeno Popper Grilled Cheese Sandwich",publisher:"Closet Cooking",source_url:"http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html"},{recipe_id:35383,image_url:"http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",title:"Jalapeno Popper Grilled Cheese Sandwich",publisher:"Closet Cooking",source_url:"http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html"},{recipe_id:35384,image_url:"http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",title:"Jalapeno Popper Grilled Cheese Sandwich",publisher:"Closet Cooking",source_url:"http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html"}]),b=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.recipe,t=e.image_url,a=e.title,n=e.source_url,c=e.publisher,l=e.recipe_id,o=this.props.handleDetails;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"col-10 mx-auto col-md-4 col-lg-4 my-3"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:t,className:"img-card-top",style:{height:"14rem"},alt:"recipe"}),r.a.createElement("div",{className:"card-body text-capitalize"},r.a.createElement("h6",null,a),r.a.createElement("h6",{className:"red"},"Provided by: ",r.a.createElement("span",{className:"secondaryColor"},c))),r.a.createElement("div",{className:"card-footer"},r.a.createElement("button",{type:"button",className:"btn text-capitalize buttonDetails",onClick:function(){return o(0,l)}},"Details"),r.a.createElement("a",{href:n,className:"btn mx-2 text-capitalize buttonURL",target:"_blank",rel:"noopener noreferrer"},"Recipe URL")))))}}]),t}(n.Component),g=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.handleSubmit,n=e.handleChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-8 mt-5 text-center"},r.a.createElement("h1",{className:"text-capitalize search"},"Recipe Search"),r.a.createElement("form",{className:"mt-4",onSubmit:a},r.a.createElement("label",{htmlFor:"search",className:"text-capitalize"},"Search by ",r.a.createElement("span",{className:"gold"},"ingredients")," below"),r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",name:"search",placeholder:"Type ingredients here...",className:"form-control",value:t,onChange:n}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{type:"submit",className:"input-group-text bg-primary text-white"},r.a.createElement("i",{className:"fas fa-search"})))))))))}}]),t}(n.Component),w=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.recipes,a=e.handleDetails,n=e.value,c=e.handleSubmit,l=e.handleChange,o=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{value:n,handleChange:l,handleSubmit:c}),r.a.createElement("div",{className:"container my-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 text-center text-uppercase mb-3"},r.a.createElement("h1",{className:"text"},"Recipe List"))),r.a.createElement("div",{className:"row"},o?r.a.createElement("h1",{className:"text-danger text-center"},o):t.map(function(e){return r.a.createElement(b,{key:e.recipe_id,recipe:e,handleDetails:a})}))))}}]),t}(n.Component),v={f2f_url:"http://food2fork.com/view/35382",image_url:"http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",ingredients:["2 jalapeno peppers, cut in half lengthwise and seeded","2 slices sour dough bread","1 tablespoon butter, room temperature","2 tablespoons cream cheese, room temperature","1/2 cup jack and cheddar cheese, shredded","1 tablespoon tortilla chips, crumbled"],publisher:"Closet Cooking",publisher_url:"http://closetcooking.com",source_url:"http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html",title:"Jalapeno Popper Grilled Cheese Sandwich"},E=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={recipe:v},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark(function e(){var t,a,n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.id,a="https://www.food2fork.com/api/get?\n    key=4751da772ff58e0e735a8ee946d5a15f&rId=".concat(t),e.prev=2,e.next=5,fetch(a,{mode:"no-cors"});case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,this.setState(function(e,t){return{recipe:r.recipe}},function(){}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.log(e.t0);case 15:case"end":return e.stop()}},e,this,[[2,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.recipe,t=e.image_url,a=e.publisher,n=e.publisher_url,c=e.source_url,l=e.title,o=e.ingredients,s=this.props.handleIndex;return o?o?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement("button",{type:"button",className:"btn buttonSecondary mb-5 text-capitalize",onClick:function(){return s(1)}},"Back to Recipe List"),r.a.createElement("img",{src:t,className:"d-block w-100",alt:"recipe"})),r.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},r.a.createElement("h6",{className:"text-uppercase text"},l),r.a.createElement("h6",{className:"text-warning text-capitalize text"},"Provided by: ",r.a.createElement("strong",null,a)),r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary mt-2 text-capitalize"},"Publisher's Website"),r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer",className:"btn buttonSecondary mt-2 mx-3 text-capitalize"},"Recipe URL"),r.a.createElement("ul",{className:"list-group mt-4"},r.a.createElement("h2",{className:"mt-3 mb-4 text"},"Ingredients"),o.map(function(e,t){return r.a.createElement("li",{key:t,className:"list-group-item red"},e)})))))):void 0:r.a.createElement("h1",null,"Loading...")}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={recipes:f,url:"https://www.food2fork.com/api/search?key=4751da772ff58e0e735a8ee946d5a15f",base_url:"https://www.food2fork.com/api/search?key=4751da772ff58e0e735a8ee946d5a15f",details_id:35389,pageIndex:1,search:"",query:"&q=",error:""},a.displayPage=function(e){switch(e){default:case 1:return r.a.createElement(w,{recipes:a.state.recipes,handleDetails:a.handleDetails,value:a.state.search,handleChange:a.handleChange,handleSubmit:a.handleSubmit,error:a.state.error});case 0:return r.a.createElement(E,{id:a.state.details_id,handleIndex:a.handleIndex})}},a.handleIndex=function(e){a.setState({pageIndex:e})},a.handleDetails=function(e,t){a.setState({pageIndex:e,details_id:t})},a.handleChange=function(e){a.setState({search:e.target.value},function(){})},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.base_url,r=t.query,c=t.search;a.setState(function(){return{url:"".concat(n).concat(r).concat(c),search:""}},function(){a.getRecipes()})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getRecipes",value:function(){var e=Object(i.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(this.state.url);case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,console.log(a),0===a.recipes.length?this.setState(function(){return{error:"sorry, but your search did not return any results"}}):this.setState(function(){return{recipes:a.recipes,error:""}}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.getRecipes()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.displayPage(this.state.pageIndex))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.2beddf93.chunk.js.map