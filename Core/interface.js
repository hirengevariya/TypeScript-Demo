var kv1 = { key: 1, value: "Steve" }; // OK
var kv2 = { key: 1, val: "Steve" }; // Compiler Error: 'val' doesn't exist in type 'KeyPair'
var kv3 = { key: 1, value: 100 }; // Compiler Error:
