---
# Code generator. DO NOT EDIT.

title: WebSocket Analytics
pcx_content_type: configuration
sidebar:
  order: 21
---

The descriptions below detail the fields available for `websocket_analytics`.

## BytesReceivedClient

Type: `int`

Number of bytes received from the client.

## BytesReceivedOrigin

Type: `int`

Number of bytes received from the origin.

## BytesSentClient

Type: `int`

Number of bytes sent to the client.

## BytesSentOrigin

Type: `int`

Number of bytes sent to the origin.

## ClientASN

Type: `int`

The client's autonomous system number (ASN).

## ClientIP

Type: `string`

The client IP address.

## ClientRequestHost

Type: `string`

The host requested by the client in the WebSocket upgrade request.

## ClientRequestPath

Type: `string`

The path requested by the client in the WebSocket upgrade request.

## ClientRequestUserAgent

Type: `string`

The user agent reported by the client.

## ColoCode

Type: `string`

IATA airport code of the data center that handled the connection.

## ConnectionCloseReason

Type: `string`

The edge proxy classification for why the WebSocket connection ended. <em>none</em> means the proxy observed no classified error or timeout. <br />Possible values are <em>none</em> \| <em>unspecifiedError</em> \| <em>timedOut</em> \| <em>peerReset</em> \| <em>upstreamReset</em> \| <em>protocolViolation</em> \| <em>peerNoError</em>.

## ConnectionCloseSource

Type: `string`

The side where the edge proxy observed the connection close. This field does not necessarily identify which side initiated the close. <em>both</em> means the proxy observed closure in both directions and does not identify which direction closed first. <br />Possible values are <em>upstream</em> \| <em>downstream</em> \| <em>me</em> \| <em>both</em>. Unrecognized classifications can appear as raw internal values.

## ConnectionID

Type: `string`

Unique identifier of the WebSocket connection, hex-encoded.

## ConnectionTransportCloseCode

Type: `int`

A reportable transport-level close code observed. For Transport Layer Security (TLS) connections, the low byte contains the TLS alert description. A TLS <code>close_notify</code> alert is not reported. A value of 0 means no reportable code was observed or the connection used plain TCP. The most significant bit indicates the source: 0 = proxy-initiated, 1 = peer-initiated.

## EdgeEndTimestamp

Type: `int or string`

Timestamp at which the WebSocket connection closed. To specify the timestamp format, refer to [Output types](/logs/logpush/logpush-job/log-output-options/#output-types).

## EdgeStartTimestamp

Type: `int or string`

Timestamp at which the WebSocket connection was established. To specify the timestamp format, refer to [Output types](/logs/logpush/logpush-job/log-output-options/#output-types).

## RayID

Type: `string`

The Ray ID of the WebSocket upgrade request.
