exports.Information = {
    Continue: {
        code: 100,
        message: "This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished."
    },
    Processing: {
        code: 102,
        message: "This code indicates that the server has received and is processing the request, but no response is available yet."
    },
    EarlyHints: {
        code: 103,
        message: "This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response."
    },
    SwitchingProtocol: {
        code: 101,
        message: "This code is sent in response to an Upgrade request header from the client, and indicates the protocol the server is switching to."
    },
}

exports.Success = {
    OK: {
        code: 200,
        message: "The request has succeeded."
    },
    Created: {
        code: 201,
        message: "The request has succeeded and a new resource has been created as a result. This is typically the response sent after POST requests, or some PUT requests"
    },
    Accepted: {
        code: 202,
        message: "    The request has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.        "
    },
    Continue: {
        code: 100,
        message: "hello"
    },
}


exports.Error = {
     
    BadRequest: {
        code: 400,
        message: "The server could not understand the request due to invalid syntax."
    },
    Unauthorized: {
        code: 401,
        message: "Although the HTTP standard specifies unauthorized, semantically this response means unauthenticated. That is, the client must authenticate itself to get the requested response."
    },
    PaymentRequired: {
        code: 402,
        message: "This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists."
    },
    Forbidden: {
        code: 403,
        message: "The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource. Unlike 401, the client's identity is known to the server."
    },
    NotFound: {
        code: 404,
        message: "    The server can not find the requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurrence on the web."
    },
    UnsupportedMediaType: {
        code: 415,
        message: "    The media format of the requested data is not supported by the server, so the server is rejecting the request."
    },
    TooManyRequests: {
        code: 429,
        message: 'The user has sent too many requests in a given amount of time ("rate limiting").',
    },
    RequestTimeout: {
        code: 408,
        message: "This response is sent on an idle connection by some servers, even without any previous request by the client."
    },
    test: {
        code: 100,
        message: "hello"
    },
}

exports.Server = {
     
    ServerError: {
        code: 500,
        message: 'The server has encountered a situation it doesnt know how to handle.'
    },
    NotImplemented: {
        code: 501,
        message: ' The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.'
    },
    BadGateway: {
        code: 502,
        message: 'This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.'
    },
    VersionNotSupported: {
        code: 505,
        message: 'The HTTP version used in the request is not supported by the server.'
    },
    NetworkAuthenticationRequired: {
        code: 511,
        message: "The 511 status code indicates that the client needs to authenticate to gain network access."
    },
    test: {
        code: 100,
        message: "hello"
    },
    
}
