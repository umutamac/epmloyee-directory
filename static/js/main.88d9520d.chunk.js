(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":"1","employee_name":"Tiger Nixon","employee_salary":"320800","employee_age":"61"},{"id":"2","employee_name":"Garrett Winters","employee_salary":"170750","employee_age":"63"},{"id":"3","employee_name":"Ashton Cox","employee_salary":"86000","employee_age":"66"},{"id":"4","employee_name":"Cedric Kelly","employee_salary":"433060","employee_age":"22"},{"id":"5","employee_name":"Airi Satou","employee_salary":"162700","employee_age":"33"},{"id":"6","employee_name":"Brielle Williamson","employee_salary":"372000","employee_age":"61"},{"id":"7","employee_name":"Herrod Chandler","employee_salary":"137500","employee_age":"59"},{"id":"8","employee_name":"Rhona Davidson","employee_salary":"327900","employee_age":"55"},{"id":"9","employee_name":"Colleen Hurst","employee_salary":"205500","employee_age":"39"},{"id":"10","employee_name":"Sonya Frost","employee_salary":"103600","employee_age":"23"},{"id":"11","employee_name":"Jena Gaines","employee_salary":"90560","employee_age":"30"},{"id":"12","employee_name":"Quinn Flynn","employee_salary":"342000","employee_age":"22"},{"id":"13","employee_name":"Charde Marshall","employee_salary":"470600","employee_age":"36"},{"id":"14","employee_name":"Haley Kennedy","employee_salary":"313500","employee_age":"43"},{"id":"15","employee_name":"Tatyana Fitzpatrick","employee_salary":"385750","employee_age":"19"},{"id":"16","employee_name":"Michael Silva","employee_salary":"198500","employee_age":"66"},{"id":"17","employee_name":"Paul Byrd","employee_salary":"725000","employee_age":"64"},{"id":"18","employee_name":"Gloria Little","employee_salary":"237500","employee_age":"59"},{"id":"19","employee_name":"Bradley Greer","employee_salary":"132000","employee_age":"41"},{"id":"20","employee_name":"Dai Rios","employee_salary":"217500","employee_age":"35"},{"id":"21","employee_name":"Jenette Caldwell","employee_salary":"345000","employee_age":"30"},{"id":"22","employee_name":"Yuri Berry","employee_salary":"675000","employee_age":"40"},{"id":"23","employee_name":"Caesar Vance","employee_salary":"106450","employee_age":"21"},{"id":"24","employee_name":"Doris Wilder","employee_salary":"85600","employee_age":"23"}]')},,,,,,,,function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){},function(e,a,l){"use strict";l.r(a);var o=l(0),n=l(1),r=l(3),t=l.n(r),y=l(4),m=l(5),i=l(8),s=l(7);l(14);var c=function(e){return Object(o.jsx)("div",{className:"wrapper",children:e.children})};l(15);var p=function(e){return Object(o.jsx)("h1",{className:"title",children:e.children})};l(16);var d=function(e){return Object(o.jsxs)("div",{className:"buttons",children:[Object(o.jsx)("button",{onClick:function(){return e.sortNum("id")},children:"Sort by ID"}),Object(o.jsx)("button",{onClick:function(){return e.sortString("employee_name")},children:"Sort by Name"}),Object(o.jsx)("button",{onClick:function(){return e.sortNum("employee_age")},children:"Sort by Age"}),Object(o.jsx)("button",{onClick:function(){return e.sortNum("employee_salary")},children:"Sort by Salary"})]})};l(17);var _=function(e){return Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"ID"}),Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Age"}),Object(o.jsx)("th",{children:"Salary"})]})}),Object(o.jsx)("tbody",{children:e.children})]})};l(18);var u=function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.id}),Object(o.jsx)("td",{children:e.name}),Object(o.jsx)("td",{children:e.age}),Object(o.jsx)("td",{children:e.salary})]})},j=l(6),h=function(e){Object(i.a)(l,e);var a=Object(s.a)(l);function l(){var e;Object(y.a)(this,l);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(e=a.call.apply(a,[this].concat(n))).state={employees:j},e.sortNum=function(a){var l=e.state.employees.sort((function(e,l){return e[a]-l[a]}));e.setState({employees:l})},e.sortString=function(a){var l=e.state.employees.sort((function(e,l){return e[a].localeCompare(l[a])}));e.setState({employees:l})},e}return Object(m.a)(l,[{key:"render",value:function(){return Object(o.jsxs)(c,{children:[Object(o.jsx)(p,{children:"Employee Table"}),Object(o.jsx)(d,{sortNum:this.sortNum,sortString:this.sortString}),Object(o.jsx)(_,{children:this.state.employees.map((function(e){return Object(o.jsx)(u,{id:e.id,name:e.employee_name,age:e.employee_age,salary:e.employee_salary})}))})]})}}]),l}(n.Component);l(19);t.a.render(Object(o.jsx)(h,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.88d9520d.chunk.js.map