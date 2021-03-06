const testLogs = {
  'left does: E(right.0).method() => returnData': [
    '=> setup called',
    '=> bootstrap() called',
    'addEgress called with sender left, index 0, valslot [object Object]',
    'addIngress called with machineName right, index 0',
    '=> right.method was invoked',
    '=> left vat receives the returnedData: called method',
  ],
  'left does: E(right.0).method(dataArg1) => returnData': [
    '=> setup called',
    '=> bootstrap() called',
    'addEgress called with sender left, index 0, valslot [object Object]',
    'addIngress called with machineName right, index 0',
    '=> right.methodWithArgs got the arg: hello',
    '=> left vat receives the returnedData: hello was received',
  ],
  'left does: E(right.0).method(right.0) => returnData': [
    '=> setup called',
    '=> bootstrap() called',
    'addEgress called with sender left, index 0, valslot [object Object]',
    'addIngress called with machineName right, index 0',
    '=> right.methodWithPresence got the ref [object Object]',
    '=> right.method was invoked',
    '=> left vat receives the returnedData: called method',
  ],
  'left does: E(right.0).method(left.1) => returnData': [
    '=> setup called',
    '=> bootstrap() called',
    'addEgress called with sender left, index 0, valslot [object Object]',
    'addIngress called with machineName right, index 0',
    '=> right.methodWithPresence got the ref [object Object]',
    '=> left.1.method was invoked',
    '=> left vat receives the returnedData: called method',
  ],

  'left does: E(right.0).method(left.1) => returnData twice': [
    '=> setup called',
    '=> bootstrap() called',
    'addEgress called with sender left, index 0, valslot [object Object]',
    'addIngress called with machineName right, index 0',
    '=> right.methodWithPresence got the ref [object Object]',
    'ref equal each time: true',
    '=> right.methodWithPresence got the ref [object Object]',
    '=> left.1.method was invoked',
    '=> left.1.method was invoked',
    '=> left vat receives the returnedData: called method',
    '=> left vat receives the returnedData: called method',
  ],

  'left does: E(right.1).method() => returnData': [
    '=> setup called',
    '=> bootstrap() called',
    'addEgress called with sender left, index 0, valslot [object Object]',
    'addIngress called with machineName right, index 0',
    '=> right.1.method was invoked',
    '=> left vat receives the returnedData: called method',
  ],
  'left does: E(right.0).method() => right.presence': [
    '=> setup called',
    '=> bootstrap() called',
    'addEgress called with sender left, index 0, valslot [object Object]',
    'addIngress called with machineName right, index 0',
    '=> right.1.method was invoked',
    '=> left vat receives the returnedData: called method',
  ],
  'left does: E(right.0).method() => left.presence': [
    '=> setup called',
    '=> bootstrap() called',
    'addEgress called with sender left, index 0, valslot [object Object]',
    'addIngress called with machineName right, index 0',
    '=> left.1.method was invoked',
    '=> left vat receives the returnedData: called method',
  ],
  'left does: E(right.0).method() => right.promise => data': [
    '=> setup called',
    '=> bootstrap() called',
    'addEgress called with sender left, index 0, valslot [object Object]',
    'addIngress called with machineName right, index 0',
    '=> left vat receives the returnedPromise: [object Promise]',
    '=> right.methodReturnsPromise was invoked',
    '=> returnedPromise.then: foo',
  ],
  'left does: E(right.0).method() => right.promise => right.presence': [
    '=> setup called',
    '=> bootstrap() called',
    'addEgress called with sender left, index 0, valslot [object Object]',
    'addIngress called with machineName right, index 0',
    '=> left vat receives the returnedPromise: [object Promise]',
    '=> returnedPromise.then: [object Object]',
    '=> right.1.method was invoked',
    '=> presence methodCallResult: called method',
  ],

  'left does: E(right.0).method() => right.promise => left.presence': [
    '=> setup called',
    '=> bootstrap() called',
    'addEgress called with sender left, index 0, valslot [object Object]',
    'addIngress called with machineName right, index 0',
    '=> left vat receives the returnedPromise: [object Promise]',
    '=> returnedPromise.then: [object Object]',
    '=> left.1.method was invoked',
    '=> presence methodCallResult: called method',
  ],
  'left does: E(right.0).method() => right.promise => reject': [
    '=> setup called',
    '=> bootstrap() called',
    'addEgress called with sender left, index 0, valslot [object Object]',
    'addIngress called with machineName right, index 0',
    '=> right.methodReturnsPromiseReject was invoked',
    '=> left vat receives the rejected promise with error Error: this was rejected',
  ],
  'left does: E(right.0).method(left.promise) => returnData': [
    '=> setup called',
    '=> bootstrap() called',
    'addEgress called with sender left, index 0, valslot [object Object]',
    'addIngress called with machineName right, index 0',
    'promise resolves to foo',
    '=> left vat receives the returnedData: foo',
  ],
  'left does: E(right.0).method(right.promise) => returnData': [
    '=> setup called',
    '=> bootstrap() called',
    'addEgress called with sender left, index 0, valslot [object Object]',
    'addIngress called with machineName right, index 0',
    '=> right.methodReturnsPromise was invoked',
    'promise resolves to foo',
    '=> left vat receives the returnedData: foo',
  ],
  'left does: E(right.0).method(right.promise => right.presence) => returnData': [
    '=> setup called',
    '=> bootstrap() called',
    'addEgress called with sender left, index 0, valslot [object Object]',
    'addIngress called with machineName right, index 0',
    '=> right.1.method was invoked',
    '=> left vat receives the returnedData: called method',
  ],

  'left does: E(right.0).method(right.promise => left.presence) => returnData': [
    '=> setup called',
    '=> bootstrap() called',
    'addEgress called with sender left, index 0, valslot [object Object]',
    'addIngress called with machineName right, index 0',
    '=> left.1.method was invoked',
    '=> left vat receives the returnedData: called method',
  ],
};

export default testLogs;
