__devMode__&& console.log('src/render/render')

import React from 'react'
import {Provider} from 'react-redux'
import store from '../redux/store'
import App from '../comps/app/render/app'
import Header from '../comps/header/render/header'
import Content from '../comps/content/render/content'
import Footer from '../comps/footer/render/footer'
import Home from '../comps/home/render/home'
import About from '../comps/about/render/about'
import Graphql from '../comps/graphql/render/graphql'
import Mongo from '../comps/mongo/render/mongo'
import Logsignin from '../comps/logsignin/render/logsignin'
import Loading from '../comps/loading/render/loading'
import SayHello from '../comps/sayHello/render/sayHello'
import Say from '../comps/say/render/say'
import Posts from '../comps/posts/render/posts'
import {homeSetShow} from '../comps/home/redux/actions'
import {aboutSetShow} from '../comps/about/redux/actions'
import {graphqlSetShow} from '../comps/graphql/redux/actions'
import {mongoSetShow} from '../comps/mongo/redux/actions'
import {logsigninSetShow} from '../comps/logsignin/redux/actions'
import {loadingSetShow} from '../comps/loading/redux/actions'
import {contentSetEmail} from '../comps/content/redux/actions'
import {logsigninOut} from '../comps/logsignin/redux/actions'

export default
(()=>
  <Provider store={store}>
    <App name='app1' children0=
    {
      <div>
        <Say name='say0' show={undefined}/>
        <Say name='say1' message='goodbye' show={undefined}/>
        <SayHello name='sayHello1' message='italy' show={undefined}/>
        <Posts name='posts1' show={undefined}/>
        <Posts name='posts2' time={5000} show={undefined}/>
      </div>
    }>
      <Header name='header1' title={'easyGoo !!!'}>
        {
          {
            items:
            [
              {text:'home',name:'home1',func:homeSetShow},
              {text:'about',name:'about1',func:aboutSetShow},
              {text:'anilist',name:'graphql1',func:graphqlSetShow},
              {text:'users',name:'mongo1',func:mongoSetShow},
              {text:'login',name:'logsignin1',func:logsigninSetShow},
              {text:'',name:'loading1',func:loadingSetShow}
            ]
          }
        }
      </Header>
      <Content name='content1' listeners={[logsigninOut('logsignin1')]}>
        <Loading name='loading1' show={true}/>
        <Home name='home1'>
          wellcome to easygoo. have fun and enjoy ...
        </Home>
        <About name='about1'>
          easygoo it's a react development team ...
        </About>
        <Graphql name='graphql1'/>
        <Mongo name='mongo1'/>
        <Logsignin name='logsignin1' listeners={[contentSetEmail('content1')]}/>
      </Content>
      <Footer name='footer1'>
        &copy; 2019 easygoo development
      </Footer>
    </App>
  </Provider>
)()
