// import * as $ from 'jquery';
import 'free-jqgrid';
// import {ipcRenderer} from 'electron';
// import {fetchFactory} from './fetch';


import Main from './components/main';
import Settings from './components/settings';
import Products from './components/products/products';
import Product from './components/products/product';
import OfferingsList from './components/offerings/offeringsList';
import Offering from './components/offerings/offering';
import ChannelsList from './components/channels/channelsList';
import Channel from './components/channels/channel';
import SessionsList from './components/sessions/sessionsList';
import Session from './components/sessions/session';

import TemplatesList from './components/templates/templatesList';

// tslint:disable-next-line
import * as React from 'react';
// tslint:disable-next-line
import { Route, Router, Switch} from 'react-router';

import { createMemoryHistory } from 'history';

import { render } from 'react-dom';

// import Form from 'react-jsonschema-form';


// const fetch = fetchFactory(ipcRenderer);
/*
fetch('/sessions', {}).then(res => {
    $(document).ready(function () {
        'use strict';
        const data = {
            'page': '1',
            'records': '3',
            'rows': res
        };
        const grid = $('#sessions_list');

        grid.jqGrid({
            colModel: [
                { name: 'id', index: 'id', width: '100' },
                { name: 'state_channel_id', index: 'state_channel_id', width: '100' },
                { name: 'started', index: 'started', width: '100' },
                { name: 'stopped', index: 'stopped', width: '100' },
                { name: 'up', index: 'up', width: '100' },
                { name: 'down', index: 'down', width: '100' },
            ],
            pager: '#packagePager',
            datatype: 'jsonstring',
            datastr: data,
            jsonReader: { repeatitems: false },
            rowNum: 2,
            viewrecords: true,
            caption: 'Sessions',
            height: 'auto',
            ignoreCase: true
        });
        grid.jqGrid('navGrid', '#pager',
            { add: false, edit: false, del: false }, {}, {}, {},
            { multipleSearch: true, multipleGroup: true });
        grid.jqGrid('filterToolbar', { defaultSearch: 'cn', stringResult: true });
    });
});
*/
/*
fetch('/getSOTemplates', {}).then(res => {
    render(<TemplatesList list={res} />, document.getElementById('templatesList'));
});
*/
let MemoryHistory = createMemoryHistory();
/*
let goBack = (e:any) => {
    MemoryHistory.goBack();
    e.preventDefault();
};
*/
const app = <Router history={MemoryHistory as any}>
                        <Switch>
                            <Route exact path='/' component={Main} />
                            <Route path='/templates' component={TemplatesList} />
                            <Route path='/settings' component={Settings} />
                            <Route path='/products' component={Products} />
                            <Route path='/product/:product' component={Product} />
                            <Route path='/offerings/:product' component={OfferingsList} />
                            <Route path='/offering/:offering' component={Offering} />
                            <Route path='/channels/:offering' component={ChannelsList} />
                            <Route path='/channel/:channel' component={Channel} />
                            <Route path='/sessions/:channel' component={SessionsList} />
                            <Route path='/session/:session' component={Session} />
                        </Switch>
                </Router>;

    MemoryHistory.listen((location, action) => {
        console.log(location);
        // document.getElementById('back').style.display = (location.pathname === '/') ? 'none' : 'inline';
    });

    render(app, document.getElementById('app'));

