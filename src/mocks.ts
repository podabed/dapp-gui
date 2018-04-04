const template1 = {
    'schema': {
      'title': 'VPN Service Offering',
      'type': 'object',
      'required': [
          'templateVersion'
         ,'agentPublicKey'
         , 'serviceName'
         ,'country'
         ,'serviceSupply'
         ,'serviceUnit'
         ,'unitPrice'
         ,'minUnits'
         ,'billingInterval'
         ,'maxBillingUnitLag'
         ,'maxInactiveTime'
         ,'freeIntervals'
         ,'protocol'
      ],
      'properties': {
        'templateVersion': {'type': 'string', 'default': '1'},
        'agentPublicKey': {'type': 'string', 'title': 'public key'},
        'serviceName': {'type': 'string', 'title': 'Name of service (e.g. VPN)'},
        'country': {'type': 'string', 'title': 'country'},
        'serviceSupply': {'type': 'number', 'title': 'service supply'},
        'serviceUnit': {'type': 'number', 'title': 'service unit'},
        'unitPrice': {'type': 'number', 'title': 'unit price'},
        'minUnits': {'type': 'number', 'title': 'min units'},
        'maxUnits': {'type': 'number', 'title': 'max units'},
        'billingInterval': {'type': 'number', 'title': 'billing interval'},
        'maxBillingUnitLag': {'type': 'number', 'title': 'max billing unit lag'},
        'maxInactiveTime': {'type': 'number', 'title': 'max inactive time'},
        'freeIntervals': {'type': 'number', 'title': 'free intervals'},
        'minDownloadMbps': {'type': 'number', 'title': 'min download Mbps'},
        'minUploadMbps': {'type': 'number', 'title': 'min upload Mbps'},
        'protocol': {'type': 'string', 'enum': ['TCP', 'UDP'],' enumNames': ['TCP', 'UDP'], 'title': 'protocol'}
      }
    },
    'uiSchema': {
        'templateVersion': {'ui:widget': 'hidden'},
        'agentPublicKey': {'ui:widget': 'textarea', 'ui:help': 'enter your public key'},
        'serviceName': {},
        'country': {'ui:help': 'Country of service endpoint in ISO 3166-1 alpha-2 format.'},
        'serviceSupply': {'ui:help': 'Maximum supply of services according to service offerings. It represents maximum number of clients that can consume this service offering concurrently.'},
        'serviceUnit': {'ui:help': 'MB/Minutes'},
        'unitPrice': {'ui:help': 'PRIX that must be paid for unit_of_service'},
        'minUnits': {'ui:help': 'Used to calculate minimum deposit required'},
        'maxUnits': {'ui:help': 'Used to specify maximum units of service that will be supplied. Can be empty.'},
        'billingInterval': {'ui:help': 'Specified in unit_of_service. Represent, how often Client MUST provide payment approval to Agent.'},
        'maxBillingUnitLag': {'ui:help': 'Maximum payment lag in units after, which Agent will suspend service usage.'},
        'maxInactiveTime': {'ui:help': 'Maximum time without service usage. Agent will consider, that Client will not use service and stop providing it. Period is specified in minutes.'},
        'freeIntervals': {'ui:help': 'Used to give free trial, by specifying how many intervals can be consumed without payment'},
        'minDownloadMbps': {'ui:help': 'Minimum expected download speed (Mbps).Can be empty.'},
        'minUploadMbps': {'ui:help': 'Minimum expected upload speed (Mbps). Can be empty.'},
        'protocol': {'ui:help': 'Protocol: TCP or UDP'}
    }
  };

  const template2 = {
    'schema': {
      'title': 'yet another template',
      'type': 'object',
      'required': [
          'templateVersion'
         ,'agentPublicKey'
         , 'serviceName'
         ,'country'
      ],
      'properties': {
        'templateVersion': {'type': 'string', 'default': '1'},
        'agentPublicKey': {'type': 'string', 'title': 'public key'},
        'serviceName': {'type': 'string', 'title': 'Name of service (e.g. VPN)'},
        'country': {'type': 'string', 'title': 'country'}
      }
    },
    'uiSchema': {
        'templateVersion': {'ui:widget': 'hidden'},
        'agentPublicKey': {'ui:widget': 'textarea', 'ui:help': 'enter your public key'},
        'serviceName': {},
        'country': {'ui:widget': 'textarea', 'ui:help': 'Country of service endpoint in ISO 3166-1 alpha-2 format.'}
    }
  };


const mocks = [
    {endpoint: /\/templates/, method: 'get', res: [template1, template2]}
   ,{endpoint: /\/templates\?/, method: 'get', res: [template1]}
   ,{endpoint: /\/offerings\?/, method: 'get', res: [{title: 'second offering', id: 2}, {title: 'third offering', id: 3}]}
   ,{endpoint: /\/offerings\/\d+\/status/, method: 'get', res: {code: 200, status: 'OK!'}}
   ,{endpoint: /\/offerings/, method: 'get', res: [{title: 'first offering', id: 1}, {title: 'second offering', id: 2}, {title: 'third offering', id: 3}]}
   ,{endpoint: /\/channels\/\d+\/status/, method: 'get', res: {code: 200, status: 'channel OK!'}}
   ,{endpoint: /\/products\/\d+\/status/, method: 'get', res: {code: 200, status: 'product OK!'}}
   ,{endpoint: /\/products/, method: 'get', res: [{title: 'first product', id: 1}, {title: 'second product', id: 2}, {title: 'third product', id: 3}]}
   ,{endpoint: /\/endpoints/, method: 'get', res: {id: 17, src: '{"test_prop": "test_val"}'}}
   ,{endpoint: /\/settings/, method: 'get', res: [{name: 'option1', value: 'some value', desc: 'some desc'}, {name: 'option2', value: 'some value', desc: 'some desc'}, {name: 'option3', value: 'some value', desc: 'some desc'}]}
   ,{endpoint: /\/channels\?/, method: 'get', res: [{title: 'second channel', id: 2}, {title: 'third channel', id: 3}]}
   ,{endpoint: /\/channels/, method: 'get', res: [{title: 'first channel', id: 1}, {title: 'second channel', id: 2}, {title: 'third channel', id: 3}]}
   ,{endpoint: /\/sessions/, method: 'get', res: [{title: 'first session', id: 1}, {title: 'second session', id: 2}, {title: 'third session', id: 3}]}
   ,{endpoint: /\/products/, method: 'get', res: [{title: 'first product', id: 1}, {title: 'second product', id: 2}, {title: 'third product', id: 3}]}

];

export default {
    has: function(req: any){
        const is = mock => mock.endpoint.test(req.endpoint) && req.options.method.toLowerCase() === mock.method.toLowerCase();
        return mocks.some(is);
    },
    get: function(req: any){
        const is = mock => mock.endpoint.test(req.endpoint) && req.options.method.toLowerCase() === mock.method.toLowerCase();
        const res = mocks.map(mock => is(mock) ? mock.res : undefined ).filter(res => res);
        if(res.length < 1){
            console.log('have no response for request: ', req);
            process.exit(1);
        }
        return res[0];
    }
};
