const _pow			= require( 'rng-common/pow.js' );
const _event_bus		= require( 'rng-common/event_bus.js' );
const _rng_miner	= require( 'rng-miner' );


let uBits		= _rng_miner.getBitsByTarget( "00ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff" );
let oMiningInput	= {
	roundIndex		: 111,
	firstTrustMEBall	: 'rjywtuZ8A70vgIsZ7L4lBR3gz62Nl3vZr2t7I4lzsMU=',
	bits			: uBits,
	publicSeed		: 'public key',
	superNodeAuthor		: 'supernode.ringnetwork.org',
};


_event_bus.on
(
	'pow_mined_gift',
	( objSolution ) =>
	{
		console.log( `############################################################` );
		console.log( objSolution );

		if ( objSolution && 'object' === typeof objSolution )
		{
			console.log( `will check proof of work` );
			_pow.checkProofOfWork( oMiningInput, objSolution.hash, objSolution.nonce, function( err, objResult )
			{
				console.log( `_pow.checkProofOfWork, err : ${ err }, objResult : `, objResult );
				if ( null === err &&
					objResult &&
					'object' === typeof objResult &&
					'number' === typeof objResult.code && 0 === objResult.code )
				{
					console.log( `PoW is correct.` );
				}
				else
				{
					console.error( `PoW is invalid : `, err );
				}
			});
		}
		else
		{
			console.error( `invalid objSolution` );
		}
	}
);
_pow.startMiningWithInputs
(
	oMiningInput,
	function( err )
	{
		if ( err )
		{
			console.log( `failed to start calculation, `, err );
			return;
		}

		console.log( `start calculation successfully.` );
	}
);
