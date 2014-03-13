QUnit.test( "normalize", function( assert ) {
	assert.strictEqual( normalize( 4111111111111111 ), "4111111111111111" );
	assert.strictEqual( normalize( "4111 1111 1111 1111" ), "4111111111111111" );
	assert.strictEqual( normalize( "4111-1111-1111-1111" ), "4111111111111111" );
	assert.strictEqual( normalize( "4111.1111.1111.1111" ), "4111111111111111" );
});

QUnit.test( "getBrand", function( assert ) {
	// "5105105105105100"    => "MASTERCARD"
	// "4111111111111111"    => "VISA"      
	// "341111111111111"     => "AMEX"      
	// "3841001111222233334" => "HIPERCARD" 
	// "6062825607632328"    => "HIPERCARD"
	// "2441111111111111"    => null
});