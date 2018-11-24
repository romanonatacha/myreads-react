(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},32:function(e,t,a){e.exports=a.p+"static/media/loader.9afc09a0.gif"},34:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(15),c=a.n(r),s=a(12),l=a.n(s),i=a(16),u=a(4),h=a(5),f=a(7),b=a(6),m=a(8),p=(a(28),a(39)),d=a(37),k=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).options=[{key:"none",title:"none"},{key:"currentlyReading",title:"Currently Reading"},{key:"wantToRead",title:"Want to Read"},{key:"read",title:"Read"}],a.handleShelf=function(e){e.preventDefault();var t=a.props.book;t.shelf=e.target.value,a.props.onMoveShelf(t)},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.book,t=e.title,a=e.authors,n=e.imageLinks,r=e.shelf,c=n?n.smallThumbnail:"";return o.a.createElement("li",null,o.a.createElement("div",{className:"book"},o.a.createElement("div",{className:"book-top"},o.a.createElement("div",{className:"book-cover fade",style:{width:128,height:193,backgroundImage:"url(".concat(c,")")}}),o.a.createElement("div",{className:"book-shelf-changer"},o.a.createElement("select",{value:r,onChange:this.handleShelf},o.a.createElement("option",{value:"none",disabled:!0},"Move to..."),this.options.map(function(e){var t=e.key,a=e.title;return o.a.createElement("option",{key:t,value:t},a)})))),o.a.createElement("div",{className:"book-title"},t),o.a.createElement("div",{className:"book-authors"},a)))}}]),t}(n.Component),v=a(13),y="https://reactnd-books-api.udacity.com",E=localStorage.token;E||(E=localStorage.token=Math.random().toString(36).substr(-8));var j={Accept:"application/json",Authorization:E},g=function(e,t){return fetch("".concat(y,"/books/").concat(e.id),{method:"PUT",headers:Object(v.a)({},j,{"Content-Type":"application/json"}),body:JSON.stringify({shelf:t})}).then(function(e){return e.json()})},O=function(e){return fetch("".concat(y,"/search"),{method:"POST",headers:Object(v.a)({},j,{"Content-Type":"application/json"}),body:JSON.stringify({query:e})}).then(function(e){return e.json()}).then(function(e){return e.books})},S=a(17),N=a.n(S),w=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={query:"",books:a.props.books},a.updateQuery=function(e){e=e.trim(),O(e).then(function(e){if(e.error)return[];var t=a.props.books;return e.map(function(e){var n=new RegExp(N()(a.state.query),"i"),o=t.filter(function(t){return n.test(t.title)||n.test(e.authors)});return e.shelf=o?o.shelf:"none",e})}).then(function(e){a.setState(function(){return{books:e}})}).catch(function(){a.clearBooks()})},a.clearBooks=function(){a.setState(function(){return{books:a.props.books}})},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.state.books,a=this.props.onMoveShelf;return o.a.createElement("div",{className:"search-books"},o.a.createElement("div",{className:"search-books-bar"},o.a.createElement(d.a,{className:"close-search",to:"/myreads-react/"},"Close"),o.a.createElement("div",{className:"search-books-input-wrapper"},o.a.createElement("input",{type:"text",placeholder:"Search by title or author",onChange:function(t){return e.updateQuery(t.target.value)}}))),o.a.createElement("div",{className:"search-books-results"},t.length>0?o.a.createElement("ol",{className:"books-grid"},t.map(function(e){return o.a.createElement(k,{key:e.id,book:e,onMoveShelf:a})})):o.a.createElement("div",{className:"search-books-no-results"},o.a.createElement("span",null,"No results"))))}}]),t}(n.Component),M=a(20),C=a(19),R=function(e){function t(){return Object(u.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.title,n=t.books;return o.a.createElement("div",{className:"bookshelf"},o.a.createElement("h2",{className:"bookshelf-title"},a),o.a.createElement("div",{className:"bookshelf-books"},o.a.createElement("ol",{className:"books-grid"},n.map(function(t){return o.a.createElement(k,{key:t.id,book:t,onMoveShelf:e.props.onMoveShelf})}))))}}]),t}(n.Component),x=function(e){function t(){return Object(u.a)(this,t),Object(f.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=function(e){var t=new Map;t.set("currentlyReading",{title:"Currently Reading",books:[]}),t.set("wantToRead",{title:"Want To Read",books:[]}),t.set("read",{title:"Read",books:[]});var a=!0,n=!1,o=void 0;try{for(var r,c=e[Symbol.iterator]();!(a=(r=c.next()).done);a=!0){var s=r.value;t.get(s.shelf).books.push(s)}}catch(l){n=!0,o=l}finally{try{a||null==c.return||c.return()}finally{if(n)throw o}}return t}(this.props.books);return o.a.createElement("div",{className:"list-books"},o.a.createElement("div",{className:"list-books-title"},o.a.createElement("h1",null,"MyReads")),o.a.createElement("div",{className:"list-books-content"},o.a.createElement("div",null,Object(C.a)(t).map(function(t){var a=Object(M.a)(t,2),n=a[0],r=a[1];return o.a.createElement(R,{key:n,title:r.title,books:r.books,onMoveShelf:e.props.onMoveShelf})}))),o.a.createElement("div",{className:"open-search"},o.a.createElement(d.a,{to:"/myreads-react/search"},"Add a book")))}}]),t}(n.Component),T=function(){return o.a.createElement("div",{className:"loader"},o.a.createElement("img",{src:a(32),alt:"loading..."}))},A=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={books:[],loading:!0},a.onMoveShelf=function(e){g(e,e.shelf).then(function(t){a.setState(function(t){return{books:t.books.filter(function(t){return t.id!==e.id})}}),"none"!==e.shelf&&a.setState(function(t){return{books:t.books.concat([e])}})})},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y,"/books"),{headers:j}).then(function(e){return e.json()}).then(function(e){return e.books});case 2:t=e.sent,this.setState(function(){return{books:t,loading:!1}});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return this.state.loading?o.a.createElement(T,null):o.a.createElement("div",{className:"app"},o.a.createElement(p.a,{exact:!0,path:"/myreads-react/",render:function(){return o.a.createElement(x,{books:e.state.books,onMoveShelf:e.onMoveShelf})}}),o.a.createElement(p.a,{exact:!0,path:"/myreads-react/search",render:function(){return o.a.createElement(w,{books:e.state.books,onMoveShelf:e.onMoveShelf})}}))}}]),t}(o.a.Component),J=(a(34),a(38));c.a.render(o.a.createElement(J.a,null,o.a.createElement(A,null)),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.f7ea3cc4.chunk.js.map