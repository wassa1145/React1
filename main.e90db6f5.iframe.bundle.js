(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/webpack/buildin/module.js")(module))},"./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/App.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,"body {\n  background-color: #f8f8f8;\n  margin: 0;\n}\n.wrapper {\n  display: flex;\n  width: 630px;\n  margin: 0 auto;\n}\n.wrapper ul {\n  padding: 0 !important;\n}\n.page {\n  max-width: 1440px;\n  min-width: 320px;\n  margin: 0 auto;\n  box-sizing: border-box;\n}\n.content {\n  min-width: 445px;\n  width: 600px;\n  background-color: #e4ebf8;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n}\n",""]),module.exports=exports},"./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/ChatList/ChatList.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".chats-item {\n\tborder-left: 3px solid #999;\n\tmargin-bottom: 8px;\n\tborder-bottom: 1px solid #999;\n\tborder-top: 1px solid #999;\n}",""]),module.exports=exports},"./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/FormFunc/Form.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".form {\n  width: 100%;\n  padding: 20px;\n  margin: 0 auto;\n  box-sizing: border-box;\n\tmargin-top: 30px;\n  display: flex;\n  justify-content: space-between;\n}\n",""]),module.exports=exports},"./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/FormFunc/components/Button/Button.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".form__button {\n  background-color: #fff !important;\n  height: 56px;\n  align-self: flex-end;  \n}\n",""]),module.exports=exports},"./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/FormFunc/components/Textarea/Textarea.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".form__textarea {\n  width: 100%;\n  background-color: #fff;\n  margin-right: 20px !important;\n}\n",""]),module.exports=exports},"./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/List/List.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,".list {\n\twidth: 100%;\n  padding: 20px;\n  margin: 0 auto;\n  box-sizing: border-box;\n  flex-grow: 1;\n  overflow-y: auto;\n}\n.list ul {\n  display: flex;\n  flex-direction: column;\n}\nul,p {\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n}\n.message,\n.system-message {\n  text-align: center;\n  border-radius: 17px;\n  background-color: #fff;\n  padding: 10px;\n  font-size: 18px;\n  width: 80%;\n  position: relative;\n  margin-bottom: 20px;\n  box-sizing: border-box;\n  box-shadow: 0 0 10px rgb(0 0 0 / 20%);\n}\n.message {\n  align-self: flex-end;\n}\n.system-message {\n  align-self: flex-start;\n}\n.message__author,\n.message__text {\n  text-align: start;\n}\n.message__author {\n  font-weight: bold;\n}",""]),module.exports=exports},"./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./App.stories.tsx":"./src/App.stories.tsx","./components/ChatList/ChatList.stories.tsx":"./src/components/ChatList/ChatList.stories.tsx","./components/FormFunc/Form.stories.tsx":"./src/components/FormFunc/Form.stories.tsx","./components/FormFunc/components/Button/Button.stories.tsx":"./src/components/FormFunc/components/Button/Button.stories.tsx","./components/FormFunc/components/Textarea/Textarea.stories.tsx":"./src/components/FormFunc/components/Textarea/Textarea.stories.tsx","./components/List/List.stories.tsx":"./src/components/List/List.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|[\\\\/]|(?:(?:(?!(?:^|[\\\\/])\\.).)*?)[\\\\/])(?!\\.)(?=.)[^\\\\/]*?\\.stories\\.mdx)$"},"./src/App.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/App.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/App.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"EmptyPage",(function(){return EmptyPage}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/toConsumableArray.js"),toConsumableArray_default=__webpack_require__.n(toConsumableArray),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"),slicedToArray_default=__webpack_require__.n(slicedToArray),index_browser=(__webpack_require__("./node_modules/core-js/modules/es.array.concat.js"),__webpack_require__("./node_modules/core-js/modules/web.timers.js"),__webpack_require__("./node_modules/nanoid/index.browser.js")),Form=(__webpack_require__("./src/App.css"),__webpack_require__("./src/components/FormFunc/Form.tsx")),List=__webpack_require__("./src/components/List/List.tsx"),ChatList=__webpack_require__("./src/components/ChatList/ChatList.tsx"),CONSTANTS_USER="User",CONSTANTS_BOT="Mr. Robot",CONSTANTS_DEFAULT_MESSAGE="Мы получили ваше сообщение! В ближайшее время мы вам ответим.",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),chats=[{id:Object(index_browser.a)(),name:"First"},{id:Object(index_browser.a)(),name:"Second"},{id:Object(index_browser.a)(),name:"Third"}],App_App=function App(){var _useState=Object(react.useState)([]),_useState2=slicedToArray_default()(_useState,2),messageList=_useState2[0],setMessageList=_useState2[1],listEl=Object(react.useRef)(null),addMessage=Object(react.useCallback)((function(message){setMessageList((function(prevMessage){return[].concat(toConsumableArray_default()(prevMessage),[{id:Object(index_browser.a)(),author:CONSTANTS_USER,message:message}])}))}),[]);return Object(react.useEffect)((function(){if(messageList.length&&!messageList[messageList.length-1].systemMessage){var timeout=setTimeout((function(){setMessageList((function(prevMessage){return[].concat(toConsumableArray_default()(prevMessage),[{id:Object(index_browser.a)(),message:CONSTANTS_DEFAULT_MESSAGE,author:CONSTANTS_BOT,systemMessage:!0}])}))}),1e3);return function(){clearTimeout(timeout)}}!function scrollList(){listEl.current&&(listEl.current.scrollTop=listEl.current.scrollHeight)}()}),[messageList.length]),Object(jsx_runtime.jsxs)("div",{className:"wrapper",children:[Object(jsx_runtime.jsx)(ChatList.a,{chats:chats}),Object(jsx_runtime.jsxs)("div",{className:"content",children:[Object(jsx_runtime.jsx)(List.a,{messages:messageList,listEl:listEl}),Object(jsx_runtime.jsx)(Form.a,{addMessage:addMessage})]})]})};App_App.displayName="App";try{App_App.displayName="App",App_App.__docgenInfo={description:"",displayName:"App",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/App.tsx#App"]={docgenInfo:App_App.__docgenInfo,name:"App",path:"src/App.tsx#App"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"MyComponents/Page",component:App_App};var App_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(App_App,Object.assign({},args))};App_stories_Template.displayName="Template";var EmptyPage=App_stories_Template.bind({});EmptyPage.parameters=Object.assign({storySource:{source:"(args) => <App {...args} />"}},EmptyPage.parameters)},"./src/components/ChatList/ChatList.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/ChatList/ChatList.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/ChatList/ChatList.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _ChatList__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/ChatList/ChatList.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"MyComponents/ChatList",component:_ChatList__WEBPACK_IMPORTED_MODULE_3__.a,argTypes:{onButtonClick:{action:"click"}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ChatList__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},args))};Template.displayName="Template";var Primary=Template.bind({});Primary.args={chats:[{id:"1",name:"First"},{id:"2",name:"Second"},{id:"3",name:"Third"}]},Primary.parameters=Object.assign({storySource:{source:"(args) => <ChatList {...args} />"}},Primary.parameters)},"./src/components/ChatList/ChatList.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ChatList}));__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/react/index.js");var _mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/List/List.js"),_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/ListItem/ListItem.js"),_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/ListItemButton/ListItemButton.js"),_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/ListItemText/ListItemText.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=(__webpack_require__("./src/components/ChatList/ChatList.css"),__webpack_require__("./node_modules/react/jsx-runtime.js")),ChatList=function ChatList(_ref){var chats=_ref.chats;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__.a,{"data-testid":"chat-list",children:chats.map((function(chat){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material_ListItem__WEBPACK_IMPORTED_MODULE_4__.a,{disablePadding:!0,className:"chats-item",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material_ListItemButton__WEBPACK_IMPORTED_MODULE_5__.a,{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material_ListItemText__WEBPACK_IMPORTED_MODULE_6__.a,{primary:chat.name})})},chat.id)}))})};ChatList.displayName="ChatList";try{ChatList.displayName="ChatList",ChatList.__docgenInfo={description:"",displayName:"ChatList",props:{chats:{defaultValue:null,description:"",name:"chats",required:!0,type:{name:"ChatProps[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ChatList/ChatList.tsx#ChatList"]={docgenInfo:ChatList.__docgenInfo,name:"ChatList",path:"src/components/ChatList/ChatList.tsx#ChatList"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FormFunc/Form.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/FormFunc/Form.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/FormFunc/Form.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"MessageForm",(function(){return MessageForm}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _Form__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/FormFunc/Form.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"MyComponents/Form",component:_Form__WEBPACK_IMPORTED_MODULE_3__.a};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Form__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},args))};Template.displayName="Template";var MessageForm=Template.bind({});MessageForm.parameters=Object.assign({storySource:{source:"(args) => <Form {...args} />"}},MessageForm.parameters)},"./src/components/FormFunc/Form.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Form}));var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js"),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/FormFunc/components/Button/Button.tsx"),_components_Textarea_Textarea__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/FormFunc/components/Textarea/Textarea.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./src/components/FormFunc/Form.css"),__webpack_require__("./node_modules/react/jsx-runtime.js")),Form=Object(react__WEBPACK_IMPORTED_MODULE_1__.memo)((function(_ref){var addMessage=_ref.addMessage,_useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState,2),message=_useState2[0],setMessage=_useState2[1],textFieldRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),changeMessage=Object(react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((function(event){setMessage(event.target.value)}),[]);return Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){var _textFieldRef$current2;null===(_textFieldRef$current2=textFieldRef.current)||void 0===_textFieldRef$current2||_textFieldRef$current2.focus()}),[]),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("form",{className:"form",onSubmit:function handleClick(event){var _textFieldRef$current;event.preventDefault(),addMessage(message),setMessage(""),null===(_textFieldRef$current=textFieldRef.current)||void 0===_textFieldRef$current||_textFieldRef$current.focus()},"data-testid":"form",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Textarea_Textarea__WEBPACK_IMPORTED_MODULE_3__.a,{change:changeMessage,message:message,textFieldRef:textFieldRef,placeholder:"Введите сообщение"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Button_Button__WEBPACK_IMPORTED_MODULE_2__.a,{name:"Отправить",disabled:!message})]})}));try{Form.displayName="Form",Form.__docgenInfo={description:"",displayName:"Form",props:{addMessage:{defaultValue:null,description:"",name:"addMessage",required:!0,type:{name:"(a: string) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormFunc/Form.tsx#Form"]={docgenInfo:Form.__docgenInfo,name:"Form",path:"src/components/FormFunc/Form.tsx#Form"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FormFunc/components/Button/Button.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/FormFunc/components/Button/Button.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/FormFunc/components/Button/Button.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Disabled",(function(){return Disabled}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _Button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/FormFunc/components/Button/Button.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"MyComponents/Button",component:_Button__WEBPACK_IMPORTED_MODULE_3__.a,argTypes:{onButtonClick:{action:"click"}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},args))};Template.displayName="Template";var Primary=Template.bind({});Primary.args={disabled:!1,name:"Отправить"};var Disabled=Template.bind({});Disabled.args={disabled:!0,name:"Отправить"},Primary.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),Disabled.parameters=Object.assign({storySource:{source:"(args) => <Button {...args} />"}},Disabled.parameters)},"./src/components/FormFunc/components/Button/Button.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button}));__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/react/index.js");var _mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__("./src/components/FormFunc/components/Button/Button.css"),__webpack_require__("./node_modules/react/jsx-runtime.js")),Button=function Button(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.a,{variant:"outlined",className:"form__button",disabled:props.disabled,"data-testid":"submit-button",type:"submit",children:props.name})};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormFunc/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/FormFunc/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/FormFunc/components/Textarea/Textarea.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/FormFunc/components/Textarea/Textarea.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/FormFunc/components/Textarea/Textarea.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Placeholder",(function(){return Placeholder})),__webpack_require__.d(__webpack_exports__,"Filling",(function(){return Filling}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _Textarea__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/FormFunc/components/Textarea/Textarea.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"MyComponents/Textarea",component:_Textarea__WEBPACK_IMPORTED_MODULE_3__.a};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Textarea__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},args))};Template.displayName="Template";var Placeholder=Template.bind({});Placeholder.args={placeholder:"Введите сообщение"};var Filling=Template.bind({});Filling.args={placeholder:"Введите сообщение",message:"Новое сообщение"},Placeholder.parameters=Object.assign({storySource:{source:"(args) => <Textarea {...args} />"}},Placeholder.parameters),Filling.parameters=Object.assign({storySource:{source:"(args) => <Textarea {...args} />"}},Filling.parameters)},"./src/components/FormFunc/components/Textarea/Textarea.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Textarea}));__webpack_require__("./node_modules/react/index.js");var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/components/FormFunc/components/Textarea/Textarea.css"),__webpack_require__("./node_modules/react/jsx-runtime.js")),Textarea=function Textarea(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__.a,{variant:"outlined",className:"form__textarea",multiline:!0,rows:4,placeholder:props.placeholder,value:props.message,onChange:props.change,inputRef:props.textFieldRef,"data-testid":"textarea"})};Textarea.displayName="Textarea";try{Textarea.displayName="Textarea",Textarea.__docgenInfo={description:"",displayName:"Textarea",props:{placeholder:{defaultValue:null,description:"",name:"placeholder",required:!0,type:{name:"string"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},textFieldRef:{defaultValue:null,description:"",name:"textFieldRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},change:{defaultValue:null,description:"",name:"change",required:!0,type:{name:"(event: ChangeEvent<HTMLTextAreaElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/FormFunc/components/Textarea/Textarea.tsx#Textarea"]={docgenInfo:Textarea.__docgenInfo,name:"Textarea",path:"src/components/FormFunc/components/Textarea/Textarea.tsx#Textarea"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/List/List.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/@storybook/builder-webpack4/node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/List/List.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/List/List.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Messages",(function(){return Messages})),__webpack_require__.d(__webpack_exports__,"Empty",(function(){return Empty}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js"),__webpack_require__("./node_modules/react/index.js");var _List__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/List/List.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"MyComponents/List",component:_List__WEBPACK_IMPORTED_MODULE_3__.a};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_List__WEBPACK_IMPORTED_MODULE_3__.a,Object.assign({},args))};Template.displayName="Template";var Messages=Template.bind({});Messages.args={messages:[{author:"User",message:"Сообщение 1",id:"1"},{author:"Mr. Robot",message:"Мы получили ваше сообщение! В ближайшее время мы вам ответим.",systemMessage:!0,id:"2"},{author:"User",message:"Сообщение 2",id:"3"},{author:"Mr. Robot",message:"Мы получили ваше сообщение! В ближайшее время мы вам ответим.",systemMessage:!0,id:"4"}]};var Empty=Template.bind({});Empty.args={messages:[]},Messages.parameters=Object.assign({storySource:{source:"(args) => <List {...args} />"}},Messages.parameters),Empty.parameters=Object.assign({storySource:{source:"(args) => <List {...args} />"}},Empty.parameters)},"./src/components/List/List.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return List}));__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/List/List.css");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),List=function List(_ref){var messages=_ref.messages,listEl=_ref.listEl;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"list","data-testid":"messages-list",ref:listEl,children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("ul",{children:messages.map((function(message){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li",{className:message.systemMessage?"system-message":"message",role:"message",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"message__author",children:message.author}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{className:"message__text",children:message.message})]},message.id)}))})})};List.displayName="List";try{List.displayName="List",List.__docgenInfo={description:"",displayName:"List",props:{messages:{defaultValue:null,description:"",name:"messages",required:!0,type:{name:"Message[]"}},listEl:{defaultValue:null,description:"",name:"listEl",required:!1,type:{name:"RefObject<HTMLInputElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/List/List.tsx#List"]={docgenInfo:List.__docgenInfo,name:"List",path:"src/components/List/List.tsx#List"})}catch(__react_docgen_typescript_loader_error){}},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);