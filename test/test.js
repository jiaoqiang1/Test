nes (6 sloc)  122 Bytes
QUnit.test("test", function(assert) {
	assert.equal(myFunciton(2, 2), 4);
});

function myFunciton(a, b) {
	return a * b
}
