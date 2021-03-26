(this["webpackJsonpiot-as-mas-services"]=this["webpackJsonpiot-as-mas-services"]||[]).push([[0],{69:function(e){e.exports=JSON.parse("{}")},73:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c(0),a=c.n(n),s=c(13),i=c.n(s),j=(c(47),c(16)),o=c(24),d=c(35),l=c(36),b=c(41),h=c(40),O=c(77),u=c(78),x=c(39),m=c(79),p=c(38),v=c(76),f=c(9),g=c(14),C=c(11),y=c.n(C),k=c(75),w=function(e){return Object(g.usePromiseTracker)({area:e.area}).promiseInProgress&&Object(r.jsx)(k.a,{animation:"border",variant:"primary"})},S=function(e){return Object(g.usePromiseTracker)({area:e.area}).promiseInProgress&&Object(r.jsx)("div",{className:"loadingScreen",children:Object(r.jsx)("div",{className:"loading",style:{paddingTop:"".concat(window.innerHeight/2-100,"px")},children:Object(r.jsx)("div",{className:"spinner-border text-white",role:"status",children:Object(r.jsx)("span",{className:"sr-only"})})})})},D=(c(69),c(12)),T=c(82),F=c(80),N=c(81),z="/api/v1/service-centres";function L(e){var t=Object(n.useState)(!1),c=Object(D.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(!1),j=Object(D.a)(i,2),o=j[0],d=j[1],l=function(e){s(!1),d(!1)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(T.a,{className:"float-right",variant:"success",onClick:function(){return s(!0)},children:[Object(r.jsx)(f.a,{})," Dodaj servisni centar"]}),Object(r.jsx)(F.a,{show:a,backdrop:"static",onHide:l,children:Object(r.jsxs)(N.a,{noValidate:!0,validated:o,onSubmit:function(t){t.preventDefault();var c=t.target.closest("form"),r=new FormData(c);d(!0),!1!==c.checkValidity()&&y.a.post("".concat(z),r,{}).then((function(t){console.log(t),s(!1),d(!1),c.reset(),e.refreshData()})).catch((function(e){return console.log(e)}))},children:[Object(r.jsx)(F.a.Header,{closeButton:!0,children:Object(r.jsx)(F.a.Title,{children:"Dodaj servis"})}),Object(r.jsxs)(F.a.Body,{children:[Object(r.jsxs)(N.a.Group,{children:[Object(r.jsx)(N.a.Label,{children:"Naziv"}),Object(r.jsx)(N.a.Control,{name:"name",required:!0}),Object(r.jsx)(N.a.Control.Feedback,{type:"invalid",children:"Molimo upi\u0161ite naziv servisa."})]}),Object(r.jsxs)(N.a.Group,{children:[Object(r.jsx)(N.a.Label,{children:"Ulica i ku\u0107ni broj"}),Object(r.jsx)(N.a.Control,{name:"address.street",required:!0}),Object(r.jsx)(N.a.Control.Feedback,{type:"invalid",children:"Molimo upi\u0161ite adresu servisa."})]}),Object(r.jsxs)(N.a.Group,{children:[Object(r.jsx)(N.a.Label,{children:"Po\u0161tanski broj"}),Object(r.jsx)(N.a.Control,{type:"number",min:"10000",max:"60000",name:"address.postNumber",required:!0}),Object(r.jsx)(N.a.Control.Feedback,{type:"invalid",children:"Molimo upi\u0161ite ispravan broj po\u0161te."})]}),Object(r.jsxs)(N.a.Group,{children:[Object(r.jsx)(N.a.Label,{children:"Mjesto"}),Object(r.jsx)(N.a.Control,{name:"address.city",required:!0}),Object(r.jsx)(N.a.Control.Feedback,{type:"invalid",children:"Molimo upi\u0161ite grad."})]}),Object(r.jsxs)(N.a.Group,{children:[Object(r.jsx)(N.a.Label,{children:"Telefon"}),Object(r.jsx)(N.a.Control,{name:"contact.phone"})]}),Object(r.jsxs)(N.a.Group,{children:[Object(r.jsx)(N.a.Label,{children:"E-mail"}),Object(r.jsx)(N.a.Control,{name:"contact.email",required:!0,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}),Object(r.jsx)(N.a.Control.Feedback,{type:"invalid",children:"Email adresa je obavezna u formatu korisnik@domena.tld ."})]})]}),Object(r.jsxs)(F.a.Footer,{children:[Object(r.jsx)(T.a,{variant:"secondary",onClick:l,children:"Odustani"}),Object(r.jsxs)(T.a,{variant:"primary",type:"submit",children:[Object(r.jsx)(f.d,{})," Spremi"]})]})]})})]})}function H(e){var t=Object(n.useState)(!1),c=Object(D.a)(t,2),a=c[0],s=c[1],i=function(e){return s(!1)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(T.a,{size:"sm",variant:"danger",onClick:function(){return s(!0)},children:Object(r.jsx)(f.f,{})}),Object(r.jsxs)(F.a,{show:a,onHide:i,children:[Object(r.jsx)(F.a.Header,{closeButton:!0,children:Object(r.jsx)(F.a.Title,{children:"Obri\u0161i servisni centar: ? "})}),Object(r.jsx)(F.a.Body,{children:Object(r.jsx)("p",{children:"Jesi li siguran da \u017eeli\u0161 obrisati centar?"})}),Object(r.jsxs)(F.a.Footer,{children:[Object(r.jsx)(T.a,{variant:"secondary",onClick:i,children:"Odustani"}),Object(r.jsxs)(T.a,{variant:"danger",onClick:function(t){t.preventDefault(),y.a.delete("".concat(z,"/").concat(e.center.id)).then((function(t){console.log(t),s(!1),e.refreshData()})).catch((function(e){return console.log(e)}))},children:[Object(r.jsx)(f.f,{})," Obri\u0161i"]})]})]})]})}var P="/api/v1/service-centres";function M(e){var t=Object(n.useState)(!1),c=Object(D.a)(t,2),a=c[0],s=c[1],i=function(e){return s(!1)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(T.a,{size:"sm",variant:"primary",onClick:function(){return s(!0)},children:Object(r.jsx)(f.b,{})}),Object(r.jsxs)(F.a,{show:a,backdrop:"static",onHide:i,size:"lg",children:[Object(r.jsx)(F.a.Header,{closeButton:!0,children:Object(r.jsx)(F.a.Title,{children:"Popis usluga "})}),Object(r.jsxs)(F.a.Body,{children:[Object(r.jsxs)(v.a,{striped:!0,bordered:!0,hover:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Naziv ure\u0111aja"}),Object(r.jsx)("th",{children:"Opis ure\u0111aja"}),Object(r.jsx)("th",{children:"Cijena (HRK)"}),Object(r.jsx)("th",{children:"Trajanje (HRK)"}),Object(r.jsx)("th",{children:"Actions"})]})}),Object(r.jsx)("tbody",{children:e.center&&e.center.services?e.center.services.map((function(t,c){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t.device.name}),Object(r.jsx)("td",{children:t.device.description}),Object(r.jsx)("td",{children:t.price}),Object(r.jsx)("td",{children:t.time}),Object(r.jsx)("td",{width:"1%",style:{whiteSpace:"nowrap"},children:Object(r.jsx)(G,{center:e.center,service:t,refreshData:e.refreshData})})]},t.id)})):void 0})]}),e.services?e.services.map((function(e){})):void 0]}),Object(r.jsx)(F.a.Footer,{children:Object(r.jsx)(T.a,{variant:"secondary",onClick:i,children:"Zatvori"})})]}),Object(r.jsx)(S,{area:"loading-screen"})]})}function B(e){var t=Object(n.useState)(!1),c=Object(D.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(!1),j=Object(D.a)(i,2),o=j[0],d=j[1],l=function(e){s(!1),d(!1)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(T.a,{size:"sm",variant:"success",onClick:function(){return s(!0)},children:Object(r.jsx)(f.c,{})}),Object(r.jsx)(F.a,{show:a,backdrop:"static",onHide:l,children:Object(r.jsxs)(N.a,{noValidate:!0,validated:o,onSubmit:function(t){t.preventDefault();var c=t.target.closest("form"),r=new FormData(c);d(!0),!1!==c.checkValidity()&&Object(g.trackPromise)(y.a.post("".concat(P,"/").concat(e.center.id,"/services"),r,{}).then((function(t){console.log(t),s(!1),d(!1),c.reset(),e.refreshData()})).catch((function(e){return console.log(e)})),"loading-screen")},children:[Object(r.jsx)(F.a.Header,{closeButton:!0,children:Object(r.jsx)(F.a.Title,{children:"Dodaj uslugu"})}),Object(r.jsxs)(F.a.Body,{children:[Object(r.jsxs)(N.a.Group,{children:[Object(r.jsx)(N.a.Label,{children:"Naziv ure\u0111aja"}),Object(r.jsx)(N.a.Control,{name:"device.name",required:!0}),Object(r.jsx)(N.a.Control.Feedback,{type:"invalid",children:"Molimo upi\u0161ite naziv ure\u0111aja."})]}),Object(r.jsxs)(N.a.Group,{children:[Object(r.jsx)(N.a.Label,{children:"Opis ure\u0111aja"}),Object(r.jsx)(N.a.Control,{name:"device.description"})]}),Object(r.jsxs)(N.a.Group,{children:[Object(r.jsx)(N.a.Label,{children:"Cijena usluge (HRK)"}),Object(r.jsx)(N.a.Control,{type:"number",min:"1",name:"price",required:!0}),Object(r.jsx)(N.a.Control.Feedback,{type:"invalid",children:"Molimo upi\u0161ite ispravan broj po\u0161te."})]}),Object(r.jsxs)(N.a.Group,{children:[Object(r.jsx)(N.a.Label,{children:"Trajanje izvr\u0161enja usluge (min)"}),Object(r.jsx)(N.a.Control,{type:"number",min:"1",name:"time",required:!0}),Object(r.jsx)(N.a.Control.Feedback,{type:"invalid",children:"Molimo upi\u0161ite trajanje izvr\u0161enja usluge."})]})]}),Object(r.jsxs)(F.a.Footer,{children:[Object(r.jsx)(T.a,{variant:"secondary",onClick:l,children:"Odustani"}),Object(r.jsxs)(T.a,{variant:"primary",type:"submit",children:[Object(r.jsx)(f.d,{})," Spremi"]})]})]})}),Object(r.jsx)(S,{area:"loading-screen"})]})}function G(e){var t=Object(n.useState)(!1),c=Object(D.a)(t,2),a=c[0],s=c[1],i=function(e){return s(!1)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(T.a,{size:"sm",variant:"danger",onClick:function(){return s(!0)},children:Object(r.jsx)(f.f,{})}),Object(r.jsxs)(F.a,{show:a,onHide:i,children:[Object(r.jsx)(F.a.Header,{closeButton:!0,children:Object(r.jsx)(F.a.Title,{children:"Obri\u0161i uslugu: ? "})}),Object(r.jsx)(F.a.Body,{children:Object(r.jsx)("p",{children:"Jesi li siguran da \u017eeli\u0161 obrisati uslugu?"})}),Object(r.jsxs)(F.a.Footer,{children:[Object(r.jsx)(T.a,{variant:"secondary",onClick:i,children:"Odustani"}),Object(r.jsxs)(T.a,{variant:"danger",onClick:function(t){t.preventDefault(),Object(g.trackPromise)(y.a.delete("".concat(P,"/").concat(e.center.id,"/services/").concat(e.service.id)).then((function(t){console.log(t),s(!1),e.refreshData()})).catch((function(e){return console.log(e)})),"loading-screen")},children:[Object(r.jsx)(f.f,{})," Obri\u0161i"]})]})]}),Object(r.jsx)(S,{area:"loading-screen"})]})}var q="/api/v1/service-centres",A=function(e){Object(b.a)(c,e);var t=Object(h.a)(c);function c(e){var r;return Object(d.a)(this,c),(r=t.call(this,e)).refreshData=function(){y.a.get(q).then((function(e){r.setState({serviceCenters:e.data||[]})})).catch((function(e){console.log(e)}))},r.simpleUpdateFieldValue=function(e){r.setState(Object(o.a)(Object(o.a)({},r.state),{},Object(j.a)({},e.target.name,e.target.value)))},r.filterCenters=function(){var e=r.state.searchTerm?r.state.searchTerm.toLowerCase():"",t=r.state.serviceCenters||[];return t=t.filter((function(t){return t.name.toLowerCase().includes(e)||t.address.street.toLowerCase().includes(e)||t.address.postNumber==e||t.address.city.toLowerCase().includes(e)||t.contact.phone.toLowerCase().includes(e)||t.contact.email.toLowerCase().includes(e)}))},r.incrementNumberOfServicesToShow=function(){r.setState({numberOfCentersToShow:r.state.numberOfCentersToShow+10})},r.state={numberOfCentersToShow:20,searchTerm:"",serviceCenters:[]},r}return Object(l.a)(c,[{key:"componentDidMount",value:function(){var e=this;Object(g.trackPromise)(y.a.get(q).then((function(t){e.setState({serviceCenters:t.data||[]})})).catch((function(e){console.log(e)})),"loading-centers")}},{key:"render",value:function(){var e=this,t=this.filterCenters();return Object(r.jsxs)(O.a,{children:[Object(r.jsxs)(u.a,{children:[Object(r.jsx)(x.a,{sm:!0,md:!0,lg:"8",children:Object(r.jsxs)(m.a,{children:[Object(r.jsx)(m.a.Prepend,{children:Object(r.jsx)(m.a.Text,{children:Object(r.jsx)(f.e,{})})}),Object(r.jsx)(p.a,{placeholder:"Pretra\u017ei",name:"searchTerm",onChange:this.simpleUpdateFieldValue})]})}),Object(r.jsx)(x.a,{children:Object(r.jsx)(L,{refreshData:this.refreshData})})]}),Object(r.jsxs)(u.a,{className:"mt-5",children:[Object(r.jsxs)(v.a,{striped:!0,bordered:!0,hover:!0,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Naziv"}),Object(r.jsx)("th",{children:"Ulica i ku\u0107ni broj"}),Object(r.jsx)("th",{children:"Po\u0161tanski broj"}),Object(r.jsx)("th",{children:"Mjesto"}),Object(r.jsx)("th",{children:"Telefon"}),Object(r.jsx)("th",{children:"Email"}),Object(r.jsx)("th",{children:"Actions"})]})}),Object(r.jsx)("tbody",{children:this.state.serviceCenters?t.slice(0,this.state.numberOfCentersToShow).map((function(t,c){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:t.name}),Object(r.jsx)("td",{children:t.address.street}),Object(r.jsx)("td",{children:t.address.postNumber}),Object(r.jsx)("td",{children:t.address.city}),Object(r.jsx)("td",{children:t.contact.phone}),Object(r.jsx)("td",{children:t.contact.email}),Object(r.jsxs)("td",{width:"1%",style:{whiteSpace:"nowrap"},children:[Object(r.jsx)(M,{refreshData:e.refreshData,center:t}),"\xa0",Object(r.jsx)(B,{refreshData:e.refreshData,center:t}),"\xa0",Object(r.jsx)(H,{refreshData:e.refreshData,center:t})]})]},t.id)})):void 0})]}),Object(r.jsx)("p",{hidden:t.length<this.state.numberOfCentersToShow,className:"text-primary mb-4",style:{textAlign:"center"},onClick:this.incrementNumberOfServicesToShow,children:"Load more..."}),Object(r.jsx)(w,{area:"loading-centers"})]})]})}}]),c}(a.a.Component),J=function(e){var t=e.hasAttribute("data")?JSON.parse(atob(e.getAttribute("data"))):{},c=e.hasAttribute("componentName")?e.getAttribute("componentName"):"undefined";switch(c){case"service-centers":return Object(r.jsx)(A,{data:t});default:console.error("Component: ".concat(c," does not exist!"))}},V=document.querySelectorAll(".react-component");V?V.forEach((function(e){i.a.render(Object(r.jsx)(a.a.StrictMode,{children:J(e)}),e)})):console.warn("No react components on page.")}},[[73,1,2]]]);
//# sourceMappingURL=main.243e0195.chunk.js.map