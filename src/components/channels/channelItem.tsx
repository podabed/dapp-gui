import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ChannelStatusStyle from './channelStatusStyle';
import ContractStatus from './contractStatus';

export default withRouter(function(props:any){
    /*
    const elem = <li>
        <Link to={`/channel/${JSON.stringify(props.channel)}`}>{props.channel.id}</Link> |
        <ChannelStatus channelId={props.channel.id} /> | <Link to={`/endpoint/${props.channel.id}`}>Endpoint</Link> | <Link to={`/sessions/${props.channel.id}`}>Sessions</Link>
    </li>;
   */
    const onClick = function(evt: any){
        props.history.push(`/channel/${JSON.stringify(props.channel)}`);
    };

    // Need to use real Contract status
    const contractRealStatus = 'in_challenge';

    const elem = <tr onClick={onClick}>
        <td><Link to={`/channels/${JSON.stringify(props.channel)}/`}>{props.channel.id}</Link></td>
        <td>[[ server ]]</td>
        <td>{props.channel.client}</td>
        <td>[[ <ContractStatus contractStatus={contractRealStatus} /> ]]</td>
        <td><ChannelStatusStyle serviceStatus={props.channel.serviceStatus} /></td>
        <td>[[ usage ]]</td>
        <td>[[ income PRIX ]]</td>
        <td>{props.channel.serviceChangedTime}</td>
    </tr>;
    return (elem);
});
