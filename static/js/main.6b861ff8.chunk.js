(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{19:function(t,e,n){},24:function(t,e,n){"use strict";n.r(e);var r,a,c,o,i,s,d,l,b,u,p,j=n(1),h=n.n(j),m=n(9),g=n.n(m),x=(n(19),n(12)),f=n(4),O=n(5),C=n(7),v=n(6),y=n(25),k=n(2),S=n(3),w=S.a.h2(r||(r=Object(k.a)(["\n  color: rgb(61, 57, 57);\n"]))),A=n(0),z=function(t){var e=t.title,n=t.children;return Object(A.jsxs)("section",{children:[e&&Object(A.jsx)(w,{children:e}),n]})},D=n(11),F=S.a.form(a||(a=Object(k.a)(["\n  border: 1px solid rgb(61, 57, 57);\n  width: 300px;\n  padding: 10px;\n  background-color: rgba(84, 81, 81, 0.353);\n"]))),I=S.a.label(c||(c=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 5px;\n  color: rgb(241, 239, 235);\n"]))),J=S.a.input(o||(o=Object(k.a)(["\n  border: 1px solid rgb(241, 239, 235);\n  border-radius: 2px;\n  &[type='text'],\n  &[type='tel'] {\n    background-color: inherit;\n    border: 1px solid rgb(76, 74, 74);\n    color: aliceblue;\n  }\n  &[type='text']:focus {\n    background-color: rgb(61, 57, 57);\n  }\n"]))),Z=S.a.button(i||(i=Object(k.a)(["\n  width: fit-content;\n  padding: 3px 5px;\n  background-color: rgb(68, 68, 154);\n  border-radius: 2px;\n  color: rgb(241, 239, 235);\n"]))),L=function(t){Object(C.a)(n,t);var e=Object(v.a)(n);function n(){var t;Object(f.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleSubmitForm=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.handleInputChange=function(e){t.setState(Object(D.a)({},e.currentTarget.name,e.currentTarget.value))},t.reset=function(){t.setState({name:"",number:""})},t}return Object(O.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,r=Object(y.a)(),a=Object(y.a)();return Object(A.jsxs)(F,{onSubmit:this.handleSubmitForm,children:[Object(A.jsxs)(I,{htmlFor:r,children:["Name",Object(A.jsx)(J,{id:r,type:"text",value:e,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleInputChange})]}),Object(A.jsxs)(I,{htmlFor:a,children:["Number",Object(A.jsx)(J,{id:a,type:"tel",name:"number",value:n,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleInputChange})]}),Object(A.jsx)(Z,{type:"submit",onClick:this.addNameFhoneBook,children:"Add contact"})]})}}]),n}(h.a.Component),N=S.a.ul(s||(s=Object(k.a)(["\n  width: 300px;\n  padding: 10px;\n"]))),B=S.a.li(d||(d=Object(k.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 5px;\n  border: 1px solid rgb(61, 57, 57);\n  border-radius: 2px;\n  color: rgb(241, 239, 235);\n  background-color: rgba(84, 81, 81, 0.353);\n"]))),M=S.a.button(l||(l=Object(k.a)(["\n  width: 50px;\n  background-color: rgb(68, 68, 154);\n  border-radius: 2px;\n  color: rgb(241, 239, 235);\n"]))),q=function(t){var e=t.contacts,n=t.onDelete;return Object(A.jsx)(N,{children:e.map((function(t){var e=t.name,r=t.number,a=t.id;return Object(A.jsxs)(B,{children:[Object(A.jsxs)("span",{children:[e," : "]}),Object(A.jsx)("span",{children:r}),Object(A.jsx)(M,{onClick:function(){return n(a)},children:"Delete"})]},a)}))})},T=S.a.label(b||(b=Object(k.a)(["\n  width: 300px;\n  display: flex;\n  justify-content: flex-end;\n  border: 1px solid rgb(61, 57, 57);\n  padding: 10px;\n  color: rgb(241, 239, 235);\n  background-color: rgba(84, 81, 81, 0.353);\n"]))),E=S.a.input(u||(u=Object(k.a)(["\n  border: 1px solid rgb(241, 239, 235);\n  border-radius: 2px;\n  &[type='text'],\n  &[type='tel'] {\n    background-color: inherit;\n    border: 1px solid rgb(76, 74, 74);\n    color: aliceblue;\n  }\n"]))),$=function(t){var e=t.filter,n=t.onChange;return Object(A.jsxs)(T,{children:["Find contacts by name",Object(A.jsx)(E,{type:"text",value:e,name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:n})]})},H=S.a.div(p||(p=Object(k.a)(["\n  background-color: rgba(39, 36, 36, 0.394);\n  padding: 15px;\n  width: fit-content;\n  border-radius: 6px;\n"]))),K=function(t){var e=t.children;return Object(A.jsx)(H,{children:e})},P=function(t){Object(C.a)(n,t);var e=Object(v.a)(n);function n(){var t;Object(f.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={filter:"",contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]},t.filterContacts=function(e){t.setState({filter:e.currentTarget.value})},t.formSubmithanler=function(e){e.id=Object(y.a)(),t.state.contacts.find((function(t){return t.name.toLowerCase()===e.name.toLowerCase()}))?alert("".concat(e.name," is alredy in contacts.")):t.setState((function(t){return{contacts:[].concat(Object(x.a)(t.contacts),[e])}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.visibleContact=function(){var e=t.state,n=e.contacts,r=e.filter;return n.filter((function(t){return t.name.toLocaleLowerCase().includes(r.toLowerCase())}))},t.componentDidMount=function(){var e=localStorage.getItem("contacts"),n=JSON.parse(e);n&&t.setState({contacts:n})},t.componentDidUpdate=function(e,n){n.contacts!==t.state.contacts&&localStorage.setItem("contacts",JSON.stringify(t.state.contacts))},t}return Object(O.a)(n,[{key:"render",value:function(){var t=this.state.filter,e=this.visibleContact();return Object(A.jsxs)(K,{children:[Object(A.jsx)(z,{title:"Phonebook",children:Object(A.jsx)(L,{onSubmit:this.formSubmithanler})}),Object(A.jsxs)(z,{title:"Contacts",children:[Object(A.jsx)($,{onChange:this.filterContacts,filter:t}),Object(A.jsx)(q,{contacts:e,onDelete:this.deleteContact})]})]})}}]),n}(h.a.Component);g.a.render(Object(A.jsx)(h.a.StrictMode,{children:Object(A.jsx)(P,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.6b861ff8.chunk.js.map