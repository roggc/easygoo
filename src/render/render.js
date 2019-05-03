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
import SayHello from '../comps/sayHello/render/sayHello'
import Say from '../comps/say/render/say'
import Posts from '../comps/posts/render/posts'
import {homeSetShow} from '../comps/home/redux/actions'
import {aboutSetShow} from '../comps/about/redux/actions'
import {graphqlSetShow} from '../comps/graphql/redux/actions'

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
      <Header name='header1' title={'React app ...'}>
        {
          {
            items:
            [
              {text:'home',name:'home1',func:homeSetShow},
              {text:'about',name:'about1',func:aboutSetShow},
              {text:'graphql',name:'graphql1',func:graphqlSetShow},
            ]
          }
        }
      </Header>
      <Content name='content1'>
        <Home name='home1'>
          hello ...
        </Home>
        <About name='about1'>
          nppcpp ...
        </About>
        <Graphql name='graphql1'/>
      </Content>
      <Footer name='footer1'>
        &copy; 2019 React corp dev
      </Footer>
    </App>
  </Provider>
)()
