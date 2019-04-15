import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { Home } from './Components/Home/Home'
import { Post } from './Components/Post/Post'
import { TopicList } from './Components/TopicList/TopicList'

export default (
    <Switch>
      <Route exact path = '/' component = {Home} />
      <Route path = '/topics' component = {TopicList} />
      <Route path = '/post/:id' component = {Post} />
    </Switch>
);