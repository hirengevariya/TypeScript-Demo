console.log('----- Type Assertion -----');

let typeAssertion = 'Type Assertion';
(<string>typeAssertion).length;

(typeAssertion as string).length

//TypeScript allows you to override its inferred and analyzed view of types in any way you want to.
// This is done by a mechanism called "type assertion". TypeScript's type assertion is purely you