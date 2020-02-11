/* eslint-disable quotes */
const nock = require('nock');

const enableAllMocks = () => {

	nock('https://api.github.com:443', {
			"encodedQueryParams": true
		})
		.get('/repos/lucaju/misc/branches/master')
		.reply(200, ["1f8b0800000000000003ed575d6fda3014fd2b559ee9f2490248d3266dddb46950b1d175639a90ed3860ead899edd052c47fdf75123a60da462aedad0f4810e71c9ffb7dd93802e5d4193839d2862aa7e31099e7cc38838da317080e08c5340e318ee32c265e4c82b8dbcd529f767b419426c4f7fd84264984002a644a672c05d0f0f5d7781cf40dbee6de70f9cebf9c8cd797afc9dd653ee25ff3ab6018bc67a3e5341fe5c35bf8ac47cb2b7f9a8fefa6", "93ab68b8fc78330a8677c3c945389d9070f4f6e2f9812e549a85545661a3fd43491812f2ec8d62f7f754592934478c83105e12b42c5fe6f419d805cf5364acb5811778e75e70eef5265e34e88683289e3adb9df1d611ff833da75aa3b9bdff135ad1f40cafcf5e5d7f7c757ead58ed7ba3289cee3c8fa30487999f795980639ca524490214759328f048afebf552084790a614cc2a953576614ca107ae8b0af66ccecca2c4d66a57d1426ab7f6849b334d5c3874ed5dda3df90e70ce232ea99349bb2d92c842a83033224b0169e8759c15552c6304192685f54efd9b429e65886bda711445da1e39a5d06c2ee0a4e3d82fc8940afc294ace3b4e81d65c2200d99fdbf6e63cc29485c9f9ecd06b7b61d90f484dfe0837e923fe7f86bead196e130f0d3efd55785cce9975786d031cd9aaf7836e9484fdc33e308e3f7f1971b2bc588f26e370787f636b19ad9041ea587af550074dea969a2a2285815ca8b2b8741bfe17abe71170cc55c352359c7fd58065dbd500bc7b4a64e0b54c722e6f01792cf5b0c0f6c9dd07cc039e89796b3c6036ae340b0a5e02e95b6b30d3a68d90eafd0dd4ba36d0942d8306ff2a9ab610d32040caad00159baa97545425d644b1c2d6641b510738e0916a8e04bbaf6abb0d0fe06c4656adad853dd5fb80a32b48ab36c01ab0710bc55688acad0b142594411b9fb5263b4202975917762c5c41a8ad73611ccc509adb12ab5adcf1647a2abffdf9f6547e7f9bfe07de792abf65093deca0704f2abf0229db319cc1b7dd76d6ef667e2fea47a48f49e8e3204c7b31c538f4429a90acef4529f6fc14fb40df7271da8de816379c32cfead5afd9344ee6de7e87e633e34cdc80f1603be5599b4d132b24c80216cd87ff1756ea1ec31f1622bb9dee3020a050d25062f676bee649b3125281303fd8087f94cc8e3a1860a6d43390406a03a8c8a422b45a3139746eab45661944a95a36eeaa187fb7fbe1af1bfe3e607e5faf8f8c86a151a9b75ab73f01be9542f0710d0000"], ['Server',
			'GitHub.com',
			'Date',
			'Tue, 11 Feb 2020 04:40:25 GMT',
			'Content-Type',
			'application/json; charset=utf-8',
			'Transfer-Encoding',
			'chunked',
			'Connection',
			'close',
			'Status',
			'200 OK',
			'X-RateLimit-Limit',
			'5000',
			'X-RateLimit-Remaining',
			'4990',
			'X-RateLimit-Reset',
			'1581397691',
			'Cache-Control',
			'private, max-age=60, s-maxage=60',
			'Vary',
			'Accept, Authorization, Cookie, X-GitHub-OTP',
			'ETag',
			'W/"80c52110212ee4642bca1231c17623f5"',
			'X-OAuth-Scopes',
			'delete_repo, notifications, repo, user',
			'X-Accepted-OAuth-Scopes',
			'',
			'X-GitHub-Media-Type',
			'github.v3; format=json',
			'Access-Control-Expose-Headers',
			'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type',
			'Access-Control-Allow-Origin',
			'*',
			'Strict-Transport-Security',
			'max-age=31536000; includeSubdomains; preload',
			'X-Frame-Options',
			'deny',
			'X-Content-Type-Options',
			'nosniff',
			'X-XSS-Protection',
			'1; mode=block',
			'Referrer-Policy',
			'origin-when-cross-origin, strict-origin-when-cross-origin',
			'Content-Security-Policy',
			"default-src 'none'",
			'Vary',
			'Accept-Encoding, Accept',
			'Content-Encoding',
			'gzip',
			'X-GitHub-Request-Id',
			'AC93:7890:2AE644:519624:5E423039'
		]);

	nock('https://api.github.com:443', {
			"encodedQueryParams": true
		})
		.get('/repos/lucaju/misc/git/trees/b47b3f1f0f2b6bfdc772a457420c8508dc062dde')
		.reply(200, ["1f8b0800000000000003a5d44d8bdb301006e0ffe2f336d6c7e82bb742f7d65e7a2d3dcc68464d16bb31b60c6997fcf72a14c296bd380dbe6830c3ab4796e7b55b0ed8ed3b8240b6e8a28a214f85730806c105302a47a72267e50db3744fdd3a0fade150ebb4ecfb1ea7e3eec7b11e56dae5d3d8cf329d967e5833beacfd785c72df5e", "f6751659fa3b32ae0dddfedb6b37613db4b4afcf1f3f7d79de8ddcf2c753dbc6bed34a798056d75fd3b5a6e144adfacb31da38ef023b9b2d2606431cb9ad8b27b044165081cbce5c1b8ebf5bbbff2fd73573e937875d9e6ea005c76990cf52abccbbf3386c7461f659b18e50b243ab232302971444dae1664b4d0ac545bcb98c32111eb06d0e7c63ab72fcc0a77c070b44233b6226df76df1e6db46ac78a31246d2d66724e92d3379655d63ea0da9cf75e65ee60259d3d5ba51c79a1e43104978d8410bc455f0ca484e2c1e41b2b69131e606dce7bcfb277b01c291d3810241f41c8b61151c80ab3c10c09520405c64a79c3f28fb036e7fdc33ad75d3dd78dff555254da25d3ca2b83a8358ab30886b3641d056d2a6d80b4e246d2ee91efb435edf2bd8db779fd99b10a77fb82c322973f6a7da7b1b3050000"], [
			'Server',
			'GitHub.com',
			'Date',
			'Tue, 11 Feb 2020 04:40:26 GMT',
			'Content-Type',
			'application/json; charset=utf-8',
			'Transfer-Encoding',
			'chunked',
			'Connection',
			'close',
			'Status',
			'200 OK',
			'X-RateLimit-Limit',
			'5000',
			'X-RateLimit-Remaining',
			'4989',
			'X-RateLimit-Reset',
			'1581397692',
			'Cache-Control',
			'private, max-age=60, s-maxage=60',
			'Vary',
			'Accept, Authorization, Cookie, X-GitHub-OTP',
			'ETag',
			'W/"e8878ae617bed4a9d8f848db30e4a280"',
			'Last-Modified',
			'Sat, 08 Feb 2020 04:53:49 GMT',
			'X-OAuth-Scopes',
			'delete_repo, notifications, repo, user',
			'X-Accepted-OAuth-Scopes',
			'',
			'X-GitHub-Media-Type',
			'github.v3; format=json',
			'Access-Control-Expose-Headers',
			'ETag, Link, Location, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval, X-GitHub-Media-Type',
			'Access-Control-Allow-Origin',
			'*',
			'Strict-Transport-Security',
			'max-age=31536000; includeSubdomains; preload',
			'X-Frame-Options',
			'deny',
			'X-Content-Type-Options',
			'nosniff',
			'X-XSS-Protection',
			'1; mode=block',
			'Referrer-Policy',
			'origin-when-cross-origin, strict-origin-when-cross-origin',
			'Content-Security-Policy',
			"default-src 'none'",
			'Vary',
			'Accept-Encoding, Accept',
			'Content-Encoding',
			'gzip',
			'X-GitHub-Request-Id',
			'B974:4FAC:292F5A:4FFF4D:5E423039'
		]);

	nock('http://127.0.0.1:61011', {
			"encodedQueryParams": true
		})
		.get('/github/repos/lucaju/misc/full')
		.reply(200, {
			"owner": "lucaju",
			"repo": "misc",
			"baseTreeSHA": "b47b3f1f0f2b6bfdc772a457420c8508dc062dde",
			"parentCommitSHA": "cebe63bb66f6c06c2655fd1e5824d7c1117e774a",
			"contents": {
				"type": "folder",
				"path": "",
				"name": "",
				"contents": [{
					"type": "file",
					"path": "README.md",
					"name": "README.md"
				}, {
					"type": "file",
					"path": "sampleLetter.xml",
					"name": "sampleLetter.xml"
				}, {
					"type": "file",
					"path": "tei-doc.xml",
					"name": "tei-doc.xml"
				}, {
					"type": "file",
					"path": "tei-doc2.xml",
					"name": "tei-doc2.xml"
				}, {
					"type": "file",
					"path": "tei-doc3.xml",
					"name": "tei-doc3.xml"
				}, {
					"type": "file",
					"path": "text.txt",
					"name": "text.txt"
				}]
			}
		}, [
			'X-Powered-By',
			'Express',
			'Access-Control-Allow-Origin',
			'https://localhost',
			'Access-Control-Allow-Methods',
			'GET,PUT,POST,OPTIONS,DELETE',
			'Access-Control-Allow-Headers',
			'cwrc-token, Content-Type',
			'Access-Control-Allow-Credentials',
			'true',
			'Content-Type',
			'application/json; charset=utf-8',
			'Content-Length',
			'564',
			'ETag',
			'W/"234-yzXIlzq55TSVe4jtPHjmslxLHEI"',
			'Date',
			'Tue, 11 Feb 2020 04:40:26 GMT',
			'Connection',
			'close'
		]);

}

module.exports = enableAllMocks