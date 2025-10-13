import { NextResponse } from "next/server";

export async function GET() {
	// Your plain text response
	const responseText = `{"authorization_endpoint":"https://id.aamirazad.com/login/alternative/email","claims_supported":["sub","given_name","family_name","name","email","email_verified","preferred_username","picture","groups"],"device_authorization_endpoint":"https://id.aamirazad.com/api/oidc/device/authorize","end_session_endpoint":"https://id.aamirazad.com/api/oidc/end-session","grant_types_supported":["authorization_code","refresh_token","urn:ietf:params:oauth:grant-type:device_code"],"id_token_signing_alg_values_supported":["RS256"],"introspection_endpoint":"https://id.aamirazad.com/api/oidc/introspect","issuer":"https://id.aamirazad.com","jwks_uri":"https://id.aamirazad.com/.well-known/jwks.json","response_types_supported":["code","id_token"],"scopes_supported":["openid","profile","email","groups"],"subject_types_supported":["public"],"token_endpoint":"https://id.aamirazad.com/api/oidc/token","userinfo_endpoint":"https://id.aamirazad.com/api/oidc/userinfo"}`;

	// Return the response as plain text
	return new NextResponse(responseText, {
		headers: { "Content-Type": "application/json" },
	});
}
